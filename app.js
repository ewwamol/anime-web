const akatsukiMembers = [
  {
    name: "Pain (Nagato Uzumaki)",
    image: "./akatsuki/pain.jpg",
    bio: "Leader of Akatsuki, wielder of the Rinnegan.",
    power: "Rinnegan, Six Paths of Pain, Almighty Push",
  },
  {
    name: "Konan",
    image: "./akatsuki/konan.jpg",
    bio: "The paper angel of Akatsuki, loyal to Nagato.",
    power: "Paper Jutsu, Paper Ocean",
  },
  {
    name: "Itachi Uchiha",
    image: "./akatsuki/Itachi Uchiha.jpg",
    bio: "Uchiha prodigy, elder brother of Sasuke.",
    power: "Mangekyō Sharingan, Tsukuyomi, Amaterasu",
  },
  {
    name: "Kisame Hoshigaki",
    image: "./akatsuki/Kisame .jpg",
    bio: "The Monster of the Hidden Mist.",
    power: "Samehada Sword, Shark Bomb Jutsu",
  },
  {
    name: "Deidara",
    image: "./akatsuki/deidara.jpg",
    bio: "Explosive clay artist and bomber.",
    power: "C1-C4 Clay Explosives, C0 Self-Destruct",
  },
  {
    name: "Sasori",
    image: "./akatsuki/sasori.jpg",
    bio: "Master puppeteer who turned himself into a puppet.",
    power: "Human Puppets, Iron Sand",
  },
  {
    name: "Hidan",
    image: "./akatsuki/hidan.jpg",
    bio: "Immortal religious zealot of Jashin.",
    power: "Immortality, Ritual Curse Technique",
  },
  {
    name: "Kakuzu",
    image: "./akatsuki/kakuzu.jpg",
    bio: "Money-loving ninja with multiple hearts.",
    power: "Earth Grudge Fear, Elemental Masks",
  },
  {
    name: "Zetsu (Black & White)",
    image: "./akatsuki/Zetsu (Black & White).jpg",
    bio: "Akatsuki’s spy and manipulator.",
    power: "Plant Jutsu, Merging with Nature",
  },
  {
    name: "Tobi (Obito Uchiha)",
    image: "./img/characters/tobi1.jpg",
    bio: "Masked man manipulating Akatsuki from the shadows.",
    power: "Kamui, Sharingan, Wood Style",
  },
  {
    name: "Jūzō Biwa (anime only)",
    image: "./akatsuki/Jūzō Biwa1.jpg",
    bio: "Former Seven Ninja Swordsmen of the Mist, anime-exclusive.",
    power: "Executioner’s Blade, Water Style",
  },
  {
    name: "Orochimaru",
    image: "./akatsuki/orochimaru.jpg",
    bio: "One of the Legendary Sannin, obsessed with immortality.",
    power: "Snake Jutsu, Reanimation Jutsu",
  },
];

// Function to display Akatsuki members
function akatsukiListOnDis() {
  let List = document.querySelector(".akatsuki-cards");
  if (!List) return;

  let listHTML = "";
  akatsukiMembers.forEach((member, index) => {
    listHTML += `
      <div class="akatsuki-card">
        <img src="${member.image}" alt="${member.name}" class="anime-image" />
        <h3 class="akatsuki-name">${member.name}</h3>
        <div class="akatsuki-hover">
          <p>${member.bio}</p>
          <p><strong>Power:</strong> ${member.power}</p>
          <button class="watchlist-btn" onclick="addToWatchlist(akatsukiMembers[${index}])">Add to Watchlist</button>
        </div>
      </div>`;
  });

  List.innerHTML = listHTML;
}

akatsukiListOnDis();

const characters = [
  {
    name: "Naruto Uzumaki",
    image: "./img/characters/naruto.jpg",
    bio: "The knucklehead ninja of Konoha with a dream to become Hokage.",
    power: "Nine-Tails Chakra, Sage Mode, Rasengan",
  },
  {
    name: "Goku",
    image: "./img/characters/goku3.png",
    bio: "Saiyan warrior from Planet Vegeta, Earth's protector.",
    power: "Ultra Instinct, Super Saiyan, Kamehameha",
  },
  {
    name: "Monkey D. Luffy",
    image: "./img/characters/luffy.jpg",
    bio: "Captain of the Straw Hat Pirates, wants to become King of the Pirates.",
    power: "Gum-Gum Fruit, Gear 5, Haki",
  },
  {
    name: "Itachi Uchiha",
    image: "./img/characters/itachi1.jpg",
    bio: "Uchiha prodigy with a tragic past.",
    power: "Mangekyō Sharingan, Tsukuyomi, Amaterasu",
  },
  {
    name: "Levi Ackerman",
    image: "./img/characters/levi.jpg",
    bio: "Humanity's strongest soldier in Attack on Titan.",
    power: "Ackerman Bloodline, Omni-Directional Gear Master",
  },
  {
    name: "Gojo Satoru",
    image: "./img/characters/gojo.jpg",
    bio: "Strongest Jujutsu Sorcerer from Jujutsu Kaisen.",
    power: "Limitless, Six Eyes, Hollow Purple",
  },
  {
    name: "Sasuke Uchiha",
    image: "./img/characters/sasuke.jpg",
    bio: "Naruto’s rival, seeking revenge for his clan.",
    power: "Rinnegan, Sharingan, Chidori",
  },
  {
    name: "Killua Zoldyck",
    image: "./img/characters/kilua.jpg",
    bio: "Assassin prodigy from the Zoldyck family.",
    power: "Godspeed, Thunderbolt, Assassin Techniques",
  },
  {
    name: "Asta",
    image: "./img/characters/asta.jpg",
    bio: "Magicless boy with anti-magic powers.",
    power: "Anti-Magic Swords, Devil Union",
  },
  {
    name: "Eren Yeager",
    image: "./img/characters/aren.jpg",
    bio: "Titan shifter, fighting for Eldian freedom.",
    power: "Founding Titan, Attack Titan, War Hammer Titan",
  },
  {
    name: "Roronoa Zoro",
    image: "./img/characters/Roronoa Zoro.jpg",
    bio: "Straw Hat Pirates' swordsman, dreams of being world’s best.",
    power: "Santoryu, Asura Mode, Haki",
  },
  {
    name: "Tanjiro Kamado",
    image: "./img/characters/tanjiro.jpeg",
    bio: "Demon Slayer seeking to cure his sister.",
    power: "Sun Breathing, Water Breathing",
  },
  {
    name: "Madara Uchiha",
    image: "./img/characters/madara3.jpg",
    bio: "Legendary Uchiha clan leader.",
    power: "Rinnegan, Susanoo, Infinite Tsukuyomi",
  },
  {
    name: "Lelouch vi Britannia",
    image: "./img/characters/lelouch.jpg",
    bio: "Rebel prince leading against Britannia Empire.",
    power: "Geass: Absolute Command",
  },
  {
    name: "Edward Elric",
    image: "./img/characters/edward.jpg",
    bio: "State Alchemist seeking to restore his brother’s body.",
    power: "Alchemy, Hand Clap Transmutation",
  },
];

