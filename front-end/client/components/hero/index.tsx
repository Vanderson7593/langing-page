import { Button, Flex, Heading, Text, View } from "@elements";
import { useTheme } from "@emotion/react";
import { ArrowRight, Menu, Play } from "@svgs";
import { MENUS } from "client/constants/menus";
import useWindowSize from "client/hooks/use-window-size";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { v4 as uuid } from "uuid";

const Hero: FC = () => {
  const { width } = useWindowSize();
  const { colors } = useTheme();

  const SM = 768;

  return (
    <Flex position="relative">
      <Flex
        flexDirection="column"
        style={{ gap: 20 }}
        px={["5%", "5%", "5%", "440px"]}
        height="70vh"
        justifyContent="center"
      >
        <Text color={colors.PINK}>SPA & BEAUTY CENTER</Text>
        <Flex flexDirection="column" maxWidth={620} style={{ gap: 50 }}>
          <Heading as="h1">Beauty and success starts here.</Heading>
          <Text>
            Together creeping heaven upon third dominion be upon won&apos;t
            darkness rule behold it created good saw after she&apos;d Our set
            living.
          </Text>
        </Flex>
        <Flex
          alignItems="flex-start"
          flexDirection={["column", "column", "column", "row"]}
        >
          <Button backgroundColor="pink" borderRadius="rectangle">
            Reserve Now <ArrowRight />
          </Button>
          <Button
            pl={["0", "0", "0", "25px"]}
            color={colors.GREY_DARK}
            borderRadius="rectangle"
          >
            <Play /> <Text>Watch our story</Text>
          </Button>
        </Flex>
      </Flex>
      <View>
        {width >= SM && (
          <View position="absolute" right={0} top={-95} zIndex={-1}>
            <Image
              src="/hero/hero-top-left.png"
              width={800}
              height={800}
              alt="Hero-logo"
            />
          </View>
        )}
        <View
          position="absolute"
          left={width <= SM ? -30 : -200}
          top={width <= SM ? 290 : 40}
          zIndex={-1}
        >
          <Image
            src="/hero/hero-left-flower.png"
            width={width <= SM ? 100 : 480}
            height={width <= SM ? 100 : 480}
            alt="Hero-logo"
          />
        </View>
      </View>
    </Flex>
  );
};
export default Hero;
