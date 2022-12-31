const ingredients = {
  unknown: {
    title: "Unknown",
    description: "Unknown ingredient.",
    icon: "e8449aa194b80b2c0b12bb150c7930bf.png"
  },
  common: {
    cabalOil: {
      title: "Cabal Oil",
      description:
        "An ingredient that toughens and thickens up anything it touches.",
      source: "Kill Cabal",
      icon: "862dbd96dfe363621d95a83ce9ada1cb.jpg"
    },
    chitinPowder: {
      title: "Chitin Powder",
      description:
        "An ingredient that adds a bit of spice to anything it touches.",
      source: "Kill Hive",
      icon: "8a52e59ade90e9de1bfe75187a841a54.jpg"
    },
    darkEtherCane: {
      title: "Dark Ether Cane",
      description:
        "An ingredient that adds a darkly sweet aroma to anything it touches.",
      source: "Kill Scorn",
      icon: "2fbf469af0aa2ed2219f0a9854cbaf27.jpg"
    },
    etherCane: {
      title: "Ether Cane",
      description:
        "An ingredient that adds an ethereal sweetness to anything it touches.",
      source: "Kill Fallen",
      icon: "d22b8aca25c15b82bf18c543f7c2045a.jpg"
    },
    takenButter: {
      title: "Taken Butter",
      description:
        "An ingredient that adds an echoing deliciousness to anything it touches.",
      source: "Kill Taken",
      icon: "cc2b721eeba1ff93b7d16e60034d696f.jpg"
    },
    vexMilk: {
      title: "Vex Milk",
      description:
        "An ingredient that adds a bit of radiolarian liquid to anything it touches.",
      source: "Kill Vex",
      icon: "164be4c9058691eedad58cf950c4f8d0.jpg"
    }
  },
  rare: {
    balancedFlavors: {
      title: "Balanced Flavors",
      description:
        "An ingredient that brings all the flavors in your recipe together.",
      source:
        "Kill with a Bow, a Scout Rifle, a Pulse Rifle, or a Sniper Rifle",
      icon: "653ce8c5ead9153fc6b95e1bfdafee3f.jpg"
    },
    bulletSpray: {
      title: "Bullet Spray",
      description: "The more, the merrier. ",
      source: "Kill with an Auto Rifle, a Submachine Gun or a Machine Gun",
      icon: "8f362597f7a89d00ab764a62d6af1a2a.jpg"
    },
    darkFrosting: {
      title: "Dark Frosting",
      description: "An ingredient that adds a decadently deep, rich flavor.",
      source: "Kill with Stasis from any source",
      icon: "5a25fb6a8dde8514da3258969d926bb0.jpg"
    },
    deliciousExplosion: {
      title: "Delicious Explosion",
      description: "Sudden and violent. And also tasty.",
      source: "Kill with a Grenade, a Grenade Launcher or a Rocket Launcher",
      icon: "9484a95d62bf16f28d92d95489da7092.jpg"
    },
    electricFlavour: {
      title: "Electric Flavor",
      description: "It courses through everything we touch… and taste.",
      source: "Kill with Arc from any source",
      icon: "e18671b8fd0b28f4f2e763c2d0b89952.jpg"
    },
    finishingTouch: {
      title: "Finishing Touch",
      description:
        "An ingredient that adds the necessary finishing touches to your recipe.",
      source: "Kill with a Finisher",
      icon: "4bd3835e4bd4e9cefc59cf7586323e4d.jpg"
    },
    flashOfInspiration: {
      title: "Flash of Inspiration",
      description: "Just the right thing at just the right time.",
      source: "Generate an Orb of Power",
      icon: "8725ad767c3b9c3bf0f170007b492034.jpg"
    },
    impossibleHeat: {
      title: "Impossible Heat",
      description: "Hotter than a Golden Gun on the surface of the sun.",
      source: "Kill with Solar from any source",
      icon: "587b74ebe33a31c3d67316daaa1c6775.jpg"
    },
    multifacetedFlavors: {
      title: "Multifaceted Flavors",
      description:
        "An ingredient that brings a depth of flavor to your recipe.",
      source: "Earn a Multikill",
      icon: "7647f90014f018494837f536ec496f17.jpg"
    },
    nullTaste: {
      title: "Null Taste",
      description: "Between the light and the dark lies deliciousness.",
      source: "Kill with Void from any source",
      icon: "332119f73f560572aa7fdfd245cb90e5.jpg"
    },
    perfectTaste: {
      title: "Perfect Taste",
      description: "This flavor will hit the bull's-eye every time.",
      source: "Earn a Precision Kill",
      icon: "13326575be1d6af65b1823972adbd082.jpg"
    },
    personalTouch: {
      title: "Personal Touch",
      description:
        "A delicious taste achieved by getting up close and personal.",
      source: "Kill with a Melee",
      icon: "06954590a246b60beccfeaf2088b7cc4.jpg"
    },
    sharpFlavor: {
      title: "Sharp Flavor",
      description: "A taste that will cut right through your taste buds.",
      source: "Kill with a Sword",
      icon: "b1fa823b599fb1fd3d3264d9e2fc1272.jpg"
    },
    superbTexture: {
      title: "Superb Texture",
      description: "An ingredient that gives your recipe a pleasing texture.",
      source: "Kill with a Super",
      icon: "7da5c69667c72928f1c452bbdb871d52.jpg"
    }
  }
};