// Function to display character cards
function characterListOnDis(filteredList = characters) {
  let List = document.querySelector(".cards");
  if (!List) return;

  let listHTML = "";
  filteredList.forEach((char) => {
    listHTML += `
      <div class="character-card">
        <img src="${char.image}" alt="character-poster" class="anime-image" />
        <h3 class="character-name">${char.name}</h3>

        <div class="character-hover">
          ${
            char.bio
              ? `<p>${char.bio}</p>
           <p><strong>Power:</strong> ${char.power}</p>
`
              : ""
          }
          <button class="watchlist-btn" onclick='addToWatchlist(${JSON.stringify(
            char
          )})'>❤️ Add to Watchlist</button>
        </div>
      </div>`;
  });

  List.innerHTML = listHTML;
}

// Naruto Characters Data
const narutoCharacters = [
  // Main Characters
  {
    id: 1,
    name: "Naruto Uzumaki",
    role: "Main Character",
    bio: "A ninja from the Hidden Leaf Village, known for his cheerful personality and determination to become Hokage.",
    powers: [
      "Shadow Clone Jutsu",
      "Rasengan",
      "Nine-Tails Chakra Mode",
      "Sage Mode",
    ],
    image: "./img/characters/naruto1.jpg",
  },
  {
    id: 2,
    name: "Sasuke Uchiha",
    role: "Main Character",
    bio: "Naruto's rival and talented ninja from the Uchiha clan, skilled in Sharingan and Chidori techniques.",
    powers: ["Sharingan", "Chidori", "Susanoo", "Rinnegan"],
    image: "./img/characters/sasuke1.jpg",
  },
  {
    id: 3,
    name: "Sakura Haruno",
    role: "Main Character",
    bio: "A ninja known for her medical ninjutsu and superhuman strength, and one of Naruto’s closest friends.",
    powers: ["Medical Ninjutsu", "Super Strength", "Chakra Control"],
    image: "./img/characters/sakura.jpg",
  },
  {
    id: 4,
    name: "Kakashi Hatake",
    role: "Side Character",
    bio: "Known as the Copy Ninja, former leader of Team 7, and skilled in many jutsu techniques.",
    powers: ["Sharingan", "Lightning Blade", "Kamui", "Tactical Genius"],
    image: "./img/characters/kakashi.jpg",
  },
  {
    id: 5,
    name: "Shikamaru Nara",
    role: "Side Character",
    bio: "A lazy but genius ninja with strong strategic skills and shadow manipulation jutsu.",
    powers: ["Shadow Possession Jutsu", "Strategic Genius", "Chidori"],
    image: "./img/characters/shikamaru.jpg",
  },
  {
    id: 6,
    name: "Hinata Hyuga",
    role: "Main Character",
    bio: "A gentle ninja from the Hyuga clan, skilled in Byakugan and Gentle Fist techniques.",
    powers: ["Byakugan", "Gentle Fist", "Protective Barrier"],
    image: "./img/characters/hinata.jpg",
  },
  {
    id: 7,
    name: "Rock Lee",
    role: "Side Character",
    bio: "A ninja who specializes in taijutsu and hard work to overcome his inability to use ninjutsu or genjutsu.",
    powers: ["Strong Taijutsu", "Eight Gates", "Leaf Hurricane"],
    image: "./img/characters/rock.jpg",
  },
  {
    id: 8,
    name: "Gaara",
    role: "Main Character",
    bio: "The Kazekage of the Hidden Sand Village, capable of manipulating sand with his chakra.",
    powers: ["Sand Manipulation", "Sand Shield", "Shukaku's Power"],
    image: "./img/characters/gaara.jpg",
  },
  {
    id: 9,
    name: "Tsunade",
    role: "Side Character",
    bio: "The Fifth Hokage, known for her medical ninjutsu and immense strength.",
    powers: ["Medical Ninjutsu", "Super Strength", "Creation Rebirth"],
    image: "./img/characters/tsunade.jpg",
  },
  {
    id: 10,
    name: "Jiraiya",
    role: "Side Character",
    bio: "One of the Legendary Sannin, a powerful ninja and Naruto's mentor.",
    powers: ["Sage Mode", "Rasengan", "Summoning Jutsu"],
    image: "./img/characters/jiraiya.jpg",
  },

  // Akatsuki Members
  {
    id: 11,
    name: "Itachi Uchiha",
    role: "Akatsuki Member",
    bio: "Sasuke’s older brother, a prodigy with powerful genjutsu skills and Sharingan mastery.",
    powers: ["Mangekyo Sharingan", "Amaterasu", "Tsukuyomi", "Susanoo"],
    image: "./img/characters/itachi1.jpg",
  },
  {
    id: 12,
    name: "Pain (Nagato)",
    role: "Akatsuki Leader",
    bio: "Leader of Akatsuki, wielder of the Rinnegan, with control over six bodies to perform powerful jutsu.",
    powers: [
      "Rinnegan",
      "Six Paths Technique",
      "Almighty Push",
      "Chibaku Tensei",
    ],
    image: "./img/characters/pain2.jpg",
  },
  {
    id: 13,
    name: "Kisame Hoshigaki",
    role: "Akatsuki Member",
    bio: "Known as the Monster of the Hidden Mist, wields the giant sword Samehada.",
    powers: ["Shark-like Abilities", "Water Style Jutsu", "Samehada Sword"],
    image: "./akatsuki/Kisame .jpg",
  },
  {
    id: 14,
    name: "Konan",
    role: "Akatsuki Member",
    bio: "The only female member of Akatsuki, uses paper-based jutsu.",
    powers: ["Paper Jutsu", "Explosive Tags", "Flight via Paper"],
    image: "./akatsuki/konan.jpg",
  },
  {
    id: 15,
    name: "Deidara",
    role: "Akatsuki Member",
    bio: "An explosive expert who uses clay to create bombs.",
    powers: ["Explosive Clay", "C3 Bombs", "Flight via Clay Birds"],
    image: "./akatsuki/deidara.jpg",
  },
  {
    id: 16,
    name: "Sasori",
    role: "Akatsuki Member",
    bio: "A puppet master and poison expert.",
    powers: ["Puppet Mastery", "Poison", "Hiruko Puppet Armor"],
    image: "./akatsuki/sasori.jpg",
  },
  {
    id: 17,
    name: "Hidan",
    role: "Akatsuki Member",
    bio: "Immortal and a follower of Jashin, uses a ritual to link himself to his enemies.",
    powers: ["Immortality", "Curse Ritual", "Scythe Combat"],
    image: "./akatsuki/hidan.jpg",
  },
  {
    id: 18,
    name: "Kakuzu",
    role: "Akatsuki Member",
    bio: "A ninja who can manipulate his body threads to sew himself back together.",
    powers: ["Body Threads", "Multiple Hearts", "Elemental Jutsu"],
    image: "./akatsuki/kakuzu.jpg",
  },
  {
    id: 19,
    name: "Zetsu",
    role: "Akatsuki Member",
    bio: "A plant-like being with dual personalities.",
    powers: ["Spying", "Merging with Environment", "Black and White Zetsu"],
    image: "./akatsuki/Zetsu (Black & White).jpg",
  },
  {
    id: 20,
    name: "Orochimaru",
    role: "Side Character",
    bio: "One of the Legendary Sannin, a rogue ninja obsessed with immortality and forbidden jutsu.",
    powers: ["Snake Jutsu", "Summoning Snakes", "Regeneration"],
    image: "./img/characters/oruchi.jpg",
  },

  {
    id: 21,
    name: "Shino Aburame",
    role: "Side Character",
    bio: "A quiet ninja who uses insects to fight.",
    powers: ["Insect Jutsu", "Parasitic Bugs", "Insect Swarm"],
    image: "./img/characters/shino.jpg",
  },
  {
    id: 22,
    name: "Choji Akimichi",
    role: "Side Character",
    bio: "A member of the Akimichi clan, uses body expansion techniques.",
    powers: ["Body Expansion", "Human Bullet Tank", "Multi-Size Technique"],
    image: "./img/characters/choji.jpg",
  },
  {
    id: 23,
    name: "Ino Yamanaka",
    role: "Side Character",
    bio: "A ninja skilled in mind transfer techniques.",
    powers: ["Mind Transfer", "Medical Ninjutsu", "Sensory Skills"],
    image: "./img/characters/ino.jpg",
  },
  {
    id: 24,
    name: "Kiba Inuzuka",
    role: "Side Character",
    bio: "A ninja who fights alongside his dog Akamaru.",
    powers: ["Beast Mimicry", "Enhanced Senses", "Fang Over Fang"],
    image: "./img/characters/kiba.jpg",
  },
  {
    id: 25,
    name: "Akamaru",
    role: "Side Character",
    bio: "Kiba's loyal ninja dog partner.",
    powers: ["Tracking", "Enhanced Speed", "Fang Over Fang"],
    image: "./img/characters/akamaru.jpg",
  },
  {
    id: 26,
    name: "Might Guy",
    role: "Side Character",
    bio: "A taijutsu master and mentor of Rock Lee.",
    powers: ["Eight Gates", "Strong Taijutsu", "Leaf Hurricane"],
    image: "./img/characters/might.jpg",
  },
  {
    id: 27,
    name: "Tenten",
    role: "Side Character",
    bio: "A ninja who specializes in weaponry and scroll techniques.",
    powers: ["Weapon Jutsu", "Summoning Weapons", "Accuracy"],
    image: "./img/characters/tenten.jpg",
  },
  {
    id: 28,
    name: "Minato Namikaze",
    role: "Side Character",
    bio: "The Fourth Hokage and Naruto’s father, known for his speed and sealing jutsu.",
    powers: ["Flying Thunder God Technique", "Rasengan", "Sealing Jutsu"],
    image: "./img/characters/minato.jpg",
  },
  {
    id: 29,
    name: "Neji Hyuga",
    role: "Side Character",
    bio: "A genius from the Hyuga clan with Byakugan abilities.",
    powers: ["Byakugan", "Gentle Fist", "Rotation Defense"],
    image: "./img/characters/neji.jpg",
  },
  {
    id: 30,
    name: "Shisui Uchiha",
    role: "Side Character",
    bio: "A talented Uchiha clan member known for his genjutsu skills.",
    powers: ["Mangekyo Sharingan", "Kotoamatsukami"],
    image: "./img/characters/shisui.jpg",
  },
  {
    id: 31,
    name: "Kurenai Yuhi",
    role: "Side Character",
    bio: "A jonin instructor specializing in genjutsu.",
    powers: ["Genjutsu", "Kurenai's Genjutsu Techniques"],
    image: "./img/characters/kurenai.jpg",
  },
  {
    id: 32,
    name: "Asuma Sarutobi",
    role: "Side Character",
    bio: "A jonin and leader of Team 10, known for his chakra blades.",
    powers: ["Chakra Blades", "Fire Style Jutsu", "Taijutsu"],
    image: "./img/characters/asuma.jpg",
  },
  {
    id: 33,
    name: "Iruka Umino",
    role: "Side Character",
    bio: "Naruto’s teacher and mentor at the academy.",
    powers: ["Basic Ninjutsu", "Teaching"],
    image: "./img/characters/iruka.jpg",
  },
  {
    id: 34,
    name: "Kankuro",
    role: "Side Character",
    bio: "A puppeteer ninja from the Hidden Sand Village.",
    powers: ["Puppet Mastery", "Poison Use"],
    image: "./img/characters/kankuro.jpg",
  },
  {
    id: 35,
    name: "Temari",
    role: "Side Character",
    bio: "A kunoichi from the Hidden Sand Village who uses a giant fan to manipulate wind.",
    powers: ["Wind Style Jutsu", "Giant Fan", "Summoning"],
    image: "./img/characters/tamari.jpg",
  },
  {
    id: 36,
    name: "Yamato",
    role: "Side Character",
    bio: "A member of the ANBU, able to use Wood Style jutsu.",
    powers: ["Wood Style", "Water Style", "Suppression Jutsu"],
    image: "./img/characters/yamato.jpg",
  },
  {
    id: 37,
    name: "Sai",
    role: "Side Character",
    bio: "A member of Team 7, skilled in ink-based jutsu.",
    powers: ["Ink Techniques", "Super Strength", "Stealth"],
    image: "./img/characters/sai.jpg",
  },
  {
    id: 38,
    name: "Anko Mitarashi",
    role: "Side Character",
    bio: "A jonin who specializes in snake techniques.",
    powers: ["Snake Jutsu", "Summoning Snakes"],
    image: "./img/characters/anko.jpg",
  },
  {
    id: 39,
    name: "Danzo Shimura",
    role: "Side Character",
    bio: "A controversial leader with multiple Sharingan implanted in his arm.",
    powers: ["Sharingan", "Wind Release", "Sealing Jutsu"],
    image: "./img/characters/danzo.jpg",
  },
  {
    id: 40,
    name: "Kabuto Yakushi",
    role: "Side Character",
    bio: "A medical ninja and Orochimaru’s right hand.",
    powers: ["Medical Ninjutsu", "Snake Transformation", "Healing"],
    image: "./img/characters/kabuto.jpg",
  },

  {
    id: 41,
    name: "Jugo",
    role: "Side Character",
    bio: "A member of Taka with natural absorption of natural energy.",
    powers: ["Sage Transformation", "Natural Energy Absorption"],
    image: "./img/characters/jugo.jpg",
  },
  {
    id: 42,
    name: "Suigetsu Hozuki",
    role: "Side Character",
    bio: "A member of Taka with water body abilities.",
    powers: ["Water Release", "Body Liquefaction"],
    image: "./img/characters/suigetsu.jpg",
  },
  {
    id: 43,
    name: "Karin",
    role: "Side Character",
    bio: "A member of Taka with sensory and healing abilities.",
    powers: ["Sensory Abilities", "Healing Factor"],
    image: "./img/characters/karin.jpg",
  },
  {
    id: 44,
    name: "Mei Terumi",
    role: "Side Character",
    bio: "Fifth Mizukage, skilled in lava and boiling release.",
    powers: ["Lava Release", "Boil Release", "Water Style"],
    image: "./img/characters/mein.jpg",
  },
  {
    id: 45,
    name: "Darui",
    role: "Side Character",
    bio: "Right hand of the Fifth Mizukage, skilled in lightning and water styles.",
    powers: ["Lightning Release", "Water Style", "Black Lightning"],
    image: "./img/characters/darui.jpg",
  },
  {
    id: 46,
    name: "Kankuro",
    role: "Side Character",
    bio: "Sand Village ninja specializing in puppet jutsu.",
    powers: ["Puppet Mastery", "Poison Techniques"],
    image: "./img/characters/kankuro.jpg",
  },
  {
    id: 47,
    name: "Temari",
    role: "Side Character",
    bio: "Sand Village ninja known for her giant fan and wind techniques.",
    powers: ["Wind Release", "Fan Jutsu", "Summoning"],
    image: "./img/characters/tamari.jpg",
  },
  {
    id: 48,
    name: "𝐒𝐡𝐮𝐳𝐮𝐧𝐞 Aburame",
    role: "Side Character",
    bio: "Insect clan ninja skilled in insect jutsu.",
    powers: ["Insect Jutsu", "Parasitic Bugs"],
    image: "./img/characters/shuzune.jpg",
  },
  {
    id: 49,
    name: "Iruka Umino",
    role: "Side Character",
    bio: "Naruto’s teacher and mentor at the Ninja Academy.",
    powers: ["Teaching", "Basic Ninja Skills"],
    image: "./img/characters/iruka.jpg",
  },
  {
    id: 50,
    name: "Hiruzen Sarutobi",
    role: "Side Character",
    bio: "The Third Hokage, a powerful and wise leader of the Hidden Leaf Village.",
    powers: [
      "All Five Basic Nature Transformations",
      "Strong Taijutsu",
      "Ninjutsu Mastery",
    ],
    image: "./img/characters/hiruzen.jpg",
  },
  {
    id: 51,
    name: "Fugaku Uchiha",
    role: "Side Character",
    bio: "Head of the Uchiha clan and father of Sasuke and Itachi.",
    powers: ["Sharingan", "Tactical Skills"],
    image: "./img/characters/fugaku.jpg",
  },
  // Add more if you want to reach even higher counts
];

