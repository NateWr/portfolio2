import type { PortfolioItem } from "../scripts/portfolio-item"
import uiLibraryImage from '../images/ui-library-submission-wide.png';
import intentImage from '../images/intent.png';
import councillorsImage from '../images/find-your-councillors.png';
import lawfareImage from '../images/lawfare-google-sheet.png';

const stories : PortfolioItem[] = [
  {
    title: "Scholarly Publishing Software",
    client: "Public Knowledge Project",
    date: "2018-2023",
    url: "/scholarly-publishing",
    image: uiLibraryImage,
    alt: "Screenshot of the step-by-step workflow to make a new journal submission",
  },
  {
    title: "Intent Database",
    client: "Law for Palestine",
    date: "Oct 2024",
    url: "/intent",
    image: intentImage,
    alt: "Screenshot of the database of statements of intent to commit genocide",
  },
  {
    title: "Find Your City Councillor",
    client: "Side Project",
    date: "June 2023",
    url: "/find-your-representatives",
    image: councillorsImage,
    alt: "Screenshot of a map of Edinburgh with details about the city's councillors",
  },
  {
    title: "Lawfare Data Extraction",
    client: "FMEP",
    date: "Sep 2023",
    url: "/lawfare-data",
    image: lawfareImage,
    alt: "Screenshot of the Google sheet after the data was extracted",
  },
]

export default stories