import { v4 as uuidv4 } from "uuid";
export interface Project {
  image: string;
  title: string;
  row: number;
  width: string;
  height: string;
  uuid: string;
  position: "start" | "center" | "end";
  images?: string[];
}
const generateUUIDs = (): Project[] => {
  const storedProjects = localStorage.getItem("projects");
  if (storedProjects) {
    return JSON.parse(storedProjects) as Project[];
  }

  const newProjects: Project[] = [
    {
      image: "/img1.jpg",
      title: "Newz - Magazine Site",
      row: 1,
      width: "75%",
      height: "550px",
      position: "start",
      uuid: uuidv4(),
      images: [
        "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/services/img1.jpg",
        "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/services/img2.jpg",
        "https://uithemez.com/i/hubfolio_HTML/inner_pages/assets/imgs/portfolio/project/3.jpg",
      ],
    },
    {
      image: "/img-4.jpg",
      title: "LW Rebrand",
      row: 2,
      width: "35%",
      height: "350px",
      position: "start",
      uuid: uuidv4(),
    },
    {
      image: "/img-2.jpg",
      title: "Dallas Ecolodge",
      row: 2,
      width: "55%",
      height: "450px",
      position: "end",
      uuid: uuidv4(),
    },
    {
      image: "/img-5.jpg",
      title: "LW Rebrand",
      row: 3,
      width: "40%",
      height: "350px",
      position: "center",
      uuid: uuidv4(),
    },
    {
      image: "/img-6.jpg",
      title: "Newz - Magazine Site",
      row: 4,
      width: "70%",
      height: "450px",
      position: "end",
      uuid: uuidv4(),
    },
    {
      image: "/img-2.jpg",
      title: "Dallas Ecolodge",
      row: 5,
      width: "55%",
      height: "450px",
      position: "end",
      uuid: uuidv4(),
    },
    {
      image: "/img-4.jpg",
      title: "LW Rebrand",
      row: 5,
      width: "35%",
      height: "350px",
      position: "center",
      uuid: uuidv4(),
    },
  ];
  localStorage.setItem("projects", JSON.stringify(newProjects));
  return newProjects;
};
export const projects: Project[] = generateUUIDs();
