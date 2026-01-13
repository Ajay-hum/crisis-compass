export const crises = [
  {
    id: "flood-ng-001",
    title: "Severe Flooding in Southern Nigeria",
    type: "Climate",
    severity: "High",
    affectedRegions: ["Lagos", "Bayelsa"],
    summary:
      "Heavy rainfall has caused widespread flooding affecting homes and infrastructure.",
    lastUpdated: Date.now(),

    guidance: {
      global: {
        affectedGroups: [
          "People living in flood-prone areas",
          "Emergency responders"
        ],
        whatToDoNow: [
          "Follow local authority instructions",
          "Stay informed through official channels"
        ],
        prepareNext: [
          "Create an emergency evacuation plan",
          "Prepare a disaster kit"
        ],
        avoid: [
          "Spreading unverified information"
        ]
      },

      Nigeria: {
        affectedGroups: [
          "Residents in Lagos and Ogun states",
          "Market traders in flood zones"
        ],
        whatToDoNow: [
          "Move to higher ground immediately",
          "Avoid flooded roads and bridges"
        ],
        prepareNext: [
          "Store clean water and food supplies",
          "Charge mobile devices and power banks"
        ],
        avoid: [
          "Touching exposed electrical wires"
        ]
      }
    },
    sources: [
      {
        name: "Nigeria Meteorological Agency (NiMet)",
        url: "https://nimet.gov.ng"
      },
      {
        name: "National Emergency Management Agency (NEMA)",
        url: "https://nema.gov.ng"
      },
      {
        name: "Verified News Reports",
        url: "https://www.bbc.com/news"
      }
    ]

  }
];
