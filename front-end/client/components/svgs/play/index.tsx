import { Flex } from "@elements";
import { useTheme } from "@emotion/react";
import { FC, SVGAttributes } from "react";

const Play: FC<SVGAttributes<SVGElement>> = (props) => {
  const { colors } = useTheme();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      padding={10}
      bg={colors.PINK_EXTRA_LIGHT}
      borderRadius="50%"
      style={{ cursor: "pointer" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={colors.PINK}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-play"
        {...props}
      >
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    </Flex>
  );
};

export default Play;
