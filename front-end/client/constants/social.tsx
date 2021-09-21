import { Instagram, Facebook, Vimeo, Twitter } from "@svgs";
import { FC, SVGAttributes } from "react";

type TSocial = {
  url: string;
  Icon: FC<SVGAttributes<SVGElement>>;
  label: string;
};

export const SOCIAL = [
  {
    Icon: Facebook,
    label: "facebook",
    url: "#facebook",
  },
  {
    Icon: Twitter,
    label: "twitter",
    url: "#twitter",
  },
  {
    Icon: Instagram,
    label: "instagram",
    url: "#instagram",
  },
  {
    Icon: Vimeo,
    label: "vimeo",
    url: "#vimeo",
  },
] as TSocial[];
