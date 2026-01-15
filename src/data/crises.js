export const crises = [
  {
    id: "flood-ng-001",
    title: "Severe Flooding in Southern Nigeria",
    type: "Climate",
    severity: "High",
    affectedRegions: ["Lagos", "Bayelsa"],
    summary:
      "Heavy rainfall has caused widespread flooding affecting homes and infrastructure.",
    plainSummary:
      "Heavy flooding is affecting homes and roads. People should move to safe areas and follow local alerts.",
    status: "Escalating", // or "Stable", "Improving"
    trend: "up", // "up" | "stable" | "down"
    lastUpdated: Date.now(),

    guidance: {
      global: {
        affectedGroups: [
          "People living in flood-prone areas",
          "Emergency responders"
        ],
        whatToDoNow: {
          detailed: [
            "Follow local authority instructions",
            "Stay informed through official channels"
          ],
          plain: [
            "Go to a higher place now",
            "Stay away from flooded roads"
          ]
        },
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
        whatToDoNow: {
          detailed: [
            "Move to higher ground immediately",
            "Avoid flooded roads and bridges"
          ],
          plain: [
            "Go to a higher place now",
            "Stay away from flooded roads"
          ]
        },
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
    ],
    timeline: [
      {
        time: "3 days ago",
        title: "Heavy rainfall begins",
        status: "Escalating",
      },
      {
        time: "1 day ago",
        title: "Major flooding reported",
        status: "Escalating",
      },
      {
        time: "Now",
        title: "Emergency response ongoing",
        status: "Stable",
      },
    ]
  }
];
