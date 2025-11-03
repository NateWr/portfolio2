import type { PortfolioItem } from "../scripts/portfolio-item"
import roadToGenocideImage from '../images/road-to-genocide.png'
import bdsImage from '../images/bds.png'
import datasenseImage from '../images/datasense.png'
import killerAiImage from '../images/killerai.png';
import weHadDreamsImage from '../images/wehaddreams.png';
import antiboycottImage from '../images/antiboycott.png';
import faGazaImage from '../images/fa-gaza.png';

const stories : PortfolioItem[] = [
  {
    title: "Growth of a Movement",
    client: "Visualizing Palestine",
    date: "Oct 2025",
    url: "/bds",
    image: bdsImage,
    color: "#000",
    alt: "Illustration of hands in the air waving a Palestinian flag over the words Growth of a Movement and a chart showing a timeline of events",
  },
  {
    title: "Navigating The Digital Safety Net",
    client: "University of Edinburgh / DataSense",
    date: "Aug 2025",
    url: "/datasense",
    image: datasenseImage,
    color: "#222d65",
    alt: "A line drawing of a rural Bangladeshi woman alongside the story title",
  },
  {
    title: "Road to Genocide",
    client: "Visualizing Palestine",
    date: "Dec 2024",
    url: "/road-to-genocide",
    image: roadToGenocideImage,
    color: "#040007",
    alt: "Graphic of the word Intent over a city landscape and a description of the crime of genocide",
  },
  {
    title: "Stop Killer AI",
    client: "Visualizing Palestine",
    date: "May 2024",
    url: "/killerai",
    image: killerAiImage,
    color: "#4D0016",
    alt: "Graphic showing families under a watching eye and the text: Israel's Killer AI",
  },
  {
    title: "Humanitarian Violence",
    client: "Forensic Architecture",
    date: "Feb 2024",
    url: "/humanitarian-violence",
    image: faGazaImage,
    color: "#000",
    alt: "Screenshot of a map of Gaza overlayed with information about Israel's invasion",
  },
  {
    title: "We Had Dreams",
    client: "Visualizing Palestine",
    date: "Nov 2023",
    url: "/wehaddreams",
    image: weHadDreamsImage,
    color: "#211202",
    alt: "Graphic showing a nightime city skyline with explosions and the text: We Had Dreams, Palestinians living and dying under seige",
  },
  {
    title: "The Rise of US Anti-Boycott Laws",
    client: "Visualizing Palestine",
    date: "Aug 2023",
    url: "/antiboycott",
    image: antiboycottImage,
    color: "#213751 ",
    alt: "",
  }
]

export default stories