const recipes = {
  ascendantAppleTart: {
    title: "Ascendant Apple Tart",
    description:
      "Deliver this exquisite delight to Queen Mara Sov in her chambers via the H.E.L.M.",
    icon: "bd5edc0ef99acd2c6da6af788f59e33c.jpg",
    ingredients: {
      common: ingredients.common.takenButter,
      rare: ingredients.rare.sharpFlavor
    }
  },
  ascendantOatmealRasinCookies: {
    title: "Ascendant Oatmeal Raisin Cookies",
    description:
      "Deliver these delicious and nostalgic treats to Eris Morn on the Moon.",
    icon: "a715b29f574c308f314634bd5d8a679f.jpg",
    ingredients: {
      common: ingredients.common.chitinPowder,
      rare: ingredients.rare.finishingTouch
    }
  },
  bittersweetBiscotti: {
    title: "Bittersweet Biscotti",
    description: "Deliver this thoughtful treat to Crow in the Tangled Shore.",
    icon: "510a4671d21565baa1c1b18f0f10f291.jpg",
    ingredients: {
      common: ingredients.common.darkEtherCane,
      rare: ingredients.rare.balancedFlavors
    }
  },
  blueberryCrumblers: {
    title: "Blueberry Crumblers",
    description: "Deliver this fresh recipe to Shaw in the Cosmodrome.",
    icon: "8e8528e4fc533b77cc86f5c34e2ab6f3.jpg",
    ingredients: {
      common: ingredients.common.etherCane,
      rare: ingredients.rare.bulletSpray
    }
  },
  brightDustedSnowballs: {
    title: "Bright-Dusted Snowballs",
    description: "Deliver this indulgent confection to Tess in the Tower.",
    icon: "7d27ad2bc1c7c02215e15f31c90c36d4.jpg",
    ingredients: {
      common: ingredients.common.chitinPowder,
      rare: ingredients.rare.multifacetedFlavors
    }
  },
  candyDeadGhosts: {
    title: "Candy Dead Ghosts",
    description:
      "Deliver these… things to the Spider in his safehouse on the Tangled Shore.",
    icon: "a32bb837abbc51c04a13240c18f89b28.jpg",
    ingredients: {
      common: ingredients.common.darkEtherCane,
      rare: ingredients.rare.flashOfInspiration
    }
  },
  chocolateShipCookies: {
    title: "Chocolate Ship Cookies",
    description:
      "Deliver these finely tuned treats to Amanda Holliday in the Tower Hangar.",
    icon: "9cc8a0c00a4421866016766e3e96bab6.jpg",
    ingredients: {
      common: ingredients.common.cabalOil,
      rare: ingredients.rare.nullTaste
    }
  },
  classicButterCookies: {
    title: "Classic Butter Cookies",
    description: "Deliver this traditional treat to Eva in the Tower.",
    icon: "3a2819131bdbb451a0ea2d36c3d8d4a4.jpg",
    ingredients: {
      common: ingredients.common.takenButter,
      rare: ingredients.rare.superbTexture
    }
  },
  darkChocolateMotes: {
    title: "Dark Chocolate Motes",
    description: "Deliver these tempting morsels to the Drifter in the Annex.",
    icon: "8a712271f7de627e4cf38eb392e8f6f9.jpg",
    ingredients: {
      common: ingredients.common.takenButter,
      rare: ingredients.rare.nullTaste
    }
  },
  eliksniBirdseed: {
    title: "Eliksni Birdseed",
    description:
      "Deliver this high-end falcon food to Hawthorne's falcon Louis in the Tower Bazaar.",
    icon: "98f8ff6b26899071de1b2b6c1fc819b0.jpg",
    ingredients: {
      common: ingredients.common.etherCane,
      rare: ingredients.rare.personalTouch
    }
  },
  ethericColdsnaps: {
    title: "Etheric Coldsnaps",
    description: "Deliver this frozen delicacy to Variks on Europa.",
    icon: "1944ff2bf6e26bec541914ecf2202640.jpg",
    ingredients: {
      common: ingredients.common.chitinPowder,
      rare: ingredients.rare.electricFlavour
    }
  },
  gentlemansShortbread: {
    title: "Gentleman's Shortbread",
    description:
      "Deliver this tasteful, tasty treat to Devrim Kay in Trostland in the European Dead Zone.",
    icon: "26a3ef37eeef4a9b0293a7537af2dda1.jpg",
    ingredients: {
      common: ingredients.common.etherCane,
      rare: ingredients.rare.perfectTaste
    }
  },
  gjallardoodles: {
    title: "Gjallardoodles",
    description:
      "Deliver these explosively delicious treats to Commander Zavala in the Tower Courtyard.",
    icon: "bb0069e9efc9698f366d63fdce0c6db7.jpg",
    ingredients: {
      common: ingredients.common.etherCane,
      rare: ingredients.rare.deliciousExplosion
    }
  },
  hotCrossfireBuns: {
    title: "Hot Crossfire Buns",
    description:
      "Deliver this impeccably crafted treat to Ada-1 in the Tower Annex.",
    icon: "ff9810abba7b40868b013eb944fa5756.jpg",
    ingredients: {
      common: ingredients.common.etherCane,
      rare: ingredients.rare.balancedFlavors
    }
  },
  illFortuneCookies: {
    title: "Ill-Fortune Cookies",
    description:
      "Deliver these cursed yet delicious treats to Petra Venj wherever she can be found in the Reef.",
    icon: "5c1d4e4af15100f1e5b2154dd50927a9.jpg",
    ingredients: {
      common: ingredients.common.darkEtherCane,
      rare: ingredients.rare.impossibleHeat
    }
  },
  infiniteForestCake: {
    title: "Infinite Forest Cake",
    description:
      "Deliver this conflicted confection to Failsafe in the Exodus Black on Nessus.",
    icon: "a6f21c09d4741ec548ccde23afc3e943.jpg",
    ingredients: {
      common: ingredients.common.vexMilk,
      rare: ingredients.rare.impossibleHeat
    }
  },
  lavenderRibbonCookies: {
    title: "Lavender Ribbon Cookies",
    description:
      "Deliver these sweet and triumphant treats to Saint-14 in the Tower Hangar.",
    icon: "1cece8791684e7142627c7f2fa2da0dd.jpg",
    ingredients: {
      common: ingredients.common.vexMilk,
      rare: ingredients.rare.personalTouch
    }
  },
  stalwortThins: {
    title: "Stalwort Thins",
    description: "Deliver this timeless classic to the Exo Stranger on Europa.",
    icon: "10e6e4678c665776a1bc18417de365f6.jpg",
    ingredients: {
      common: ingredients.common.darkEtherCane,
      rare: ingredients.rare.darkFrosting
    }
  },
  strangeCookies: {
    title: "Strange Cookies",
    description:
      "Deliver these treats, whose will is clearly not their own, to Xûr wherever the Nine have wished him to be.",
    icon: "72cc666b334a39996f74b09a4850e773.jpg",
    ingredients: {
      common: ingredients.common.takenButter,
      rare: ingredients.rare.electricFlavour
    }
  },
  telemetryTapioca: {
    title: "Telemetry Tapioca",
    description:
      "Deliver this dismantling delight to Banshee-44 in the Tower Courtyard.",
    icon: "85bc7a8c18b58e6286fec57dc28ce077.jpg",
    ingredients: {
      common: ingredients.common.vexMilk,
      rare: ingredients.rare.bulletSpray
    }
  },
  thousandLayerCookie: {
    title: "Thousand-Layer Cookie",
    description:
      "Deliver this enticing, crafty treat to Riven in the Dreaming City.",
    icon: "a7bc9d420b9afdfb3397f825a1d76185.jpg",
    ingredients: {
      common: ingredients.common.takenButter,
      rare: ingredients.rare.deliciousExplosion
    }
  },
  travelerDonutHoles: {
    title: "Traveler Donut Holes",
    description:
      "Deliver these unknowable alabaster spheres to Ikora Rey in the Tower Bazaar.",
    icon: "b063620b4693d4a9df8f5aa62311e7d4.jpg",
    ingredients: {
      common: ingredients.common.cabalOil,
      rare: ingredients.rare.flashOfInspiration
    }
  },
  vanillaBlades: {
    title: "Vanilla Blades",
    description:
      "Deliver these deadly delights to Lord Shaxx in the Tower Courtyard.",
    icon: "015e27d918af700828cdf30c2504e5ef.jpg",
    ingredients: {
      common: ingredients.common.cabalOil,
      rare: ingredients.rare.sharpFlavor
    }
  },
  burntEdgeTransits: {
    title: "Burnt Edge Transits",
    description:
      "Deliver these highly sought-after treats to Master Rahool in the Tower Courtyard.",
    icon: "72caa9e2c719879cd7f95f575f722a5b.jpg",
    ingredients: {
      common: ingredients.unknown,
      rare: ingredients.unknown
    }
  }
};

const classes = {
  header: [
    "text-4xl",
    "font-bold",
    "m-4",
    "pb-1.5",
    "border-b-2",
    "border-grey-500"
  ],
  list: ["flex", "flex-wrap"],

  icon: ["border-2", "border-grey-500"],
  title: ["font-bold", "mb-1"],
  description: ["my-1"],
  text: ["px-3"],

  ingredient: ["flex", "w-full", "max-w-md", "items-start", "p-4", "my-4"],
  source: ["italic", "mt-1"],

  recipe: ["flex", "items-start", "p-4", "my-4", "w-full"],

  recipeHeader: ["text-lg", "font-bold", "mx-3"],
  recipePart: ["flex", "items-center", "w-full", "max-w-xs"],
  recipeOutput: ["flex", "items-start", "w-full", "max-w-md"],
  equation: ["text-6xl", "font-bold", "mx-5", "pt-3"]
};

function generateIcon({ icon, title }) {
  const iconEl = document.createElement("img");
  iconEl.src = `icons/${icon}`;
  iconEl.alt = title;
  iconEl.title = title;
  iconEl.classList.add(...classes.icon);

  return iconEl;
}

function generateIngredient({ title, description, source, icon }) {
  const iconEl = generateIcon({ icon, title });

  const titleEl = document.createElement("div");
  titleEl.innerText = title;
  titleEl.classList.add(...classes.title);

  const descriptionEl = document.createElement("div");
  descriptionEl.innerText = description;
  descriptionEl.classList.add(...classes.description);

  const sourceEl = document.createElement("div");
  sourceEl.innerText = `Source: ${source}`;
  sourceEl.classList.add(...classes.source);

  const textEl = document.createElement("div");
  textEl.appendChild(titleEl);
  textEl.appendChild(descriptionEl);
  textEl.appendChild(sourceEl);
  textEl.classList.add(...classes.text);

  const ingredientEl = document.createElement("div");
  ingredientEl.appendChild(iconEl);
  ingredientEl.appendChild(textEl);
  ingredientEl.classList.add(...classes.ingredient);

  return ingredientEl;
}

