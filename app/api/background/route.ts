/** @format */

const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Yahia Fares University",
        degree: "BS, Computer System Engineering",
        detail:
          "Bachelor's Degree in Computer System Engineering from Yahia Fares University.",
        year: "2021-2024",
      },
    ],
  },
  {
    expCards: [],
  },
];

export async function GET(req: Request) {
  return Response.json(background);
}
