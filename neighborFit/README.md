🏡 NeighborFit

A full-stack web application that recommends neighborhoods based on your lifestyle preferences using data-driven scoring and real-world filtering logic.


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

```js
matchScore = 
  (safety * weight) +
  (affordability * weight) +
  (commute * weight) +
  ((10 - noise) * weight) +
  (internet * weight);
