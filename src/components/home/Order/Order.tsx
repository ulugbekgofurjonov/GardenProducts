import './Order.css';

export default function Order() {
  return (
    <div className="order container">
      <h3>5% off on the first order</h3>
      <div className="item">
        <div className="left">
          <img src="./Images/HomePageIMG/orderbg.png" alt="" />
        </div>
        <div className="right">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Phone number" />
            <input type="email" placeholder="Email" />
            <button>Get a discount</button>
          </form>
        </div>
      </div>
    </div>
  );
}
