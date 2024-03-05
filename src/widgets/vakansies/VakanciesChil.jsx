import React from "react";

function VakanciesChil({ el, setVakanciesOne }) {
  return (
    <div
      onClick={() => setVakanciesOne(el.title)}
      className="block__wrapper__categories__child flex justify-between items-center"
    >
      <div className="wrapper__categories_block flex flex-col">
        <h3>{el.title}</h3>
        <p>{el.price}</p>
      </div>
      <div>
        <svg
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
            d="M0 12C0 5.38321 5.38281 0 12 0C18.6172 0 24 5.38321 24 12C24 18.6168 18.6172 24 12 24C5.38281 24 0 18.6168 0 12ZM2.40039 12C2.40039 17.2932 6.70703 21.6 12 21.6C17.293 21.6 21.5996 17.2932 21.5996 12C21.5996 6.70679 17.293 2.39999 12 2.39999C6.70703 2.39999 2.40039 6.70679 2.40039 12ZM10.7998 10.8L10.7998 6L13.2002 6L13.2002 10.8L18 10.8L18 13.2L13.2002 13.2L13.2002 18L10.7998 18L10.7998 13.2L6 13.2L6 10.8L10.7998 10.8Z"
            fill="#2CB2BB"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default VakanciesChil;