function generateRecipe({
  title,
  description,
  icon,
  ingredients: { common, rare }
}) {
  const commonIconEl = generateIcon(common);
  const commonHeaderEl = document.createElement("div");
  commonHeaderEl.innerText = common.title;
  commonHeaderEl.classList.add(...classes.recipeHeader);

  const commonEl = document.createElement("div");
  commonEl.appendChild(commonIconEl);
  commonEl.appendChild(commonHeaderEl);
  commonEl.classList.add(...classes.recipePart);

  const rareIconEl = generateIcon(rare);
  const rareHeaderEl = document.createElement("div");
  rareHeaderEl.innerText = rare.title;
  rareHeaderEl.classList.add(...classes.recipeHeader);

  const rareEl = document.createElement("div");
  rareEl.appendChild(rareIconEl);
  rareEl.appendChild(rareHeaderEl);
  rareEl.classList.add(...classes.recipePart);

  const plusEl = document.createElement("div");
  plusEl.innerText = "+";
  plusEl.classList.add(...classes.equation);

  const cookieIconEl = generateIcon({ icon, title });

  const titleEl = document.createElement("div");
  titleEl.innerText = title;
  titleEl.classList.add(...classes.title);

  const descriptionEl = document.createElement("div");
  descriptionEl.innerText = description;
  descriptionEl.classList.add(...classes.description);

  const textEl = document.createElement("div");
  textEl.appendChild(titleEl);
  textEl.appendChild(descriptionEl);
  textEl.classList.add(...classes.text);

  const outputEl = document.createElement("div");
  outputEl.appendChild(cookieIconEl);
  outputEl.appendChild(textEl);
  outputEl.classList.add(...classes.recipeOutput);

  const equalsEl = document.createElement("div");
  equalsEl.innerText = "=";
  equalsEl.classList.add(...classes.equation);

  const recipeEl = document.createElement("div");
  recipeEl.appendChild(commonEl);
  recipeEl.appendChild(plusEl);
  recipeEl.appendChild(rareEl);
  recipeEl.appendChild(equalsEl);
  recipeEl.appendChild(outputEl);
  recipeEl.classList.add(...classes.recipe);

  return recipeEl;
}

