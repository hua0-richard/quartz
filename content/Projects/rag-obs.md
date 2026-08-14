---
title: Quizlet for Obsidian.md
description: RAG over Obsidian notes — heading-aware chunking, hybrid retrieval, citations, and flashcards from uploaded markdown.
eyebrow: Retrieval + Study Tools
github: https://github.com/hua0-richard/rag-obs
demo: https://melodious-liger-7621b6.netlify.app
features:
  - Source-grounded answers with note-level citations
  - Hybrid BM25 plus vector retrieval over pgvector
  - Flashcard generation from uploaded notes
tags:
  - projects
  - rag
  - llm
---

<div class="project-links">
  <a class="project-link project-link-primary" href="https://melodious-liger-7621b6.netlify.app" target="_blank" rel="noreferrer">Live demo</a>
  <a class="project-link" href="https://github.com/hua0-richard/rag-obs" target="_blank" rel="noreferrer">GitHub</a>
</div>

## What it does

A study tool for Obsidian vaults. Upload markdown notes, ask a question, and get answers grounded in those notes — with citations back to the source — or generate flashcards from the same material.

## Architecture

React frontend and FastAPI/LangChain backend. Notes are chunked with heading context preserved, then retrieved with hybrid BM25 plus pgvector. Ranked context drives both Q&A and flashcard generation.

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
    <span class="arch-kicker">API</span>
    <span class="arch-title">FastAPI</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="postgresql" aria-hidden="true"></span>
    <span class="arch-kicker">Retrieval</span>
    <span class="arch-title">pgvector</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="openrouter" aria-hidden="true"></span>
    <span class="arch-kicker">LLM</span>
    <span class="arch-title">OpenRouter</span>
  </div>
</div>

## Technologies

<ul class="tech-chips">
  <li>Python</li>
  <li>FastAPI</li>
  <li>LangChain</li>
  <li>React</li>
  <li>PostgreSQL</li>
  <li>pgvector</li>
  <li>Docker</li>
  <li>Tailscale</li>
</ul>
