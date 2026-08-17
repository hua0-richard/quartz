---
title: Perplexity for Steam
description: A multimodal agent over a ~5K-game Steam catalog — search by text, screenshot, or voice, with live prices in the conversation.
blurb: Search a Steam catalog by text, screenshot, or voice.
eyebrow: Multi-modal Agent + Search
github: https://github.com/hua0-richard/ai-agent-ecomm
demo: https://ai-agent-ecomm.vercel.app
features:
  - Hybrid BM25 plus vector search with reranking
  - CLIP image search and Whisper voice input
  - Live Steam pricing via tool-calling
tags:
  - Projects
  - Agents
  - Search
---

<div class="project-links">
  <a class="project-link project-link-primary" href="https://ai-agent-ecomm.vercel.app" target="_blank" rel="noreferrer">Live demo</a>
  <a class="project-link" href="https://github.com/hua0-richard/ai-agent-ecomm" target="_blank" rel="noreferrer">GitHub</a>
</div>

## What it does

A conversational discovery engine for Steam. Ask in natural language, upload a screenshot, or speak a query; the agent retrieves matching games from a ~5K-game catalog and can pull live prices and player counts into the reply.

## Architecture

LangChain agent over a four-service backend. Retrieval is hybrid BM25 plus pgvector, fused and reranked. CLIP handles image search; Whisper handles speech. Responses stream to React over SSE. Tool-calling hits the Steam API for live prices and Tavily for web search; the chat model is OpenRouter in production.

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
    <span class="arch-kicker">Database</span>
    <span class="arch-title">pgvector</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="openrouter" aria-hidden="true"></span>
    <span class="arch-kicker">LLM</span>
    <span class="arch-title">OpenRouter</span>
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
    <span class="arch-kicker">Live data</span>
    <span class="arch-title">Steam API</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="tavily" aria-hidden="true"></span>
    <span class="arch-kicker">Web search</span>
    <span class="arch-title">Tavily</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="vercel" aria-hidden="true"></span>
    <span class="arch-kicker">Host</span>
    <span class="arch-title">Vercel</span>
  </div>
</div>

## Technologies

<ul class="tech-chips">
  <li>React</li>
  <li>FastAPI</li>
  <li>PostgreSQL</li>
  <li>pgvector</li>
  <li>LangChain</li>
  <li>OpenRouter</li>
  <li>CLIP</li>
  <li>Whisper</li>
  <li>Steam API</li>
  <li>Tavily</li>
  <li>Vercel</li>
  <li>Docker</li>
</ul>
