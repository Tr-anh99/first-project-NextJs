import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";

export interface FeaturedPostProps {
  post: {
    id:number,
    body: string,
    title: string
  };
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <Grid item xs={12} md={6} className="mt-2">
      <CardActionArea component="a" href={`/posts/${post.id}`}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.id} -- {post.title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.body}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default FeaturedPost;