// Function to display Naruto characters
function narutoListOnDis() {
  let List = document.querySelector(".naruto-cards");
  if (!List) return;

  let listHTML = "";
  narutoCharacters.forEach((character, index) => {
    listHTML += `
      <div class="demon-slayer-card">
        <img src="${character.image}" alt="${
      character.name
    }" class="demonslayer-image" />
        <h3 class="demonslayer-name">${character.name}</h3>
       
        <div class="demonslayer-hover">
          <p class="demonslayer-role">${character.role}</p>
          <p>${character.bio}</p>
          <p class="power">${character.powers.join(", ")}</p>
          <button class="watchlist-btn" onclick="addToWatchlist(narutoCharacters[${index}])">Add to Watchlist</button>
        </div>
      </div>`;
  });

  List.innerHTML = listHTML;
}

narutoListOnDis();

const demonSlayerCharacters = [
  {
    id: 1,
    name: "Tanjiro Kamado",
    role: "Main Character",
    bio: "A kind-hearted boy who becomes a Demon Slayer to save his sister and avenge his family.",
    powers: [
      "Water Breathing",
      "Hinokami Kagura (Sun Breathing)",
      "Enhanced Smell",
    ],
    image: "img/characters/tanjiro.jpeg",
  },
  {
    id: 2,
    name: "Nezuko Kamado",
    role: "Main Character",
    bio: "Tanjiro's younger sister turned demon, who fights to protect humans without losing her humanity.",
    powers: ["Demon Blood Art", "Rapid Regeneration", "Size Manipulation"],
    image: "img/characters/nezuko.jpeg",
  },
  {
    id: 3,
    name: "Zenitsu Agatsuma",
    role: "Main Character",
    bio: "A cowardly but talented Demon Slayer skilled in Thunder Breathing techniques.",
    powers: ["Thunder Breathing", "Enhanced Hearing", "Lightning Speed"],
    image: "img/characters/zen.jpeg",
  },
  {
    id: 4,
    name: "Inosuke Hashibira",
    role: "Main Character",
    bio: "Raised by boars, he fights with Beast Breathing and uses dual swords with a wild fighting style.",
    powers: ["Beast Breathing", "Enhanced Strength", "Animal Instincts"],
    image: "img/characters/inosuke.jpeg",
  },
  {
    id: 5,
    name: "Kanao Tsuyuri",
    role: "Supporting Character",
    bio: "A quiet and skilled Demon Slayer who uses Flower Breathing techniques.",
    powers: ["Flower Breathing", "Enhanced Agility", "Calm and Focused"],
    image: "img/characters/kanao tsuyuri.jpg",
  },
  {
    id: 6,
    name: "Giyu Tomioka",
    role: "Hashira (Water Pillar)",
    bio: "A calm and stoic Water Hashira known for his Water Breathing mastery.",
    powers: ["Water Breathing", "Enhanced Reflexes", "Strong Combat Skills"],
    image: "img/characters/tomika.jpg",
  },
  {
    id: 7,
    name: "Shinobu Kocho",
    role: "Hashira (Insect Pillar)",
    bio: "The Insect Hashira who fights demons using poison and precise sword techniques.",
    powers: ["Insect Breathing", "Poison Use", "Medical Knowledge"],
    image: "img/characters/shinobu.jpeg",
  },
  {
    id: 8,
    name: "Kyojuro Rengoku",
    role: "Hashira (Flame Pillar)",
    bio: "The energetic and passionate Flame Hashira with fiery swordsmanship.",
    powers: ["Flame Breathing", "Enhanced Strength", "Unyielding Spirit"],
    image: "img/characters/rengoku.jpeg",
  },
  {
    id: 9,
    name: "Tengen Uzui",
    role: "Hashira (Sound Pillar)",
    bio: "The flamboyant Sound Hashira known for his ninja background and flashy techniques.",
    powers: ["Sound Breathing", "Enhanced Hearing", "Dual Nichirin Blades"],
    image: "img/characters/tengen uzui.jpg",
  },
  {
    id: 10,
    name: "Mitsuri Kanroji",
    role: "Hashira (Love Pillar)",
    bio: "The Love Hashira with superhuman strength and a unique breathing style.",
    powers: ["Love Breathing", "Enhanced Strength", "Agility"],
    image: "img/characters/mis.jpeg",
  },
  {
    id: 11,
    name: "Muichiro Tokito",
    role: "Hashira (Mist Pillar)",
    bio: "A young and talented Mist Hashira with a mysterious past.",
    powers: ["Mist Breathing", "Enhanced Reflexes", "Strong Combat Skills"],
    image: "img/characters/muichiro.jpeg",
  },
  {
    id: 12,
    name: "Gyomei Himejima",
    role: "Hashira (Stone Pillar)",
    bio: "The strongest Hashira known for his mastery of Stone Breathing and his gentle spirit.",
    powers: ["Stone Breathing", "Superhuman Strength", "Spiritual Awareness"],
    image: "img/characters/gyomei.jpeg",
  },
  {
    id: 13,
    name: "Sanemi Shinazugawa",
    role: "Hashira (Wind Pillar)",
    bio: "A hot-headed and fierce Wind Hashira with a scarred body.",
    powers: ["Wind Breathing", "Enhanced Speed", "Strong Combat Skills"],
    image: "img/characters/sanemi-shinazugawa.jpg",
  },
  {
    id: 14,
    name: "Obanai Iguro",
    role: "Hashira (Serpent Pillar)",
    bio: "The strict Serpent Hashira who fights with a snake-like sword style.",
    powers: ["Serpent Breathing", "Enhanced Agility", "Keen Intellect"],
    image: "img/characters/Obanai-Iguro.jpg",
  },
  {
    id: 15,
    name: "Rui",
    role: "Demon",
    bio: "One of the Twelve Kizuki, Lower Moon Five, with spider-like powers.",
    powers: ["Blood Manipulation", "Thread Manipulation", "Enhanced Strength"],
    image: "img/characters/Rui.jpeg",
  },
  {
    id: 16,
    name: "Akaza",
    role: "Demon",
    bio: "Upper Moon Three demon with incredible martial arts and regeneration abilities.",
    powers: ["Destructive Death", "Regeneration", "Martial Arts Mastery"],
    image: "img/characters/akaza.jpeg",
  },
  {
    id: 17,
    name: "Daki",
    role: "Demon",
    bio: "Upper Moon Six demon who uses obi sashes as deadly weapons.",
    powers: ["Obi Sash Manipulation", "Regeneration", "Speed"],
    image: "img/characters/daki.jpg",
  },
  {
    id: 18,
    name: "Gyutaro",
    role: "Demon",
    bio: "Upper Moon Six demon and Daki’s brother with poisonous blood attacks.",
    powers: ["Poison Blood", "Enhanced Strength", "Regeneration"],
    image: "img/characters/gyutaro.jpg",
  },
  {
    id: 19,
    name: "Kokushibo",
    role: "Demon",
    bio: "Upper Moon One demon, formerly a Demon Slayer and brother of the first Demon King.",
    powers: ["Moon Breathing", "Enhanced Strength", "Regeneration"],
    image: "img/characters/kokushibo.jpg",
  },
  {
    id: 20,
    name: "Enmu",
    role: "Demon",
    bio: "Lower Moon One demon with dream manipulation abilities.",
    powers: ["Dream Manipulation", "Blood Manipulation", "Regeneration"],
    image: "img/characters/enmu.jpg",
  },
  // Add more characters if you want to expand beyond 20
];
function demonSlayerListOnDis() {
  let List = document.querySelector(".demon-slayer-cards");
  if (!List) return;

  let listHTML = "";
  demonSlayerCharacters.forEach((character, index) => {
    listHTML += `
      <div class="demon-slayer-card">
        <img src="${character.image}" alt="${
      character.name
    }" class="demonslayer-image" />
        <h3 class="demonslayer-name">${character.name}</h3>
        <p class="demonslayer-role">${character.role}</p>
        <div class="demonslayer-hover">
          <p>${character.bio}</p>
          <p class="power">${character.powers.join(", ")}</p>
          <button class="watchlist-btn" onclick="addToWatchlist(demonSlayerCharacters[${index}])">Add to Watchlist</button>
        </div>
      </div>`;
  });

  List.innerHTML = listHTML;
}

