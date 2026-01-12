// app/products/page.tsx
import './products.css';

export default function ProductsPage() {
  return (
    <>
      
      <main className="products-page">
        <div className="container">
          <h1>All products</h1>

          {/* Products Grid */}
          <div className="products-grid">
            {/* Product 1 */}
            <div className="product-card">
              <div className="product-img">
                <img src="/Images/HomePageIMG/sale1.png" alt="Secateurs" />
                <span className="badge">-17%</span>
              </div>
              <h3>Secateurs</h3>
              <div className="price">
                <span className="current">$199</span>
                <span className="old">$240</span>
              </div>
            </div>

            {/* Product 2 */}
            <div className="product-card">
              <div className="product-img">
                <img src="/Images/HomePageIMG/sale2.png" alt="Collection" />
                <span className="badge">-26%</span>
              </div>
              <h3>Collection for berries (plastic)</h3>
              <div className="price">
                <span className="current">$26</span>
                <span className="old">$35</span>
              </div>
            </div>

            {/* Product 3 */}
            <div className="product-card">
              <div className="product-img">
                <img src="/Images/HomePageIMG/sale3.png" alt="Gloves" />
                <span className="badge">-36%</span>
              </div>
              <h3>Gloves (black)</h3>
              <div className="price">
                <span className="current">$9</span>
                <span className="old">$14</span>
              </div>
            </div>

            {/* Product 4 */}
            <div className="product-card">
              <div className="product-img">
                <img src="/Images/HomePageIMG/sale4.png" alt="Hacksaw" />
              </div>
              <h3>Sickle-shaped hacksaw</h3>
              <div className="price">
                <span className="current">$155</span>
              </div>
            </div>

            {/* Product 5 */}
            <div className="product-card">
              <div className="product-img">
                <img src="/Images/HomePageIMG/sale1.png" alt="Shovel" />
              </div>
              <h3>Bayonet shovel</h3>
              <div className="price">
                <span className="current">$180</span>
              </div>
            </div>

            {/* Product 6 */}
            <div className="product-card">
              <div className="product-img">
                <img src="/Images/HomePageIMG/sale2.png" alt="Pitchfork" />
              </div>
              <h3>Garden pitchfork</h3>
              <div className="price">
                <span className="current">$179</span>
              </div>
            </div>

            {/* Product 7 */}
            <div className="product-card">
              <div className="product-img">
                <img src="/Images/HomePageIMG/sale3.png" alt="Barbell" />
              </div>
              <h3>Barbell</h3>
              <div className="price">
                <span className="current">$12</span>
              </div>
            </div>

            {/* Product 8 */}
            <div className="product-card">
              <div className="product-img">
                <img src="/Images/HomePageIMG/sale4.png" alt="Thermometer" />
                <span className="badge new">-18%</span>
              </div>
              <h3>Souvenir thermometer</h3>
              <div className="price">
                <span className="current">$98</span>
                <span className="old">$120</span>
              </div>
            </div>

            {/* Product 9 */}
            <div className="product-card">
              <div className="product-img">
                <img src="/Images/HomePageIMG/sale1.png" alt="Bridge" />
                <span className="badge">-50%</span>
              </div>
              <h3>Decorative forged bridge</h3>
              <div className="price">
                <span className="current">$500</span>
                <span className="old">$1000</span>
              </div>
            </div>

            {/* Product 10 */}
            <div className="product-card">
              <div className="product-img">
                <img src="/Images/HomePageIMG/sale2.png" alt="Basket" />
                <span className="badge">-34%</span>
              </div>
              <h3>Flower basket</h3>
              <div className="price">
                <span className="current">$100</span>
                <span className="old">$150</span>
              </div>
            </div>

            {/* Product 11 */}
            <div className="product-card">
              <div className="product-img">
                <img src="/Images/HomePageIMG/sale3.png" alt="Lock" />
                <span className="badge">-25%</span>
              </div>
              <h3>Aquarium lock</h3>
              <div className="price">
                <span className="current">$150</span>
                <span className="old">$200</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}