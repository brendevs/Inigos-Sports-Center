// data/courts.ts
import { Court } from "../app/types/court";

export const courts: Court[] = [
  {
    id: 1,
    name: "Pickle Ball",
    price: "₱200-300/hr",
    description: "Indoor professional pickleball court with lighting.",
    available: 2,
    used: 5,
    image:
      "https://cdn.shopify.com/s/files/1/0742/9740/9851/files/gamma_obsidian-2734-1_1000x.jpg?v=1725034375",
  },
  {
    id: 2,
    name: "Badminton",
    price: "₱150/hr",
    description: "Standard badminton court for singles or doubles.",
    available: 3,
    used: 1,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.TijJGwnxg8487_pkfU65qQHaNK?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 3,
    name: "Basketball Half Court",
    price: "₱400/hr",
    description: "Outdoor half court perfect for practice.",
    available: 1,
    used: 4,
    image:
      "https://i.pinimg.com/originals/d1/ae/42/d1ae4244b5e693f8467a3d42b9272b79.jpg",
  },
  {
    id: 4,
    name: "Tennis",
    price: "₱250/hr",
    description: "Full-size tennis court with synthetic grass.",
    available: 2,
    used: 3,
    image:
      "https://i.pinimg.com/736x/44/67/9c/44679c94e6e1c5b17d0a554ccd6eec99.jpg",
  },
  {
    id: 5,
    name: "Volleyball",
    price: "₱300/hr",
    description: "Indoor volleyball court with professional flooring.",
    available: 1,
    used: 2,
    image:
      "https://i.pinimg.com/originals/b8/ec/da/b8ecdab50ec71f23dc85c8b58f7952ab.jpg",
  },
];
