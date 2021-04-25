import React, { createContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [response, setResponse] = useState([]);
  // This feature could not be added, but its component is fully created
  const [country, setCountry] = useState("us");
  const [query, setQuery] = useState("");
  const changeCountry = (e) => setCountry(e);
  const changeQuery = (e) => {
    if (e) {
      e.preventDefault();
      setQuery(e.target[0].value);
    } else {
      setQuery("");
    }
  };
  const apiKey = process.env.REACT_APP_API_KEY;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getQuery = useCallback(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${query}&from=2021-04-22&sortBy=popularity&apiKey=${apiKey}`
      )
      .then((res) => setResponse(res.data.articles))
      .catch((err) => console.log(err));
  }, [apiKey, query]);

  const getTopHeadlines = (apiKey, country) => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
      )
      .then((res) => setResponse(res.data.articles))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (query === "") {
      getTopHeadlines(apiKey, country);
    } else {
      getQuery();
    }
  }, [query, apiKey, country, getQuery]);

  return (
    <NewsContext.Provider
      value={{ response, country, changeCountry, query, changeQuery, setQuery }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};
