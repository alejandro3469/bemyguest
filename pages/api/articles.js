export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: " When are the World Cup 2022 semi-finals? (Dates and times)",
      image: "jannik-skorna-mY2ZHBU6GRk-unsplash.jpg",
      body: "Date: between Tuesday 13th December 2022 and Wednesday 14th December 2022",
    },
  ]);
}
