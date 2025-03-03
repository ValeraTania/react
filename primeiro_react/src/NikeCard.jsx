import Header from "./components/header";
import CardContent from "./components/CardContent";
import CardCta from "./components/cardCta";
import nike19 from "./assets/nike19.png";
import "./nike.css";

function NikeCard() {
  return (
    <main className="container">
      <div className="card animation">
        <div className="card--content">
          <Header photo={"https://i.ibb.co/q7RKcZk/nike.png"} price={"120€"} />
          <CardContent
            title={"AIR STRUCTURE 1"}
            text={
              "From the Flymesh upper to the triple-density foam midsole, the Nike Air Zoom Structure 19 Men's Running Shoe offers plenty of support and the response you need for a smooth, stable ride that feels ultra fast."
            }
            backText={"AIR"}
            productPhoto={nike19}
          />
        </div>
        <CardCta />
      </div>
    </main>
  );
}

export default NikeCard;
