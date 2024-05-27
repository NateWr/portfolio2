import type { PortfolioItem } from "../scripts/portfolio-item"
import killerAiImage from '../images/killerai.png';
import weHadDreamsImage from '../images/wehaddreams.png';
import antiboycottImage from '../images/antiboycott.png';
import faGazaImage from '../images/fa-gaza.png';

const stories : PortfolioItem[] = [
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
    url: "https://wehaddreams.com",
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