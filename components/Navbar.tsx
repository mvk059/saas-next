import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";

const Navbar = () => {
	return (
		<nav className="navbar">
			<Link href="/">
				<Image src="/images/logo.svg" alt="Logo" width={50} height={50}/>
			</Link>
			<div className="flex items-center gap-8 cursor-pointer">
				<NavItems />
				<p>Sign In</p>
			</div>
		</nav>
	)
}
export default Navbar