function generateIngredientsList(ingredients) {
  const ingredientsListEl = document.createElement("div");
  ingredientsListEl.classList.add(...classes.list);

  Object.entries(ingredients).forEach(([, ingredient]) => {
    ingredientsListEl.appendChild(generateIngredient(ingredient));
  });

  return ingredientsListEl;
}

function generateCookbook(appEl) {
  const commonIngredientsHeaderEl = document.createElement("div");
  commonIngredientsHeaderEl.innerText = "Common Ingredients";
  commonIngredientsHeaderEl.classList.add(...classes.header);

  const commonIngredientsListEl = generateIngredientsList(ingredients.common);

  const rareIngredientsHeaderEl = document.createElement("div");
  rareIngredientsHeaderEl.innerText = "Rare Ingredients";
  rareIngredientsHeaderEl.classList.add(...classes.header);

  const rareIngredientsListEl = generateIngredientsList(ingredients.rare);

  const recipesHeaderEl = document.createElement("div");
  recipesHeaderEl.innerText = "Recipes";
  recipesHeaderEl.classList.add(...classes.header);

  const recipesListEl = document.createElement("div");
  recipesListEl.classList.add(...classes.list);

  Object.entries(recipes).forEach(([, recipe]) => {
    recipesListEl.appendChild(generateRecipe(recipe));
  });

  appEl.appendChild(commonIngredientsHeaderEl);
  appEl.appendChild(commonIngredientsListEl);
  appEl.appendChild(rareIngredientsHeaderEl);
  appEl.appendChild(rareIngredientsListEl);
  appEl.appendChild(recipesHeaderEl);
  appEl.appendChild(recipesListEl);
}

window.addEventListener("load", () => {
  const appEl = document.getElementById("app");

  generateCookbook(appEl);
});
