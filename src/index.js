import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Pizza />
      <Footer currentTime={new Date().toLocaleTimeString()} />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" />
      <h2>Pizza Spinaci</h2>
      <h3>Tomato, mozarella, spinach, and ricotta cheese</h3>
    </div>
  );
}

function Header() {
  return <h1>Welcome to Pizza Hut!!!</h1>;
}

function Menu() {
  // return()
}

function Footer(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentState, setCurrentState] = useState("Open");
  const [currentAccurateTime, setCurrentAccurateTime] = useState("");
  useEffect(() => {
    setCurrentTime(new Date().getHours());
    setCurrentState(currentTime >= 9 && currentTime < 17 ? "open" : "closed");
    setCurrentAccurateTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <footer>
      It's {currentAccurateTime}.We're currently {currentState}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
