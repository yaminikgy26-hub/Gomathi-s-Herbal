// 

import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./landing-page.css";

const CATEGORIES = [
  { no: "01", title: "Skin Care", desc: "Face washes, creams & serums with turmeric, aloe and sandalwood." },
  { no: "02", title: "Home Made Soaps", desc: "Hand-poured, cold-processed soaps in neem, rose and coffee." },
  { no: "03", title: "Body & Personal Care", desc: "Body butters, scrubs and oils for everyday nourishment." },
  { no: "04", title: "Hair Care", desc: "Herbal shampoos, hair oils and masks for strength & shine." },
  { no: "05", title: "Eye & Lip Care", desc: "Gentle balms and under-eye gels for delicate skin." },
  { no: "06", title: "Baby Care", desc: "Mild, tear-free formulas made for the softest skin." },
];

const PRODUCTS = [
  { batch: "026", cat: "Home Made Soaps", name: "Neem & Tulsi Bar", desc: "Cold-pressed neem oil soap for clear, calm skin.", price: 149 },
  { batch: "026", cat: "Skin Care", name: "Turmeric Glow Cream", desc: "Brightening cream with turmeric and sandalwood.", price: 329 },
  { batch: "025", cat: "Hair Care", name: "Hibiscus Hair Oil", desc: "Herbal oil blend for stronger, shinier hair.", price: 279 },
  { batch: "026", cat: "Baby Care", name: "Gentle Baby Wash", desc: "Tear-free, mild formula for delicate baby skin.", price: 199 },
  { batch: "024", cat: "Eye & Lip Care", name: "Rose Lip Balm", desc: "Nourishing balm with rose oil and shea butter.", price: 129 },
  { batch: "025", cat: "Body & Personal Care", name: "Sandalwood Body Butter", desc: "Rich body butter for deep, lasting hydration.", price: 349 },
];

const LandingPage = () => {
  const trackRef = useRef(null);

  const scrollProducts = (direction) => {
    if (trackRef.current) {
      const amount = 300;
      trackRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <div className="landing-page">
      <header className="lp-header">
        <div className="lp-nav-inner">
          <a href="#home" className="lp-logo">Gomathi's <span>Herbals</span></a>
          <nav className="lp-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#categories">Categories</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="lp-nav-actions">
            <Link to="/login" className="lp-btn lp-btn-ghost">Login</Link>
            <Link to="/register" className="lp-btn lp-btn-solid">Register</Link>
          </div>
        </div>
      </header>

      <section className="lp-hero" id="home">
        <div className="lp-wrap lp-hero-grid">
          <div>
            <div className="lp-eyebrow">Est. 2026 · Chennai, Tamil Nadu</div>
            <h1 className="lp-h1">Handmade<br /><em>with Nature</em></h1>
            <p className="lp-lede">
              Premium herbal soaps and skincare, formulated in small batches in Chennai — where purity meets
              performance, and every jar carries the wisdom of traditional herbal care.
            </p>
            <div className="lp-hero-ctas">
              <a href="#categories" className="lp-btn lp-btn-solid">Explore Categories</a>
              <a href="#about" className="lp-btn lp-btn-ghost">Read Our Story</a>
            </div>
          </div>
        </div>
      </section>

      <section className="lp-about" id="about">
        <div className="lp-wrap lp-about-grid">
          <div>
            <div className="lp-eyebrow">Our Story</div>
            <h2 className="lp-h2">Radiance begins<br />with nature.</h2>
            <p>
              Established in 2026 in the heart of Chennai, Tamil Nadu, Gomathi's Herbals was born from a vision to
              redefine the essence of beauty. We believe that true radiance begins with nature, which is why we
              specialize in crafting premium, handmade skincare products that marry purity with performance.
            </p>
            <p>
              As a premier manufacturer of over 60 varieties of organic soaps and cosmetics, we have set a new
              benchmark for safe, effective, and ethical beauty.
            </p>
          </div>
          <div className="lp-about-stats">
            <div className="lp-stat"><span className="lp-stamp">60+</span><div><strong>Organic Varieties</strong>Soaps & cosmetics</div></div>
            <div className="lp-stat"><span className="lp-stamp">2026</span><div><strong>Founded in Chennai</strong>Tamil Nadu roots</div></div>
            <div className="lp-stat"><span className="lp-stamp">100%</span><div><strong>Handmade</strong>Small batches</div></div>
          </div>
        </div>
      </section>

      <section className="lp-categories" id="categories">
        <div className="lp-wrap">
          <h2 className="lp-h2">Shop by category</h2>
          <div className="lp-cat-grid">
            {CATEGORIES.map((c) => (
              <div className="lp-cat-card" key={c.no}>
                <span className="lp-cat-no">No. {c.no}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-products" id="products">
        <div className="lp-wrap">
          <div className="lp-products-head">
            <h2 className="lp-h2">Featured products</h2>
            <div className="lp-carousel-controls">
              <button className="lp-carousel-btn" onClick={() => scrollProducts("left")} aria-label="Scroll products left">
                <ChevronLeft size={18} />
              </button>
              <button className="lp-carousel-btn" onClick={() => scrollProducts("right")} aria-label="Scroll products right">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="lp-prod-track" ref={trackRef}>
            {PRODUCTS.map((p) => (
              <div className="lp-prod-card" key={p.name}>
                <div className="lp-prod-media"><span className="lp-prod-badge">Batch {p.batch}</span></div>
                <div className="lp-prod-body">
                  <div className="lp-prod-cat">{p.cat}</div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="lp-prod-foot">
                    <span className="lp-price">₹{p.price}</span>
                    <button className="lp-add-btn">Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-contact" id="contact">
        <div className="lp-wrap lp-contact-grid">
          <div>
            <div className="lp-eyebrow">Get in Touch</div>
            <h2 className="lp-h2">We'd love to<br />hear from you.</h2>
            <p>Phone: <a href="tel:+917358677703">+91 73586 77703</a></p>
            <p>Email: <a href="mailto:hello@gomathisherbals.com">hello@gomathisherbals.com</a></p>
            <p>Chennai, Tamil Nadu, India</p>
          </div>
        </div>
      </section>

      <footer className="lp-footer">
        <div className="lp-wrap lp-footer-bottom">
          <span>© 2026 Gomathi's Herbals. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;