import Link from "next/link";

const MainMenu = ({ data, closeDrawer }) => {
  return (
    <nav className="flex gap-6 font-medium">
      {data.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          onClick={closeDrawer}
          className="hover:text-primary"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default MainMenu;
