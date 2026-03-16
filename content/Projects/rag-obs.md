---
title: RAG for Obsidian
description: A retrieval-augmented study workflow for Obsidian vaults with citations and flashcard generation.
tags:
  - projects
  - rag
  - llm
  - obsidian
---

<div class="project-links">
  <a class="project-link project-link-primary" href="https://melodious-liger-7621b6.netlify.app" target="_blank" rel="noreferrer">Live demo</a>
  <a class="project-link" href="https://github.com/hua0-richard/rag-obs" target="_blank" rel="noreferrer">GitHub</a>
</div>

## Overview

`rag-obs` is a retrieval-augmented study tool built around Obsidian markdown notes. The workflow is simple: upload a set of notes, ask a focused question, and generate answers or flashcards grounded in the source material instead of generic model output.

## What it does well

- Returns source-level citations so you can trace an answer back to the exact note section it came from.
- Generates flashcards from selected notes and can bias retrieval with an optional study-focus prompt.
- Preserves heading context during chunking, which keeps the retrieved evidence more readable and more useful.
- Classifies notes into `default`, `code`, and `verbose` embedding profiles at upload time so retrieval behavior can adapt to the note structure.

## Stack

- React 19, Vite, and Tailwind CSS on the frontend
- FastAPI and Python 3.12 on Azure Container Apps
- PostgreSQL with `pgvector` on Neon for retrieval storage
- OpenRouter with DeepSeek V3 in production, plus Ollama support for local development

## Engineering notes

The most interesting part of the project is the retrieval layer. It mixes BM25 keyword search with semantic search over `pgvector`, then uses the ranked context to drive flashcard generation. The app also keeps session creation lightweight by generating a UUID in the browser first and only creating the backing database row lazily on the first upload.
