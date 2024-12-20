export type Options = {
  tags: Tag[];
  classification: Classification[];
};

type Tag = {
  tag: string;
  class_id: number;
  en: string;
};

type Classification = {
  id: number;
  NSFW: number;
  en: string;
};

export const options: Options = {
  tags: [
    {
      tag: "pixel art",
      class_id: 0,
      en: "PixelArt",
    },
    {
      tag: "sketch",
      class_id: 0,
      en: "Sketch",
    },
    {
      tag: "watercolor",
      class_id: 0,
      en: "Watercolor",
    },
    {
      tag: "1990s style",
      class_id: 0,
      en: "1990SStyle",
    },
    {
      tag: "retro artstyle",
      class_id: 0,
      en: "RetroArtstyle",
    },
    {
      tag: "Chinese ink painting",
      class_id: 0,
      en: "ChineseInkPainting",
    },
    {
      tag: "oil painting",
      class_id: 0,
      en: "OilPainting",
    },
    {
      tag: "colored pencil painting",
      class_id: 0,
      en: "ColoredPencilPainting",
    },
    {
      tag: "pastel painting",
      class_id: 0,
      en: "PastelPainting",
    },
    {
      tag: "pov",
      class_id: 1,
      en: "Pov",
    },
    {
      tag: "from side",
      class_id: 1,
      en: "FromSide",
    },
    {
      tag: "from behind",
      class_id: 1,
      en: "FromBehind",
    },
    {
      tag: "from above",
      class_id: 1,
      en: "FromAbove",
    },
    {
      tag: "from below",
      class_id: 1,
      en: "FromBelow",
    },
    {
      tag: "fisheye",
      class_id: 1,
      en: "Fisheye",
    },
    {
      tag: "day",
      class_id: 2,
      en: "Day",
    },
    {
      tag: "dusk",
      class_id: 2,
      en: "Dusk",
    },
    {
      tag: "night",
      class_id: 2,
      en: "Night",
    },
    {
      tag: "sun",
      class_id: 2,
      en: "Sun",
    },
    {
      tag: "overcast",
      class_id: 2,
      en: "Overcast",
    },
    {
      tag: "rain",
      class_id: 2,
      en: "Rain",
    },
    {
      tag: "cityscape",
      class_id: 3,
      en: "Cityscape",
    },
    {
      tag: "landscape",
      class_id: 3,
      en: "Landscape",
    },
    {
      tag: "shore",
      class_id: 3,
      en: "Shore",
    },
    {
      tag: "forest",
      class_id: 3,
      en: "Forest",
    },
    {
      tag: "mountain",
      class_id: 3,
      en: "Mountain",
    },
    {
      tag: "nature",
      class_id: 3,
      en: "Nature",
    },
    {
      tag: "water",
      class_id: 3,
      en: "Water",
    },
    {
      tag: "lake",
      class_id: 3,
      en: "Lake",
    },
    {
      tag: "ocean",
      class_id: 3,
      en: "Ocean",
    },
    {
      tag: "river",
      class_id: 3,
      en: "River",
    },
    {
      tag: "waterfall",
      class_id: 3,
      en: "Waterfall",
    },
    {
      tag: "bridge",
      class_id: 3,
      en: "Bridge",
    },
    {
      tag: "city",
      class_id: 3,
      en: "City",
    },
    {
      tag: "field",
      class_id: 3,
      en: "Field",
    },
    {
      tag: "pond",
      class_id: 3,
      en: "Pond",
    },
    {
      tag: "windmill",
      class_id: 3,
      en: "Windmill",
    },
    {
      tag: "indoors",
      class_id: 4,
      en: "Indoors",
    },
    {
      tag: "bathroom",
      class_id: 4,
      en: "Bathroom",
    },
    {
      tag: "bathtub",
      class_id: 4,
      en: "Bathtub",
    },
    {
      tag: "shower",
      class_id: 4,
      en: "Shower",
    },
    {
      tag: "bedroom",
      class_id: 4,
      en: "Bedroom",
    },
    {
      tag: "classroom",
      class_id: 4,
      en: "Classroom",
    },
    {
      tag: "locker room",
      class_id: 4,
      en: "LockerRoom",
    },
    {
      tag: "kitchen",
      class_id: 4,
      en: "Kitchen",
    },
    {
      tag: "library",
      class_id: 4,
      en: "Library",
    },
    {
      tag: "cafe",
      class_id: 4,
      en: "Cafe",
    },
    {
      tag: "prison",
      class_id: 4,
      en: "Prison",
    },
    {
      tag: "outdoors",
      class_id: 5,
      en: "Outdoors",
    },
    {
      tag: "rooftop",
      class_id: 5,
      en: "Rooftop",
    },
    {
      tag: "school",
      class_id: 5,
      en: "School",
    },
    {
      tag: "beach",
      class_id: 5,
      en: "Beach",
    },
    {
      tag: "pool",
      class_id: 5,
      en: "Pool",
    },
    {
      tag: "poolside",
      class_id: 5,
      en: "Poolside",
    },
    {
      tag: "park",
      class_id: 5,
      en: "Park",
    },
    {
      tag: "shrine",
      class_id: 5,
      en: "Shrine",
    },
    {
      tag: "train station",
      class_id: 5,
      en: "TrainStation",
    },
    {
      tag: "ferris wheel",
      class_id: 5,
      en: "FerrisWheel",
    },
    {
      tag: "crosswalk",
      class_id: 5,
      en: "Crosswalk",
    },
    {
      tag: "bus stop",
      class_id: 5,
      en: "BusStop",
    },
    {
      tag: "cafe",
      class_id: 5,
      en: "Cafe",
    },
    {
      tag: "hospital",
      class_id: 5,
      en: "Hospital",
    },
    {
      tag: "onsen",
      class_id: 5,
      en: "Onsen",
    },
    {
      tag: "road",
      class_id: 5,
      en: "Road",
    },
    {
      tag: "street",
      class_id: 5,
      en: "Street",
    },
    {
      tag: "ruins",
      class_id: 5,
      en: "Ruins",
    },
    {
      tag: "castle",
      class_id: 5,
      en: "Castle",
    },
    {
      tag: "graveyard",
      class_id: 5,
      en: "Graveyard",
    },
    {
      tag: "prison",
      class_id: 5,
      en: "Prison",
    },
    {
      tag: "1girl",
      class_id: 6,
      en: "1Girl",
    },
    {
      tag: "2girls",
      class_id: 6,
      en: "2Girls",
    },
    {
      tag: "1boy",
      class_id: 6,
      en: "1Boy",
    },
    {
      tag: "2boys",
      class_id: 6,
      en: "2Boys",
    },
    {
      tag: "solo",
      class_id: 6,
      en: "Solo",
    },
    {
      tag: "multiple girls",
      class_id: 6,
      en: "MultipleGirls",
    },
    {
      tag: "smile",
      class_id: 7,
      en: "Smile",
    },
    {
      tag: "crying",
      class_id: 7,
      en: "Crying",
    },
    {
      tag: "sad",
      class_id: 7,
      en: "Sad",
    },
    {
      tag: "shy",
      class_id: 7,
      en: "Shy",
    },
    {
      tag: "embarrassed",
      class_id: 7,
      en: "Embarrassed",
    },
    {
      tag: "blush",
      class_id: 7,
      en: "Blush",
    },
    {
      tag: "angry",
      class_id: 7,
      en: "Angry",
    },
    {
      tag: "scared",
      class_id: 7,
      en: "Scared",
    },
    {
      tag: "seductive smile",
      class_id: 7,
      en: "SeductiveSmile",
    },
    {
      tag: "long hair",
      class_id: 8,
      en: "LongHair",
    },
    {
      tag: "short hair",
      class_id: 8,
      en: "ShortHair",
    },
    {
      tag: "medium hair",
      class_id: 8,
      en: "MediumHair",
    },
    {
      tag: "twintails",
      class_id: 8,
      en: "Twintails",
    },
    {
      tag: "ponytail",
      class_id: 8,
      en: "Ponytail",
    },
    {
      tag: "side ponytail",
      class_id: 8,
      en: "SidePonytail",
    },
    {
      tag: "two side up",
      class_id: 8,
      en: "TwoSideUp",
    },
    {
      tag: "bob cut",
      class_id: 8,
      en: "BobCut",
    },
    {
      tag: "ahoge",
      class_id: 8,
      en: "Ahoge",
    },
    {
      tag: "messy hair",
      class_id: 8,
      en: "MessyHair",
    },
    {
      tag: "wavy hair",
      class_id: 8,
      en: "WavyHair",
    },
    {
      tag: "hair over one eye",
      class_id: 8,
      en: "HairOverOneEye",
    },
    {
      tag: "hair over eyes",
      class_id: 8,
      en: "HairOverEyes",
    },
    {
      tag: "braid",
      class_id: 8,
      en: "Braid",
    },
    {
      tag: "french braid",
      class_id: 8,
      en: "FrenchBraid",
    },
    {
      tag: "hair bun",
      class_id: 8,
      en: "HairBun",
    },
    {
      tag: "blunt bangs",
      class_id: 8,
      en: "BluntBangs",
    },
    {
      tag: "crossed bangs",
      class_id: 8,
      en: "CrossedBangs",
    },
    {
      tag: "hair between eyes",
      class_id: 8,
      en: "HairBetweenEyes",
    },
    {
      tag: "black hair",
      class_id: 9,
      en: "BlackHair",
    },
    {
      tag: "brown hair",
      class_id: 9,
      en: "BrownHair",
    },
    {
      tag: "blonde hair",
      class_id: 9,
      en: "BlondeHair",
    },
    {
      tag: "pink hair",
      class_id: 9,
      en: "PinkHair",
    },
    {
      tag: "red hair",
      class_id: 9,
      en: "RedHair",
    },
    {
      tag: "green hair",
      class_id: 9,
      en: "GreenHair",
    },
    {
      tag: "blue hair",
      class_id: 9,
      en: "BlueHair",
    },
    {
      tag: "aqua hair",
      class_id: 9,
      en: "AquaHair",
    },
    {
      tag: "grey hair",
      class_id: 9,
      en: "GreyHair",
    },
    {
      tag: "purple hair",
      class_id: 9,
      en: "PurpleHair",
    },
    {
      tag: "white hair",
      class_id: 9,
      en: "WhiteHair",
    },
    {
      tag: "black eyes",
      class_id: 10,
      en: "BlackEyes",
    },
    {
      tag: "brown eyes",
      class_id: 10,
      en: "BrownEyes",
    },
    {
      tag: "yellow eyes",
      class_id: 10,
      en: "YellowEyes",
    },
    {
      tag: "pink eyes",
      class_id: 10,
      en: "PinkEyes",
    },
    {
      tag: "red eyes",
      class_id: 10,
      en: "RedEyes",
    },
    {
      tag: "green eyes",
      class_id: 10,
      en: "GreenEyes",
    },
    {
      tag: "blue eyes",
      class_id: 10,
      en: "BlueEyes",
    },
    {
      tag: "aqua eyes",
      class_id: 10,
      en: "AquaEyes",
    },
    {
      tag: "grey eyes",
      class_id: 10,
      en: "GreyEyes",
    },
    {
      tag: "purple eyes",
      class_id: 10,
      en: "PurpleEyes",
    },
    {
      tag: "white eyes",
      class_id: 10,
      en: "WhiteEyes",
    },
    {
      tag: "shirt",
      class_id: 11,
      en: "Shirt",
    },
    {
      tag: "t-shirt",
      class_id: 11,
      en: "T-Shirt",
    },
    {
      tag: "collared shirt",
      class_id: 11,
      en: "CollaredShirt",
    },
    {
      tag: "sleeveless shirt",
      class_id: 11,
      en: "SleevelessShirt",
    },
    {
      tag: "crop top",
      class_id: 11,
      en: "CropTop",
    },
    {
      tag: "dress shirt",
      class_id: 11,
      en: "DressShirt",
    },
    {
      tag: "dress",
      class_id: 11,
      en: "Dress",
    },
    {
      tag: "blouse",
      class_id: 11,
      en: "Blouse",
    },
    {
      tag: "camisole",
      class_id: 11,
      en: "Camisole",
    },
    {
      tag: "jacket",
      class_id: 11,
      en: "Jacket",
    },
    {
      tag: "vest",
      class_id: 11,
      en: "Vest",
    },
    {
      tag: "blazer",
      class_id: 11,
      en: "Blazer",
    },
    {
      tag: "sweater vest",
      class_id: 11,
      en: "SweaterVest",
    },
    {
      tag: "turtleneck",
      class_id: 11,
      en: "Turtleneck",
    },
    {
      tag: "sweater",
      class_id: 11,
      en: "Sweater",
    },
    {
      tag: "coat",
      class_id: 11,
      en: "Coat",
    },
    {
      tag: "hoodie",
      class_id: 11,
      en: "Hoodie",
    },
    {
      tag: "cardigan",
      class_id: 11,
      en: "Cardigan",
    },
    {
      tag: "tank top",
      class_id: 11,
      en: "TankTop",
    },
    {
      tag: "hat",
      class_id: 12,
      en: "Hat",
    },
    {
      tag: "mask",
      class_id: 12,
      en: "Mask",
    },
    {
      tag: "gloves",
      class_id: 12,
      en: "Gloves",
    },
    {
      tag: "choker",
      class_id: 12,
      en: "Choker",
    },
    {
      tag: "ribbon",
      class_id: 12,
      en: "Ribbon",
    },
    {
      tag: "flat chest",
      class_id: 13,
      en: "FlatChest",
    },
    {
      tag: "small breasts",
      class_id: 13,
      en: "SmallBreasts",
    },
    {
      tag: "large breasts",
      class_id: 13,
      en: "LargeBreasts",
    },
    {
      tag: "huge breasts",
      class_id: 13,
      en: "HugeBreasts",
    },
    {
      tag: "mole",
      class_id: 14,
      en: "Mole",
    },
    {
      tag: "mole under eye",
      class_id: 14,
      en: "MoleUnderEye",
    },
    {
      tag: "dark skin",
      class_id: 14,
      en: "DarkSkin",
    },
    {
      tag: "tan",
      class_id: 14,
      en: "Tan",
    },
    {
      tag: "cat ears",
      class_id: 14,
      en: "CatEars",
    },
    {
      tag: "cat tail",
      class_id: 14,
      en: "CatTail",
    },
    {
      tag: "nail polish",
      class_id: 14,
      en: "NailPolish",
    },
    {
      tag: "standing",
      class_id: 15,
      en: "Standing",
    },
    {
      tag: "lying",
      class_id: 15,
      en: "Lying",
    },
    {
      tag: "on back",
      class_id: 15,
      en: "OnBack",
    },
    {
      tag: "on stomach",
      class_id: 15,
      en: "OnStomach",
    },
    {
      tag: "all fours",
      class_id: 15,
      en: "AllFours",
    },
    {
      tag: "running",
      class_id: 15,
      en: "Running",
    },
    {
      tag: "sitting",
      class_id: 15,
      en: "Sitting",
    },
    {
      tag: "spread legs",
      class_id: 15,
      en: "SpreadLegs",
    },
    {
      tag: "kneeling",
      class_id: 15,
      en: "Kneeling",
    },
    {
      tag: "crossed legs",
      class_id: 15,
      en: "CrossedLegs",
    },
    {
      tag: "hugging own legs",
      class_id: 15,
      en: "HuggingOwnLegs",
    },
    {
      tag: "seiza",
      class_id: 15,
      en: "Seiza",
    },
    {
      tag: "wariza",
      class_id: 15,
      en: "Wariza",
    },
    {
      tag: "closed mouth",
      class_id: 15,
      en: "ClosedMouth",
    },
    {
      tag: "open mouse",
      class_id: 15,
      en: "OpenMouse",
    },
    {
      tag: "tongue out",
      class_id: 15,
      en: "TongueOut",
    },
    {
      tag: "hand between legs",
      class_id: 15,
      en: "HandBetweenLegs",
    },
    {
      tag: "nsfw",
      class_id: 16,
      en: "NSFW",
    },
    {
      tag: "sex",
      class_id: 16,
      en: "Sex",
    },
    {
      tag: "straddling",
      class_id: 16,
      en: "Straddling",
    },
    {
      tag: "sex from behind",
      class_id: 16,
      en: "SexFromBehind",
    },
    {
      tag: "suspended congress",
      class_id: 16,
      en: "SuspendedCongress",
    },
    {
      tag: "cowgirl position",
      class_id: 16,
      en: "CowgirlPosition",
    },
    {
      tag: "reverse cowgirl position",
      class_id: 16,
      en: "ReverseCowgirlPosition",
    },
    {
      tag: "missionary",
      class_id: 16,
      en: "Missionary",
    },
    {
      tag: "clothing aside",
      class_id: 16,
      en: "ClothingAside",
    },
    {
      tag: "ejaculation",
      class_id: 18,
      en: "Ejaculation",
    },
    {
      tag: "facial",
      class_id: 18,
      en: "Facial",
    },
    {
      tag: "cum in mouth",
      class_id: 18,
      en: "CumInMouth",
    },
    {
      tag: "cum in pussy",
      class_id: 18,
      en: "CumInPussy",
    },
    {
      tag: "cumdrip",
      class_id: 18,
      en: "Cumdrip",
    },
    {
      tag: "fellatio",
      class_id: 19,
      en: "Fellatio",
    },
    {
      tag: "paizuri",
      class_id: 19,
      en: "Paizuri",
    },
    {
      tag: "handjob",
      class_id: 19,
      en: "Handjob",
    },
    {
      tag: "testicle_sucking",
      class_id: 19,
      en: "Testicle_Sucking",
    },
    {
      tag: "breast press",
      class_id: 19,
      en: "BreastPress",
    },
    {
      tag: "areola slip",
      class_id: 19,
      en: "AreolaSlip",
    },
    {
      tag: "lifted by self",
      class_id: 19,
      en: "LiftedBySelf",
    },
    {
      tag: "pussy juice",
      class_id: 19,
      en: "PussyJuice",
    },
    {
      tag: "after sex",
      class_id: 19,
      en: "AfterSex",
    },
    {
      tag: "breast grab",
      class_id: 19,
      en: "BreastGrab",
    },
    {
      tag: "peeing",
      class_id: 19,
      en: "Peeing",
    },
    {
      tag: "futanari",
      class_id: 19,
      en: "Futanari",
    },
    {
      tag: "precum",
      class_id: 19,
      en: "Precum",
    },
    {
      tag: "pubic hair",
      class_id: 19,
      en: "PubicHair",
    },
    {
      tag: "hanging breasts",
      class_id: 19,
      en: "HangingBreasts",
    },
  ],
  classification: [
    {
      id: 0,
      NSFW: 0,
      en: "Artistic style",
    },
    {
      id: 1,
      NSFW: 0,
      en: "Gaze / Angle",
    },
    {
      id: 2,
      NSFW: 0,
      en: "Weather / Time",
    },
    {
      id: 3,
      NSFW: 0,
      en: "Landscape",
    },
    {
      id: 4,
      NSFW: 0,
      en: "Indoor",
    },
    {
      id: 5,
      NSFW: 0,
      en: "Outdoors",
    },
    {
      id: 6,
      NSFW: 0,
      en: "General characters",
    },
    {
      id: 7,
      NSFW: 0,
      en: "Expression",
    },
    {
      id: 8,
      NSFW: 0,
      en: "Hairstyle",
    },
    {
      id: 9,
      NSFW: 0,
      en: "Hair color",
    },
    {
      id: 10,
      NSFW: 0,
      en: "Eye color",
    },
    {
      id: 11,
      NSFW: 0,
      en: "Clothes",
    },
    {
      id: 12,
      NSFW: 0,
      en: "Decoration",
    },
    {
      id: 13,
      NSFW: 0,
      en: "Chest",
    },
    {
      id: 14,
      NSFW: 0,
      en: "Body",
    },
    {
      id: 15,
      NSFW: 0,
      en: "Pose",
    },
    {
      id: 16,
      NSFW: 1,
      en: "Sex (NSFW)",
    },
    {
      id: 17,
      NSFW: 1,
      en: "Clothing (NSFW)",
    },
    {
      id: 18,
      NSFW: 1,
      en: "Ejaculation (NSFW)",
    },
    {
      id: 19,
      NSFW: 1,
      en: "Others (NSFW)",
    },
  ],
};
