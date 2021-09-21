import { Flex, Heading, View } from "@elements";
import { useTheme } from "@emotion/react";
import { MENUS } from "client/constants/menus";
import { SOCIAL } from "client/constants/social";
import { breakpointsAliases } from "client/design/theme/breakpoints";
import useWindowSize from "client/hooks/use-window-size";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { v4 as uuid } from "uuid";

export const Footer: FC = () => {
  const { colors } = useTheme();
  const { width } = useWindowSize();

  const SM = 768;

  const Divider: FC = () => (
    <Flex style={{ backgroundColor: colors.GREY, height: 25, width: 1.8 }} />
  );

  return (
    <>
      <Flex
        style={{ gap: 20 }}
        flexDirection="column"
        alignItems="center"
        my={50}
      >
        <Image src="/logo.png" width={120} height={90} alt="footer-logo" />

        {width >= SM && (
          <Flex
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
        )}

        <Flex style={{ gap: 10 }}>
          {SOCIAL.map(({ Icon, url }, index) => (
            <Flex style={{ gap: 10 }} key={uuid()}>
              {index !== 0 && <Divider />}
              <Icon>
                <Link href={url} />
              </Icon>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
