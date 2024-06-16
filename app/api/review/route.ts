/** @format */

const review: any[] = [];
export async function GET(req: Request) {
  return Response.json(review);
}

// {
//     id: 0,
//     clientName: "Mustafash",
//     clientLocation: "Egypt",
//     clientSource: "Fiverr",
//     clientReview:
//       "It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.",
//   },
