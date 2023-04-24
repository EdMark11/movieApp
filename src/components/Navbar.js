import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-teal-800">
        <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest">
            <Link legacyBehavior href="/">
                <a className="text-base md:text-2xl">What's
                    <span className="text-red-600">Poppin'</span>
                </a>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar