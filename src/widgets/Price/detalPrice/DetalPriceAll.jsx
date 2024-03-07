import React, { useState } from "react";

function DetailPriceAll({ el }) {
  const [thisClass, setThisClass] = useState("");
  return (
    <>
      <div
        onClick={() => setThisClass("-block")}
        className="price__mini__block-left-block flex items-center"
      >
        <h2>{el && el.title}</h2>
        <svg
          className={thisClass == "-block" ? "hidden" : ""}
          width="24.000000"
          height="24.000000"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Vector"
            d="M0 12C0 5.38321 5.38281 0 12 0C18.6172 0 24 5.38321 24 12C24 18.6168 18.6172 24 12 24C5.38281 24 0 18.6168 0 12ZM2.40039 12C2.40039 17.2932 6.70703 21.6 12 21.6C17.293 21.6 21.5996 17.2932 21.5996 12C21.5996 6.70679 17.293 2.39999 12 2.39999C6.70703 2.39999 2.40039 6.70679 2.40039 12ZM10.8008 10.8L10.8008 6L13.1992 6L13.1992 10.8L18 10.8L18 13.2L13.1992 13.2L13.1992 18L10.8008 18L10.8008 13.2L6 13.2L6 10.8L10.8008 10.8Z"
            fill="#2CB2BB"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
        </svg>
        <svg
          onClick={(e) => (e.stopPropagation(), setThisClass(""))}
          className={thisClass == "-block" ? "" : "hidden"}
          width="24.000000"
          height="24.000000"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Vector"
            d="M0 12C0 5.38318 5.38281 0 12 0C18.6172 0 24 5.38318 24 12C24 18.6168 18.6172 24 12 24C5.38281 24 0 18.6168 0 12ZM2.40039 12C2.40039 17.2932 6.70703 21.6 12 21.6C17.293 21.6 21.5996 17.2932 21.5996 12C21.5996 6.70679 17.293 2.40002 12 2.40002C6.70703 2.40002 2.40039 6.70679 2.40039 12ZM11.5 10.8L18 10.8L18 13.2L6 13.2L6 10.8L11.5 10.8Z"
            fill="#2CB2BB"
            fill-opacity="1.000000"
            fill-rule="evenodd"
          />
        </svg>
      </div>
      <div className={`price__mini__block-left-block-none` + thisClass}>
        <p>{el && el.info}</p>
      </div>
    </>
  );
}

export default DetailPriceAll;
