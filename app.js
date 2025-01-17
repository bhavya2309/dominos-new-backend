import express from "express";
const app = express();
const PORT=process.env.PORT||1234;
import dotenv from "dotenv";
import cors from "cors";
app.use(cors());

dotenv.config();
app.listen(PORT, (err) => {
  if (err) {
    console.log("error in app", err);
  } else {
    console.log("server up and running"+`PORT:${PORT}`);
  }
});
app.get("/products", (request, response) => {
  // response.send(<h2>Hello Products</h2>);
  response.json({
    Vegetarian: [
      {
        id: 10,
        name: "Vegan Veggie",
        price: "23.95",
        menu_description: "Daiya vegan mozzarella, paired with fresh veggies",
        classifications: {
          vegetarian: true,
        },
        assets: {
          menu: [
            {
              url: "https://www.cicis.com/content/images/cicis/Jalapeno%20pizza.png",
            },
          ],
          product_details_page: [
            {
              url: "https://assets.zumepizza.com/public/aq89hll9.jpg",
            },
          ],
        },
        toppings: [
          {
            id: 50,
            name: "Baby Bell Peppers",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/7650vx0h.png",
            },
          },
          {
            id: 6,
            name: "Basil",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/9pb5d2k4.png",
            },
          },
          {
            id: 110,
            name: "Daiya Vegan Mozzarella",
            description:
              "FILTERED WATER, TAPIOCA FLOUR, EXPELLER PRESSED NON-GMO CANOLA AND/OR SAFFLOWER OIL, COCONUT OIL, PEA PROTEIN, SALT, VEGAN NATURAL FLAVOURS, INACTIVE YEAST, VEGETABLE GLYCERIN, XANTHAN GUM, CITRIC ACID, TITANIUM DIOXIDE",
            asset: {
              url: "https://assets.zumepizza.com/public/oo9dpuia.png",
            },
          },
          {
            id: 74,
            name: "Kalamata Olives",
            description: "KALAMATA OLIVES, WATER, SEA SALT, SUNFLOWER OIL",
            asset: {
              url: "https://assets.zumepizza.com/public/ezuum3ch.png",
            },
          },
          {
            id: 2,
            name: "Oregano",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/1dlixxge.png",
            },
          },
          {
            id: 75,
            name: "Red Onions",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/j8cy3gh3.png",
            },
          },
          {
            id: 26,
            name: "Roasted Garlic",
            description: "PEELED GARLIC, CANOLA OIL",
            asset: {
              url: "https://assets.zumepizza.com/public/s4o6jsl6.png",
            },
          },
          {
            id: 1,
            name: "Tomato Sauce",
            description:
              "VINE-RIPENED TOMATOES, FRESH BASIL LEAF, SALT, CALCIUM CHLORIDE, NATURALLY DERIVED CITRIC ACID, EXTRA VIRGIN OLIVE OIL, SEA SALT",
            asset: {
              url: "https://assets.zumepizza.com/public/3i572qur.png",
            },
          },
        ],
      },
      {
        id: 11,
        name: "Veggie Zupreme",
        price: "19.95",
        menu_description: "The freshest, locally sourced veggies",
        classifications: {
          vegetarian: true,
        },
        assets: {
          menu: [
            {
              url: "https://modpizza.com/wp-content/uploads/2021/12/Website-Maddy.png",
            },
          ],
          product_details_page: [
            {
              url: "https://assets.zumepizza.com/public/aq89hll9.jpg",
            },
          ],
        },
        toppings: [
          {
            id: 121,
            name: "Asiago",
            description: "CULTURED MILK, ENZYMES, SALT",
            asset: {
              url: "https://assets.zumepizza.com/public/gnhvc83u.png",
            },
          },
          {
            id: 50,
            name: "Baby Bell Peppers",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/7650vx0h.png",
            },
          },
          {
            id: 33,
            name: "Basil Chiffonade",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/bs4fw4um.png",
            },
          },
          {
            id: 74,
            name: "Kalamata Olives",
            description: "KALAMATA OLIVES, WATER, SEA SALT, SUNFLOWER OIL",
            asset: {
              url: "https://assets.zumepizza.com/public/ezuum3ch.png",
            },
          },
          {
            id: 5,
            name: "Mozzarella",
            description: "PASTEURIZED MILK, CHEESE CULTURE, SALT, ENZYMES",
            asset: {
              url: "https://assets.zumepizza.com/public/rv3erpfq.png",
            },
          },
          {
            id: 2,
            name: "Oregano",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/1dlixxge.png",
            },
          },
          {
            id: 75,
            name: "Red Onions",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/j8cy3gh3.png",
            },
          },
          {
            id: 26,
            name: "Roasted Garlic",
            description: "PEELED GARLIC, CANOLA OIL",
            asset: {
              url: "https://assets.zumepizza.com/public/s4o6jsl6.png",
            },
          },
          {
            id: 1,
            name: "Tomato Sauce",
            description:
              "VINE-RIPENED TOMATOES, FRESH BASIL LEAF, SALT, CALCIUM CHLORIDE, NATURALLY DERIVED CITRIC ACID, EXTRA VIRGIN OLIVE OIL, SEA SALT",
            asset: {
              url: "https://assets.zumepizza.com/public/3i572qur.png",
            },
          },
        ],
      },
      {
        id: 12,
        name: "The O.G.",
        price: "16.95",
        menu_description: "The Margherita—with California flair",
        classifications: {
          vegetarian: true,
        },
        assets: {
          menu: [
            {
              url: "https://littlefrenchhouse.in/restaurant/wp-content/uploads/2021/01/Truffle-Chilli-Pizza-1.png",
            },
          ],
          product_details_page: [
            {
              url: "https://assets.zumepizza.com/public/95n7xd91.jpg",
            },
          ],
        },
        toppings: [
          {
            id: 6,
            name: "Basil",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/9pb5d2k4.png",
            },
          },
          {
            id: 5,
            name: "Mozzarella",
            description: "PASTEURIZED MILK, CHEESE CULTURE, SALT, ENZYMES",
            asset: {
              url: "https://assets.zumepizza.com/public/rv3erpfq.png",
            },
          },
          {
            id: 2,
            name: "Oregano",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/1dlixxge.png",
            },
          },
          {
            id: 1,
            name: "Tomato Sauce",
            description:
              "VINE-RIPENED TOMATOES, FRESH BASIL LEAF, SALT, CALCIUM CHLORIDE, NATURALLY DERIVED CITRIC ACID, EXTRA VIRGIN OLIVE OIL, SEA SALT",
            asset: {
              url: "https://assets.zumepizza.com/public/3i572qur.png",
            },
          },
        ],
      },
      {
        id: 10,
        name: "Vegan Veggie",
        price: "23.95",
        menu_description: "Daiya vegan mozzarella, paired with fresh veggies",
        classifications: {
          vegetarian: true,
        },
        assets: {
          menu: [
            {
              url: "https://www.cicis.com/content/images/cicis/Jalapeno%20pizza.png",
            },
          ],
          product_details_page: [
            {
              url: "https://assets.zumepizza.com/public/aq89hll9.jpg",
            },
          ],
        },
        toppings: [
          {
            id: 50,
            name: "Baby Bell Peppers",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/7650vx0h.png",
            },
          },
          {
            id: 6,
            name: "Basil",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/9pb5d2k4.png",
            },
          },
          {
            id: 110,
            name: "Daiya Vegan Mozzarella",
            description:
              "FILTERED WATER, TAPIOCA FLOUR, EXPELLER PRESSED NON-GMO CANOLA AND/OR SAFFLOWER OIL, COCONUT OIL, PEA PROTEIN, SALT, VEGAN NATURAL FLAVOURS, INACTIVE YEAST, VEGETABLE GLYCERIN, XANTHAN GUM, CITRIC ACID, TITANIUM DIOXIDE",
            asset: {
              url: "https://assets.zumepizza.com/public/oo9dpuia.png",
            },
          },
          {
            id: 74,
            name: "Kalamata Olives",
            description: "KALAMATA OLIVES, WATER, SEA SALT, SUNFLOWER OIL",
            asset: {
              url: "https://assets.zumepizza.com/public/ezuum3ch.png",
            },
          },
          {
            id: 2,
            name: "Oregano",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/1dlixxge.png",
            },
          },
          {
            id: 75,
            name: "Red Onions",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/j8cy3gh3.png",
            },
          },
          {
            id: 26,
            name: "Roasted Garlic",
            description: "PEELED GARLIC, CANOLA OIL",
            asset: {
              url: "https://assets.zumepizza.com/public/s4o6jsl6.png",
            },
          },
          {
            id: 1,
            name: "Tomato Sauce",
            description:
              "VINE-RIPENED TOMATOES, FRESH BASIL LEAF, SALT, CALCIUM CHLORIDE, NATURALLY DERIVED CITRIC ACID, EXTRA VIRGIN OLIVE OIL, SEA SALT",
            asset: {
              url: "https://assets.zumepizza.com/public/3i572qur.png",
            },
          },
        ],
      },
      {
        id: 11,
        name: "Veggie Zupreme",
        price: "19.95",
        menu_description: "The freshest, locally sourced veggies",
        classifications: {
          vegetarian: true,
        },
        assets: {
          menu: [
            {
              url: "https://modpizza.com/wp-content/uploads/2021/12/Website-Maddy.png",
            },
          ],
          product_details_page: [
            {
              url: "https://assets.zumepizza.com/public/aq89hll9.jpg",
            },
          ],
        },
        toppings: [
          {
            id: 121,
            name: "Asiago",
            description: "CULTURED MILK, ENZYMES, SALT",
            asset: {
              url: "https://assets.zumepizza.com/public/gnhvc83u.png",
            },
          },
          {
            id: 50,
            name: "Baby Bell Peppers",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/7650vx0h.png",
            },
          },
          {
            id: 33,
            name: "Basil Chiffonade",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/bs4fw4um.png",
            },
          },
          {
            id: 74,
            name: "Kalamata Olives",
            description: "KALAMATA OLIVES, WATER, SEA SALT, SUNFLOWER OIL",
            asset: {
              url: "https://assets.zumepizza.com/public/ezuum3ch.png",
            },
          },
          {
            id: 5,
            name: "Mozzarella",
            description: "PASTEURIZED MILK, CHEESE CULTURE, SALT, ENZYMES",
            asset: {
              url: "https://assets.zumepizza.com/public/rv3erpfq.png",
            },
          },
          {
            id: 2,
            name: "Oregano",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/1dlixxge.png",
            },
          },
          {
            id: 75,
            name: "Red Onions",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/j8cy3gh3.png",
            },
          },
          {
            id: 26,
            name: "Roasted Garlic",
            description: "PEELED GARLIC, CANOLA OIL",
            asset: {
              url: "https://assets.zumepizza.com/public/s4o6jsl6.png",
            },
          },
          {
            id: 1,
            name: "Tomato Sauce",
            description:
              "VINE-RIPENED TOMATOES, FRESH BASIL LEAF, SALT, CALCIUM CHLORIDE, NATURALLY DERIVED CITRIC ACID, EXTRA VIRGIN OLIVE OIL, SEA SALT",
            asset: {
              url: "https://assets.zumepizza.com/public/3i572qur.png",
            },
          },
        ],
      },
      {
        id: 12,
        name: "The O.G.",
        price: "16.95",
        menu_description: "The Margherita—with California flair",
        classifications: {
          vegetarian: true,
        },
        assets: {
          menu: [
            {
              url: "https://littlefrenchhouse.in/restaurant/wp-content/uploads/2021/01/Truffle-Chilli-Pizza-1.png",
            },
          ],
          product_details_page: [
            {
              url: "https://assets.zumepizza.com/public/95n7xd91.jpg",
            },
          ],
        },
        toppings: [
          {
            id: 6,
            name: "Basil",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/9pb5d2k4.png",
            },
          },
          {
            id: 5,
            name: "Mozzarella",
            description: "PASTEURIZED MILK, CHEESE CULTURE, SALT, ENZYMES",
            asset: {
              url: "https://assets.zumepizza.com/public/rv3erpfq.png",
            },
          },
          {
            id: 2,
            name: "Oregano",
            description: null,
            asset: {
              url: "https://assets.zumepizza.com/public/1dlixxge.png",
            },
          },
          {
            id: 1,
            name: "Tomato Sauce",
            description:
              "VINE-RIPENED TOMATOES, FRESH BASIL LEAF, SALT, CALCIUM CHLORIDE, NATURALLY DERIVED CITRIC ACID, EXTRA VIRGIN OLIVE OIL, SEA SALT",
            asset: {
              url: "https://assets.zumepizza.com/public/3i572qur.png",
            },
          },
        ],
      },
    ],
  });
});
