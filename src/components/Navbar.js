

const Navbar = () => {
  return (
    <nav className="bg-gray-700">
        <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest">
            <Link href="/">
                <a className="text-base md:text-2xl">Watch
                    <span>Me</span>
                </a>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar