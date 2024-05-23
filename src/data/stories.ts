import type { PortfolioItem } from "../scripts/portfolio-item"
import killerAiImage from '../images/killerai.png';
import uiLibraryImage from '../images/ui-library-submission.png';
import weHadDreamsImage from '../images/wehaddreams.png';

const stories : PortfolioItem[] = [
  {
    title: "Stop Killer AI",
    client: "Visualizing Palestine",
    date: "May 2024",
    url: "/killer-ai",
    image: killerAiImage,
    color: "#4D0016",
    alt: "Graphic showing families under a watching eye and the text: Israel's Killer AI",
  },
  {
    title: "Open Journal Systems",
    client: "Public Knowledge Project",
    date: "2018-2023",
    url: "/ui-library",
    image: uiLibraryImage,
    color: "#002C40",
    alt: "Screenshot of the step-by-step workflow to make a new journal submission",
  },
  {
    title: "We Had Dreams",
    client: "Visualizing Palestine",
    date: "Nov 2023",
    url: "https://wehaddreams.com",
    image: weHadDreamsImage,
    color: "#211202",
    alt: "Graphic showing a nightime city skyline with explosions and the text: We Had Dreams, Palestinians living and dying under seige",
  }
]

export default stories