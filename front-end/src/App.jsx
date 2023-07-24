import { useEffect, useState } from "react";

import "./styles/index.scss";
import { getNews } from "./utils/api.js";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import Loader from "./components/Loader";

function App() {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [Submit, setSubmit] = useState("sports");
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const res = await getNews(Submit);
      setIsLoading(false);
      if (res.error) {
        setError(res.data);
      } else {
        setNewsList(res.data);
      }
    }
    getData();
  }, [Submit]);

  return (
    <>
      {IsLoading && <Loader></Loader>}
      <Navbar></Navbar>

      <div className="m-4"></div>
      <div class="h4 pb-2 mb-4 border-bottom border-light"></div>

      {error && <div className="alert alert-danger m-4">{error}</div>}

      <div className="div-center">
        {newsList &&
          newsList.map((element) => (
            <NewsCard
              newsTitle={element.title}
              newsDescription={element.description}
              imageURL={element.urlToImage}
              url={element.url}
            ></NewsCard>
          ))}
      </div>
    </>
  );
}

export default App;
