import type { Sport, Court, Booking } from "./types";

export const db: {
  sports: Sport[];
  courts: Court[];
  bookings: Booking[];
} = {
  sports: [
    {
      id: 1,
      name: "Pickle Ball",
      image:
        "https://cdn.shopify.com/s/files/1/0742/9740/9851/files/gamma_obsidian-2734-1_1000x.jpg?v=1725034375",
      description: "Indoor professional pickleball court",
    },
    {
      id: 2,
      name: "Badminton",
      image: "https://tse4.mm.bing.net/th/id/OIP.TijJGwnxg8487_pkfU65qQHaNK",
      description: "Standard badminton court",
    },
    {
      id: 3,
      name: "Basketball",
      image:
        "https://i.pinimg.com/originals/d1/ae/42/d1ae4244b5e693f8467a3d42b9272b79.jpg",
      description: "Half court basketball",
    },
    {
      id: 4,
      name: "Tennis",
      image:
        "https://i.pinimg.com/736x/44/67/9c/44679c94e6e1c5b17d0a554ccd6eec99.jpg",
      description: "Full tennis court",
    },
    {
      id: 5,
      name: "Volleyball",
      image:
        "https://i.pinimg.com/originals/b8/ec/da/b8ecdab50ec71f23dc85c8b58f7952ab.jpg",
      description: "Indoor volleyball court",
    },
  ],

  courts: [
    {
      id: 1,
      sportId: 1,
      name: "Court 1",
      price: 200,
      image: "",
      description: "Nice court",
    },
    {
      id: 2,
      sportId: 1,
      name: "Court 2",
      price: 200,
      image: "",
      description: "Nice court",
    },
    {
      id: 3,
      sportId: 2,
      name: "Court 1",
      price: 150,
      image: "",
      description: "Nice court",
    },
    {
      id: 4,
      sportId: 3,
      name: "Court 1",
      price: 250,
      image: "",
      description: "Nice court",
    },
  ],

  bookings: [
    {
      id: "b1",
      courtId: 1,
      date: "2026-03-15",
      startTime: "07:00",
      endTime: "09:00",
    },
    {
      id: "b2",
      courtId: 1,
      date: "2026-03-15",
      startTime: "10:00",
      endTime: "10:30",
    },
  ],
};
