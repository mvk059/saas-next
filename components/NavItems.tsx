"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const navItems = [
	{href: '/', label: 'Home'},
	{href: '/companions', label: 'Companions'},
	{href: '/my-journey', label: 'My Journey'},
]

const NavItems = () => {
	const pathname = usePathname()

	return (
		<nav className="flex items-center gap-4">
			{navItems.map(({href, label}) => (
				<Link
					href={href}
					key={label}
					className={cn(pathname == href && 'text-primary font-semibold')}>
						{label}
				</Link>
			))}
		</nav>
	)
}
export default NavItems
