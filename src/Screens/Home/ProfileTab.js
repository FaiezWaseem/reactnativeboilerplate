import { Box, Text } from "rn-faiez-components";
import color from "../../utils/color";


const temp_uri = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4e%2F4e%2F26%2F4e4e26cae6106d9c7dd6333083599553.png&f=1&nofb=1&ipt=00c03123a305e97293beae4f4d479497afee54f3dcd4ae581b780e080b28f4f0&ipo=images";

export default function ProfileTab() {
    return <Box flex={1} bg={color.white} >
        <Box  p={8} pt={15} mb={5} bg={color.blue}>
         <Text color={color.white} fontSize={16} >Name : Ahmed Khan</Text>
         <Text color={color.white} fontSize={16} >Father Name : Khan muhammad</Text>
         <Text color={color.white} fontSize={16} >Class : One</Text>
         <Box h={1} m={6} mb={10} mt={10} bg={color.white} ></Box>
        </Box>
      
    </Box>
}

