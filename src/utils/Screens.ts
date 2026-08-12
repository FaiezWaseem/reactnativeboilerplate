const Screens = {
  HOME: "HomeScreen",
  SPLASH: "SplashScreen",
  BOARD: "BoardScreen",
  CLASSES: "ClassesScreen",
  COURSE: "CourseScreen",
  DETAILS: "DetailsScreen",
  LOGIN: "LoginScreen",
  TOPIC: "TopicScreen",
  PDF: "PdfViewerscreen",
} as const;

export type ScreenName = (typeof Screens)[keyof typeof Screens];

export default Screens;
