import { redirect } from "next/navigation";

/** Legacy /facilities URL  -  send visitors to the Portis home page. */
export default function FacilitiesIndexPage() {
  redirect("/facilities/portis");
}
