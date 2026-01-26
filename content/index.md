---
title: Richard Hua
---

This is my personal site built with Quartz.

## About

I'm a computer science grad from the University of Waterloo now pursuing a Master's in Data Science at the University of British Columbia. I love building well-crafted products and the systems underneath them—design/UX, systems design and scalability, and developer tooling. I'm also just starting to explore C++, graphics/CUDA, and Linux/OS internals.

<div class="about-list">
  <div class="about-item">
    <div class="logo-box">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/500px-University_of_Waterloo_seal.svg.png?20181003010357" alt="University of Waterloo logo">
    </div>
    <div>
      <div class="about-title">University of Waterloo</div>
      <div class="about-years">2020–2025 · B.CS in Computer Science</div>
    </div>
  </div>

  <div class="about-item">
    <div class="logo-box">
      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/UBC_COA2.svg" alt="University of British Columbia crest">
    </div>
    <div>
      <div class="about-title">University of British Columbia</div>
      <div class="about-years">2025–2026 · MDS in Data Science (current)</div>
    </div>
  </div>
</div>

<style>
.about-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 16px 0;
}

.about-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 14px;
  background: var(--light);
  border: 1px solid color-mix(in srgb, var(--gray) 16%, transparent);
  box-shadow: none;
}

.logo-box {
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: color-mix(in srgb, var(--light) 90%, var(--lightgray) 10%);
  border: 1px solid color-mix(in srgb, var(--gray) 20%, transparent);
  overflow: hidden;
}

.logo-box img {
  width: 54px;
  height: 54px;
  display: block;
  margin: auto;
  object-fit: contain;
}

.about-title {
  font-family: var(--headerFont);
  font-weight: 700;
}

.about-years {
  color: var(--darkgray);
  font-size: 0.95em;
}

:root[saved-theme="dark"] .about-item {
  background: color-mix(in srgb, var(--dark) 90%, var(--darkgray) 10%);
  border-color: color-mix(in srgb, var(--light) 12%, transparent);
  box-shadow: none;
}

:root[saved-theme="dark"] .logo-box {
  background: color-mix(in srgb, var(--darkgray) 85%, var(--dark) 15%);
  border-color: color-mix(in srgb, var(--light) 14%, transparent);
}

:root[saved-theme="dark"] .about-years {
  color: var(--gray);
}
</style>
