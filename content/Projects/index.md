---
title: Projects
description: Selected builds across retrieval systems, developer tooling, and product-focused full-stack work.
---

A few recent projects that reflect the kind of systems work I like: opinionated interfaces on the surface, careful engineering underneath, and enough infrastructure to make the product feel real.

<div class="project-grid">
  <article class="project-card">
    <div class="project-card-header">
      <p class="project-card-eyebrow">Retrieval + Study Tools</p>
      <h3>RAG for Obsidian</h3>
    </div>
    <p>A retrieval-augmented workflow for querying Obsidian vaults, returning source-grounded answers, and turning notes into flashcards.</p>
    <ul class="project-feature-list">
      <li>Source-level citations back to uploaded markdown</li>
      <li>Hybrid retrieval with BM25 and pgvector search</li>
      <li>Profile-based embeddings and study-focus prompts</li>
    </ul>
    <div class="project-links">
      <a class="project-link project-link-primary" href="./rag-obs">Read the writeup</a>
      <a class="project-link" href="https://github.com/hua0-richard/rag-obs" target="_blank" rel="noreferrer">GitHub</a>
      <a class="project-link" href="https://melodious-liger-7621b6.netlify.app" target="_blank" rel="noreferrer">Live demo</a>
    </div>
  </article>

  <article class="project-card">
    <div class="project-card-header">
      <p class="project-card-eyebrow">Payments + Distributed Systems</p>
      <h3>GPU Store</h3>
    </div>
    <p>A full-stack compute storefront with authentication, Stripe billing, webhook processing, and Redis-backed idempotency.</p>
    <ul class="project-feature-list">
      <li>JWT auth with refresh rotation and multi-session support</li>
      <li>Stripe Checkout with verified, webhook-driven payment updates</li>
      <li>Redis locks to handle concurrent payment events safely</li>
    </ul>
    <div class="project-links">
      <a class="project-link project-link-primary" href="./gpu-store">Read the writeup</a>
      <a class="project-link" href="https://github.com/hua0-richard/gpu-store" target="_blank" rel="noreferrer">GitHub</a>
      <a class="project-link" href="https://gpu-store-web-b1y2.vercel.app" target="_blank" rel="noreferrer">Live demo</a>
    </div>
  </article>
</div>
