import { theme } from "@theme";
import { FC, SVGAttributes } from "react";

const Vimeo: FC<SVGAttributes<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={theme.colors.PINK}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-menu"
    {...props}
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export default Vimeo;
