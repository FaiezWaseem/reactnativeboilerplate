import { Box, Text } from "rn-faiez-components";
import color from "../../utils/color";

export default function ProfileTab(_props?: { extraData?: unknown }) {
  return (
    <Box flex={1} bg={color.white}>
      <Box p={8} pt={15} mb={5} bg={color.blue}>
        <Text color={color.white} fontSize={16}>
          Name : Ahmed Khan
        </Text>
        <Text color={color.white} fontSize={16}>
          Father Name : Khan muhammad
        </Text>
        <Text color={color.white} fontSize={16}>
          Class : One
        </Text>
        <Box h={1} m={6} mb={10} mt={10} bg={color.white} />
      </Box>
    </Box>
  );
}
