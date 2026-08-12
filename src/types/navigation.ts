import type { ImageSourcePropType } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type Course = {
  id: number;
  title: string;
  link?: string;
};

export type Note = {
  id: number;
  title: string;
  link?: string;
};

export type TopicContent = {
  content_type?: string;
  content_link: string;
  topic_title: string;
};

export type LiveVideo = {
  live_subtitle?: string;
  live_title?: string;
  live_thumbnail?: string;
};

export type RecordedVideo = {
  rec_subtitle?: string;
  rec_title?: string;
  rec_link?: string;
  rec_thumbnail?: string;
};

export type VideoItem = LiveVideo & RecordedVideo;

export type RootStackParamList = {
  SplashScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  CourseScreen: { course: Course };
  DetailsScreen: undefined;
  TopicScreen: { chapterName: string; content: TopicContent };
  BoardScreen: undefined;
  ClassesScreen: undefined;
  PdfViewerscreen: { note: Note };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type CourseCardProps = {
  navigation: RootStackScreenProps<"HomeScreen">["navigation"];
  icon: ImageSourcePropType;
  course: Course;
};

export type NotesCardProps = {
  navigation: RootStackScreenProps<"HomeScreen">["navigation"];
  icon: ImageSourcePropType;
  note: Note;
  bg: string;
};

export type ClassesCardProps = {
  islive: boolean;
  video: VideoItem;
  navigation: RootStackScreenProps<"HomeScreen">["navigation"];
};
