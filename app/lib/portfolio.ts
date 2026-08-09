import img1 from "@/app/assets/images/portfolio/728369704_1336697325337933_6593978726610793681_n.jpg";
import img2 from "@/app/assets/images/portfolio/731761521_1336697345337931_8412262490625804237_n.jpg";
import img3 from "@/app/assets/images/portfolio/733684758_1341275461546786_6264660590603257393_n.jpg";
import img4 from "@/app/assets/images/portfolio/735170332_1341275468213452_9097638965816650409_n.jpg";
import img5 from "@/app/assets/images/portfolio/740812644_1348587447482254_2965925386168115178_n.jpg";
import img6 from "@/app/assets/images/portfolio/742102286_1348587450815587_6796463250446387234_n.jpg";
import img7 from "@/app/assets/images/portfolio/747526847_1353309980343334_26067731125038529_n.jpg";
import img8 from "@/app/assets/images/portfolio/753035097_1362478926093106_7945925147059638816_n.jpg";
import img9 from "@/app/assets/images/portfolio/754068573_1361407652866900_8762988021994053931_n.jpg";
import img10 from "@/app/assets/images/portfolio/755870642_1362478932759772_5096377044273192674_n.jpg";
import img11 from "@/app/assets/images/portfolio/769051944_1374479061559759_4358397324729755763_n.jpg";
import img12 from "@/app/assets/images/portfolio/770688497_1374479068226425_229364590916606997_n.jpg";
import type { StaticImageData } from "next/image";

export type PortfolioItem = {
  src: StaticImageData;
  alt: string;
};

export const PORTFOLIO: PortfolioItem[] = [
  { src: img1, alt: "Roofing project by Roy Swazey's Roofing" },
  { src: img2, alt: "Asphalt roof installation in New Brunswick" },
  { src: img3, alt: "Residential roofing work" },
  { src: img4, alt: "Metal roofing project" },
  { src: img5, alt: "Roof repair and replacement" },
  { src: img6, alt: "Completed roofing installation" },
  { src: img7, alt: "Professional roof craftsmanship" },
  { src: img8, alt: "New roof installation" },
  { src: img9, alt: "Roofing project showcase" },
  { src: img10, alt: "Quality roofing work" },
  { src: img11, alt: "Roy Swazey's Roofing portfolio" },
  { src: img12, alt: "Roofing services in Saint John area" },
];
