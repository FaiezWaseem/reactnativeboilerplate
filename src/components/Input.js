import * as React from "react";
import { TextInput } from "react-native";
import { Box } from "rn-faiez-components";
export default ({
  placeholder,
  value,
  onChangeText,
  underline,
  underlineColor,
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
  style,
}) => {
  return (
    <Box
      w={w}
      h={h}
      p={p}
      m={m}
      mt={mt}
      mb={mb}
      rounded={rounded}
      bg={bg}
      justifyContent="center"
      alignItems="center"
      style={{
        ...style,
      }}
    >
      <TextInput
        style={{
          width: "100%",
          height: h,
          color: color,
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={hintColor}
      />
    </Box>
  );
};
