import type { NextApiRequest, NextApiResponse } from "next";
import { getPostBySlug } from "../../lib/microcms";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { secret, slug, draftKey } = req.query;

  if (!process.env.MICROCMS_PREVIEW_SECRET || secret !== process.env.MICROCMS_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }
  if (typeof slug !== "string" || typeof draftKey !== "string") {
    return res.status(400).json({ message: "slug and draftKey are required" });
  }

  try {
    await getPostBySlug(slug, draftKey);
  } catch {
    return res.status(404).json({ message: "Post not found" });
  }

  res.setPreviewData({ draftKey });
  res.writeHead(307, { Location: `/posts/${slug}` });
  res.end();
}
