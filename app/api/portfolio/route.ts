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
];
export async function GET(req: Request) {
  return Response.json(portfolio);
}


