import MenuTabs from "./MenuTabs";

const featuredItems = [
  {
    name: "Pad-Thai",
    detail: "A crowd-favorite noodle plate with bright sauce, wok heat, and fresh crunch.",
    badge: "Best seller",
    style: "feature-noodles",
  },
  {
    name: "Thai Spring Rolls",
    detail: "Crisp, quick, and easy to share while the main dishes hit the wok.",
    badge: "Starter",
    style: "feature-rolls",
  },
  {
    name: "Green Curry",
    detail: "Creamy curry, herbs, and vegetables with the comfort-food kick people come back for.",
    badge: "Curry",
    style: "feature-curry",
  },
];

const mealSizes = [
  {
    name: "Bowl",
    detail: "One side with one entree.",
    scale: "size-bowl",
  },
  {
    name: "Plate",
    detail: "One side with two entrees.",
    scale: "size-plate",
  },
  {
    name: "Family Tray",
    detail: "Larger portions made to share.",
    scale: "size-tray",
  },
];

const orderUrl = "https://www.toasttab.com/local";
const logoUrl = "/assets/logo.png";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <nav className="nav-shell">
          <a className="brand" href="#" aria-label="Newnan Chili Thai Express home">
            <object data={logoUrl} type="image/png" aria-label="Newnan Chili Thai Express logo">
              <img src="/newnan-chili-thai-logo.svg" alt="Newnan Chili Thai Express logo" />
            </object>
            <span className="brand-wordmark">
              <span className="brand-city">Newnan</span>
              <strong>Chili Thai</strong>
              <em>Express</em>
            </span>
          </a>
          <div className="nav-links">
            <a href="#menu">Our Food</a>
            <a href="#catering">Catering</a>
            <a href="#rewards">Rewards</a>
            <a href="#visit">Visit</a>
          </div>
          <a className="button button-red" href={orderUrl} target="_blank" rel="noreferrer">
            Order Now
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Thai flavor. Express speed.</p>
            <h1>Thai favorites, express style.</h1>
            <p className="lead">
              Wok-fired noodles, curries, fried rice, rolls, and quick combo plates
              built for lunch breaks, family dinners, and fast takeout cravings.
            </p>
            <div id="order" className="hero-actions">
              <a className="button button-yellow" href={orderUrl} target="_blank" rel="noreferrer">
                Start an Order
              </a>
              <a className="button button-outline" href="#visit">Find Us</a>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-circle" />
            <img src="/thai-hero-bowl.svg" alt="Illustrated Thai noodle bowl" />
          </div>
        </div>
      </section>

      <section className="steps">
        <div className="shell steps-grid">
          <p><span>1</span>Choose a bowl, plate, or tray</p>
          <p><span>2</span>Pick your entree favorites</p>
          <p><span>3</span>Order takeout, delivery, or catering</p>
        </div>
      </section>

      <section id="menu" className="shell section">
        <div className="section-head">
          <div>
            <p className="kicker red">Our food</p>
            <h2>Wok-fired favorites.</h2>
          </div>
          <a className="button button-light" href={orderUrl} target="_blank" rel="noreferrer">
            Start Order
          </a>
        </div>

        <div className="featured-menu">
          {featuredItems.map((meal) => (
            <article className={`menu-card feature-card ${meal.style}`} key={meal.name}>
              <div className="feature-photo">
                <div className="feature-glow" />
                <div className="feature-dish">
                  <img src="/thai-hero-bowl.svg" alt="" />
                </div>
              </div>
              <div className="card-body">
                <div className="card-badge">{meal.badge}</div>
                <h3>{meal.name}</h3>
                <p>{meal.detail}</p>
                <div className="card-foot">
                  <strong>{meal.badge}</strong>
                  <span>Featured item</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <MenuTabs />
      </section>

      <section className="spice-band">
        <div className="shell spice-grid">
          <div className="size-guide" aria-label="Meal size comparison">
            {mealSizes.map((size) => (
              <article className={`size-card ${size.scale}`} key={size.name}>
                <div className="size-visual">
                  <img src="/thai-hero-bowl.svg" alt="" />
                </div>
                <div>
                  <h3>{size.name}</h3>
                  <p>{size.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="combo-copy">
            <p className="kicker yellow">Pick your size</p>
            <h2>From quick bowls to family trays.</h2>
            <p>
              Start with the amount of food you need, then choose your side and
              entrees from the menu favorites.
            </p>
          </div>
        </div>
      </section>

      <section id="catering" className="shell section split">
        <div>
          <p className="kicker green">Catering</p>
          <h2>Feed the whole table.</h2>
        </div>
        <div className="info-box">
          <p>
            Party trays, family bundles, office lunches, and event spreads with
            curries, noodles, fried rice, appetizers, and sauces packed for easy serving.
          </p>
          <div className="tags">
            <span>Family Meals</span>
            <span>Office Lunch</span>
            <span>Party Trays</span>
          </div>
        </div>
      </section>

      <section id="rewards" className="rewards">
        <div className="shell rewards-inner">
          <div>
            <p className="kicker yellow">Rewards</p>
            <h2>Earn bites back.</h2>
          </div>
          <a className="button button-yellow" href="#">Join Rewards</a>
        </div>
      </section>

      <section id="visit" className="shell section split">
        <div>
          <p className="kicker red">Visit</p>
          <h2>Lunch rush ready.</h2>
          <p className="body-copy">
            Add store hours, phone ordering, pickup details, delivery links, and a
            map here once the restaurant details are finalized.
          </p>
        </div>
        <div className="map-card">
          <div className="map-placeholder">
            <p>Newnan, GA</p>
            <strong>Map goes here</strong>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-inner">
          <div className="footer-brand">
            <object data={logoUrl} type="image/png" aria-hidden="true">
              <img src="/newnan-chili-thai-logo.svg" alt="" />
            </object>
            <strong>Newnan Chili Thai Express</strong>
          </div>
          <div className="footer-connect">
            <p>Follow for specials, updates, and fresh wok-fired favorites.</p>
            <div className="social-links" aria-label="Social media links">
              <a href="#" aria-label="Newnan Chili Thai Express on Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.25" />
                </svg>
              </a>
              <a href="#" aria-label="Newnan Chili Thai Express on Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 8.4V6.7c0-.8.5-1.2 1.3-1.2H17V2.6c-.8-.1-1.6-.2-2.4-.2-2.8 0-4.6 1.7-4.6 4.8v1.2H7v3.3h3V22h3.8V11.7h3l.5-3.3H14Z" />
                </svg>
              </a>
              <a href="#" aria-label="Newnan Chili Thai Express on TikTok">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.8 3c.3 2.4 1.7 4.1 4.2 4.4v3.4c-1.5.1-2.9-.4-4.1-1.3v5.9c0 4.8-5.2 7.8-9.3 5.4-4-2.4-3.7-8.4.6-10.2 1-.4 2-.5 3.1-.3v3.6c-.5-.2-1-.2-1.5 0-1.7.5-2.2 2.7-.9 3.8 1.3 1.2 3.7.3 3.7-1.7V3h4.2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
