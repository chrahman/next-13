import axios from "axios";
import { FC } from "react";
import BlogPostCard from "@/app/components/server/BlogPostCard";

interface PostsByUserProps {
  params: { id: string, user : string };
}

interface PostsByUser {
  id: number;
  title: string;
  body: string;
}

const getPosts = async (id: string) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`);
  const posts: PostsByUser[] = res.data;

  return posts;
};

const PostsByUser: FC<PostsByUserProps> = async ({params: {user, id}}) => {
  const posts = await getPosts(id);

  return (
    <section className="text-gray-600 body-font">
      <div className="container py-10 mx-auto">
        <h1 className="text-4xl font-bold mb-10 capitalize">
          Posts by User: {user.replace(/-/g, " ").replace(/%20/g, " ")}
        </h1>
        <div className="flex flex-wrap -m-4">
          {posts?.map((post) => (
            <BlogPostCard post={post} key={post.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsByUser;
