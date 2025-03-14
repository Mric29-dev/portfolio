import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};



export interface CardContent {
  title: string;
  content: string;
}
