import { ChangeEvent, useEffect, useState } from "react";
import { INews } from "../../interfaces/INews.ts";
import axiosApi from "../../axiosApi.ts";
import NewsPagination from "../../components/NewsPagination/NewsPagination.tsx";
import { Grid, SelectChangeEvent } from "@mui/material";
import NewsItem from "../../components/NewsItem/NewsItem.tsx";

interface IPagination {
  page: number;
  pageSize: number;
  totalPages: number;
}

interface INewsResponse {
  news: INews[];
  totalPages: number;
}
const Main = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    pageSize: 10,
    totalPages: 1,
  });

  const getNews = async (page: number, pageSize: number) => {
    const response = await axiosApi.get<INewsResponse>(
      `/?page=${page}&pageSize=${pageSize}`,
    );
    setNews(response.data.news);
    setPagination((prevState) => ({
      ...prevState,
      totalPages: response.data.totalPages,
    }));
  };

  useEffect(() => {
    getNews(pagination.page, pagination.pageSize);
  }, [pagination.page, pagination.pageSize]);

  const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
    console.log(event);
    setPagination((prevState) => ({
      ...prevState,
      page: page,
    }));
  };
  const handleChangeRowsPerPage = (event: SelectChangeEvent) => {
    setPagination((prevState) => ({
      ...prevState,
      pageSize: parseInt(event.target.value),
      page: 1,
    }));
  };

  return (
    <>
      <NewsPagination
        totalPages={pagination.totalPages}
        count={pagination.pageSize}
        page={pagination.page}
        countChangeHandler={handleChangeRowsPerPage}
        pageChangeHandler={handleChangePage}
      />
      <Grid container spacing={3}>
        {news.map((n) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={n.id}>
            <NewsItem
              id={n.id}
              title={n.title}
              time={n.time}
              image={n.image}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Main;
