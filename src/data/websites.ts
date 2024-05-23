import type { PortfolioItem } from "../scripts/portfolio-item"
import journalFiImage from '../images/journalfi-homepage.png';
import lawfareImage from '../images/lawfare-homepage.png';
import wpImage from '../images/wp-augustan.png';

const websites : PortfolioItem[] = [
  {
    title: "Journal.fi and Edition.fi",
    client: "Finnish Learned Societies",
    date: "Coming Soon",
    url: "/finnish-journals",
    image: journalFiImage,
    color: "#8F00FF",
    alt: "Screenshot of the homepage for journal.fi with text that says Access 100+ Finnish Scholarly Journals",
  },
  {
    title: "Lawfare Data Hub",
    client: "FMEP",
    date: "Sep 2023",
    url: "/lawfare",
    image: lawfareImage,
    color: "#1F274C",
    alt: "Screenshot of the homepage of lawfare.fmep.org that says FMEP's research and documentation on the campaign to exploit US laws.",
  },
  {
    title: "WordPress Themes",
    client: "Theme of the Crop",
    date: "2014-2018",
    url: "/wordpress",
    image: wpImage,
    color: "#002222",
    alt: "Screenshot of the Augustan theme for  WordPress.",
  },
]


export default websites