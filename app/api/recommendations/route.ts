/** @format */

const recommendationCard: any[] = [];
export async function GET(req: Request) {
  return Response.json(recommendationCard);
}

// {
//   id: 0,
//   name: 'Shahmir Minhas',
//   image: "images/shahmir.jfif",
//   designation: 'React JS | NEXT JS | Node | GraphQL',
//   view: "Hey everyone! I wanted to take a moment to recommend Osama Javaid for any React.js opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of React.js and Next.js concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Osama is a reliable and dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟",
//   linkednURL: "https://www.linkedin.com/in/shahmir-minhas/"
// },
