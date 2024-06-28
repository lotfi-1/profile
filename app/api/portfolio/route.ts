/** @format */
const portfolio = [
  {
    id: 0,
    projectName: "Tabibi",
    url: "https://github.com/lotfi-1/Tabibi",
    image: "projects/erp.png",
    projectDetail:
      "Developed 'Tabibi', a web and mobile app that streamlines booking medical appointments and managing patient follow-ups in clinics and medical offices. Key features include map integration for finding nearby clinics, doctor availability checks, and efficient schedule management tools for healthcare providers. This enhances patient experience and organizational efficiency in healthcare settings.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "nextJs",
      },
      {
        tech: "PostgreSql",
      },
      {
        tech: "ExpressJs",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 1,
    projectName: "E-commerce-template",
    url: "https://github.com/lotfi-1//E-commerce-template",
    image: "projects/desktop.png",
    projectDetail: "Example of an E-commerce website",
    technologiesUsed: [
      {
        tech: "JS",
      },
      {
        tech: "CSS",
      },
    ],
  },
  {
    id: 3,
    projectName: "Launch-countdown-timer",
    url: "https://github.com/lotfi-1/Tabibi",
    image: "projects/timer.png",
    projectDetail: "",
    technologiesUsed: [
      {
        tech: "JS",
      },
      {
        tech: "CSS",
      },
    ],
  },
  {
    id: 4,
    projectName: "Interactive Card Details",
    url: "https://github.com/lotfi-1/card-details",
    image: "projects/card-details.png",
    projectDetail: "a responsive website for checking card details information",
    technologiesUsed: [
      {
        tech: "JS",
      },
      {
        tech: "CSS",
      },
    ],
  },
];
export async function GET(req: Request) {
  return Response.json(portfolio);
}
