# **Pokemon Tcg Pocket Deckmaster**
![Screenshot 2024-11-25 at 18 36 46](https://github.com/user-attachments/assets/c95d6581-b62c-4891-a44e-f0e728b68be0)

A modern web application for managing your Pokémon cards collection. Track your owned cards, identify missing ones, and get booster recommendations, all with a visually appealing and responsive interface.

---

## **Features**
- 🗂️ **Card Management**: Add and track your owned Pokémon cards.
- 🔍 **Search**: Easily find specific Pokémon using the search functionality.
- 📊 **Booster Recommendations**: Get personalized suggestions for which booster to open based on your missing cards.
- 📱 **Responsive Design:**: Optimized for mobile devices, ensuring a seamless user experience on any device.

---

## **Tech Stack**

- **Frontend**: React, Next.js, and Styled Components
- **State Management**: React Hooks
- **Data Handling**: JavaScript, TypeScript
- **Styling**: Styled Components for custom styles
- **Deployment**: GitHub Pages

---

## **Installation**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/pokedex-genetic-apex.git
   cd pokedex-genetic-apex
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Run the application**

   ```bash
   yarn dev
   ```

4. **Open in your browser**
   Navigate to http://localhost:3000

## **Usage**

### **Adding Cards**

- Click on a card to mark it as owned or missing.
- Use the filter button to show only missing cards.

### **Searching**

- Enter a Pokémon name in the search bar to quickly find it.

### **Booster Recommendations**

- View which booster packs contain the most missing cards.

---

## **Project Structure**

```plaintext
📁 src
├── 📂 app
│   ├── 📂 components
│   │   ├── 📂 BoosterRecommendation
│   │   │   └── index.tsx
│   │   ├── 📂 Card
│   │   │   └── index.tsx
│   │   │   └── 📂 Rarity
│   │   │       └── index.tsx
│   │   ├── 📂 Loading
│   │   │   └── index.tsx
│   │   ├── 📂 FilterControls
│   │   │   └── index.tsx
│   │   ├── 📂 PokemonGrid
│   │   │   └── index.tsx
│   │   └── ...
│   ├── 📂 hooks
│   │   └── usePokemons.ts
│   ├── 📂 types
│   │   └── pokemon.ts
│   ├── 📂 utils
│   │   └── ...
│   └── ...
├── 📂 public
│   └── 📂 data
│   │   └── pokemon_with_booster.json
│   └── 📂 icons
│   │   └── ...
│   └── 📂 pokemon
│       └── 1.png
│   │   └── ...
│
└── ...
```

## **License**

This project is licensed under the MIT License. See the LICENSE file for details.
