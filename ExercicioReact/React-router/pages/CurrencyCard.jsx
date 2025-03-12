export default function CurrencyCard({ children }) {
  return (
    <div className="currency-card">
      <img className="coin" src="/coin.png" alt="currency-img" />
      <span>{children}</span>
      </div>
  );
}
