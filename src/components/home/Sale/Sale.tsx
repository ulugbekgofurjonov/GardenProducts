import Link from "next/link";
import "./Sale.css";

export default function Sale() {
  return (
    <div className="sale container">
      <div className="top">
        <h2>Sale</h2>
        <Link className="link" href="/products">
          All sales
        </Link>
      </div>
      <div className="wrapper">
        <div className="box">
          <div className="img">
            <img src="./Images/HomePageIMG/sale1.png" alt="Decorative bridge" />
            <span className="discount-badge">-50%</span>
          </div>
          <h5>Decorative forged bridge</h5>
          <h3>
            $500 <span>$1000</span>
          </h3>
        </div>
        <div className="box">
          <div className="img">
            <img src="./Images/HomePageIMG/sale2.png" alt="Flower basket" />
            <span className="discount-badge">-33%</span>
          </div>
          <h5>Flower basket</h5>
          <h3>
            $100 <span>$150</span>
          </h3>
        </div>
        <div className="box">
          <div className="img">
            <img src="./Images/HomePageIMG/sale3.png" alt="Aquarium lock" />
            <span className="discount-badge">-25%</span>
          </div>
          <h5>Aquarium lock</h5>
          <h3>
            $150 <span>$200</span>
          </h3>
        </div>
        <div className="box">
          <div className="img">
            <img src="./Images/HomePageIMG/sale4.png" alt="Secateurs" />
            <span className="discount-badge">-17%</span>
          </div>
          <h5>Secateurs</h5>
          <h3>
            $199 <span>$240</span>
          </h3>
        </div>
      </div>
    </div>
  );
}