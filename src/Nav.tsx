const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#services", label: "Servicios" },
  { href: "#projects", label: "Proyectos" },
];

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 flex justify-center gap-6 py-4 backdrop-blur-md bg-[#0A1F2D]/70 text-sm max-sm:gap-4 max-sm:text-xs">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-[#e4e4e4] hover:text-cyan-400 duration-150"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default Nav;