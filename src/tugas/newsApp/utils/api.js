import axios from "axios";

export const getNewsList = async () => {
  const news = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=id&apiKey=05163d63e0d14a79a11f4b30a8eecf29`
  );
  return news.data.articles;
};

export const searchNews = async (q) => {
  const search = await axios.get(
    `https://newsapi.org/v2/everything?q=${q}&apiKey=05163d63e0d14a79a11f4b30a8eecf29`
  );
  return search.data.articles ;
};
