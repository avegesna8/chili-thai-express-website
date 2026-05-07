"use client";

import { useId, useState, type KeyboardEvent } from "react";

type MenuItem = {
  name: string;
  description: string;
};

type MenuSection = {
  title: string;
  shortTitle: string;
  note: string;
  tone: string;
  items: MenuItem[];
};

const menuSections: MenuSection[] = [
  {
    title: "Rolls, Salads & Sides",
    shortTitle: "Starters",
    note: "Crisp starters and fresh sides",
    tone: "tone-red",
    items: [
      { name: "Thai Spring Rolls", description: "Golden rolls with vegetables and dipping sauce." },
      { name: "Basil Rolls", description: "Fresh wrapped rolls with herbs and crisp vegetables." },
      { name: "Cheese Rolls", description: "Crispy bites with a warm creamy center." },
      { name: "Shrimp Rolls", description: "Crunchy rolls filled with shrimp and fresh seasoning." },
      { name: "Chicken-Sa-Tay", description: "Skewered chicken with rich peanut-style sauce." },
      { name: "Papaya Salad", description: "Bright shredded papaya salad with lime and chili." },
    ],
  },
  {
    title: "Beverages",
    shortTitle: "Drinks",
    note: "Cold drinks and Thai cafe favorites",
    tone: "tone-yellow",
    items: [
      { name: "Soft Drinks", description: "Classic fountain favorites served cold." },
      { name: "Thai Ice Tea", description: "Sweet Thai tea with a creamy finish." },
      { name: "Thai Ice Coffee", description: "Bold coffee poured over ice with cream." },
      { name: "Boba Tea", description: "Iced tea with chewy tapioca pearls." },
    ],
  },
  {
    title: "Soups",
    shortTitle: "Soups",
    note: "Comforting bowls with Thai aromatics",
    tone: "tone-green",
    items: [
      { name: "Tom-Kha", description: "Coconut soup with lemongrass, galangal, and herbs." },
      { name: "Tom-Yum", description: "Hot and sour broth with Thai aromatics." },
    ],
  },
  {
    title: "Curry",
    shortTitle: "Curry",
    note: "Rich sauces served express style",
    tone: "tone-red",
    items: [
      { name: "Pa-Nang Curry", description: "Creamy curry with a nutty, slightly sweet finish." },
      { name: "Red Curry", description: "Red chile curry with vegetables and basil." },
      { name: "Green Curry", description: "Herbal green curry with coconut and vegetables." },
      { name: "Yellow Curry", description: "Mellow turmeric curry with cozy spice." },
    ],
  },
  {
    title: "Fried Rice",
    shortTitle: "Fried Rice",
    note: "Wok-fried rice plates",
    tone: "tone-yellow",
    items: [
      { name: "Pineapple Fried Rice", description: "Sweet pineapple, rice, egg, and vegetables from the wok." },
      { name: "Basil Fried Rice", description: "Savory fried rice with Thai basil and vegetables." },
    ],
  },
  {
    title: "Noodles",
    shortTitle: "Noodles",
    note: "Classic Thai noodle favorites",
    tone: "tone-green",
    items: [
      { name: "Pad-Thai", description: "Rice noodles tossed with bright sauce and fresh crunch." },
      { name: "Pad-Thai Woon-Sen", description: "Glass noodles with Pad-Thai flavor and vegetables." },
      { name: "Pad-Si-Ew", description: "Wide noodles with sweet soy sauce and greens." },
      { name: "Drunken Noodles", description: "Spicy wide noodles with basil and vegetables." },
      { name: "Rad-Na", description: "Wide noodles with savory gravy and broccoli." },
      { name: "Prik-Pao Noodles", description: "Noodles tossed in smoky chile paste sauce." },
    ],
  },
  {
    title: "Stir Fry",
    shortTitle: "Stir Fry",
    note: "Fast wok entrees with vegetables",
    tone: "tone-red",
    items: [
      { name: "Cashew Nut", description: "Wok-tossed vegetables with cashews and savory sauce." },
      { name: "Black Pepper", description: "Peppery stir fry with onions and vegetables." },
      { name: "Broccoli", description: "Simple wok-fired broccoli in a light savory sauce." },
    ],
  },
];

export default function MenuTabs() {
  const tabId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = menuSections[activeIndex];
  const activeTabId = `${tabId}-tab-${activeIndex}`;
  const panelId = `${tabId}-panel`;

  function selectTab(index: number, tablist: HTMLElement | null) {
    setActiveIndex(index);
    const nextTab = tablist?.querySelectorAll<HTMLButtonElement>("[role='tab']")[index];
    nextTab?.focus();
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const lastIndex = menuSections.length - 1;
    const tablist = event.currentTarget.parentElement;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectTab(index === lastIndex ? 0 : index + 1, tablist);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectTab(index === 0 ? lastIndex : index - 1, tablist);
    }

    if (event.key === "Home") {
      event.preventDefault();
      selectTab(0, tablist);
    }

    if (event.key === "End") {
      event.preventDefault();
      selectTab(lastIndex, tablist);
    }
  }

  return (
    <div className="menu-tabs-shell">
      <div className="menu-tabbar" role="tablist" aria-label="Menu categories">
        {menuSections.map((section, index) => (
          <button
            className={`menu-tab ${section.tone}`}
            type="button"
            key={section.title}
            id={`${tabId}-tab-${index}`}
            role="tab"
            aria-controls={panelId}
            aria-selected={activeIndex === index}
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {section.shortTitle}
          </button>
        ))}
      </div>

      <section
        className={`menu-panel ${activeSection.tone}`}
        id={panelId}
        role="tabpanel"
        aria-labelledby={activeTabId}
        aria-live="polite"
      >
        <div className="menu-panel-head">
          <div>
            <p>{activeSection.note}</p>
            <h3>{activeSection.title}</h3>
          </div>
          <span>{activeSection.items.length} items</span>
        </div>

        <div className="menu-item-grid">
          {activeSection.items.map((item) => (
            <article className="menu-item-card" key={item.name}>
              <div className="menu-item-photo">
                <img src="/thai-hero-bowl.svg" alt="" />
              </div>
              <div>
                <span>{activeSection.shortTitle}</span>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
