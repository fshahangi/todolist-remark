import React, { AriaAttributes, DOMAttributes } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="site-title">
          Site TodoList
        </Link>
        <ul>
          {/* <customLink>Products</customLink>
          <customLink>Profile</customLink> */}
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}
const customLink = ({ href, children, ...props }: CustomLinkProps) => {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
};
