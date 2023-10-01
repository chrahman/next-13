import axios from "axios";
import { FC } from "react";
import BlogPostCard from "@/app/components/server/BlogPostCard";

interface PostProps {
  params: { id: string };
}

interface Posts {
  id: number;
  title: string;
  body: string;
}

const getPosts = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
  const posts: Posts[] = res.data;

  return posts;
};

const Posts: FC<PostProps> = async () => {
  const posts = await getPosts();

  return (
    <section className="text-gray-600 body-font">
      <div className="container py-10 mx-auto">
        <h1 className="text-4xl font-bold mb-10">Latest Posts</h1>
        {/* <Suspense fallback={<Loading/>}> */}
          <div className="flex flex-wrap -m-4">
            {posts?.map((post) => (
              <BlogPostCard post={post} key={post.id}/>
            ))}
          </div>
        {/* </Suspense> */}
      </div>
    </section>
  );
};

export default Posts;
