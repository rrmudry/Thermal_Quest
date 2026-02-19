export enum HeatTransferType {
  CONDUCTION = "Conduction",
  CONVECTION = "Convection",
  RADIATION = "Radiation",
}

export interface Scenario {
  id: number;
  text: string;
  type: HeatTransferType;
  explanation: string;
}

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    text: "You touch a metal spoon that has been sitting in a bowl of hot soup and find it's very hot.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat travels directly from the soup to the spoon through physical contact."
  },
  {
    id: 2,
    text: "You feel the warmth of the sun on your face while walking outside on a clear day.",
    type: HeatTransferType.RADIATION,
    explanation: "Heat from the sun travels through space as electromagnetic waves."
  },
  {
    id: 3,
    text: "In a heated room, the air near the ceiling is much warmer than the air near the floor.",
    type: HeatTransferType.CONVECTION,
    explanation: "Warm air is less dense and rises, while cooler air sinks, creating a circulation current."
  },
  {
    id: 4,
    text: "You accidentally touch a hot stove burner and immediately feel a sharp burn.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat is transferred directly from the hot burner to your skin through contact."
  },
  {
    id: 5,
    text: "A hot air balloon rises into the sky as the air inside the envelope is heated.",
    type: HeatTransferType.CONVECTION,
    explanation: "The heated air inside becomes less dense and rises, carrying the balloon with it."
  },
  {
    id: 6,
    text: "You hold your hands near a glowing campfire and feel the heat without touching the flames.",
    type: HeatTransferType.RADIATION,
    explanation: "The fire emits infrared radiation that travels through the air to your hands."
  },
  {
    id: 7,
    text: "An ice cube melts quickly when you hold it tightly in your warm palm.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat flows directly from your warm hand to the cold ice cube."
  },
  {
    id: 8,
    text: "Macaroni pieces in a pot of boiling water move up and down in a circular pattern.",
    type: HeatTransferType.CONVECTION,
    explanation: "The water circulates as it heats up, creating currents that move the macaroni."
  },
  {
    id: 9,
    text: "You use an electric iron to press the wrinkles out of a cotton shirt.",
    type: HeatTransferType.CONDUCTION,
    explanation: "The hot metal plate of the iron transfers heat directly to the fabric."
  },
  {
    id: 10,
    text: "A microwave oven heats up a bowl of leftovers in just two minutes.",
    type: HeatTransferType.RADIATION,
    explanation: "Microwaves are a form of radiation that cause water molecules in food to vibrate and heat up."
  },
  {
    id: 11,
    text: "You walk barefoot on black asphalt on a sunny afternoon and your feet feel like they are burning.",
    type: HeatTransferType.CONDUCTION,
    explanation: "The hot asphalt transfers heat directly to the soles of your feet."
  },
  {
    id: 12,
    text: "Steam rises from a freshly poured cup of hot cocoa into the cooler air above.",
    type: HeatTransferType.CONVECTION,
    explanation: "The warm, moist air rises because it is less dense than the surrounding air."
  },
  {
    id: 13,
    text: "A metal slide on a playground becomes painfully hot after sitting in the sun all morning.",
    type: HeatTransferType.RADIATION,
    explanation: "The slide absorbs radiant energy directly from the sun's rays."
  },
  {
    id: 14,
    text: "A radiator in a cold room eventually warms the entire space, even the corners far from it.",
    type: HeatTransferType.CONVECTION,
    explanation: "The radiator heats the air nearby, which then circulates throughout the room."
  },
  {
    id: 15,
    text: "You feel the heat coming off a traditional incandescent light bulb when you put your hand near it.",
    type: HeatTransferType.RADIATION,
    explanation: "The hot filament emits infrared radiation that you feel as heat."
  },
  {
    id: 16,
    text: "A blacksmith holds a long iron rod in a forge; eventually, the end he is holding becomes too hot to touch.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat travels through the solid metal rod from the hot end to the cool end."
  },
  {
    id: 17,
    text: "During the day at the beach, a cool breeze blows from the ocean toward the warm land.",
    type: HeatTransferType.CONVECTION,
    explanation: "Warm air over the land rises, and cooler air from the ocean moves in to take its place."
  },
  {
    id: 18,
    text: "A lizard lies on a flat rock that has been heated by the sun to raise its body temperature.",
    type: HeatTransferType.CONDUCTION,
    explanation: "The lizard gains heat through direct contact with the warm surface of the rock."
  },
  {
    id: 19,
    text: "The handle of a metal frying pan becomes hot while you are cooking eggs on the stove.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat travels from the bottom of the pan through the metal handle."
  },
  {
    id: 20,
    text: "You can feel the heat from a toaster's glowing coils even before the bread pops up.",
    type: HeatTransferType.RADIATION,
    explanation: "The glowing coils emit thermal radiation that travels through the air."
  }
];
