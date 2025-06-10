const patches = [
  {
    id: "10.02",
    title: "PATCH NOTE PALORANT 10.02",
    subtitle: "Minor patches with important bug fixes for Agents and others.",
    image: "Resources/News/patch note 10.02.jpeg",
    sections: [
      {
        sectionTitle: "BUG FIXES",
        categories: [
          {
            categoryTitle: "Common",
            bugs: [
              "Fixed an issue that caused certain types of damage to cause players with Regen Shield to still have 1 HP, when they should have fallen.",
              "This also fixes an issue where Clove can withstand lethal damage, especially when Regen Shield and Pick Me Up are active at the same time.",
            ],
          },
          {
            categoryTitle: "Agent",
            agents: [
              {
                agentName: "Vyse",
                bugs: [
                  "Fixed an issue with Arc Rose and Razorvine that could be seen when placed on certain water surfaces.",
                ],
              },
              {
                agentName: "GEKKO",
                bugs: [
                  "Fixed an issue that caused players to rarely survive when directly running through the entire duration of Armageddon.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "10.05",
    title: "PATCH NOTE PALORANT 10.05",
    subtitle: "Rollback Ranked is already running with some minor bug fixes.",
    image: "Resources/News/patch note 10.05.jpeg", // Ubah sesuai lokasi sebenarnya
    sections: [
      {
        sectionTitle: "COMPETITIVE UPDATES",
        categories: [
          {
            categoryTitle: "Ranked Rollbacks",
            bugs: [
              "Ranked Rollbacks are live!",
              "If you lost RR due to a match against a confirmed cheater in the last week, you will be eligible for an RR refund!",
              "You will get a pop-up notification showing the exact amount of RR being refunded.",
              "To apply the refunded RR, you must complete one Competitive match.",
              "Once you finish that match, the refunded RR will be reflected in your End of Game summary screen—or if lost, the refund still gets added to your total RR for that game.",
              "Important: Ranked Rollbacks are only valid within the current Act and there is a cap per Act. If you qualify for a refund, be sure to play a game before the Act ends to claim it!",
            ],
          },
        ],
      },
      {
        sectionTitle: "BUG FIXES",
        categories: [
          {
            categoryTitle: "Agents",
            agents: [
              {
                agentName: "Raze",
                bugs: [
                  "Fixed a bug where Blast Pack's explosion was slightly smaller at the tip of the explosion since the explosion changes that went live in 10.03.",
                ],
              },
              {
                agentName: "Clove",
                bugs: [
                  "Fixed a bug where Clove could take damage or die for a single frame upon reviving with Not Dead Yet.",
                ],
              },
              {
                agentName: "Sage",
                bugs: [
                  "Fixed the same bug as Clove above where there was a single frame of vulnerability upon reviving a target.",
                ],
              },
              {
                agentName: "Iso",
                bugs: [
                  "Fixed a bug where Armageddon's danger indicator did not always apply on variable elevations.",
                ],
              },
              {
                agentName: "Deadlock",
                bugs: [
                  "Fixed a bug where Double Tap's HUD bar could look visually incorrect for spectators or observers.",
                ],
              },
              {
                agentName: "Vayluu",
                bugs: [
                  "Fixed a bug where there was a performance hitch upon casting Convergent Paths.",
                  "Fixed a bug where Convergent Paths was unable to be equipped during the buy phase.",
                ],
              },
            ],
          },
          {
            categoryTitle: "Social",
            bugs: [
              "Fixed an issue where in-game status and scores were not updating as frequently as they should in the social panel.",
            ],
          },
          {
            categoryTitle: "Maps",
            bugs: [
              "Breeze: Fixed a bug where abilities would ignore line of sight around crates on A Site.",
              "Fracture: Fixed a bug where flash abilities would be blocked in certain areas on the map.",
              "Sunset: Fixed a bug where players could not plant the Spike on the B Site crates inside of the plant zone.",
            ],
          },
        ],
      },
      {
        sectionTitle: "AGENT UPDATES",
        categories: [
          {
            categoryTitle: "KAY/O",
            bugs: [
              "We’re looking to make KAY/O’s overhead flash more flexible for mid-range scenarios than either his other flashes.",
              "These set of changes should continue to preserve his high skill ceiling on those perfectly tossed pop flashes you have been practicing.",
              "We’re also reducing his resurrection duration on his ultimate to reinforce the potential for teams to pick up an ally KAY/O.",
            ],
            subSections: [
              {
                title: "FLASH/DRIVE",
                points: [
                  "Upon bouncing, flashes will not start a 0.3 second windup and then pop. This windup has updated audio and visuals when triggered.",
                  "The bounce windup will not be triggered if it is already less than 0.8 seconds from popping, so it won’t increase the total time from throw to pop.",
                  "Underdarm max flash duration: 2.25s >>> 1.5s",
                  "Increase total range of KAY/O’s Flash/Drive voice line 20m >>> 50m",
                  "Unique ID: 0.8s",
                  "A minimap indicator has been added to the Flash for teammates only.",
                ],
              },
              {
                title: "NULL/CMD",
                points: ["ALLY resurrection time: 3s >>> 1.5s"],
              },
            ],
          },
          {
            categoryTitle: "Yoru",
            bugs: [
              "Fakeout is providing a bit too much return on investment at the 100 credit cost.",
              "Cost increase: 100 >>> 200 credits",
            ],
          },
          {
            categoryTitle: "Vyse",
            bugs: [
              "We’re happy that Vyse has found a place in the ecosystem since the buff in patch 10.3. We’ve tuned the duration on the burn time that happens when successive site hits are made where Razorvines are more threatening.",
              "We’ve also changed how her Razorvines and Shears work to make Vyse just have to place a Razorvines rather than just relying on the baseline value of burn time.",
            ],
            subSections: [
              {
                title: "Razorvines",
                points: ["Razorvines duration: 3s >>> 2.2s"],
              },
              {
                title: "Shears",
                points: ["Triggered Wall Duration: 8s >>> 6s"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "10.06",
    title: "PATCH NOTE PALORANT 10.06",
    subtitle:
      "KAY/O mendapatkan buff besar, sementara Yoru dan Vyse mengalami nerf.",
    image: "Resources/News/patch note 10.06.jpeg",
    sections: [
      {
        sectionTitle: "AGENT UPDATES",
        categories: [
          {
            categoryTitle: "KAY/O",
            subSections: [
              {
                title: "FLASH/DRIVE",
                points: [
                  "Setelah memantul, flash akan memulai windup selama 0.8 detik sebelum meledak.",
                  "Windup ini memiliki audio dan visual unik saat dipicu.",
                  "Windup tidak akan dipicu jika waktu meledak kurang dari 0.8 detik, sehingga tidak menambah total waktu dari lemparan hingga meledak.",
                  "Durasi maksimum flash underhand: 1.25s → 1.5s.",
                  "Jangkauan VO 'flashing' meningkat dari 20m menjadi 50m.",
                  "Waktu unequip: 0.85s → 0.6s.",
                  "Indikator minimap telah ditambahkan untuk flash, hanya terlihat oleh rekan tim.",
                ],
              },
              {
                title: "NULL/cmd",
                points: ["Waktu resurrect untuk rekan tim: 3s → 1.5s."],
              },
            ],
          },
          {
            categoryTitle: "Yoru",
            bugs: ["Biaya Fakeout meningkat dari 100 menjadi 200 kredit."],
          },
          {
            categoryTitle: "Vyse",
            subSections: [
              {
                title: "Razorvine",
                points: ["Durasi: 10s → 7s."],
              },
              {
                title: "Shear",
                points: ["Durasi Dinding yang Terpicu: 8s → 6s."],
              },
            ],
          },
        ],
      },
      {
        sectionTitle: "BUG FIXES",
        categories: [
          {
            categoryTitle: "Agents",
            agents: [
              {
                agentName: "KAY/O",
                bugs: [
                  "Memperbaiki masalah langka di mana KAY/O dapat terlihat berdiri saat downed selama Null/CMD.",
                  "Memperbaiki masalah di mana lintasan Zero Point dagger KAY/O dapat berperilaku tidak terduga dengan packet loss.",
                ],
              },
              {
                agentName: "Gekko",
                bugs: [
                  "Memperbaiki masalah di mana VO 'Spike Down' tidak diputar saat Wingman dihancurkan saat membawa Spike.",
                ],
              },
              {
                agentName: "Iso",
                bugs: [
                  "Memperbaiki masalah di mana beralih ke Iso dengan Double Tap aktif dapat menghasilkan bilah UI yang salah ditampilkan untuk penonton atau pengamat.",
                ],
              },
            ],
          },
          {
            categoryTitle: "Premier",
            bugs: [
              "Memperbaiki masalah di mana status pemain dalam daftar roster Premier Hub kadang-kadang tumpang tindih dengan ikon peringatan dalam antrean tertentu.",
              "Memperbaiki masalah di mana braket playoff tidak diperbarui secara dinamis selama pertandingan kedua dari pertandingan best of three.",
            ],
          },
        ],
      },
      {
        sectionTitle: "PLAYER BEHAVIOR UPDATES",
        categories: [
          {
            categoryTitle: "All Platforms",
            bugs: [
              "Peningkatan notifikasi umpan balik sehingga Anda sekarang lebih andal melihat pesan saat laporan kecurangan mengarah pada larangan.",
            ],
          },
        ],
      },
      {
        sectionTitle: "PERFORMANCE UPDATES",
        categories: [
          {
            categoryTitle: "PC Only",
            bugs: [
              "Peningkatan kinerja CPU di Sunset dengan mengurangi jumlah objek spesifik peta yang diperiksa setiap frame.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "vct-ascended-bundles",
    title: "VCT Ascended team bundles are now available",
    subtitle:
      "Celebrate the Ascension champions with the latest team capsules.",
    image: "Resources/News/vct-ascended-bundles.png",
    sections: [
      {
        sectionTitle: "New Teams",
        categories: [
          {
            categoryTitle: "Teams Joining the 2025 VCT Team Capsules",
            points: [
              "2Game Esports (Americas)",
              "Apeks (EMEA)",
              "K1 Lai Gaming (CN)",
              "Nongshim Redforce and BOOM Esports (Pacific)",
            ],
          },
          {
            categoryTitle: "What's Included",
            points: [
              "Upgraded Classic Skin with team-themed design and branding.",
              "Achievement Tracker: Highlighting major victories.",
              "2025 Player Card with team identity & creativity.",
              "Spray and Gun Buddy to show support.",
            ],
          },
          {
            categoryTitle: "When Can You Grab Them?",
            points: [
              "Available throughout the 2025 season in the in-game Esports Store.",
            ],
          },
        ],
      },
    ],
  },
  {
    "id": "vct-2025-capsule",
    "title": "INTRODUCING THE 2025 VCT SEASON COUPLE!",
    "subtitle": "What’s in the 2025 Season Capsule?",
    "image": "Resources/News/vct-2025-capsule.png",
    "sections": [
      {
        "sectionTitle": "What's Included",
        "categories": [
          {
            "categoryTitle": "Contents",
            "points": [
              "VCT Karambit: New melee weapon with five chromas.",
              "Special glow at Level 3 for top fraggers.",
              "4 Regional Player Cards: Animated, league-themed.",
              "4 Gun Buddies: Reactive charms for each region."
            ]
          },
          {
            "categoryTitle": "Availability",
            "points": [
              "Launches globally on February 6th, 2pm PST.",
              "Available until the end of Masters Bangkok."
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "smite-2-reveal",
    "title": "April Fools: Smite 2 Reveal",
    "subtitle": "Yup it’s happening. The best skin is back and better than ever.",
    "image": "Resources/News/smite-2-reveal.webp",
    "sections": [
      {
        "sectionTitle": "Smite 2 Announcement",
        "categories": [
          {
            "categoryTitle": "Background",
            "points": [
              "The Smite bundle was first released on September 23, 2020.",
              "It became one of the most beloved skins of all time."
            ]
          },
          {
            "categoryTitle": "Smite 2 Launch",
            "points": [
              "Will appear in the Rotating Store starting April 1st.",
              "Smite 2 is even better than the original!",
              "Additional items included to celebrate the launch."
            ]
          }
        ]
      }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const patchId = urlParams.get("NEWS");
  
    if (!patchId) {
      console.error("No NEWS parameter found in URL.");
      return;
    }
  
    const patchData = patches.find((patch) => patch.id === patchId);
  
    if (!patchData) {
      console.error(`Patch with id '${patchId}' not found.`);
      return;
    }
  
    // Inject Judul dan Subjudul
    document.getElementById("title").textContent = patchData.title;
    document.getElementById("subtitle").textContent = patchData.subtitle;

  
    // Inject Gambar
    const backgroundImage = document.getElementById("background-image");
    const overlayImage = document.getElementById("overlay-image");
    if (backgroundImage && patchData.image) {
      backgroundImage.src = patchData.image;
      overlayImage.src = patchData.image;
    }
  
    // Inject konten patch
    const container = document.getElementById("patch-sections-container");
  
    patchData.sections.forEach((section) => {
      const sectionEl = document.createElement("section");
      sectionEl.className = "patch-section";
  
      const sectionTitle = document.createElement("h2");
      sectionTitle.className = "section-title";
      sectionTitle.textContent = section.sectionTitle;
      sectionEl.appendChild(sectionTitle);
  
      section.categories.forEach((category) => {
        const categoryEl = document.createElement("div");
        categoryEl.className = "bug-category";
  
        const categoryTitle = document.createElement("h3");
        categoryTitle.className = "category-title";
        categoryTitle.textContent = category.categoryTitle;
        categoryEl.appendChild(categoryTitle);
  
        // Handle bugs array
        if (category.bugs) {
          const ul = document.createElement("ul");
          ul.className = "bug-list";
          category.bugs.forEach((bug) => {
            const li = document.createElement("li");
            li.textContent = bug;
            ul.appendChild(li);
          });
          categoryEl.appendChild(ul);
        }
  
        // Handle agents array
        if (category.agents) {
          category.agents.forEach((agent) => {
            const agentTitle = document.createElement("h4");
            agentTitle.textContent = agent.agentName;
            categoryEl.appendChild(agentTitle);
  
            const ul = document.createElement("ul");
            agent.bugs.forEach((bug) => {
              const li = document.createElement("li");
              li.textContent = bug;
              ul.appendChild(li);
            });
            categoryEl.appendChild(ul);
          });
        }
  
        // Handle points array (for simple categories)
        if (category.points) {
          const ul = document.createElement("ul");
          ul.className = "bug-list";
          category.points.forEach((point) => {
            const li = document.createElement("li");
            li.textContent = point;
            ul.appendChild(li);
          });
          categoryEl.appendChild(ul);
        }
  
        // Handle subSections (for agent updates with detailed changes)
        if (category.subSections) {
          category.subSections.forEach((subSection) => {
            const subSectionTitle = document.createElement("h4");
            subSectionTitle.textContent = subSection.title;
            categoryEl.appendChild(subSectionTitle);
  
            const ul = document.createElement("ul");
            ul.className = "bug-list";
            subSection.points.forEach((point) => {
              const li = document.createElement("li");
              li.textContent = point;
              ul.appendChild(li);
            });
            categoryEl.appendChild(ul);
          });
        }
  
        sectionEl.appendChild(categoryEl);
      });
  
      container.appendChild(sectionEl);
    });
  });