export default function SmallCard({flag, name}) {
  return (
    <div
      className="card"
    //   style={{
    //     background: isLight ? "#fff" : "#1e1e1e",
    //     color: isLight ? "#000" : "#fff",
    //   }}
    >
      <img src={flag} alt={name} className="flag" />
      <h2>{name}</h2>
    </div>
  );
}
