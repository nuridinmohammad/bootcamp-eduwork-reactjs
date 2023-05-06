import React, { useEffect, useState } from "react";
import gambar from "../img/gambar.jpeg";
import { getNewsList } from "../utils/api";

const list = ({ data }) => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    getNewsList().then((result) => {
      setNewsList(result);
    });
  }, []);

  return (
    <>
      {!data
        ? newsList.map((item, i) => {
            return (
              <div className="news-item" key={i}>
                <div className="header">
                  <h3>{item.title}</h3> -{" "}
                  <span>{item.publishedAt.slice(0, 10)}</span>
                </div>
                <div className="body">
                  <div className="image">
                    <img
                      style={{ height: "125px", width: "125px" }}
                      src={item.urlToImage || gambar}
                      alt="image-news"
                    />
                  </div>
                  <div className="link">
                    <a href={item.url} target="_blank">
                      More..
                    </a>{" "}
                    | <span>{item.author}</span>
                  </div>
                </div>
              </div>
            );
          })
        : data.map((item, i) => {
          return (
            <div className="news-item" key={i}>
              <div className="header">
                <h3>{item.title}</h3> -{" "}
                <span>{item.publishedAt.slice(0, 10)}</span>
              </div>
              <div className="body">
                <div className="image">
                  <img
                    style={{ height: "125px", width: "125px" }}
                    src={item.urlToImage || gambar}
                    alt="image-news"
                  />
                </div>
                <div className="link">
                  <a href={item.url} target="_blank">
                    More..
                  </a>{" "}
                  | <span>{item.author}</span>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default list;
