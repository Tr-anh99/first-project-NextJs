import Image from "next/image";
import Layout from "@/components/Layout";
import Header from "../components/Header";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Container fixed>
        <h1>Netflix Clone</h1>
      </Container>
    </Layout>
  );
}
