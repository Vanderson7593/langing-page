import { Flex } from "@elements";
import { useTheme } from "@emotion/react";
import { FC, SVGAttributes } from "react";

const ArrowRight: FC<SVGAttributes<SVGElement>> = (props) => {
  const { colors } = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={colors.WHITE}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-right"
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
};

export default ArrowRight;
