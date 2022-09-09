// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuid } from "uuid";

type Data = Array<{
  id: string;
  name: string;
  price: number;
}>;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    { id: uuid(), name: "pencil", price: 1.25 },
    { id: uuid(), name: "notebook", price: 5.05 },
    { id: uuid(), name: "eraser", price: 2.15 },
    { id: uuid(), name: "sharpener", price: 3.4 },
  ]);
}
