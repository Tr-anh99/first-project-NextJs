import Image from "next/image";
import Layout from "@/components/Layout";
import Header from "../../components/Header";
import Container from "@mui/material/Container";
import FeaturedPost from "@/components/FeaturedPost";

//
import { getPosts } from "../../lib/post";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Postprops {
  posts: Post[];
}

export default function Posts(props: Postprops) {
  const { posts } = props;

  return (
    <Layout>
      <Header />
      <Container fixed className="mt-20">
        {posts.map((post: Post) => {
          return <FeaturedPost key={post.id} post={post} />;
        })}
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getPosts(10);
  return {
    props: {
      posts,
    },
  };
};