demonSlayerListOnDis();

const aotCharacters = [
  {
    name: "Eren Yeager",
    role: "Protagonist / Titan Shifter",
    bio: "A determined soldier who fights for humanity's freedom and can transform into the Attack Titan.",
    powers: [
      "Attack Titan Shifting",
      "Founding Titan Power",
      "Hardening",
      "Regeneration",
    ],
    image: "./aot/eren_yeager.jpg",
  },
  {
    name: "Mikasa Ackerman",
    role: "Soldier / Eren's Adoptive Sister",
    bio: "One of humanity's strongest fighters, fiercely protective of Eren.",
    powers: [
      "Exceptional Combat Skills",
      "Enhanced Reflexes",
      "ODM Gear Expertise",
    ],
    image: "./aot/mikasa_ackerman.jpg",
  },
  {
    name: "Armin Arlert",
    role: "Soldier / Strategist",
    bio: "Brilliant tactician and Eren's best friend, later inherits the Colossal Titan.",
    powers: ["Strategic Mind", "Colossal Titan Shifting"],
    image: "./aot/armin_arlert.jpg",
  },
  {
    name: "Levi Ackerman",
    role: "Captain / Humanity’s Strongest Soldier",
    bio: "Legendary soldier with unmatched speed and swordsmanship.",
    powers: [
      "Exceptional Swordsmanship",
      "ODM Gear Mastery",
      "Enhanced Agility",
    ],
    image: "./aot/levi_ackerman.jpg",
  },
  {
    name: "Historia Reiss",
    role: "Queen of the Walls",
    bio: "The true royal heir, fights to protect humanity's future.",
    powers: ["Leadership", "Enhanced Strength"],
    image: "./aot/historia_reiss.jpg",
  },
  {
    name: "Reiner Braun",
    role: "Warrior / Armored Titan Shifter",
    bio: "Infiltrator with the power of the Armored Titan, struggles with his dual identity.",
    powers: ["Armored Titan Shifting", "Enhanced Durability"],
    image: "./aot/reiner_braun.jpg",
  },
  {
    name: "Annie Leonhart",
    role: "Warrior / Female Titan Shifter",
    bio: "Skilled and mysterious fighter who can transform into the Female Titan.",
    powers: ["Female Titan Shifting", "Hardening", "Martial Arts"],
    image: "./aot/annie_leonhart.jpg",
  },
  {
    name: "Jean Kirstein",
    role: "Soldier / Squad Leader",
    bio: "Pragmatic soldier and reliable leader who values comradeship.",
    powers: ["Skilled Combat", "ODM Gear User"],
    image: "./aot/Jean Kirstein.jpg",
  },
  {
    name: "Sasha Blouse",
    role: "Soldier / Scout Regiment",
    bio: "Expert marksman with a love for food and a courageous heart.",
    powers: ["Expert Marksman", "Stealth", "Enhanced Agility"],
    image: "./aot/sasha_blouse.jpg",
  },
  {
    name: "Connie Springer",
    role: "Soldier / Scout Regiment",
    bio: "Loyal and humorous soldier known for his determination.",
    powers: ["Skilled Combat", "ODM Gear User"],
    image: "./aot/connie_springer.jpg",
  },
  {
    name: "Erwin Smith",
    role: "Commander / Scout Regiment",
    bio: "Strategic leader driven by his dream to uncover the truth outside the walls.",
    powers: ["Leadership", "Strategic Genius", "Combat Skills"],
    image: "./aot/erwin_smith.jpg",
  },
  {
    name: "Hange Zoë",
    role: "Squad Leader / Scientist",
    bio: "Eccentric and passionate scientist obsessed with Titans.",
    powers: ["Intelligence", "Titan Research", "Combat Ability"],
    image: "./aot/hange_zoe.jpg",
  },
  {
    name: "Pieck Finger",
    role: "Warrior / Cart Titan Shifter",
    bio: "Calm and smart warrior with the power of the Cart Titan.",
    powers: ["Cart Titan Shifting", "Endurance", "Tactical Support"],
    image: "./aot/pieck_finger.jpg",
  },
  {
    name: "Zeke Yeager",
    role: "Warrior / Beast Titan Shifter",
    bio: "Eren’s half-brother, strategist with Beast Titan powers.",
    powers: ["Beast Titan Shifting", "Titan Control", "Strategic Mind"],
    image: "./aot/zeke_yeager.jpg",
  },
  {
    name: "Falco Grice",
    role: "Warrior Candidate",
    bio: "Young warrior candidate with a strong will to protect others.",
    powers: ["Combat Training", "Potential Titan Shifter"],
    image: "./aot/falco_grice.jpg",
  },
  {
    name: "Gabi Braun",
    role: "Warrior Candidate",
    bio: "Determined and fierce young warrior candidate.",
    powers: ["Combat Skills", "ODM Gear Training"],
    image: "./aot/gabi_braun.jpg",
  },
  {
    name: "Ymir",
    role: "Former Warrior / Jaw Titan Shifter",
    bio: "Former warrior with the power of the Jaw Titan.",
    powers: ["Jaw Titan Shifting", "Agility"],
    image: "./aot/ymir.jpg",
  },
  {
    name: "Rod Reiss",
    role: "Noble / Former Head of the Reiss Family",
    bio: "The true royal family head with a dark secret.",
    powers: ["Royal Blood", "Titan Transformation"],
    image: "./aot/rod_reiss.jpg",
  },
  {
    name: "Kenny Ackerman",
    role: "Captain / Levi’s Uncle",
    bio: "Fearsome assassin and former squad leader.",
    powers: ["Exceptional Combat", "Stealth"],
    image: "./aot/kenny_ackerman.jpg",
  },
  {
    name: "Sannes",
    role: "Soldier",
    bio: "A soldier in the Survey Corps with combat skills.",
    powers: ["Combat Skills"],
    image: "./aot/sannes.jpg",
  },
  {
    name: "Marcel Galliard",
    role: "Warrior / Jaw Titan Shifter",
    bio: "Warrior who possessed the Jaw Titan before Ymir.",
    powers: ["Jaw Titan Shifting"],
    image: "./aot/Marcel Galliard.jpg",
  },
  {
    name: "Porco Galliard",
    role: "Warrior / Jaw Titan Shifter",
    bio: "Younger brother of Marcel, inheritor of the Jaw Titan.",
    powers: ["Jaw Titan Shifting", "Enhanced Strength"],
    image: "./aot/porco_galliard.jpg",
  },
  {
    name: "Pieck Finger",
    role: "Warrior / Cart Titan Shifter",
    bio: "Strategic and intelligent warrior with Cart Titan power.",
    powers: ["Cart Titan Shifting", "Stamina", "Support Abilities"],
    image: "./aot/pieck_finger1.jpg",
  },
  {
    name: "Hitch Dreyse",
    role: "Soldier / Scout Regiment",
    bio: "Reliable soldier known for her kindness and sharp skills.",
    powers: ["Combat Skills", "ODM Gear"],
    image: "./aot/Hitch Dreyse.jpg",
  },
  {
    name: "Mitabi Jarnach",
    role: "Soldier / Scout Regiment",
    bio: "Soldier who participated in key battles.",
    powers: ["Combat Skills"],
    image: "./aot/miyabi garnach.jpg",
  },
  {
    name: "Nile Dok",
    role: "Soldier / Scout Regiment",
    bio: "Trusted soldier with experience in battles.",
    powers: ["Combat Skills"],
    image: "./aot/Nile Dok.jpg",
  },
  {
    name: "Nanaba",
    role: "Soldier / Scout Regiment",
    bio: "Skilled soldier known for courage and loyalty.",
    powers: ["Combat Skills", "Marksmanship"],
    image: "./aot/nanaba.jpg",
  },
  {
    name: "Gelgar",
    role: "Soldier",
    bio: "Member of the Scout Regiment.",
    powers: ["Combat Skills"],
    image: "./aot/gelgar.jpg",
  },
  {
    name: "Gunther Schultz",
    role: "Soldier / Squad Leader",
    bio: "Competent soldier and leader in Survey Corps.",
    powers: ["Leadership", "Combat Skills"],
    image: "./aot/gunther_schultz.jpg",
  },
  {
    name: "Moblit Berner",
    role: "Soldier / Erwin’s Aide",
    bio: "Loyal aide and friend to Commander Erwin.",
    powers: ["Combat Skills"],
    image: "./aot/moblit_berner.jpg",
  },
  {
    name: "Floch Forster",
    role: "Soldier / Military Police",
    bio: "Devoted soldier with complex motivations.",
    powers: ["Combat Skills", "Leadership"],
    image: "./aot/Floch Forster.jpg",
  },
  {
    name: "Dot Pixis",
    role: "Commander / Garrison Regiment",
    bio: "Cunning and eccentric commander of the Garrison.",
    powers: ["Leadership", "Strategy"],
    image: "./aot/dot_pixis.jpg",
  },
  {
    name: "Mike Zacharias",
    role: "Squad Leader / Scout Regiment",
    bio: "Highly skilled and fast scout, known for his speed.",
    powers: ["Speed", "Combat Skills", "ODM Gear Mastery"],
    image: "./aot/mike_zacharias.jpg",
  },
  {
    name: "Petra Ral",
    role: "Squad Member / Levi’s Squad",
    bio: "Loyal and skilled member of Levi’s squad.",
    powers: ["Combat Skills", "ODM Gear"],
    image: "./aot/petra_ral.jpg",
  },
  {
    name: "Gunther Schultz",
    role: "Squad Leader / Survey Corps",
    bio: "Leader and skilled combatant.",
    powers: ["Leadership", "Combat"],
    image: "./aot/gunther_schultz.jpg",
  },
  {
    name: "Nifa",
    role: "Scout Regiment Soldier",
    bio: "Member of Levi’s squad.",
    powers: ["Combat Skills"],
    image: "./aot/nifa.jpg",
  },
  {
    name: "Olur",
    role: "Scout Regiment Soldier",
    bio: "Member of Levi’s squad.",
    powers: ["Combat Skills"],
    image: "./aot/olur.jpg",
  },
  {
    name: "Kiyomi Azumabito",
    role: "Politician / Ally",
    bio: "Leader of the Azumabito family, ally to Paradis Island.",
    powers: ["Diplomacy", "Leadership"],
    image: "./aot/kiyomi_azumabito.jpg",
  },
  {
    name: "Pieck Finger",
    role: "Warrior / Cart Titan Shifter",
    bio: "Reliable warrior with the Cart Titan power.",
    powers: ["Cart Titan Shifting", "Endurance"],
    image: "./aot/pieck_finger3.jpg",
  },
  {
    name: "Zofia",
    role: "Warrior Candidate",
    bio: "Young warrior candidate with strong resolve.",
    powers: ["Combat Training"],
    image: "./aot/zofia1.jpg",
  },
  {
    name: "Udo",
    role: "Warrior Candidate",
    bio: "Disciplined warrior candidate.",
    powers: ["Combat Training"],
    image: "./aot/udo.jpg",
  },
  {
    name: "Rico Brzenska",
    role: "Captain / Garrison Regiment",
    bio: "Strong and experienced Garrison captain.",
    powers: ["Leadership", "Combat"],
    image: "./aot/rico_brzenska.jpg",
  },
  {
    name: "Eld Jinn",
    role: "Squad Leader / Levi’s Squad",
    bio: "Experienced and loyal member of Levi’s squad.",
    powers: ["Combat Skills"],
    image: "./aot/eld_jinn.jpg",
  },
  {
    name: "Gunther Schultz",
    role: "Squad Leader",
    bio: "Capable leader in the Survey Corps.",
    powers: ["Combat Skills", "Leadership"],
    image: "./aot/zofia.jpg",
  },
  {
    name: "Hitch Dreyse",
    role: "Soldier",
    bio: "Member of Scout Regiment.",
    powers: ["Combat"],
    image: "./aot/Hitch Dreyse1.jpg",
  },
  {
    name: "Marlo Freudenberg",
    role: "Soldier / Scout Regiment",
    bio: "Practical and determined scout.",
    powers: ["Combat Skills", "Strategy"],
    image: "./aot/marlo_freudenberg.jpg",
  },
  {
    name: "Keith Shadis",
    role: "Instructor / Former Commander",
    bio: "Former Survey Corps commander and trainer.",
    powers: ["Combat Skills", "Leadership"],
    image: "./aot/keith_shadis.jpg",
  },
  {
    name: "Floch Forster",
    role: "Soldier",
    bio: "Devoted soldier with extreme loyalty to Paradis.",
    powers: ["Combat Skills"],
    image: "./aot/floch_forster.jpg",
  },
];

function aotListOnDis() {
  let List = document.querySelector(".aot-cards");
  if (!List) return;

  let listHTML = "";
  aotCharacters.forEach((character) => {
    listHTML += `
      <div class="aot-card">
        <img src="${character.image}" alt="${
      character.name
    }" class="aot-image" />
        <h3 class="aot-name">${character.name}</h3>
        <p class="aot-role">${character.role}</p>
        <div class="aot-hover">
          <p>${character.bio}</p>
          <p class="power"><strong>Powers:</strong> ${character.powers.join(
            ", "
          )}</p>
        </div>
        <button class="watchlist-btn" onclick='addToWatchlist(${JSON.stringify(
          character
        )})'>
          Add to Watchlist
        </button>
      </div>
    `;
  });

  List.innerHTML = listHTML;
}

aotListOnDis();

function addToWatchlist(item) {
  let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  watchlist.push(item);
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
  alert(item.name + " added to Watchlist!");
}

// Show all on page load
characterListOnDis();

// Search function
function searchAnime() {
  const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase();

  const filteredList = characters.filter((char) =>
    char.name.toLowerCase().includes(searchValue)
  );

  characterListOnDis(filteredList);
}

// Enter key press listener
document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchAnime();
    }
  });

// Smooth page transition effect
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (
      this.href &&
      this.getAttribute("href") !== "#" &&
      !this.href.includes("javascript")
    ) {
      e.preventDefault();
      document.body.classList.add("page-exit");
      setTimeout(() => {
        window.location = this.href;
      }, 500);
    }
  });
});
