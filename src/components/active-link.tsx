"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = React.ComponentProps<typeof Link> & {
  activeClassName?: string;
};

export default function ActiveLink({
  children,
  href,
  activeClassName,
  className,
  ...props
}: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  console.log("pathname: ", pathname);
  console.log("href: ", href);
  console.log("isActive: ", isActive);

  return (
    <Link
      href={href}
      className={cn(className, isActive && activeClassName)}
      {...props}
    >
      {children}
    </Link>
  );
}
