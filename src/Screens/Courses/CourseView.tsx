import * as React from "react";
import { Box, Text, Center, PBox, height } from "rn-faiez-components";
import { ImageBackground, ScrollView, ActivityIndicator } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import color from "../../utils/color";
import Input from "../../components/Input";
import api from "../../utils/fetcher";
import Screens from "../../utils/Screens";
import type {
  RootStackScreenProps,
  TopicContent,
} from "../../types/navigation";

type Chapter = {
  chapterName: string;
  content: TopicContent[];
};

type ApiContentItem = {
  chapter_title: string;
  content_type?: string;
  content_link: string;
  topic_title: string;
};

export default function CourseViewScreen({
  navigation,
  route,
}: RootStackScreenProps<"CourseScreen">) {
  const { course } = route.params;
  const [chapters, setChapters] = React.useState<Chapter[]>([]);
  const [isloading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    const { data } = await api.get(`/course/content/${course.id}`);
    const transformedResponse = (data?.data as ApiContentItem[]).reduce<
      Chapter[]
    >((acc, item) => {
      const existingChapter = acc.find(
        (chapter) => chapter.chapterName === item.chapter_title
      );
      const contentItem: TopicContent = {
        content_type: item.content_type,
        content_link: item.content_link,
        topic_title: item.topic_title,
      };

      if (existingChapter) {
        existingChapter.content.push(contentItem);
      } else {
        acc.push({
          chapterName: item.chapter_title,
          content: [contentItem],
        });
      }
      return acc;
    }, []);

    setChapters(transformedResponse);
    setLoading(false);
  };

  return (
    <Box bg={color.white} flex={1}>
      <ImageBackground
        source={require("../../../assets/blank_bg.png")}
        style={{
          width: "100%",
          height: height("20"),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          fontSize={28}
          fontWeight={"bold"}
          ml={8}
          mb={20}
          color={color.white}
        >
          {course.title}
        </Text>

        <Center w={"100%"}>
          <Box
            bg={"rgba(255,255,255,0.5)"}
            flexDirection={"row"}
            w={"80%"}
            p={8}
            m={10}
            rounded={4}
            style={{
              borderWidth: 1,
              borderColor: color.white,
            }}
          >
            <Feather name="search" size={24} color="white" />
            <Input
              ml={8}
              placeholder={"Search"}
              hintColor={color.white}
              color={color.white}
            />
          </Box>
        </Center>
      </ImageBackground>
      {isloading && <ActivityIndicator size="large" color={color.blue} />}
      {!isloading && chapters.length === 0 && (
        <Text
          style={{ textAlign: "center" }}
          fontSize={22}
          mt={10}
          color={color.gray}
        >
          No Content Found
        </Text>
      )}
      <ScrollView>
        {chapters.map((chapter, i) => (
          <React.Fragment key={chapter.chapterName}>
            <ChapterTitle title={chapter.chapterName} />
            {chapter.content.map((content) => (
              <ChapterTopic
                key={content.topic_title}
                chapterName={chapter.chapterName}
                content={content}
                navigation={navigation}
                isLocked={i !== 0}
              />
            ))}
          </React.Fragment>
        ))}
      </ScrollView>
    </Box>
  );
}

function ChapterTitle({ title }: { title: string }) {
  return (
    <Box
      p={6}
      ml={8}
      style={{
        borderBottomWidth: 1,
        borderBottomColor: color.blue,
      }}
    >
      <Text fontSize={22} fontWeight={"bold"} ml={8} color={color.blue}>
        {title}
      </Text>
    </Box>
  );
}

function ChapterTopic({
  chapterName,
  navigation,
  isLocked,
  content,
}: {
  chapterName: string;
  navigation: RootStackScreenProps<"CourseScreen">["navigation"];
  isLocked: boolean;
  content: TopicContent;
}) {
  return (
    <PBox
      bg={color.white}
      p={6}
      m={4}
      rounded={3}
      e={2}
      flexDirection={"row"}
      onPress={() => {
        if (isLocked) {
          return;
        }
        navigation.navigate(Screens.TOPIC, { content, chapterName });
      }}
    >
      <Box>
        {isLocked ? (
          <Entypo name="lock" size={24} color={color.gray} />
        ) : (
          <Entypo name="lock-open" size={24} color={color.blue} />
        )}
      </Box>
      <Box w={"90%"}>
        <Text fontSize={16} fontWeight={"bold"} ml={8}>
          {content.topic_title}
        </Text>
      </Box>
    </PBox>
  );
}
