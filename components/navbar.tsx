"use client";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", title: "dashboard" },
  { href: "/issues", title: "issues" },
];

function Navbar() {
  const pathName = usePathname();
  return (
    <nav className='flex space-x-10 items-center px-8 text-xl border-b border-zinc-500 mb-3 py-2'>
      <Link href='/'>
        <AiFillBug />
      </Link>
      <ul className='flex space-x-6'>
        {navLinks.map((link) => (
          <li
            key={link.href}
            className={classNames({
              "text-zinc-900": link.href === pathName,
              "text-zinc-500": link.href !== pathName,
              "transition-colors duration-200": true,
              "hover:text-zinc-900": link.href !== pathName,
            })}
          >
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
