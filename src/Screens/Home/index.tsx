import * as React from "react";
import { Box, Text, width, Center, PBox } from "rn-faiez-components";
import { ScrollView, Image, StatusBar } from "react-native";
import { Entypo } from "@expo/vector-icons";
import color from "../../utils/color";
import Screens from "../../utils/Screens";
import api from "../../utils/fetcher";
import { SERVER_URL } from "../../utils/constant";
import TimeTable from "./TimeTable";
import type {
  ClassesCardProps,
  Course,
  CourseCardProps,
  Note,
  NotesCardProps,
  RootStackScreenProps,
  VideoItem,
} from "../../types/navigation";

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"HomeScreen">) {
  const courses: Course[] = [
    { title: "Biology", id: 1, link: "https://tecdigital.live/image41.jpg" },
    { id: 3, title: "Math", link: "https://tecdigital.live/image7.jpg" },
    { id: 4, title: "Chemistry", link: "https://tecdigital.live/image5.jpg" },
    { title: "Physics", id: 2, link: "https://tecdigital.live/image9.jpg" },
  ];

  const notes: Note[] = [
    {
      title: "IX-Biology Ch 01 Introduction to Biology.pdf",
      id: 1,
      link: "https://tecdigital.live/image41.jpg",
    },
    {
      id: 3,
      title:
        "modi Work Sheet 2(MCQS) without answers Bio  09 Chapter 1 introduction to biology.pdf",
      link: "https://tecdigital.live/image7.jpg",
    },
    {
      id: 4,
      title:
        "Work Sheet 1(Excercise)  without answer Bio  09 Chapter 1 introduction to biology.pdf",
      link: "https://tecdigital.live/image5.jpg",
    },
    {
      title:
        "Work Sheet 2(MCQS) without answers Bio  09 Chapter 1 introduction to biology.pdf",
      id: 2,
      link: "https://tecdigital.live/image9.jpg",
    },
  ];

  const [recorded, setRecorded] = React.useState<VideoItem[]>([]);
  const [live, setLive] = React.useState<VideoItem[]>([]);

  React.useEffect(() => {
    fetchRecordedLectures();
    fetchLiveLectures();
  }, []);

  const fetchRecordedLectures = async () => {
    const { data } = await api.get("/videos/recorded");
    if (data.data) {
      setRecorded(data.data);
    }
  };

  const fetchLiveLectures = async () => {
    const { data } = await api.get("/videos/live");
    if (data.data) {
      setLive(data.data);
    }
  };

  return (
    <Box flex={1} bg={color.white}>
      <StatusBar backgroundColor={color.blue} />
      <ScrollView>
        <Center mb={5}>
          <Box bg={color.blue} p={12} mb={20} w={"100%"}>
            <Box flexDirection={"row"}>
              <Box w={"65%"}>
                <Text color={color.white} fontSize={12}>
                  Welcome back
                  <Entypo name="thunder-cloud" size={16} color={color.white} />
                </Text>
                <Text fontWeight={"bold"} color={color.white} fontSize={16}>
                  Guest Account
                </Text>
              </Box>
              <Box w={"35%"} flexDirection={"row"}>
                <Text color={color.white} fontWeight={"bold"} fontSize={20}>
                  E-Coaching
                </Text>
              </Box>
            </Box>
          </Box>
        </Center>

        <TimeTable />

        <Box p={6} ml={8}>
          <Text fontSize={22} fontWeight={"bold"} ml={8} color={color.blue}>
            Courses
          </Text>
        </Box>
        <Box
          flexDirection={"row"}
          style={{ flexWrap: "wrap" }}
          justifyContent={"center"}
        >
          {courses.map((course) => (
            <Course
              key={course.id}
              course={course}
              navigation={navigation}
              icon={{ uri: course.link }}
            />
          ))}
        </Box>

        <Box p={6} ml={8} flexDirection={"row"}>
          <Box w={"75%"}>
            <Text fontSize={22} fontWeight={"bold"} ml={8} color={color.blue}>
              Live Session
            </Text>
          </Box>
          <Box
            bg={color.blue}
            alignItems={"center"}
            rounded={8}
            ml={6}
            p={6}
            h={"100%"}
          >
            <Text color={color.white}>View All</Text>
          </Box>
        </Box>
        {live.map((video, index) => (
          <Classes
            key={`live-${index}`}
            video={video}
            islive={true}
            navigation={navigation}
          />
        ))}

        <Box p={6} ml={8} flexDirection={"row"}>
          <Box w={"75%"}>
            <Text fontSize={22} fontWeight={"bold"} ml={8} color={color.blue}>
              Recorded Lectures
            </Text>
          </Box>
          <Box
            bg={color.blue}
            alignItems={"center"}
            rounded={8}
            ml={6}
            p={6}
            h={"100%"}
          >
            <Text color={color.white}>View All</Text>
          </Box>
        </Box>
        {recorded.map((video, index) => (
          <Classes
            key={`recorded-${index}`}
            video={video}
            islive={false}
            navigation={navigation}
          />
        ))}

        <Box p={6} ml={8}>
          <Text fontSize={22} fontWeight={"bold"} ml={8} color={color.blue}>
            Notes
          </Text>
        </Box>
        <Box
          flexDirection={"row"}
          style={{ flexWrap: "wrap" }}
          justifyContent={"center"}
        >
          {notes.map((note) => (
            <Notes
              key={note.id}
              note={note}
              navigation={navigation}
              icon={require("../../../assets/pdf.png")}
              bg={color.white}
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}

function Course({ navigation, icon, course }: CourseCardProps) {
  return (
    <PBox
      onPress={() => navigation.navigate(Screens.COURSE, { course })}
      justifyContent={"center"}
      alignItems={"center"}
      rounded={6}
      w={width(40)}
      h={120}
      m={4}
      ml={8}
      bg={color.white}
      e={4}
    >
      <Image source={icon} style={{ flex: 1, height: 100, width: "100%" }} />
    </PBox>
  );
}

function Notes({ navigation, icon, note, bg }: NotesCardProps) {
  return (
    <PBox
      onPress={() => navigation.navigate(Screens.PDF, { note })}
      justifyContent={"center"}
      alignItems={"center"}
      rounded={6}
      p={6}
      w={width(45)}
      m={4}
      ml={8}
      bg={bg}
      e={4}
    >
      <Image source={icon} style={{ height: 60, width: 60 }} />
      <Text mt={4} color={color.dark} mb={4} fontWeight={"bold"}>
        {note.title}
      </Text>
    </PBox>
  );
}

function Classes({ islive, video, navigation }: ClassesCardProps) {
  return (
    <PBox
      bg={color.white}
      m={4}
      e={2}
      flexDirection={"row"}
      alignItems={"center"}
      onPress={() => {
        if (islive) {
          return;
        }
        navigation.navigate(Screens.TOPIC, {
          chapterName: video.rec_subtitle ?? "",
          content: {
            topic_title: video.rec_title ?? "",
            content_link: video.rec_link ?? "",
          },
        });
      }}
    >
      <Box p={6}>
        <Image
          source={{
            uri: islive
              ? SERVER_URL + (video.live_thumbnail ?? "")
              : SERVER_URL + (video.rec_thumbnail ?? ""),
          }}
          style={{
            width: 150,
            height: 100,
            borderRadius: 8,
            resizeMode: "stretch",
          }}
        />
      </Box>
      <Box w={"60%"}>
        <Text color={color.blue}>
          {islive ? video.live_subtitle : video.rec_subtitle}
        </Text>
        <Text w={"90%"} fontSize={16} mt={5} mb={5}>
          {islive ? video.live_title : video.rec_title}
        </Text>
        {islive && (
          <Text
            w={"50%"}
            style={{ textAlign: "center" }}
            bg={"red"}
            rounded={8}
            p={6}
            color={color.white}
          >
            live session
          </Text>
        )}
      </Box>
    </PBox>
  );
}
