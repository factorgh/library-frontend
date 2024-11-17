"use client";

import {
  CircleDollarSign,
  Clipboard,
  Layout,
  LucideIcon,
  User,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed?: boolean; // Optional prop, if needed in the future
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed = false,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
          isActive ? "bg-blue-200 text-white" : ""
        }`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  // Replace `sidebarClassNames` with actual styles or remove if unused
  const sidebarClassNames = "flex flex-col h-full w-64 bg-gray-50";

  return (
    <div className="flex flex-col h-screen fixed w-64 bg-gray-50 border-r border-gray-200 gap-5">
      {/* TOP LOGO */}
      <div className="flex gap-3 justify-center md:justify-normal items-center pt-3 px-8 ">
        {/* <Image
          src=""
          alt="edstock-logo"
          width={27}
          height={27}
          className="rounded w-8"
        /> */}
        <h1 className="block font-extrabold text-2xl ">FinVest</h1>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-2">
        <SidebarLink href="/dashboard" icon={Layout} label="Dashboard" />
        <SidebarLink href="/wealth" icon={CircleDollarSign} label="Wealth" />
        <SidebarLink href="/assets" icon={Wallet} label="Assets Mgt." />
        <SidebarLink href="/rentals" icon={Clipboard} label="Loans & Rentals" />
        <SidebarLink href="/users" icon={User} label="Clients" />

        {/* <SidebarLink href="/expenses" icon={} label="Expenses" /> */}
      </div>

      {/* FOOTER */}
      <div className="mb-10 text-center h-full flex-col justify-end">
        <p className="text-xs text-gray-500">&copy; 2024 Edstock</p>
      </div>
    </div>
  );
};

export default Sidebar;
