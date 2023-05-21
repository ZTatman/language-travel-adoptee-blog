import { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Pass in token here and use authentication in the future
  res.setPreviewData({});
  res.writeHead(307, { Location: "/blog" });
  res.end();
}
