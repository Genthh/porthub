import { v4 as uuidv4 } from "uuid";

export interface Project {
  image: string;
  title: string;
  row?: number;
  width?: string;
  height?: string;
  uuid: string;
  position?: "start" | "center" | "end";
  images?: string[];
  imgBanner?: string;
  description?: string;
  categoryLabel?: string[]; // Optional label for categories
  categoryList?: string[];
}

const isBrowser = typeof window !== "undefined";

const generateUUIDs = (): Project[] => {
  if (isBrowser) {
    const storedProjects = sessionStorage.getItem("projects");
    if (storedProjects) {
      return JSON.parse(storedProjects) as Project[];
    }

    const newProjects: Project[] = [
      {
        image: "/images/PRISTINE-BrandIdentity.jpg",
        title: "PRISTINE - Brand Identity",
        row: 1,
        width: "75%",
        height: "550px",
        position: "start",
        uuid: uuidv4(),
        imgBanner: "/img-detaisl.jpg",
        images: [
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/services/img1.jpg",
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/services/img2.jpg",
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/portfolio/project/3.jpg",
        ],
        description: "branding, ui/ux design",
        categoryLabel: ["Category", "Client", "Date", "Designer"],
        categoryList: [
          "Brand Development",
          "  Pristine  ",
          "10 Oct 2024",
          "Lorik Zekaj",
        ],
      },
      {
        image: "/images/VANNIO-BrandIdentity.jpg",
        title: "VANNIO - Brand Identity",
        row: 2,
        width: "35%",
        height: "350px",
        position: "start",
        uuid: uuidv4(),
        imgBanner: "/img-detaisl.jpg",
        images: [
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/services/img1.jpg",
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/services/img2.jpg",
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/portfolio/project/3.jpg",
        ],
        description: "branding, ui/ux design",
        categoryLabel: ["Category", "Client", "Date", "Designer"],
        categoryList: [
          "Brand Development",
          "  VANNIO Jewelry ",
          "07 Dec 2023",
          "Lorik Zekaj",
        ],
      },
      {
        image: "/images/LIKAPharmacy-BrandIdentity.jpg",
        title: "LIKA Pharmacy - Brand Identity",
        row: 2,
        width: "55%",
        height: "450px",
        position: "end",
        uuid: uuidv4(),
        imgBanner: "/img-detaisl.jpg",
        images: [
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/services/img1.jpg",
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/services/img2.jpg",
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/portfolio/project/3.jpg",
        ],
        description: "branding, ui/ux design, motion, seo",
        categoryLabel: ["Category", "Client", "Date", "Designer"],
        categoryList: [
          "Brand Development",
          "  LIKA Pharmacy ",
          "12 Aug 2022",
          "Lorik Zekaj",
        ],
      },
      {
        image: "/images/Q10Oil-BrandIdentity.jpg",
        title: "Q10 Oil - Brand Identity",
        row: 3,
        width: "40%",
        height: "350px",
        position: "center",
        uuid: uuidv4(),
        imgBanner: "/img-detaisl.jpg",
        images: [
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/services/img1.jpg",
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/services/img2.jpg",
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/portfolio/project/3.jpg",
        ],
        description: "ui/ux design, Illustration photography,",
        categoryLabel: ["Category", "Client", "Date", "Designer"],
        categoryList: [
          "Brand Development",
          "  Q10 Oil ",
          "15 Nov 2019",
          "Lorik Zekaj",
        ],
      },
      {
        image: "/images/SALTBistro-BrandIdentity.jpg",
        title: "Salt Bistro - Brand Identity",
        row: 4,
        width: "70%",
        height: "450px",
        position: "end",
        uuid: uuidv4(),
        imgBanner: "/img-detaisl.jpg",
        description: "branding, ui/ux design, motion, seo",

        images: [
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/services/img1.jpg",
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/services/img2.jpg",
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/portfolio/project/3.jpg",
        ],
        categoryLabel: ["Category", "Client", "Date", "Designer"],
        categoryList: [
          "Brand Development",
          "  Salt Bistro ",
          "04 Dec 2019",
          "Lorik Zekaj",
        ],
      },
      {
        image: "/images/DOBROSHI-BrandIdentity.jpg",
        title: "DOBROSHI - Brand Identity",
        row: 5,
        width: "55%",
        height: "450px",
        position: "end",
        uuid: uuidv4(),
        imgBanner: "/img-detaisl.jpg",
        description: "branding, ui/ux design, motion, seo",

        images: [
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/services/img1.jpg",
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/services/img2.jpg",
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/portfolio/project/3.jpg",
        ],
        categoryLabel: ["Category", "Client", "Date", "Designer"],
        categoryList: [
          "Brand Development",
          "  DOBROSHI Gold Jewels ",
          "16 Sep 2020",
          "Lorik Zekaj",
        ],
      },
      {
        image: "/images/OMEGA-BrandIdentity.jpg",
        title: "OMEGA - Brand Identity",
        row: 5,
        width: "35%",
        height: "350px",
        position: "center",
        uuid: uuidv4(),
        imgBanner: "/img-detaisl.jpg",
        description: "branding, ui/ux design, motion, seo",

        images: [
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/services/img1.jpg",
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/services/img2.jpg",
          "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/portfolio/project/3.jpg",
        ],
        categoryLabel: ["Category", "Client", "Date", "Designer"],
        categoryList: [
          "Brand Development",
          "  OMEGA Laboratories ",
          "26 Apr 2022",
          "Lorik Zekaj",
        ],
      },
    ];
    sessionStorage.setItem("projects", JSON.stringify(newProjects));
    return newProjects;
  }

  // Default return for server-side
  return [];
};

export const projects: Project[] = generateUUIDs();

export const experience = [
  {
    id: 1,
    image: "/images/baseAgency.jpg",
    companyName: "Base Agency",
    position: "Senior Graphic Designer",
    periodTime: "Feb 2024 - Present • 10 mos",
  },
  {
    id: 2,
    image: "/images/thinkb.jpg",
    companyName: "Think B",
    position: "Senior Graphic Designer",
    periodTime: "Sep 2023 - Dec 2023 • 4 mos",
  },
  {
    id: 3,
    image: "/images/comodita.jpg",
    companyName: "Comodita Home",
    position: "Senior Graphic Designer",
    periodTime: "May 2022 - Sep 2023 • 1 yr 5 mos",
  },
  {
    id: 4,
    image: "/images/brandfluence.jpg",
    companyName: "Brandfluence",
    position: "Graphic Designer",
    periodTime: "Apr 2021 - May 2022 • 1 yr 2 mos",
  },
  {
    id: 5,
    image: "/images/Dizarium.jpg",
    companyName: "Dizarium",
    position: "Social Media Designer",
    periodTime: "Jun 2020 - Mar 2021 • 10 mos",
  },
];
