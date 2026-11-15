import tshirt from "../assets/tshirt.svg";
import pants from "../assets/pants.svg";
import cap from "../assets/cap.svg";
import headphones from "../assets/headphones.svg";
import sneakers from "../assets/sneakers.svg";

const categories = [
  {
    id: 1,
    text: "Camisetas",
    src: tshirt,
    link: "/camisetas",
  },
  {
    id: 2,
    text: "Calças",
    src: pants,
    link: "/calcas",
  },
  {
    id: 3,
    text: "Bonés",
    src: cap,
    link: "/bones",
  },
  {
    id: 4,
    text: "Headphones",
    src: headphones,
    link: "/headphones",
  },
  {
    id: 5,
    text: "Tênis",
    src: sneakers,
    link: "/tenis",
  },
];

export default categories;
