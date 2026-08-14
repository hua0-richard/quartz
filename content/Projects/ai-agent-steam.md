---
title: Perplexity for Steam
description: A multimodal agent over a ~5K-game Steam catalog — search by text, screenshot, or voice, with live prices in the conversation.
eyebrow: Multi-modal Agent + Search
github: https://github.com/hua0-richard/ai-agent-ecomm
demo: https://ai-agent-ecomm.vercel.app
features:
  - Hybrid BM25 plus vector search with reranking
  - CLIP image search and Whisper voice input
  - Live Steam pricing via tool-calling
tags:
  - projects
  - ai-agent
  - search
---

<div class="project-links">
  <a class="project-link project-link-primary" href="https://ai-agent-ecomm.vercel.app" target="_blank" rel="noreferrer">Live demo</a>
  <a class="project-link" href="https://github.com/hua0-richard/ai-agent-ecomm" target="_blank" rel="noreferrer">GitHub</a>
</div>

## What it does

A conversational discovery engine for Steam. Ask in natural language, upload a screenshot, or speak a query; the agent retrieves matching games from a ~5K-game catalog and can pull live prices and player counts into the reply.

## Architecture

LangChain agent over a four-service backend. Retrieval is hybrid BM25 plus pgvector, fused and reranked. CLIP handles image search; Whisper handles speech. Responses stream to React over SSE; tool-calling hits the Steam API.

<div class="arch">
  <div class="arch-node">
    <span class="arch-icon" data-icon="chrome" aria-hidden="true"></span>
    <span class="arch-kicker">Client</span>
    <span class="arch-title">Browser</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="react" aria-hidden="true"></span>
    <span class="arch-kicker">Frontend</span>
    <span class="arch-title">React</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="fastapi" aria-hidden="true"></span>
    <span class="arch-kicker">Agent</span>
    <span class="arch-title">FastAPI</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="postgresql" aria-hidden="true"></span>
    <span class="arch-kicker">Search</span>
    <span class="arch-title">pgvector</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="huggingface" aria-hidden="true"></span>
    <span class="arch-kicker">Vision</span>
    <span class="arch-title">CLIP</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="openai" aria-hidden="true"></span>
    <span class="arch-kicker">Voice</span>
    <span class="arch-title">Whisper</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="steam" aria-hidden="true"></span>
    <span class="arch-kicker">Live</span>
    <span class="arch-title">Steam API</span>
  </div>
</div>

## Technologies

<ul class="tech-chips">
  <li>Python</li>
  <li>FastAPI</li>
  <li>React</li>
  <li>LangChain</li>
  <li>PostgreSQL</li>
  <li>pgvector</li>
  <li>Docker</li>
  <li>CLIP</li>
  <li>Whisper</li>
</ul>
