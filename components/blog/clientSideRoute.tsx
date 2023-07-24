"use client";

import Link from "next/link";

type Props = {
  children: React.ReactNode;
  route: string;
};

export default function ClientSideRoute({ children, route }: Props) {
  return <Link className="block h-full" href={route}>{children}</Link>;
}
