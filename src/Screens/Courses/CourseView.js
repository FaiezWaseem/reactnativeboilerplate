import * as React from "react";
import { Box, Text, Center, PBox, height } from "rn-faiez-components";
import { ImageBackground } from "react-native";
import color from "../../utils/color";
import { ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import Input from "../../components/Input";
import api from "../../utils/fetcher";
import { Entypo } from '@expo/vector-icons';
import Screens from "../../utils/Screens";
import { ActivityIndicator } from "react-native";
export default function CourseViewScreen({ navigation, route }) {
  const { course } = route.params;

  console.log(course)

  const [chapters, setChapters] = React.useState([])
  const [isloading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetchContent()
  }, [])

  const fetchContent = async () => {
    const { data } = await api.get(`/course/content/${course.id}`)
    const transformedResponse = data?.data.reduce((acc, item) => {
      const existingChapter = acc.find(chapter => chapter.chapterName === item.chapter_title);
      if (existingChapter) {
        existingChapter.content.push({
          content_type: item.content_type,
          content_link: item.content_link,
          topic_title: item.topic_title,
        });
      } else {
        acc.push({
          chapterName: item.chapter_title,
          content: [{
            content_type: item.content_type,
            content_link: item.content_link,
            topic_title: item.topic_title,
          }]
        });
      }
      return acc;
    }, []);

    setChapters(transformedResponse)
    setLoading(false)
  }

  return (
    <Box bg={color.white} flex={1}>
      <ImageBackground
        source={require("../../../assets/blank_bg.png")}
        style={{
          width: "100%",
          height: height('20'),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text fontSize={28} fontWeight={"bold"} ml={8} mb={20} color={color.white}>
          {course?.title}
        </Text>

        <Center w={'100%'}>
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
      {!isloading && chapters.length === 0 && <Text style={{ textAlign : 'center'}} fontSize={22} mt={10} color={color.gray} >No Content Found</Text>}
      <ScrollView>
        {chapters.map((chapter, i) => (
          <>
            <ChapterTitle title={chapter?.chapterName} />
            {chapter?.content?.map(content => <ChapterTopic chapterName={chapter?.chapterName} content={content} navigation={navigation} isLocked={i !== 0} />)}
          </>
        ))}
      </ScrollView>
    </Box>
  );
}

const ChapterTitle = ({ title }) => {
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
};
const ChapterTopic = ({ chapterName, navigation, isLocked, content }) => {
  return (
    <PBox bg={color.white} p={6} m={4} rounded={3} e={2} flexDirection={'row'}
      onPress={() => {
        if (isLocked) {
          return;
        }
        navigation.navigate(Screens.TOPIC, { content, chapterName })
      }}
    >
      <Box>
        {isLocked ? <Entypo name="lock" size={24} color={color.gray} /> : <Entypo name="lock-open" size={24} color={color.blue} />}
      </Box>
      <Box w={'90%'}>
        <Text fontSize={16} fontWeight={"bold"} ml={8}>
          {content?.topic_title}
        </Text>
      </Box>
    </PBox>
  );
};
