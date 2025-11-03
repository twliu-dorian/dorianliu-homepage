---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

---

# 🎓 Education

## 🏫 Johns Hopkins University · Baltimore, MD, USA

- **Ph.D. in Computer Science** (Jun 2025 – Present)  
  Advisor: **Prof. Matthew D. Green**
- **M.S. in Computer Science (Security Informatics)** (Aug 2023 – May 2025)

## 🏫 National Tsing Hua University · Hsinchu, Taiwan

- **B.S. in Computer Science & Power Mechanical Engineering** (Sep 2017 – Jun 2021)

---

# 💼 Work Experience

## 💻 Nethermind — ZK Research Engineer ｜ Intern

📍 Remote, United Kingdom ｜ 🗓️ May 2024 – Jun 2025

- **Project:** [PLONK Verifier in Cairo](https://github.com/NethermindEth/verify-everything/tree/main/plonk-verifier)
- Developed and open-sourced the first PLONK verifier written in Cairo within the Starknet ecosystem.
- Reduced 65% of CairoVM step counts by implementing Karatsuba fast extension field algorithms and writing circuit-optimized Algebraic Intermediate Representation (A.I.R.) code for higher efficiency.

## 💻 Chelpis Quantum Tech. — Blockchain/Cryptography Software Engineer

📍 Taipei, Taiwan ｜ 🗓️ Dec 2021 – May 2023

- **Product:** [Custody](https://www.aegiscustody.com/custody)
- Designed and implemented a cryptocurrency vault securing multi-million dollars’ worth of digital assets for custodial and staking services.
- Implemented and integrated wallet services on multiple blockchains, including Ethereum, Near, and Cardano, using multi-party computation (MPC) signing algorithms and cryptographic system engineering.
- Developed a Public Key Infrastructure (PKI) used by over 2,000 hardware devices in collaboration with Infineon, employing TPM to construct a 4-level key hierarchy for embedded systems.
- Built NFT smart contracts minted by over 1,000 users and developed backend services for an NFT marketplace supporting atomic swaps across ERC20, ERC721, and ERC1155 tokens via 0x protocol v3.

## 💻 Blockchain Security Corp. — Backend Software Engineer ｜ Intern

📍 Taipei, Taiwan ｜ 🗓️ Jan 2021 – May 2021 ｜ Jun 2021 – Aug 2021

- Reduced 95% of data storage usage and improved comparison algorithm performance by 33% by extracting characteristic values from images and text for plagiarism detection.
- Hosted and maintained six IPFS network nodes within the company for persistent storage of digital evidence.

---

# 🛠️ Skills

## 🧩 Programming Languages

Rust, Cairo, Go, Solidity, C, C++, Python, Circom, Typescript

## 🧩 Dev Tools

Linux, AWS, MySQL, RESTful API, Docker, Git, Kafka, C4 Model, PlantUML

---

# 🪶 Publications

  <div>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</div>
<!--   
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
<!-- Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul> -->
  
<!-- Service and leadership
======
* Currently signed in to 43 different slack teams -->
