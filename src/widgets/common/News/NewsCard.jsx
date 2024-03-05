/* eslint-disable react/prop-types */

function NewsCard({ el }) {
  return (
    <div className="newCard">
      <h3>{el.title}</h3>
      <p>{el.info}</p>
      <p>
        <span>{el.date}</span>
      </p>
    </div>
  );
}

export default NewsCard;
