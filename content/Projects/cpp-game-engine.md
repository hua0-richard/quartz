---
title: C++ Game Engine
description: A from-scratch 2D game engine in C++ with A* pathfinding, a visitor-pattern collision system, and a Pac-Man clone that exercises every subsystem.
eyebrow: Systems Programming + Game Architecture
github: https://github.com/hua0-richard/cpp-game-engine
features:
  - A* pathfinding with four distinct heuristics per ghost
  - Visitor-pattern collision across rigid, transparent, and character bodies
  - Fixed-timestep game loop with interpolated tile movement
tags:
  - projects
  - systems
  - game-engine
---

<div class="project-links">
  <a class="project-link" href="https://github.com/hua0-richard/cpp-game-engine" target="_blank" rel="noreferrer">GitHub</a>
</div>

## Overview

`cpp-game-engine` is a 2D game engine written in C++ on top of raylib, designed as a reusable library with a clean separation between the engine layer and game logic. A full Pac-Man clone is built on top to exercise every subsystem: pathfinding, collision detection, input handling, rendering, and audio.

## Architecture

The engine is structured around a `Window` class that owns the game loop and coordinates four core systems:

- **Level** — a 20x20 tile grid that maps integer codes to `GameObject` subclasses (walls, pellets, power pellets, spawn points).
- **Collider** — point-based collision detection that sorts bodies into rigid, transparent, and character buckets. Effects are dispatched through a visitor pattern so each object defines its own collision response.
- **PathFinding** — A* search that re-runs every ~60 frames. Each ghost receives a different heuristic: Manhattan (Blinky), diagonal (Pinky), Dijkstra (Inky), and Euclidean (Clyde), producing four distinct chase behaviors from the same algorithm.
- **InputHandler** — event-driven key mapping that validates moves through the collider before committing them.

Movement uses a dual-position model: `m_position` is the target tile and `p_position` is the drawn position that interpolates toward it, giving smooth animation on a discrete grid.

## Class hierarchy

All physical objects derive from `GameObject`:

- `GameObject` &rarr; `Character` &rarr; `Player`
- `GameObject` &rarr; `Character` &rarr; `Enemy`
- `GameObject` &rarr; `ConsumableObject`
- `GameObject` &rarr; `EnvironmentObject`

Each renderable type owns its `DrawSelf()` and `LoadSprite()`, keeping rendering decoupled from the game loop.

## Ghost personalities

| Ghost | Heuristic | Speed | Behavior |
|-------|-----------|-------|----------|
| Blinky (red) | Manhattan | 1.2 | Optimal grid chasing |
| Pinky (pink) | Diagonal | 1.0 | Cuts corners aggressively |
| Inky (orange) | Dijkstra | 0.8 | Exhaustive, slower but thorough |
| Clyde (blue) | Euclidean | 0.7 | Straight-line estimate, least aggressive |

Power pellets trigger a flee state where ghosts scatter to assigned corners before resuming pursuit.

## Stack

- C++17 with raylib for windowing, rendering, and audio
- Python build script that fetches and compiles raylib from source
- Makefile targeting macOS (Cocoa, OpenGL, CoreVideo) and Windows

## Why this project matters

This project is about building systems from first principles. There is no game framework doing the heavy lifting — the collision dispatcher, pathfinding solver, input pipeline, and fixed-timestep loop are all written by hand. The A* implementation is the clearest example: one algorithm, four heuristics, four measurably different ghost behaviors.
