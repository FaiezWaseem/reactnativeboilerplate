declare module "rn-faiez-components" {
  import type { ComponentType, ReactNode } from "react";
  import type { StyleProp, ViewStyle, TextStyle } from "react-native";

  type BoxProps = {
    children?: ReactNode;
    flex?: number;
    bg?: string;
    p?: number;
    pt?: number;
    m?: number;
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
    w?: number | string;
    h?: number | string;
    flexDirection?: "row" | "column";
    justifyContent?: string;
    alignItems?: string;
    rounded?: number;
    e?: number;
    position?: string;
    bottom?: number | string;
    style?: StyleProp<ViewStyle>;
    [key: string]: unknown;
  };

  type TextProps = {
    children?: ReactNode;
    color?: string;
    fontSize?: number;
    fontWeight?: string | number;
    ml?: number;
    mt?: number;
    mb?: number;
    w?: number | string;
    bg?: string;
    rounded?: number;
    p?: number;
    style?: StyleProp<TextStyle>;
    [key: string]: unknown;
  };

  type PBoxProps = BoxProps & {
    onPress?: () => void;
  };

  type ButtonProps = {
    children?: ReactNode;
    style?: StyleProp<ViewStyle>;
    txtStyle?: StyleProp<TextStyle>;
    color?: string;
    onPress?: () => void;
  };

  export const Box: ComponentType<BoxProps>;
  export const Text: ComponentType<TextProps>;
  export const Center: ComponentType<BoxProps>;
  export const PBox: ComponentType<PBoxProps>;
  export const Button: ComponentType<ButtonProps>;
  export const Row: ComponentType<BoxProps>;
  export function width(percent: number): number;
  export function height(percent: number | string): number;
}
