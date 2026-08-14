---
title: Cloud Billing Layer
description: A full-stack compute storefront with Stripe Checkout, Redis-backed webhook safety, and the kind of backend concerns that show up in real payment flows.
eyebrow: Payments + Distributed Systems
github: https://github.com/hua0-richard/gpu-store
demo: https://gpu-store-web-b1y2.vercel.app
features:
  - JWT auth with refresh rotation and multi-session support
  - Stripe Checkout with verified, webhook-driven payment updates
  - Redis locks to handle concurrent payment events safely
tags:
  - projects
  - full-stack
  - payments
---

<div class="project-links">
  <a class="project-link project-link-primary" href="https://gpu-store-web-b1y2.vercel.app" target="_blank" rel="noreferrer">Try now</a>
  <a class="project-link" href="https://github.com/hua0-richard/gpu-store" target="_blank" rel="noreferrer">GitHub</a>
</div>

Demo account: `demo@gpustore.dev` / `Demo1234!`

## Overview

`gpu-store` is a full-stack storefront for compute billing. It looks like a product demo on the surface, but the real value is in the backend flow: authentication, Stripe Checkout, webhook handling, and the concurrency controls needed to keep payment state correct.

## Key features

- JWT authentication with refresh-token rotation and support for multiple active sessions.
- Cart and checkout flow wired into Stripe instead of a mocked payment layer.
- Webhook-driven payment lifecycle with signature verification and idempotent processing.
- Redis-backed distributed locking so duplicated or concurrent Stripe events do not corrupt order state.
- Prisma migrations and CI/CD deployment into a real hosted stack.

## Stack

- Next.js and TypeScript on Vercel for the storefront
- NestJS, Prisma, and TypeScript on Azure Container Apps for the API
- Neon PostgreSQL for durable state
- Azure Cache for Redis for locking and short-lived coordination
- Stripe for billing and GitHub Actions for deployment automation

## Why this project matters

This project goes beyond CRUD screens. It exercises the parts of backend engineering that usually break first in production systems: auth session management, payment retries, webhook duplication, and consistency across multiple services. The Redis locking around Stripe event handling is the clearest example of that focus.
