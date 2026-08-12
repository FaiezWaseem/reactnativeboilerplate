import * as React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { TextInput } from "react-native";
import { Box } from "rn-faiez-components";

type InputProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  underline?: boolean;
  underlineColor?: string;
  w?: number | string;
  h?: number | string;
  bg?: string;
  m?: number;
  p?: number;
  rounded?: number;
  color?: string;
  hintColor?: string;
  mt?: number;
  mb?: number;
  ml?: number;
  style?: StyleProp<ViewStyle>;
};

export default function Input({
  placeholder,
  value,
  onChangeText,
  w,
  h,
  bg,
  m,
  p,
  rounded,
  color,
  hintColor,
  mt,
  mb,
  ml,
  style,
}: InputProps) {
  return (
    <Box
      w={w}
      h={h}
      p={p}
      m={m}
      mt={mt}
      mb={mb}
      ml={ml}
      rounded={rounded}
      bg={bg}
      justifyContent="center"
      alignItems="center"
      style={style}
    >
      <TextInput
        style={{
          width: "100%",
          height: typeof h === "number" ? h : undefined,
          color: color,
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={hintColor}
      />
    </Box>
  );
}
