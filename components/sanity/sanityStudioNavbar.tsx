import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default function SanityStudioNavbar(props: any) {
  return (
    <div>
      <div className="p-5">
        <Link className="inline-btn flex items-center text-sm" href="/">
          <ArrowUturnLeftIcon className="mr-2 h-6 w-6" />
          Back To Home Page
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}
