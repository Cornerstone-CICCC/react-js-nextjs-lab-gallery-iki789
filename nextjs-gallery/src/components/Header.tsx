import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="bg-gray-800">
        <div className="container mx-auto flex justify-between items-center text-white p-4">
          <div className="font-bold text-2xl">Logo</div>
          <nav className="mt-2">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 hover:text-white"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
