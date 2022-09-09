// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuid } from "uuid";

type Data = Array<{
  id: string;
  name: string;
  email: string;
}>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    { id: uuid(), name: "Harry Potter", email: "harry.potter@gmail.com" },
    {
      id: uuid(),
      name: "Hermione Granger",
      email: "hermione.granger@gmail.com",
    },
    { id: uuid(), name: "Ronald Wealsey", email: "ronald.weasley@gmail.com" },
  ]);
}
