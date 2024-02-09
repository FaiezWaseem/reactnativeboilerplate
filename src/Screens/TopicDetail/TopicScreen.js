import * as React from 'react';
import { Box, Text, height, width, Row } from 'rn-faiez-components';
import color from '../../utils/color'
import { Image } from 'react-native';

import { Video, ResizeMode } from 'expo-av';
import { WebView } from 'react-native-webview';


export default function TopicDetailScreen({ navigation, route }) {
  const { chapterName, content } = route.params;
  const [pageLoadingProgress, setPageLoadingProgress] = React.useState(0);
  const handleShouldStartLoadWithRequest = (request) => {
    if (request.url.endsWith('.mp4')) {
      // Block Video downloads
      return false;
    }
    // Allow all other requests
    return true;
  };

  return (
    <Box flex={1} bg={color.white} >

      <Box p={8} m={1} bg={color.white} e={2} >
        <Box flexDirection={'row'} >
          {/* <Text fontSize={22} color={color.blue} fontWeight={'bold'} >01</Text> */}
          <Text fontSize={20} color={color.blue} fontWeight={'bold'} ml={5} >{chapterName}</Text>
        </Box>
        <Box flexDirection={'row'} >
          {/* <Text fontSize={22} color={color.blue} fontWeight={'bold'} >07</Text> */}
          <Text fontSize={16} color={color.blue} ml={5} >{content.topic_title}</Text>
        </Box>
      </Box>

      <Row
        w={pageLoadingProgress !== 0 ? pageLoadingProgress + '%' : '100%'}
        h={10}
        bg={'orange'}></Row>

      <Box h={height(30)} >
        <WebView
          style={{ flex: 1 }}
          onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
          source={{ uri: content?.content_link }}
          onLoadProgress={({ nativeEvent }) => {
            setPageLoadingProgress(nativeEvent.progress.toFixed(2) * 100);
          }}
        />
      </Box>
      {/* <Video
        style={{ width : '100%' , height : height(30)}}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
      />
      <Box flexDirection={'row'} pt={5} pb={5} style={{ flexWrap: 'wrap' }} justifyContent={'space-evenly'} >
        <ContentCard icon={require('../../../assets/swf.png')} title={'Flash Animation'} />
        <ContentCard icon={require('../../../assets/pdf.png')} title={'Pdf'} />
        <ContentCard icon={require('../../../assets/3d-movie.png')} title={'web Animation'} />
        <ContentCard icon={require('../../../assets/video.png')} title={'Videos'} />
      </Box> */}

    </Box >
  );
}


const ContentCard = ({ icon, title }) => {
  return <Box bg={color.white} m={5} e={4} w={width(40)} justifyContent={'center'} alignItems={'center'} >
    <Image source={icon} style={{ width: 60, height: 60 }} />
    <Text mt={5} mb={5} fontWeight={500} >{title}</Text>
  </Box>
}