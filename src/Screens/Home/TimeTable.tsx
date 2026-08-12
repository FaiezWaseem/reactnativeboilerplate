import * as React from "react";
import { Box, Text } from "rn-faiez-components";
import { ScrollView } from "react-native";
import color from "../../utils/color";

type ScheduleItem = {
  title: string;
  start_time: string;
  end_time: string;
};

type DateIconProps = {
  isActive: boolean;
  label: string;
};

export default function TimeTable() {
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const schedule: ScheduleItem[] = [
    { title: "Biology", start_time: "8:45 AM", end_time: "9:20 AM" },
    { title: "Chemistry", start_time: "9::20 AM", end_time: "9:55 AM" },
    { title: "Maths", start_time: "10:00 AM", end_time: "10:35 AM" },
    { title: "Pyhsics", start_time: "10:40 AM", end_time: "11:15 AM" },
  ];

  const date = new Date();

  return (
    <Box p={6}>
      <Text fontSize={22} mb={10} fontWeight={"bold"} ml={8} color={color.blue}>
        Today Class Shedule
      </Text>
      <Box bg={color.blue} rounded={20} p={8}>
        <Box>
          <Text color={color.white} fontSize={18} fontWeight={"bold"}>
            {weekDay[date.getDay()]} {date.getDate()}
          </Text>
        </Box>

        <Box w={"100%"} flexDirection={"row"}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {weekDay.map((day) => (
              <DateIcon
                key={day}
                label={day}
                isActive={date.getDay() === weekDay.indexOf(day)}
              />
            ))}
          </ScrollView>
        </Box>
        {schedule.map((sclass) => (
          <Box key={sclass.title} e={3} bg={color.white} m={4} p={6} rounded={5}>
            <Box flexDirection={"row"}>
              <Box w={"55%"}>
                <Text>{sclass.title}</Text>
              </Box>
              <Box>
                <Text>{sclass.start_time} - </Text>
              </Box>
              <Box>
                <Text>{sclass.end_time}</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function DateIcon({ isActive, label }: DateIconProps) {
  return (
    <Box
      bg={isActive ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.7)"}
      p={6}
      rounded={6}
      m={4}
      style={{
        borderWidth: 1,
        borderColor: color.white,
      }}
    >
      <Text fontWeight={"bold"} color={color.blue}>
        {label}
      </Text>
    </Box>
  );
}
