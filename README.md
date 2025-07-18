🏡 NeighborFit

A full-stack web application that recommends neighborhoods based on your lifestyle preferences using data-driven scoring and real-world filtering logic.

-> Problem Statement

Finding the right neighborhood that matches a person’s lifestyle is a challenge, especially when relocating to a new city. While many platforms focus on real estate listings, they do not help users decide where to live based on important lifestyle factors like safety, affordability, internet access, commute, and noise levels,pet frindly.

-> Live Demo
 [Click here to try NeighborFit](https://neighbourfit-three.vercel.app)


-> Project Objective

NeighborFit** solves the neighborhood-lifestyle matching problem. Users enter their lifestyle preferences (like safety, internet, affordability, commute), and the app recommends the best-fit neighborhoods using a custom algorithm.

 -> Features

- Lifestyle-based neighborhood recommendation
- Real-time matching score with dynamic UI
- Pet-friendly tag display
- Clean, responsive UI (mobile + desktop)
- Loading spinner while fetching results
- Full-stack: frontend, backend, and API integration

-> Tech Stack

| Frontend        | Backend       | Styling         | Deployment       |
|-----------------|---------------|------------------|------------------|
| React (CRA)     | Node.js + Express (API) | Tailwind CSS     | Vercel (frontend) / Render (backend) |


 How It Works

1. User selects lifestyle preferences on `/preferences`
2. Data is stored locally in browser
3. On `/results`, the frontend fetches real neighborhood data from an API
4. Each neighborhood is scored with this formula:


-> Factors and Weights:
| Factor        | Weight | Notes |
|---------------|--------|-------|
| Safety        | 30%    | Higher = safer |
| Affordability | 20%    | Higher = cheaper |
| Commute       | 20%    | Higher = easier travel |
| Noise         | 10%    | Lower noise = better score |
| Internet      | 20%    | Higher = better connectivity |

The final score is sorted in descending order and converted to a percentage.

-> Match score formula used
 const score =
            area.safety * prefs.safety * 0.3 +
            area.affordability * prefs.affordability * 0.2 +
            area.commute * prefs.commute * 0.2 +
            (10 - area.noise) * prefs.noise * 0.1 +
            area.internet * prefs.internet * 0.2;

