function CardContent({ title, text, backText, productPhoto }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{text}</p>
      <span className="back_text">{backText}</span>
      <img src={productPhoto} alt="nike" className="shoe" />
    </>
  );
}

export default CardContent;
