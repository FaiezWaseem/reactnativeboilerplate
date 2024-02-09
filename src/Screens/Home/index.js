import * as React from "react";
import { Box, Text, width, Center, PBox, height } from "rn-faiez-components";
import { ScrollView, Image, StatusBar } from "react-native";
import color from "../../utils/color";
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Screens from "../../utils/Screens";
import api from "../../utils/fetcher";
import { SERVER_URL } from "../../utils/constant";
import TimeTable from "./TimeTable";

const temp_uri = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4e%2F4e%2F26%2F4e4e26cae6106d9c7dd6333083599553.png&f=1&nofb=1&ipt=00c03123a305e97293beae4f4d479497afee54f3dcd4ae581b780e080b28f4f0&ipo=images";


export default function HomeScreen({ navigation }) {

  const courses = [
    { title: 'Biology', id: 1, link: 'https://tecdigital.live/image41.jpg' },
    { id: 3, title: 'Math', link: 'https://tecdigital.live/image7.jpg' },
    { di: 4, title: 'Chemistry', link: 'https://tecdigital.live/image5.jpg' },
    { title: 'Physics', id: 2, link: 'https://tecdigital.live/image9.jpg' }];
  const notes = [
    { title: 'IX-Biology Ch 01 Introduction to Biology.pdf', id: 1, link: 'https://tecdigital.live/image41.jpg' },
    { id: 3, title: 'modi Work Sheet 2(MCQS) without answers Bio  09 Chapter 1 introduction to biology.pdf', link: 'https://tecdigital.live/image7.jpg' },
    { di: 4, title: 'Work Sheet 1(Excercise)  without answer Bio  09 Chapter 1 introduction to biology.pdf', link: 'https://tecdigital.live/image5.jpg' },
    { title: 'Work Sheet 2(MCQS) without answers Bio  09 Chapter 1 introduction to biology.pdf', id: 2, link: 'https://tecdigital.live/image9.jpg' }];

  const [recorded, setRecorded] = React.useState([]);
  const [live, setLive] = React.useState([]);
  const [NextCoursePage, setNextCoursePage] = React.useState(1);


  React.useEffect(() => {
    fetchRecordedLectures()
    fetchLiveLectures()
  }, [])

  const fetchRecordedLectures = async () => {
    const { data } = await api.get('/videos/recorded')
    if (data.data) {
      console.log(data)
      if (data.next_page_url) {
        setNextCoursePage(data.to)
      }
      setRecorded(data.data)
    }
  }
  const fetchLiveLectures = async () => {
    const { data } = await api.get('/videos/live')
    if (data.data) {
      console.log(data)
      if (data.next_page_url) {
        setNextCoursePage(data.to)
      }
      setLive(data.data)
    }
  }

  return (
    <Box flex={1} bg={color.white}>
      <StatusBar backgroundColor={color.blue} />
      <ScrollView>
        <Center mb={5}>
          <Box bg={color.blue} p={12} mb={20} w={"100%"}>
            <Box flexDirection={'row'}>
              <Box w={'65%'}>
                <Text color={color.white} fontSize={12}>
                  Welcome back
                  <Entypo name="thunder-cloud" size={16} color={color.white} />
                </Text>
                <Text fontWeight={"bold"} color={color.white} fontSize={16}>
                  Guest Account
                </Text>

              </Box>
              <Box w={'35%'} flexDirection={'row'} >

                <Text color={color.white} fontWeight={'bold'} fontSize={20} >E-Coaching</Text>
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
          {courses.map((course, i) => (
            <Course
              course={course}
              navigation={navigation}
              title={course.title}
              icon={{ uri: course.link }}
            />
          ))}
        </Box>
        <Box p={6} ml={8} flexDirection={"row"}>
          <Box w={'75%'}>
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
        {live.map((video, i) => (
          <Classes video={video} islive={true} navigation={navigation} />
        ))}

        <Box p={6} ml={8} flexDirection={"row"}>
          <Box w={'75%'}>

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
            <Text color={color.white}  >View All</Text>
          </Box>
        </Box>
        {recorded.map((video, i) => (
          <Classes video={video} islive={false} navigation={navigation} />
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
          {notes.map((note, i) => (
            <Notes
              note={note}
              navigation={navigation}
              title={note.title}
              icon={require('../../../assets/pdf.png')}
              bg={color.white}
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
}



const Course = ({ navigation, icon, course }) => {
  return (
    <PBox
      onPress={() => navigation.navigate(Screens.COURSE, { course })}
      justifyContent={"center"}
      alignItems={"center"}
      rounded={6}
      // p={6}
      w={width(40)}
      h={120}
      m={4}
      ml={8}
      bg={color.white}
      e={4}
    >
      <Image source={icon} style={{ flex: 1, height: 100, width: '100%' }} />
      {/* <Text mt={4} mb={4} fontWeight={"bold"}>
        {course?.title}
      </Text> */}
    </PBox>
  );
};
const Notes = ({ navigation, icon, note, bg }) => {
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
      <Text mt={4} color={color.dark} mb={4} fontWeight={"bold"} >
        {note?.title}
      </Text>
    </PBox>
  );
};


const getIcons = (icon) => {
  switch (icon) {
    case "Biology":
      return require("../../../assets/biology.png");
    case "Math":
      return require("../../../assets/math-book.png");
    case "Chemistry":
      return require("../../../assets/chemistry.png");
    case "Physics":
      return require("../../../assets/physics.png");
    default:
      return require("../../../assets/eng.png");
  }
};

const Classes = ({ islive, video, navigation }) => {
  return <PBox bg={color.white} m={4} e={2} flexDirection={'row'} alignItems={'center'} onPress={() => {
    if (islive) {
      return;
    }
    navigation.navigate(Screens.TOPIC, {
      chapterName: video?.rec_subtitle, content: {
        topic_title: video?.rec_title,
        content_link: video?.rec_link,
      }
    })
  }}>
    <Box p={6}>
      <Image source={{ uri: islive ? SERVER_URL + video?.live_thumbnail : SERVER_URL + video?.rec_thumbnail }}
        style={{
          width: 150,
          height: 100,
          borderRadius: 8,
          resizeMode: 'stretch'
        }}
      />
    </Box>
    <Box w={'60%'} >
      <Text color={color.blue} >{islive ? video?.live_subtitle : video?.rec_subtitle} </Text>
      <Text w={'90%'} fontSize={16} mt={5} mb={5} style={{ whiteSpace: "pre-line" }}>{islive ? video?.live_title : video?.rec_title}</Text>
      {islive && <Text w={'50%'} style={{ textAlign: 'center' }} bg={'red'} rounded={8} p={6} color={color.white}  >live session</Text>}
    </Box>

  </PBox>
}