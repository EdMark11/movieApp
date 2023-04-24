import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-teal-700">
        <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest">
            <Link legacyBehavior href="/">
                <a className="text-base md:text-2xl">What's
                    <span className="text-slate-700">Poppin'</span>
                </a>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar