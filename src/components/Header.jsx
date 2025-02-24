function Header({ photo, price }) {
  return (
    <div className="card--header">
      <img src={photo} alt="logo" />
      <h3 className="price">{price}</h3>
    </div>
  );
}

export default Header;
