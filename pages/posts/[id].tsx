import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { getPostById, getPostIds } from "@/lib/post";
import Container from "@mui/material/Container";
import * as React from "react";
import { Post } from "./index";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";

export interface PostIdProps {
  post: Post;
}

export default function PostId(props: PostIdProps) {
  const { post } = props;
  const router = useRouter();

  console.log(router.isFallback);
  if (router.isFallback) {
    return (
      <Container
        fixed
        sx={{ height: "100vh" }}
        className="flex flex-col justify-center items-center"
      >
        <CircularProgress color="secondary" />
        <Typography variant="h4">...Loading</Typography>
      </Container>
    );
  }

  return (
    <Layout>
      <Header />
      <Container fixed className="mt-20">
        <Grid item xs={12} md={6} className="mt-2">
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.body}
              </Typography>
              <Link href="/posts">
                <Button color="secondary" variant="outlined">
                  Back end v3
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const paths = await getPostIds(5);
  return {
    paths,
    fallback: true, // if path is not returned by getStaticPaths, navigation to 404 page
  };
};

interface Props {
  params: {
    id: string;
  };
}

export const getStaticProps = async (props: Props) => {
  const { params } = props;

  const post = await getPostById(params.id);

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};
