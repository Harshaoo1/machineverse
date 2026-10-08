# Decisions log

Each entry records what we decided and why.

## 2026-10-09: MVP is a static front-end first

Backend, database, accounts and AI come only after the front-end prototype proves the concept. This keeps the early project simple and fast to change.

## 2026-10-09: First vehicle is a generic inline-4

Generic engine concepts are universally true, 3D models with separate named parts are easier to find, and "add a turbo" starts from a clean naturally aspirated baseline. Specific cars can be added later as data.

## 2026-10-09: Stack is React + Vite + TypeScript, plain CSS

TypeScript is harder to adopt later than to start with, and this project is data-heavy. Plain CSS keeps the number of new tools low.

## 2026-10-09: AI is a layer on structured knowledge

AI will only explain information from our own knowledge base. It is never the sole source of technical facts.

## 2026-10-09: Simulator outputs are always labelled

Every number is tagged as formula-based, rule of thumb, or AI explanation. Educational estimates are never presented as scientifically exact.

## 2026-10-09: Diagnosis is a hand-written decision tree

Written by us, not generated, so safety rules can be guaranteed. Only low-risk checks are suggested, and dangerous systems (fuel, high voltage) are referred to professionals.