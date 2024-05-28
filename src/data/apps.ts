import type { PortfolioItem } from "../scripts/portfolio-item"
import uiLibraryImage from '../images/ui-library-submission-wide.png';
import lawfareImage from '../images/lawfare.png';

const stories : PortfolioItem[] = [
  {
    title: "Scholarly Publishing Software",
    client: "Public Knowledge Project",
    date: "2018-2023",
    url: "/scholarly-publishing",
    image: uiLibraryImage,
    color: "#002C40",
    alt: "Screenshot of the step-by-step workflow to make a new journal submission",
  },
  {
    title: "Lawfare Data Extraction",
    client: "FMEP",
    date: "Sep 2023",
    url: "/lawfare",
    image: lawfareImage,
    color: "#1F274C",
    alt: "Screenshot of the homepage of lawfare.fmep.org that says FMEP's research and documentation on the campaign to exploit US laws.",
  },
]

export default stories