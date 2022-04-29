import { Link, Outlet, useTransition } from "@remix-run/react";

export default function PostAdminPage({ posts }: { posts: Array<object> }) {
  const transition = useTransition();
  if (transition.submission?.formData) {
    posts.push(Object.fromEntries(transition.submission.formData));
    console.log("-> optimistic posts", posts);
  }

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">Blog Admin</h1>
      <div className="grid grid-cols-4 gap-6">
        <nav className="col-span-4 md:col-span-1">
          <ul>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link to={post.slug} className="text-blue-600 underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="col-span-4 md:col-span-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
