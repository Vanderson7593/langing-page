import { Flex } from "@elements";
import { useTheme } from "@emotion/react";
import { Menu } from "@svgs";
import { MENUS } from "client/constants/menus";
import useWindowSize from "client/hooks/use-window-size";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { v4 as uuid } from "uuid";

const Header: FC = () => {
  const { width } = useWindowSize();
  const { colors } = useTheme();

  const SM = 768;

  return (
    <Flex my={3} flexDirection="column">
      <Flex
        px={["5%", "5%", "5%", "440px"]}
        justifyContent="space-between"
        alignItems={["flex-end", "flex-end", "flex-end", "center"]}
      >
        <Flex>
          <Image src="/logo.png" width={80} height={60} alt="header-logo" />
        </Flex>
        <Flex>
          {width >= SM ? (
            <Flex
              mr="300px"
              fontFamily="Roboto"
              color={colors.GREY_DARK}
              style={{ gap: 20 }}
            >
              {MENUS.map(({ label, url }) => (
                <Link key={uuid()} href={url}>
                  {label}
                </Link>
              ))}
            </Flex>
          ) : (
            <Menu />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
