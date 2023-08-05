import Link from "next/link";
import React from "react";

export default function BreadcrumbItem({
    children,
    href,
    className = "",
    ...props
}: {
    children: React.ReactNode,
    href: string,
    className?: string
}) {
    return (
        <li className={className} {...props}>
            <Link href={href} passHref>
                {children}
            </Link>
        </li>
    );
};
