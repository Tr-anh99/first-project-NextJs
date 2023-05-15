import { Post } from "@/pages/posts";
import axios from "axios";
import { log } from "console";

export const getPosts = async (limit:number) => {
  try {
    const respone = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    return respone.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostIds = async (limit:number) => {
  const posts = await getPosts(limit);
  return posts.map((post:Post) => ({
    params: {
      id: `${post.id}`,
    },
  }));
};

export const getPostById = async (id:string) => {
    try {
        const reponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return reponse.data
    } catch (error) {
        console.log(error);
        
    }
}