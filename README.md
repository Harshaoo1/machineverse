# MachineVerse

**Understand. Explore. Experiment.**

An interactive platform for learning how machines work. The first version focuses on one vehicle, a generic petrol inline-4 car, combining a 3D model, a structured knowledge base, a guided diagnostic flow and a simple educational simulator.

**Live demo:** https://machineverse.vercel.app/

## Status

Early development. Built so far: home page, category cards, a vehicle page placeholder, routing and automatic deployment. Next: structured engine data, then an interactive 3D engine.

## Planned features

- **Explore:** click engine components in 3D and read explanations at Beginner, Intermediate or Advanced level
- **Diagnose:** a guided "engine won't start" flow that highlights the related components
- **Experiment:** an educational "add a turbo" simulator with clearly labelled assumptions (estimates, not engineering-grade results)
- **Learn:** a short beginner learning path

See [docs/MVP.md](docs/MVP.md) for the scope and [docs/DECISIONS.md](docs/DECISIONS.md) for the reasoning behind each choice.

## Tech stack

React, TypeScript, Vite and React Router, deployed on Vercel. 3D will use Three.js with React Three Fiber.

## Run it locally

Requires Node.js (LTS).

```bash
git clone https://github.com/Harshaoo1/machineverse.git
cd machineverse
npm install
npm run dev
```

Then open http://localhost:5173/.