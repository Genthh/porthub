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
  brandOverviewTextFirst?: string;
  brandOverviewTextSecond?: string;
  brandingList?: string[] | undefined;
}

const isBrowser = typeof window !== "undefined";

function formatPeriodTime(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const startMonth = start.toLocaleString('en-US', { month: 'short' });
  const startYear = start.getFullYear();
  const endMonth = end.toLocaleString('en-US', { month: 'short' });
  const endYear = end.getFullYear();

  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let duration = years > 0 
    ? months > 0 
      ? `${years} yr ${months} mos` 
      : `${years} yr`
    : `${months} mos`;

  return endDate
    ? `${startMonth} ${startYear} - ${endMonth} ${endYear} • ${duration}`
    : `${startMonth} ${startYear} - Present • ${duration}`;
}

const generateUUIDs = (): Project[] => {
  if (isBrowser) {
    const storedProjects = sessionStorage.getItem("projects");
    if (storedProjects) {
      return JSON.parse(storedProjects) as Project[];
    }

    const newProjects: Project[] = [
      {
        image: "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket//PRISTINE-BrandIdentity.jpg",
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
        brandOverviewTextFirst:
          "This project focused on crafting a unique and memorable brand identity tailored for the digital market. The process combined creative design elements and strategic thinking to deliver a visual identity that captures the essence of the brand while meeting the client’s objectives.",
        brandOverviewTextSecond:
          "The final design stands out for its clean and professional look, ensuring a consistent presence across various platforms.",
        brandingList: [
          "Branding and identity",
          "Printing materials",
          "Content strategy for social media",
        ],
      },
      {
        image: "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket//VANNIO-BrandIdentity.jpg",
        title: "VANNIO - Brand Identity",
        row: 2,
        width: "35%",
        height: "350px",
        position: "start",
        uuid: uuidv4(),
        imgBanner: "/img-detaisl.jpg",
        images: [
          "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket/newimages/VANNIO%20Brand%20Presentation.-01.jpg",
          "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket/newimages/VANNIO%20Brand%20Presentation.-02.jpg",
          "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket/newimages/VANNIO%20Brand%20Presentation.-03.jpg",
          "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket/newimages/VANNIO%20Brand%20Presentation.-04.jpg"
        ],
        description: "branding, ui/ux design",
        categoryLabel: ["Category", "Client", "Date", "Designer"],
        categoryList: [
          "Brand Development",
          "  VANNIO Jewelry ",
          "07 Dec 2023",
          "Lorik Zekaj",
        ],
        brandOverviewTextFirst:
          "This project focused on crafting a unique and memorable brand identity tailored for the digital market. The process combined creative design elements and strategic thinking to deliver a visual identity that captures the essence of the brand while meeting the client’s objectives.",
        brandOverviewTextSecond:
          "The final design stands out for its clean and professional look, ensuring a consistent presence across various platforms.",
      },
      {
        image: "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket//LIKAPharmacy-BrandIdentity.jpg",
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
        brandingList: [
          "Branding and identity",
          "Printing materials",
          "Content strategy for social media",
        ],
      },
      {
        image: "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket//Q10Oil-BrandIdentity.jpg",
        title: "Q10 Oil - Brand Identity",
        row: 3,
        width: "40%",
        height: "350px",
        position: "center",
        uuid: uuidv4(),
        imgBanner: "/img-detaisl.jpg",
        images: [
          "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket/newimages/Q10%20OIL%20BEHANCE%20FINAL-01.jpg",
          "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket/newimages/Q10%20OIL%20BEHANCE%20FINAL-02.jpg",
          "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket/newimages/Q10%20OIL%20BEHANCE%20FINAL-03.jpg",
          "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket/newimages/Q10%20OIL%20BEHANCE%20FINAL-04.jpg"
        ],
        description: "ui/ux design, Illustration photography,",
        categoryLabel: ["Category", "Client", "Date", "Designer"],
        categoryList: [
          "Brand Development",
          "  Q10 Oil ",
          "15 Nov 2019",
          "Lorik Zekaj",
        ],
        brandingList: [
          "Branding and identity",
          "Printing materials",
          "Content strategy for social media",
        ],
      },
      {
        image: "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket//SALTBistro-BrandIdentity.jpg",
        title: "Salt Bistro - Brand Identity",
        row: 4,
        width: "70%",
        height: "450px",
        position: "end",
        uuid: uuidv4(),
        imgBanner: "/img-detaisl.jpg",
        description: "branding, ui/ux design, motion, seo",

        images: [
          "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket/newimages/SALT%20BISTRO%20Behance-01.jpg",
          "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket/newimages/SALT%20BISTRO%20Behance-02.jpg",
          "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket/newimages/SALT%20BISTRO%20Behance-03.jpg",
          "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket/newimages/SALT%20BISTRO%20Behance-04.jpg"
        ],
        categoryLabel: ["Category", "Client", "Date", "Designer"],
        categoryList: [
          "Brand Development",
          "  Salt Bistro ",
          "04 Dec 2019",
          "Lorik Zekaj",
        ],
        brandingList: [
          "Branding and identity",
          "Printing materials",
          "Content strategy for social media",
        ],
      },
      {
        image: "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket//DOBROSHI-BrandIdentity.jpg",
        title: "DOBROSHI - Brand Identity",
        row: 5,
        width: "55%",
        height: "450px",
        position: "end",
        uuid: uuidv4(),
        imgBanner: "/img-detaisl.jpg",
        description: "branding, ui/ux design, motion, seo",

        images: [
          "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket/newimages/Dobroshi%20Gold%20Behance%20presentation-01.jpg",
          "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket/newimages/Dobroshi%20Gold%20Behance%20presentation-02.jpg",
          "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket/newimages/Dobroshi%20Gold%20Behance%20presentation-03.jpg",
          "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket/newimages/Dobroshi%20Gold%20Behance%20presentation-04.jpg"
        ],
        categoryLabel: ["Category", "Client", "Date", "Designer"],
        categoryList: [
          "Brand Development",
          "  DOBROSHI Gold Jewels ",
          "16 Sep 2020",
          "Lorik Zekaj",
        ],
        brandingList: [
          "Branding and identity",
          "Printing materials",
          "Content strategy for social media",
        ],
      },
      {
        image: "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket//OMEGA-BrandIdentity.jpg",
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
        brandingList: [
          "Branding and identity",
          "Printing materials",
          "Content strategy for social media",
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
    image: "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket//baseAgency.jpg",
    companyName: "Base Agency",
    position: "Senior Graphic Designer",
    periodTime: formatPeriodTime("2024-02-01")
  },
  {
    id: 2,
    image: "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket//thinkb.jpg",
    companyName: "Think B",
    position: "Senior Graphic Designer",
    periodTime: "Sep 2023 - Dec 2023 • 4 mos",
  },
  {
    id: 3,
    image: "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket//comodita.jpg",
    companyName: "Comodita Home",
    position: "Senior Graphic Designer",
    periodTime: "May 2022 - Sep 2023 • 1 yr 5 mos",
  },
  {
    id: 4,
    image: "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket//brandfluence.jpg",
    companyName: "Brandfluence",
    position: "Graphic Designer",
    periodTime: "Apr 2021 - May 2022 • 1 yr 2 mos",
  },
  {
    id: 5,
    image: "https://azkbfezpuhdewubmmwew.supabase.co/storage/v1/object/public/image-bucket//Dizarium.jpg",
    companyName: "Dizarium",
    position: "Social Media Designer",
    periodTime: "Jun 2020 - Mar 2021 • 10 mos",
  },
];
