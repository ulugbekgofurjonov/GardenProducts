import Link from "next/link";
import "./Categories.css";
export default function Categories() {
  return (
    <div className="categories container">
      <div className="top">
        <h2>Categories</h2>
        <Link className="link" href="/categories">All categories</Link>
      </div>
      <div className="wrapper">
        <div className="box">
          <img src="./Images/HomePageIMG/categories1.png" alt="" />
          <h5>Fertilizer</h5>
        </div>
        <div className="box">
          <img src="./Images/HomePageIMG/categories2.png" alt="" />
          <h5>Protective products and septic tanks</h5>
        </div>
        <div className="box">
          <img src="./Images/HomePageIMG/categories3.png" alt="" />
          <h5>Planting material </h5>
        </div>
        <div className="box">
          <img src="./Images/HomePageIMG/categories4.png" alt="" />
          <h5>Tools and equipment</h5>
        </div>
      </div>
    </div>
  );
}
