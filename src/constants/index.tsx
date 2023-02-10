type PathsProps = {
  home: string;
  contactUs: string;
  // whatWeDo: string;
  // gamiStatistics: string;
};

export const paths: PathsProps = {
  home: "/",
  contactUs: "contact-us",
  // whatWeDo: "what-we-do",
  // gamiStatistics: "gami-statistics",
};

export type PageLinkTypes = {
  title: "Home" | "What We Do" | "GAMI Statistics" | "Contact Us";
  path: string;
};

export const pageLinks: PageLinkTypes[] = [
  { title: "Home", path: "/" },
  { title: "What We Do", path: "#" },
  { title: "GAMI Statistics", path: "#" },
  { title: "Contact Us", path: "contact-us" },
];

export const cardData = [
  {
    src: "images/LAUNCHPAD.png",
    title: "Launchpad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.",
  },
  {
    src: "images/MIDLE.png",
    title: "Midle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.",
  },
  {
    src: "images/GAMI_MOVE.png",
    title: "Move",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.",
  },
  {
    src: "images/COREIN.png",
    title: "Corein",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.",
  },
  {
    src: "images/TOOLS.png",
    title: "Tools",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum viverra etiam.",
  },
];

export const carouselData = [
  {
    id: "1",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. ",
  },
  {
    id: "2",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    title:
      " “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed orcisapien, malesuada sollicitudin mi vel, tristique eleifend metus.”",
  },
  {
    id: "4",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "5",
    title: "Lorem ipsum dolor sit amet adipiscing elit.",
  },
  {
    id: "6",
    title:
      "Lorem ipsum dolor sit amet, Sed orcisapien, malesuada sollicitudin mi vel, tristique eleifend metus..",
  },
];

export const accordionData = [
  {
    id: "1",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. ",
  },
  {
    id: "2",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. ",
  },
  {
    id: "3",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. ",
  },
  {
    id: "4",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. ",
  },
  {
    id: "5",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lorem hac a ultricies. Id ornare turpis vulputate enim sed magna sit. A id cursus dolor urna. Aliquam diam integer vitae eget. ",
  },
];
