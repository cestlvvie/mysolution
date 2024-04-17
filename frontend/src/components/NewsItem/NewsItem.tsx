import imageNotAvailable from "../../assets/images/Image_not_available.png";
import { Card, CardContent, CardHeader, CardMedia, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface IProps {
  id: string;
  title: string;
  time: string;
  image?: string;
}
const NewsItem = ({ id, title, image, time }: IProps) => {
  const navigate = useNavigate();
  let cardImage = imageNotAvailable;

  if (image) {
    cardImage = "https://tengrinews.kz" + image;
  }

  return (
    <Grid item xs={12} sm={6} md={6} lg={4} onClick={() => navigate(`/${id}`)}>
    <Card sx={{ minWidth: 275, boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
        <CardMedia
          image={cardImage}
          title={title}
          sx={{ height: 200, paddingTop: "56.25%" }}
        />
        <CardHeader title={title} />
        <CardContent>{time}</CardContent>
      </Card>
    </Grid>
  );
};


export default NewsItem;
