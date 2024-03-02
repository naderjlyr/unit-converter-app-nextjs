import { FC, SVGProps } from "react";
import { FiHome } from "react-icons/fi";
import { TbTransformFilled } from "react-icons/tb";
import { TbInfoHexagon } from "react-icons/tb";
interface NavLink {
  title: string;
  href: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}

const navLinks: NavLink[] = [
  { title: "Home", href: "/", icon: FiHome },
  { title: "Converters", href: "/converter", icon: TbTransformFilled },
  { title: "About", href: "/about", icon: TbInfoHexagon },
  // more links if we need.
];

export default navLinks;
