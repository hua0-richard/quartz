---
title: C++ Game Engine
description: A from-scratch 2D engine in C++ with A* pathfinding, visitor-pattern collision, and a Pac-Man clone that exercises every subsystem.
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

## What it does

A 2D game engine written in C++ on raylib, with a Pac-Man clone on top to exercise pathfinding, collision, input, rendering, and audio. Engine code stays separate from game logic.

## Architecture

A `Window` owns the fixed-timestep loop and coordinates four systems: a tile `Level`, a visitor-pattern `Collider`, A* `PathFinding` with a different heuristic per ghost, and an `InputHandler` that validates moves before committing them.

<div class="arch arch-hub">
  <div class="arch-node arch-hub-root">
    <span class="arch-icon" data-icon="window" aria-hidden="true"></span>
    <span class="arch-kicker">Game loop</span>
    <span class="arch-title">Window</span>
  </div>
  <div class="arch-hub-systems">
    <div class="arch-node">
      <span class="arch-icon" data-icon="keyboard" aria-hidden="true"></span>
      <span class="arch-kicker">Input</span>
      <span class="arch-title">InputHandler</span>
    </div>
    <div class="arch-node">
      <span class="arch-icon" data-icon="grid" aria-hidden="true"></span>
      <span class="arch-kicker">World</span>
      <span class="arch-title">Level</span>
    </div>
    <div class="arch-node">
      <span class="arch-icon" data-icon="boxes" aria-hidden="true"></span>
      <span class="arch-kicker">Physics</span>
      <span class="arch-title">Collider</span>
    </div>
    <div class="arch-node">
      <span class="arch-icon" data-icon="route" aria-hidden="true"></span>
      <span class="arch-kicker">AI</span>
      <span class="arch-title">PathFinding</span>
    </div>
  </div>
</div>

## Technologies

<ul class="tech-chips">
  <li>C++17</li>
  <li>raylib</li>
  <li>Makefile</li>
  <li>Python</li>
</ul>
