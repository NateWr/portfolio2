import type { PortfolioItem } from "../scripts/portfolio-item"
import individualizeImage from '../images/slub-urbanology.png';
import journalFiImage from '../images/journalfi-homepage.png';
import lawfareImage from '../images/lawfare.png';
import wpImage from '../images/wp-augustan.png';
import docsHubImage from '../images/docs-hub-wide.png';

const websites : PortfolioItem[] = [
  {
    title: "Individualize OJS Theme",
    client: "Publia by SLUB Dresden",
    date: "Feb 2026",
    url: "/individualize-ojs-theme",
    image: individualizeImage,
    alt: "Screenshot of a sample journal showing a city at night shot from above",
  },
  {
    title: "Journal.fi and Edition.fi",
    client: "Finnish Learned Societies",
    date: "2025",
    url: "/finnish-journals",
    image: journalFiImage,
    alt: "Screenshot of the homepage for journal.fi with text that says Access 100+ Finnish Scholarly Journals",
  },
  {
    title: "Lawfare Data Hub",
    client: "FMEP",
    date: "Sep 2023",
    url: "/lawfare",
    image: lawfareImage,
    alt: "Screenshot of the homepage of lawfare.fmep.org that says FMEP's research and documentation on the campaign to exploit US laws.",
  },
  {
    title: "WordPress Themes",
    client: "Theme of the Crop",
    date: "2014-2018",
    url: "/wordpress",
    image: wpImage,
    alt: "Screenshot of the Augustan theme for WordPress.",
  },
  {
    title: "Documentation Hub",
    client: "Public Knowledge Project",
    date: "2018",
    url: "/docs-hub",
    image: docsHubImage,
    alt: "Screenshot of the homepage for the PKP technical documentation.",
  },
]


export default websites