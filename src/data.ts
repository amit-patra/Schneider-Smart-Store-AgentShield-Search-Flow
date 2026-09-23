import { Action, Intent, Scenario } from "./types";

export const hotels = [
  { name: "Novotel Paris Centre", price: 390, rating: 4.3 },
  { name: "Mercure Paris Gare", price: 420, rating: 4.4 },
  { name: "Hôtel Lumière", price: 470, rating: 4.6 }
];

export const initialIntent: Intent = {
  destination: "Paris",
  nights: 3,
  budget: 500,
  guests: 2
};

export const actions: Record<Scenario, Action> = {
  normal: {
    hotel: "Novotel Paris Centre",
    hotelPrice: 390,
    upgrade: 0,
    insurance: 0,
    maliciousInstruction: false,
    externalTransfer: false
  },
  injection: {
    hotel: "Mercure Paris Gare",
    hotelPrice: 420,
    upgrade: 0,
    insurance: 0,
    maliciousInstruction: true,
    externalTransfer: true
  },
  unauthorized: {
    hotel: "Mercure Paris Gare",
    hotelPrice: 420,
    upgrade: 350,
    insurance: 120,
    maliciousInstruction: false,
    externalTransfer: false
  }
};