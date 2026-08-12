import * as React from "react";
import { Box, Text, height, Row } from "rn-faiez-components";
import color from "../../utils/color";
import { WebView } from "react-native-webview";
import type { RootStackScreenProps } from "../../types/navigation";

export default function TopicDetailScreen({
  route,
}: RootStackScreenProps<"TopicScreen">) {
  const { chapterName, content } = route.params;
  const [pageLoadingProgress, setPageLoadingProgress] = React.useState(0);

  const handleShouldStartLoadWithRequest = (request: { url: string }) => {
    if (request.url.endsWith(".mp4")) {
      return false;
    }
    return true;
  };

  return (
    <Box flex={1} bg={color.white}>
      <Box p={8} m={1} bg={color.white} e={2}>
        <Box flexDirection={"row"}>
          <Text fontSize={20} color={color.blue} fontWeight={"bold"} ml={5}>
            {chapterName}
          </Text>
        </Box>
        <Box flexDirection={"row"}>
          <Text fontSize={16} color={color.blue} ml={5}>
            {content.topic_title}
          </Text>
        </Box>
      </Box>

      <Row
        w={pageLoadingProgress !== 0 ? `${pageLoadingProgress}%` : "100%"}
        h={10}
        bg={"orange"}
      />

      <Box h={height(30)}>
        <WebView
          style={{ flex: 1 }}
          onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
          source={{ uri: content.content_link }}
          onLoadProgress={({ nativeEvent }) => {
            setPageLoadingProgress(
              Number((nativeEvent.progress * 100).toFixed(2))
            );
          }}
        />
      </Box>
    </Box>
  );
}
