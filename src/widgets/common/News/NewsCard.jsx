/* eslint-disable react/prop-types */

function NewsCard({ el, index }) {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration={index * 300}
      className="newCard"
    >
      <div>
        <h3>{el.title1}</h3>
        <p>{el.description1}</p>
      </div>
      <p>
        <span>{el.date}</span>
      </p>
    </div>
  );
}
//aziet finish add
export default NewsCard;
