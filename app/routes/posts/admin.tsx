import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getPosts } from "~/models/post.server";
import PostAdminPage from "~/components/PostAdminPage";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader: LoaderFunction = async () => {
  return json({ posts: await getPosts() });
};

export default function PostAdminRoute() {
  const { posts } = useLoaderData() as LoaderData;
  return <PostAdminPage posts={posts} />;
}
