import React from "react";

export default function Loader() {
  return (
    <div className="loader-bg">
      <div className="m-2 spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="m-2 spinner-grow text-light" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div className="m-2 spinner-grow text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
