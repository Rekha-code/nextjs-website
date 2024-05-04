import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="menu-bar">
          <li>
            <Link legacyBehavior href="/">
              <a> Home </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/About">
              <a> About </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/Contact">
              <a> Contact </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/Blog">
              <a> Blog </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/Product">
              <a> Product </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
