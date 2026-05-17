---
title: AI Agent for Steam
description: A conversational game discovery engine with hybrid search, image-based retrieval, and real-time Steam data integration.
eyebrow: Multi-modal Agent + Search
github: https://github.com/hua0-richard/ai-agent-ecomm
demo: https://ai-agent-ecomm.vercel.app
features:
  - Hybrid BM25 plus vector search with cross-encoder reranking
  - Multi-modal retrieval via CLIP (images) and Whisper (voice)
  - Live tool-calling for real-time Steam pricing and player counts
tags:
  - projects
  - ai-agent
  - search
---

<div class="project-links">
  <a class="project-link project-link-primary" href="https://ai-agent-ecomm.vercel.app" target="_blank" rel="noreferrer">Try now</a>
  <a class="project-link" href="https://github.com/hua0-richard/ai-agent-ecomm" target="_blank" rel="noreferrer">GitHub</a>
</div>

## Overview

`ai-agent-ecomm` is a conversational discovery engine built to help gamers navigate the Steam catalog. It moves beyond simple keyword matching, using a multi-modal approach that lets users search via natural language, uploaded screenshots, or voice input.

## What it does well

- Integrates real-time Steam API data (prices, player counts, discounts) directly into the conversation via LangChain tool-calling.
- Combines BM25 and vector retrieval with RRF (Reciprocal Rank Fusion) and cross-encoder reranking for highly precise game recommendations.
- Features a CLIP-powered visual search pipeline that can embed an uploaded image and find visually similar games in the catalog.
- Uses Server-Sent Events (SSE) and token buffering to ensure product cards and streamed responses sync deterministically in the UI.

## Stack

- React, Vite, and Tailwind CSS on the frontend
- FastAPI and Python on the backend
- PostgreSQL with `pgvector` for hybrid and image-based retrieval
- LangChain for agent orchestration (Ollama/OpenRouter)
- CLIP for image embeddings and Whisper for speech-to-text

## Engineering notes

The core challenge was building a deterministic bridge between the agent's reasoning and the UI's product cards. Since the LLM might skip tools or mention games out of order, the backend implements a specialized matching algorithm that validates `app_ids` and reorders UI cards to match the narrative flow of the response. This ensures the visual output always aligns with what the agent is saying.
