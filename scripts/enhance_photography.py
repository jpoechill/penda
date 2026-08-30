#!/usr/bin/env python3
"""Enhance /photography images to match facilities_hero resolution, clarity, and tone."""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter

TARGET_WIDTH = 1920
JPEG_QUALITY = 88

# Warm midday — bright but inviting, aligned with facilities_hero tone.
RED_SCALE = 1.07
GREEN_SCALE = 1.04
BLUE_SCALE = 0.91
SATURATION = 1.06
BRIGHTNESS = 1.03
CONTRAST = 1.03


def warm_grade(img: Image.Image) -> Image.Image:
    img = img.convert("RGB")
    r, g, b = img.split()
    r = r.point(lambda i: min(255, int(i * RED_SCALE)))
    g = g.point(lambda i: min(255, int(i * GREEN_SCALE)))
    b = b.point(lambda i: max(0, int(i * BLUE_SCALE)))
    img = Image.merge("RGB", (r, g, b))
    img = ImageEnhance.Color(img).enhance(SATURATION)
    img = ImageEnhance.Brightness(img).enhance(BRIGHTNESS)
    img = ImageEnhance.Contrast(img).enhance(CONTRAST)
    return img


def sharpen(img: Image.Image) -> Image.Image:
    return img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=115, threshold=3))


def upscale(img: Image.Image, target_width: int = TARGET_WIDTH) -> Image.Image:
    w, h = img.size
    if w >= target_width:
        return img
    scale = target_width / w
    new_size = (target_width, round(h * scale))
    return img.resize(new_size, Image.Resampling.LANCZOS)


def enhance(img: Image.Image) -> Image.Image:
    img = upscale(img)
    img = warm_grade(img)
    img = sharpen(img)
    return img


def process_file(photo_dir: Path, filename: str, *, warm_only: bool = False) -> None:
    dest = photo_dir / filename
    img = Image.open(dest)
    result = warm_grade(img) if warm_only else enhance(img)
    result.save(dest, format="JPEG", quality=JPEG_QUALITY, optimize=True, subsampling=0)
    print(f"{filename} ({result.size[0]}x{result.size[1]})")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--dir",
        type=Path,
        default=Path(__file__).resolve().parents[1] / "public" / "photography",
    )
    parser.add_argument(
        "--warm-only",
        action="store_true",
        help="Apply warm color grade only (no upscale/sharpen)",
    )
    parser.add_argument("files", nargs="*", help="Specific filenames (default: all .jpg)")
    args = parser.parse_args()

    files = args.files or sorted(p.name for p in args.dir.glob("*.jpg"))
    for name in files:
        process_file(args.dir, name, warm_only=args.warm_only)


if __name__ == "__main__":
    main()
