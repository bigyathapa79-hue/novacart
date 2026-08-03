import { NavLink } from "react-router-dom";

const MobileMenu = ({ open, setOpen }) => {
  if (!open) return null;

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="md:hidden border-t bg-white">
      <nav className="container py-4 flex flex-col gap-4">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
