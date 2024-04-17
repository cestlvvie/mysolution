import { useEffect, useState } from "react";
import { INewsBody } from "../../interfaces/INews.ts";
import axiosApi from "../../axiosApi.ts";
import { useParams } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

const baseUrl = "https://tengrinews.kz";
const SingleNews = () => {
  const { id } = useParams();
  const [currentNews, setCurrentNews] = useState<INewsBody | null>(null);
  const [hasError, setHasError] = useState(false);

  const getNews = async () => {
    try {
      const response = await axiosApi.get<INewsBody>(`/${id}`);
      setCurrentNews(response.data);
    } catch (e) {
      setHasError(true);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  if (hasError) return <h3>Ресурс временно недоступен</h3>;
  return (
    <>
      <span>{currentNews?.time}</span>
      <Typography variant="h4" gutterBottom>
        {currentNews?.title}
      </Typography>
      {currentNews?.author.ava && currentNews.author.name ? (
        <Stack direction="row" spacing={2} alignItems="center" marginY={2} sx={{ mx: 5 }}>
          <img
            src={baseUrl + currentNews.author.ava}
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              overflow: "hidden",
            }}
          />
          <p>{currentNews.author.name}</p>
        </Stack>
      ) : null}
      <img src={baseUrl + currentNews?.image} />
      <h4>{currentNews?.description}</h4>
      <p>{currentNews?.content}</p>
    </>
  );
};

export default SingleNews;
