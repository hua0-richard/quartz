---
title: Richard Hua
---

This is my personal site built with Quartz.

## About

I'm a computer science grad from the University of Waterloo now pursuing a Master's in Data Science at the University of British Columbia. I love building well-crafted products and the systems underneath them—design/UX, systems design and scalability, and developer tooling. I have hands-on experience in C++ for systems and performance work and I'm diving deeper into graphics/CUDA and Linux/OS internals. In early 2025 I spent a term on exchange at Chalmers University of Technology in Gothenburg, Sweden.

<div class="about-list">
  <div class="about-item">
    <div class="logo-box">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/500px-University_of_Waterloo_seal.svg.png?20181003010357" alt="University of Waterloo logo">
    </div>
    <div class="about-content">
      <div class="about-title">University of Waterloo</div>
      <div class="about-years">2020–2025 · B.CS in Computer Science</div>
      <div class="about-courses">
        <div class="about-courses-label">Selected courses</div>
        <ul class="about-courses-list">
          <li>Algorithms</li>
          <li>Operating Systems</li>
          <li>Artificial Intelligence</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="about-item">
    <div class="logo-box">
      <img src="https://cdn.worldvectorlogo.com/logos/chalmers-university-of-technology.svg" alt="Chalmers University of Technology seal">
    </div>
    <div class="about-content">
      <div class="about-title">Chalmers University of Technology</div>
      <div class="about-years">Jan–May 2025 · Exchange term in Computer Science</div>
      <div class="about-courses">
        <div class="about-courses-label">Selected courses</div>
        <ul class="about-courses-list">
          <li>Applied Machine Learning</li>
          <li>Game Engine Architecture</li>
          <li>Agile Software Development</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="about-item">
    <div class="logo-box">
      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/UBC_COA2.svg" alt="University of British Columbia crest">
    </div>
    <div class="about-content">
      <div class="about-title">University of British Columbia</div>
      <div class="about-years">2025–2026 · MDS in Data Science (current)</div>
      <div class="about-courses">
        <div class="about-courses-label">Selected courses</div>
        <ul class="about-courses-list">
          <li>Statistical Learning</li>
          <li>Machine Learning Systems</li>
          <li>Data Visualization</li>
        </ul>
      </div>
    </div>
  </div>
</div>

## Projects

I like building products that are polished at the UI layer but still force real engineering decisions underneath. These two writeups cover a retrieval-heavy ML app and a payments-heavy full-stack system, and both link through to the live demos and source code.

<style>
.about-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 16px 0;
}

.about-item {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  column-gap: 12px;
  padding: 14px 14px;
  border-radius: 16px;
  background: var(--light);
  border: 1px solid color-mix(in srgb, var(--gray) 14%, transparent);
  box-shadow: 0 6px 18px -16px color-mix(in srgb, var(--darkgray) 45%, transparent);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}

.about-item:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--gray) 30%, transparent);
  box-shadow: 0 8px 24px -12px color-mix(in srgb, var(--darkgray) 35%, transparent);
}

.logo-box {
  width: clamp(56px, 7vw, 72px);
  height: clamp(56px, 7vw, 72px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: color-mix(in srgb, var(--light) 94%, var(--lightgray) 6%);
  border: 1px solid color-mix(in srgb, var(--gray) 14%, transparent);
  overflow: hidden;
}

.logo-box img {
  width: clamp(40px, 5.5vw, 54px);
  height: clamp(40px, 5.5vw, 54px);
  display: block;
  margin: auto;
  object-fit: contain;
}

.about-title {
  font-family: var(--headerFont);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.005em;
}

.about-years {
  color: var(--darkgray);
  font-size: 0.95em;
  margin-top: 2px;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.about-courses {
  margin-top: 8px;
  color: var(--darkgray);
  font-size: 0.92em;
}

.about-courses-label {
  font-size: 0.72em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 700;
  color: color-mix(in srgb, var(--darkgray) 85%, var(--gray) 15%);
}

.about-courses-list {
  margin: 8px 0 0;
  padding-left: 18px;
  list-style: disc;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.about-courses-list li {
  font-size: 0.9em;
  line-height: 1.35;
}

@media (max-width: 520px) {
  .about-item {
    grid-template-columns: 1fr;
    row-gap: 10px;
  }

  .logo-box {
    justify-self: start;
  }

  .about-courses-list {
    gap: 4px;
  }
}

:root[saved-theme="dark"] .about-item {
  background: color-mix(in srgb, var(--dark) 88%, var(--darkgray) 12%);
  border-color: color-mix(in srgb, var(--light) 10%, transparent);
  box-shadow: 0 6px 18px -16px color-mix(in srgb, var(--darkgray) 55%, transparent);
}

:root[saved-theme="dark"] .logo-box {
  background: color-mix(in srgb, var(--darkgray) 85%, var(--dark) 15%);
  border-color: color-mix(in srgb, var(--light) 10%, transparent);
}

:root[saved-theme="dark"] .about-years {
  color: var(--gray);
}


:root[saved-theme="dark"] .about-courses-label {
  color: color-mix(in srgb, var(--gray) 80%, var(--light) 20%);
}

</style>
