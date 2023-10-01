import NextImage from "@/app/components/client/NextImage";
import axios from "axios";
import Head from "next/head";
import { FC } from "react";

interface PostProps {
  params: { id: string };
}

interface Post {
  id: number;
  title: string;
  body: string;
}

const getPost = async (id: string) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post: Post = res.data;

  return post;
};

const Post: FC<PostProps> = async ({ params: { id } }) => {
  const post = await getPost(id);

  <Head>
    <title>{`Blog Post - ${id}`}</title>
    <script src="https://use.fontawesome.com/03f8a0ebd4.js" async></script>
    <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      async
    ></script>
    <script
      async
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script>
  </Head>;

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col md:flex-row my-5 justify-center items-center ">
          <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col md:flex-row justify-center">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full lg:h-72  overflow-hidden">
                <NextImage title={post.title} />
              </div>
              <div className="md:w-2/3 m-4 ">
                <div className="flex text-gray-500 text-sm m-2">
                  <div className="m-1 font-bold">Vlog,</div>
                  <div className="m-1">31 March, 2023</div>
                </div>
                <div className="font-bold text-black text-xl m-2">
                  {post.title}{" "}
                </div>
                <div className="text-sm text-gray-500 mt-4 m-2">
                  {post.body}
                </div>
                <div className="flex cursor-pointer">
                  <div className="m-2">
                    {" "}
                    <img
                      src="https://source.unsplash.com/50x50/?man"
                      alt=""
                      className=" rounded-full"
                    />{" "}
                  </div>
                  <div className="grid m-1">
                    <div className="font-bold text-sm hover:text-gray-600 mt-2">
                      Jason Bourne
                    </div>
                    <div className=" text-sm hover:text-gray-600">
                      Student, Los Angeles
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
