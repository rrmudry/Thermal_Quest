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
  },
  {
    id: 21,
    text: "You sit on a cold metal bench in the winter and immediately feel a chill.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat flows from your body directly into the cold metal bench."
  },
  {
    id: 22,
    text: "Warm air rises above a asphalt road on a hot day, creating a shimmering effect.",
    type: HeatTransferType.CONVECTION,
    explanation: "The air near the road is heated, becomes less dense, and rises."
  },
  {
    id: 23,
    text: "An infrared heater warms a room without directly heating the air in between.",
    type: HeatTransferType.RADIATION,
    explanation: "Infrastructure radiation travels through space to warm objects directly."
  },
  {
    id: 24,
    text: "You wrap a potato in aluminum foil to cook it faster in hot coals.",
    type: HeatTransferType.CONDUCTION,
    explanation: "The foil conducts heat from the coals directly to the potato."
  },
  {
    id: 25,
    text: "A ceiling fan helps cool a room by moving air around.",
    type: HeatTransferType.CONVECTION,
    explanation: "The moving air increases the rate of heat transfer through fluid motion."
  },
  {
    id: 26,
    text: "You feel the heat from a laser beam as it hits a surface.",
    type: HeatTransferType.RADIATION,
    explanation: "Lasers transfer energy through electromagnetic radiation."
  },
  {
    id: 27,
    text: "Ice on a car windshield melts as the defroster blows warm air over it.",
    type: HeatTransferType.CONVECTION,
    explanation: "The warm air transfers heat to the ice as it flows across the glass."
  },
  {
    id: 28,
    text: "A metal soldering iron melts at the tip when it touches the wire.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat moves directly from the hot iron tip to the solder through contact."
  },
  {
    id: 29,
    text: "Hot magma rises toward the Earth's surface in a volcanic eruption.",
    type: HeatTransferType.CONVECTION,
    explanation: "The molten rock flows upward because it is hotter and less dense."
  },
  {
    id: 30,
    text: "A dark-colored roof becomes much hotter than a light-colored roof in the sun.",
    type: HeatTransferType.RADIATION,
    explanation: "Dark surfaces absorb more radiant energy from the sun."
  },
  {
    id: 31,
    text: "You hold a bag of frozen peas against a bruised knee to reduce swelling.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat flows from your warm knee into the cold bag of peas."
  },
  {
    id: 32,
    text: "Smoke from a chimney curls upward into the sky.",
    type: HeatTransferType.CONVECTION,
    explanation: "The hot smoke is less dense than the surrounding air and rises."
  },
  {
    id: 33,
    text: "A satellite in orbit is protected by a golden reflective thermal blanket.",
    type: HeatTransferType.RADIATION,
    explanation: "The blanket reflects incoming solar radiation to prevent overheating."
  },
  {
    id: 34,
    text: "Heat moves through the base of a copper pot into the food inside.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Copper is an excellent conductor that transfers heat directly to the food."
  },
  {
    id: 35,
    text: "A hot springs pool stays warm because of heated water rising from below.",
    type: HeatTransferType.CONVECTION,
    explanation: "The geothermally heated water circulates upward to the surface."
  },
  {
    id: 36,
    text: "The Earth's atmosphere is warmed by heat reflected from the ground.",
    type: HeatTransferType.RADIATION,
    explanation: "The ground emits long-wave radiation that is absorbed by greenhouse gases."
  },
  {
    id: 37,
    text: "You use a hair dryer to warm up your cold hands.",
    type: HeatTransferType.CONVECTION,
    explanation: "The hot air flowing over your hands transfers heat to your skin."
  },
  {
    id: 38,
    text: "A metal engine block gets hot as the car runs.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat from the combustion process moves through the solid metal of the engine."
  },
  {
    id: 39,
    text: "Warm ocean water near the equator moves toward the poles in huge currents.",
    type: HeatTransferType.CONVECTION,
    explanation: "Thermal energy is transported across the globe by the movement of water."
  },
  {
    id: 40,
    text: "A person in a room feels the 'chill' of a cold window even without a draft.",
    type: HeatTransferType.RADIATION,
    explanation: "The person's body radiates heat toward the colder surface of the window."
  },
  {
    id: 41,
    text: "Chocolate melts in your mouth as soon as you eat it.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat from your mouth transfers directly to the chocolate via contact."
  },
  {
    id: 42,
    text: "Boiling soup moves in a circular motion in the pot.",
    type: HeatTransferType.CONVECTION,
    explanation: "The liquid at the bottom heats up, rises, and is replaced by cooler soup."
  },
  {
    id: 43,
    text: "A heat lamp keeps french fries warm at a fast-food restaurant.",
    type: HeatTransferType.RADIATION,
    explanation: "Infrared waves from the lamp maintain the temperature of the food."
  },
  {
    id: 44,
    text: "You can feel the heat of a laptop battery through the bottom casing.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Thermal energy moves through the solid materials of the laptop to the outer shell."
  },
  {
    id: 45,
    text: "Steam rising from a manhole cover on a cold city street.",
    type: HeatTransferType.CONVECTION,
    explanation: "The warm, moist air is less dense and rises into the cooler atmosphere."
  },
  {
    id: 46,
    text: "A magnifying glass focuses sunbeams onto a leaf to start a small spark.",
    type: HeatTransferType.RADIATION,
    explanation: "The glass concentrates radiant solar energy into a single point."
  },
  {
    id: 47,
    text: "The handle of a metal faucet feels cold when you first touch it in the morning.",
    type: HeatTransferType.CONDUCTION,
    explanation: "The metal quickly conducts heat away from your hand."
  },
  {
    id: 48,
    text: "Cooling towers at a power plant release plumes of warm air.",
    type: HeatTransferType.CONVECTION,
    explanation: "Heat is carried away into the atmosphere by the rising column of air."
  },
  {
    id: 49,
    text: "A grill cooks a burger using intense heat from glowing charcoal below.",
    type: HeatTransferType.RADIATION,
    explanation: "The charcoal emits heat waves that travel through the air to the meat."
  },
  {
    id: 50,
    text: "You use a ceramic coaster so a hot mug doesn't damage a wooden table.",
    type: HeatTransferType.CONDUCTION,
    explanation: "The coaster acts as a barrier to the direct flow of heat between objects."
  },
  {
    id: 51,
    text: "Hot air rises in a chimney, creating a 'draft' that pulls air into the fireplace.",
    type: HeatTransferType.CONVECTION,
    explanation: "The density difference between hot and cold air creates a flow."
  },
  {
    id: 52,
    text: "A person's skin tans after spending several hours at the beach.",
    type: HeatTransferType.RADIATION,
    explanation: "Ultraviolet radiation from the sun causes a chemical change in the skin."
  },
  {
    id: 53,
    text: "A cooling vest uses gel packs to keep an athlete's core temperature down.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat moves directly from the athlete's body into the cold gel packs."
  },
  {
    id: 54,
    text: "Warm breath on a cold day creates a visible cloud of mist.",
    type: HeatTransferType.CONVECTION,
    explanation: "The warm air rises and rapidly cools as it mixes with the surrounding air."
  },
  {
    id: 55,
    text: "Thermal imaging cameras can detect people in total darkness.",
    type: HeatTransferType.RADIATION,
    explanation: "Every object emits infrared radiation which the camera can visualize."
  },
  {
    id: 56,
    text: "A metal cooling rack helps cookies cool down faster after baking.",
    type: HeatTransferType.CONDUCTION,
    explanation: "The rack conducts heat away from the cookies through direct points of contact."
  },
  {
    id: 57,
    text: "Clouds block the sun's heat, making it feel cooler on the ground.",
    type: HeatTransferType.RADIATION,
    explanation: "The clouds reflect and absorb much of the incoming solar radiation."
  },
  {
    id: 58,
    text: "A blacksmith plunges a red-hot horseshoe into a bucket of water.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat is rapidly transferred from the metal to the water through contact."
  },
  {
    id: 59,
    text: "Heating elements at the bottom of a dishwasher warm the water.",
    type: HeatTransferType.CONVECTION,
    explanation: "The water circulates as it is heated from the bottom up."
  },
  {
    id: 60,
    text: "Solar sails use the pressure of starlight to move spacecraft through a vacuum.",
    type: HeatTransferType.RADIATION,
    explanation: "Light exerts a small amount of physical pressure on reflective surfaces."
  },
  {
    id: 61,
    text: "You feel the heat of a candle flame if you hold your hand above it.",
    type: HeatTransferType.CONVECTION,
    explanation: "The air above the flame is heated and carries energy upward."
  },
  {
    id: 62,
    text: "A heating pad warms a sore muscle during physical therapy.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Thermal energy flows directly from the pad into the muscle tissue."
  },
  {
    id: 63,
    text: "Sunlight passing through a car window makes the interior extremely hot.",
    type: HeatTransferType.RADIATION,
    explanation: "Short-wave light enters the car and is converted to long-wave heat energy."
  },
  {
    id: 64,
    text: "Warm water at the surface of a pond is much nicer than the cold water at the bottom.",
    type: HeatTransferType.CONVECTION,
    explanation: "Solar heating and density differences keep the warmest water at the top."
  },
  {
    id: 65,
    text: "A metal pipe carrying steam becomes hot to the touch.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat moves from the steam through the wall of the pipe to the outside."
  },
  {
    id: 66,
    text: "A greenhouse stays warm even on a cold, sunny winter day.",
    type: HeatTransferType.RADIATION,
    explanation: "Glass allows light in but traps the resulting thermal radiation inside."
  },
  {
    id: 67,
    text: "Hot air from a furnace is pumped through vents into every room.",
    type: HeatTransferType.CONVECTION,
    explanation: "Mechanical fans move the heated fluid (air) to distribute energy."
  },
  {
    id: 68,
    text: "Walking on a thick rug feels warmer than walking on a tile floor.",
    type: HeatTransferType.CONDUCTION,
    explanation: "The rug is a poor conductor, so it doesn't take heat from your feet as fast."
  },
  {
    id: 69,
    text: "Space heaters use glowing orange coils to warm someone sitting nearby.",
    type: HeatTransferType.RADIATION,
    explanation: "The coils emit infrared energy that targets people across the room."
  },
  {
    id: 70,
    text: "A cooling fan in a desktop PC keeps the CPU from melting.",
    type: HeatTransferType.CONVECTION,
    explanation: "Air is forced across the heat sink to carry thermal energy away."
  },
  {
    id: 71,
    text: "An ice pack in a cooler keeps drinks cold on a hot summer day.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat is absorbed from the drinks into the ice through direct or indirect contact."
  },
  {
    id: 72,
    text: "Warm currents in the ocean help regulate the Earth's climate.",
    type: HeatTransferType.CONVECTION,
    explanation: "The global 'conveyor belt' moves massive amounts of thermal energy."
  },
  {
    id: 73,
    text: "Black pavement reflects very little sunlight and gets very hot.",
    type: HeatTransferType.RADIATION,
    explanation: "Low albedo (reflectivity) leads to high absorption of radiant energy."
  },
  {
    id: 74,
    text: "A spoon handled by someone with cold hands eventually warms up.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat moves from the warm air or surface through the spoon to the hand."
  },
  {
    id: 75,
    text: "Thermal updrafts allow hawks to spiral high into the air without flapping.",
    type: HeatTransferType.CONVECTION,
    explanation: "Warm air 'bubbles' rise from the ground, creating upward lift."
  },
  {
    id: 76,
    text: "An asteroid gets hotter on the side facing the sun than on the dark side.",
    type: HeatTransferType.RADIATION,
    explanation: "In a vacuum, radiation is the only way to receive thermal energy."
  },
  {
    id: 77,
    text: "A frying pan's base is made of thick aluminum to distribute heat evenly.",
    type: HeatTransferType.CONDUCTION,
    explanation: "The metal conducts heat across its entire surface through solid contact."
  },
  {
    id: 78,
    text: "Cool air from an open refrigerator falls toward the floor.",
    type: HeatTransferType.CONVECTION,
    explanation: "The colder air is denser and sinks, creating a falling current."
  },
  {
    id: 79,
    text: "A campfire feels hot on your face but your back stays cold.",
    type: HeatTransferType.RADIATION,
    explanation: "Radiant heat only warms the surfaces it can directly strike."
  },
  {
    id: 80,
    text: "Heat from a car's radiator is carried away by the coolant liquid.",
    type: HeatTransferType.CONVECTION,
    explanation: "The pump circulates the liquid to transport heat to the grille."
  },
  {
    id: 81,
    text: "A metal key in your pocket warms up to your body temperature.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Thermal energy flows from your leg into the key via touch."
  },
  {
    id: 82,
    text: "A lava lamp creates blobs of wax that move up and down.",
    type: HeatTransferType.CONVECTION,
    explanation: "The heat at the bottom makes the wax less dense, causing it to rise."
  },
  {
    id: 83,
    text: "The sun's energy travel 93 million miles to reach the Earth.",
    type: HeatTransferType.RADIATION,
    explanation: "Electromagnetic waves can travel through the vacuum of space."
  },
  {
    id: 84,
    text: "Your hot cocoa cools down as the ceramic mug transfers heat to the table.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat move from the liquid through the solid mug into the solid table."
  },
  {
    id: 85,
    text: "A hot air popper uses a stream of air to cook kernels of corn.",
    type: HeatTransferType.CONVECTION,
    explanation: "The moving air transfers heat to the kernels to make them pop."
  },
  {
    id: 86,
    text: "A night-vision scope detects the faint glow of heat from a small animal.",
    type: HeatTransferType.RADIATION,
    explanation: "Living things emit infrared waves that can be picked up by sensors."
  },
  {
    id: 87,
    text: "Heat sinks on a circuit board have many 'fins' to increase surface area.",
    type: HeatTransferType.CONVECTION,
    explanation: "More surface area allows more air to flow by and take away heat."
  },
  {
    id: 88,
    text: "A silver space blanket keeps a hiker warm in an emergency.",
    type: HeatTransferType.RADIATION,
    explanation: "The metallic surface reflects the person's own body heat back at them."
  },
  {
    id: 89,
    text: "An iron plate in a clothing factory gets hot to press fabrics.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Thermal energy moves from the heating element into the press."
  },
  {
    id: 90,
    text: "Steamy air in a local gym during a workout session.",
    type: HeatTransferType.CONVECTION,
    explanation: "Sweat evaporates and the warm moist air rises and circulates."
  },
  {
    id: 91,
    text: "A person's body heat is felt by someone standing very close to them.",
    type: HeatTransferType.RADIATION,
    explanation: "The human body is constantly emitting thermal energy waves."
  },
  {
    id: 92,
    text: "A metal ring on a hot stove burner expands in size.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Heat moving through the solid metal causes the molecules to push apart."
  },
  {
    id: 93,
    text: "A hot soup cools down if you blow on it with your mouth.",
    type: HeatTransferType.CONVECTION,
    explanation: "You are forcing cooler air to move across the surface, increasing heat loss."
  },
  {
    id: 94,
    text: "Satellite dishes are usually white to avoid absorbing too much sun.",
    type: HeatTransferType.RADIATION,
    explanation: "Light colors reflect more radiant energy and stay cooler."
  },
  {
    id: 95,
    text: "Heat from a hot shower warms up the bathroom tiles.",
    type: HeatTransferType.CONDUCTION,
    explanation: "Direct contact with the warm water or air transfers heat to the floor."
  },
  {
    id: 96,
    text: "A massive storm cloud forms as humid air is pushed high into the sky.",
    type: HeatTransferType.CONVECTION,
    explanation: "Rising warm air carries water vapor into the colder upper atmosphere."
  },
  {
    id: 97,
    text: "You can feel the 'heat' of a nearby wildfire even before the smoke arrives.",
    type: HeatTransferType.RADIATION,
    explanation: "The massive energy of the fire radiates outward in all directions."
  },
  {
    id: 98,
    text: "Thermal paste is used between a CPU and a heat sink to fill air gaps.",
    type: HeatTransferType.CONDUCTION,
    explanation: "The paste ensures better physical contact for direct heat transfer."
  },
  {
    id: 99,
    text: "Warm water from a power plant is released into a cold river.",
    type: HeatTransferType.CONVECTION,
    explanation: "The warm water flows and mixes with the river water, spreading the heat."
  },
  {
    id: 100,
    text: "The surface of the moon gets incredibly hot during the lunar day.",
    type: HeatTransferType.RADIATION,
    explanation: "Without an atmosphere, the sun's rays hit the surface with full intensity."
  }
];
