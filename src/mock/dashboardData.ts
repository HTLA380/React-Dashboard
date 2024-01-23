// ======== chart data ========  //

export const ChartData = [
  {
    date: "2003",
    visit: 23,
  },
  {
    date: "Feb '03",
    visit: 11,
  },
  {
    date: "Mar '03",
    visit: 22,
  },
  {
    date: "Apr '03",
    visit: 27,
  },
  {
    date: "May '03",
    visit: 13,
  },
  {
    date: "Jun '03",
    visit: 22,
  },
  {
    date: "Jul '03",
    visit: 37,
  },
  {
    date: "Aug '03",
    visit: 21,
  },
  {
    date: "Sep '03",
    visit: 44,
  },
  {
    date: "Oct '03",
    visit: 22,
  },
  {
    date: "Oct 31",
    visit: 30,
  },
];

export const PieChartData = [
  {
    name: "America",
    visits: 4344,
  },
  {
    name: "Asia",
    visits: 5435,
  },
  {
    name: "Europe",
    visits: 1443,
  },
  {
    name: "Africa",
    visits: 4443,
  },
];

export const HorizontalBarChartData = [
  {
    name: "Italy",
    rates: 400,
  },
  {
    name: "Japan",
    rates: 430,
  },
  {
    name: "China",
    rates: 440,
  },
  {
    name: "Canada",
    rates: 470,
  },
  {
    name: "France",
    rates: 540,
  },
  {
    name: "Germany",
    rates: 580,
  },
  {
    name: "South Korea",
    rates: 690,
  },
  {
    name: "Netherlands",
    rates: 1100,
  },
  {
    name: "United States",
    rates: 1200,
  },
  {
    name: "United Kingdom",
    rates: 1380,
  },
];

export const radarChartData = [
  {
    label: "Series 1",
    data: [90, 60, 50, 60, 112, 20],
    fill: true,
    backgroundColor: alpha(primary.main, 0.2),
    borderColor: primary.main,
    pointBackgroundColor: primary.main,
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: primary.main,
  },
  {
    label: "Series 2",
    data: [28, 30, 40, 100, 20, 80],
    fill: true,
    backgroundColor: alpha(warning.main, 0.2),
    borderColor: warning.main,
    pointBackgroundColor: warning.main,

    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: warning.main,
  },
  {
    label: "Series 3",
    data: [50, 80, 80, 10, 50, 10],
    fill: true,
    backgroundColor: alpha(info.main, 0.2),
    borderColor: info.main,
    pointBackgroundColor: info.main,
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: info.main,
  },
];

import { alpha } from "@mui/material";
// ======== News Data ========  //
import { info, primary, warning } from "../theme/palette";

export const newsData = [
  {
    title: "He taught me a code.",
    description:
      "Tell him time is of the essence. This man is a knight in shining armor. I've lived in darkness a long time. Over the years my eyes adjusted until the dark became my world and I could see.",
    image: `/assets/images/covers/cover_1.jpg`,
    date: "about 2 hours ago",
  },
  {
    title: "I'm an person.",
    description:
      "I'm going to tell you something that I've never told anyone before. Hello, Dexter Morgan. Finding a needle in a haystack isn't hard when every straw is computerized.",
    image: `/assets/images/covers/cover_2.jpg`,
    date: "about 17 hours ago",
  },
  {
    title: "I like a challenge.",
    description:
      "I'm Santa Claus! That's not soon enough! With gusto. Of all the friends I've had… you're the first. Who am I making this out to?",
    image: `/assets/images/covers/cover_3.jpg`,
    date: "about 9 hours ago",
  },
  {
    title: "It's very valuable.",
    description:
      "Hey, whatcha watching? Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd. No. We're on the top. Bender, you risked your life to save me! ",
    image: `/assets/images/covers/cover_4.jpg`,
    date: "about 3 hours ago",
  },
  {
    title: "I can explain. ",
    description:
      "Hey, you add a one and two zeros to that or we walk! Enough about your promiscuous mother, Hermes! We have bigger problems.",
    image: `/assets/images/covers/cover_5.jpg`,
    date: "about 4 hours ago",
  },
];
