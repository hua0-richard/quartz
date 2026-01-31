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
    <div>
      <div class="about-title">University of Waterloo</div>
      <div class="about-years">2020–2025 · B.CS in Computer Science</div>
    </div>
  </div>

  <div class="about-item">
    <div class="logo-box">
      <img src="https://media.licdn.com/dms/image/v2/C4E0BAQFdK9pXmsNksw/company-logo_200_200/company-logo_200_200/0/1675779390326/chalmers_university_of_technology_logo?e=1770854400&v=beta&t=2U02--NABFsw4h7ps8zIGf1dbAlypI67Elp3JqHW-1o" alt="Chalmers University of Technology wordmark">
    </div>
    <div>
      <div class="about-title">Chalmers University of Technology</div>
      <div class="about-years">Jan–May 2025 · Exchange term in Computer Science</div>
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
