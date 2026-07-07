import React, { useState } from 'react';
import './landing-page.css';

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="landing-page">
      {/* Header */}
      <header>
        <div className="nav-inner">
          <a href="#home" className="logo">Gomathi's <span>Herbals</span></a>
          <nav className="main-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#categories">Categories</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="wrap">
          <h1>Handmade<br /><em>with Nature</em></h1>
        </div>
      </section>

      {/* About Section - Restored */}
      <section className="about" id="about">
        <div className="wrap about-grid">
          <div>
            <div className="eyebrow">Our Story</div>
            <h2>Radiance begins<br />with nature.</h2>
            <p>Established in 2026 in the heart of Chennai, Gomathi's Herbals was born from a vision to redefine the essence of beauty. We believe that true radiance begins with nature, which is why we specialize in crafting premium, handmade skincare products that marry purity with performance.</p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stamp"><span className="stamp-text">60+</span></div>
              <div className="stat-label"><strong>Organic Varieties</strong>Soaps & cosmetics, formulated in-house</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories" id="categories">
        <div className="wrap">
          <h2>Shop by category</h2>
          <div className="cat-grid">
            <div className="cat-card"><h3>Skin Care</h3></div>
            <div className="cat-card"><h3>Home Made Soaps</h3></div>
            <div className="cat-card"><h3>Hair Care</h3></div>
            <div className="cat-card"><h3>Body & Personal Care</h3></div>
            <div className="cat-card"><h3>Eye & Lip Care</h3></div>
            <div className="cat-card"><h3>Baby Care</h3></div>
          </div>
        </div>
      </section>

      {/* Auth / Login Section - Functional Tabs */}
      <section className="auth" id="auth">
        <div className="wrap auth-wrap">
          <div className="auth-card">
            <div className="auth-tabs">
              <div className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`} onClick={() => setActiveTab('login')}>Login</div>
              <div className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`} onClick={() => setActiveTab('register')}>Register</div>
            </div>
            
            <div className={`auth-panel ${activeTab === 'login' ? 'active' : ''}`}>
              <form>
                <div className="form-field"><label>Email</label><input type="email" placeholder="you@example.com" /></div>
                <div className="form-field"><label>Password</label><input type="password" placeholder="••••••••" /></div>
                <button className="auth-submit" type="submit">Login</button>
              </form>
            </div>

            <div className={`auth-panel ${activeTab === 'register' ? 'active' : ''}`}>
              <form>
                <div className="form-field"><label>Full Name</label><input type="text" placeholder="Your name" /></div>
                <div className="form-field"><label>Email</label><input type="email" placeholder="you@example.com" /></div>
                <div className="form-field"><label>Password</label><input type="password" placeholder="Create a password" /></div>
                <button className="auth-submit" type="submit">Register</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap"><p>© 2026 Gomathi's Herbals. All rights reserved.</p></div>
      </footer>
    </div>
  );
};

export default LandingPage;