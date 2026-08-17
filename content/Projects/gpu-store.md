---
title: Cloud Billing Layer
description: A GPU compute storefront with Stripe Checkout, verified webhooks, and Redis locking so duplicate events cannot double-charge.
blurb: GPU compute storefront with Stripe checkout and webhook billing.
eyebrow: Payments + Distributed Systems
github: https://github.com/hua0-richard/gpu-store
demo: https://gpu-store-web-b1y2.vercel.app
features:
  - JWT auth with refresh-token rotation
  - Stripe Checkout with signature-verified webhooks
  - Redis locks against duplicate payment events
tags:
  - Projects
  - Full-stack
  - Payments
---

<div class="project-links">
  <a class="project-link project-link-primary" href="https://gpu-store-web-b1y2.vercel.app" target="_blank" rel="noreferrer">Live demo</a>
  <a class="project-link" href="https://github.com/hua0-richard/gpu-store" target="_blank" rel="noreferrer">GitHub</a>
</div>

Demo account: `demo@gpustore.dev` / `Demo1234!`

## What it does

A storefront for GPU compute billing. Users authenticate, add products to a cart, and pay through Stripe Checkout. The backend provisions from verified webhook events rather than the browser redirect, so payment state stays correct even when Stripe retries.

## Architecture

pnpm monorepo: Next.js on Vercel; NestJS, PostgreSQL, and Redis in Docker behind Tailscale Funnel. Stripe webhooks are signature-verified; Redis locks make duplicate deliveries idempotent. Auth is JWT with refresh-token rotation.

<div class="arch">
  <div class="arch-node">
    <span class="arch-icon" data-icon="chrome" aria-hidden="true"></span>
    <span class="arch-kicker">Client</span>
    <span class="arch-title">Browser</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="nextjs" aria-hidden="true"></span>
    <span class="arch-kicker">Frontend</span>
    <span class="arch-title">Next.js</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="nestjs" aria-hidden="true"></span>
    <span class="arch-kicker">API</span>
    <span class="arch-title">NestJS</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="postgresql" aria-hidden="true"></span>
    <span class="arch-kicker">Database</span>
    <span class="arch-title">PostgreSQL</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="redis" aria-hidden="true"></span>
    <span class="arch-kicker">Cache</span>
    <span class="arch-title">Redis</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="stripe" aria-hidden="true"></span>
    <span class="arch-kicker">Payments</span>
    <span class="arch-title">Stripe</span>
  </div>
  <div class="arch-node">
    <span class="arch-icon" data-icon="vercel" aria-hidden="true"></span>
    <span class="arch-kicker">Host</span>
    <span class="arch-title">Vercel</span>
  </div>
</div>

## Technologies

<ul class="tech-chips">
  <li>Next.js</li>
  <li>NestJS</li>
  <li>Prisma</li>
  <li>PostgreSQL</li>
  <li>Redis</li>
  <li>Stripe</li>
  <li>Vercel</li>
  <li>Docker</li>
  <li>Tailscale</li>
</ul>
