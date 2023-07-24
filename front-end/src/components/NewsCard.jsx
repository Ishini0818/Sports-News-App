import React from "react";

function NewsCard({ newsTitle, newsDescription, imageURL, url }) {
  return (
    <div className="card m-4 news-card">
      {imageURL && (
        <img src={imageURL} className="card-img-top" alt={newsTitle} />
      )}
      <div className="card-body">
        <h5 className="card-title">{newsTitle}</h5>
        <p className="card-text">{newsDescription}</p>
        <a href={url} class="btn btn-dark">
          See more
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
