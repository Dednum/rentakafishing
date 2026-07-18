import Image from "next/image";

export default function Navbar() {

  const menus = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "Product",
      href: "#",
    },
    {
      name: "Stores",
      href: "#",
    },
    {
      name: "Contact Us",
      href: "#",
    },
  ];

  const navLink = `
    relative
    text-white
    font-medium
    transition-all
    duration-300
    hover:text-red-500

    after:absolute
    after:left-1/2
    after:-translate-x-1/2
    after:-bottom-2
    after:h-[3px]
    after:w-0
    after:rounded-full
    after:bg-red-600
    after:transition-all
    after:duration-300

    hover:after:w-full
  `;

  return (
    <header className="sticky top-0 z-50 bg-black">

      <nav className="
relative 
flex 
items-center 
justify-between 
px-4
md:px-10
py-5
">

        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Rentaka Logo"
          width={180}
          height={60}
          priority
          className="w-32 md:w-64 h-auto"
        />

        {/* Menu */}
        <div className="
hidden
md:flex
items-center
gap-10
text-xl
">

          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.href}
              className={navLink}
            >
              {menu.name}
            </a>
          ))}

        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full">


          {/* Red line */}
          <div className="h-[3px] bg-red-600"></div>

        {/* White line */}
          <div className="h-[1px] bg-white"></div>

        </div>

      </nav>

    </header>
  );
}