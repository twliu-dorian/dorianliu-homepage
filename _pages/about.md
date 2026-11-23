---
permalink: /
title: "Applied Cryptography"
hide_title: true
excerpt: "Dorian Liu's research in applied cryptography, zero-knowledge proofs, blockchains, and decentralized finance at Johns Hopkins University."
author_profile: false
classes: about-page
redirect_from:
  - /about/
  - /about.html
---

<!-- Split Layout: Left Image | Right Content -->
<section class="g-split">
  <div class="g-split__media">
    <img src="{{ '/images/dorian-640.jpg' | relative_url }}"
         srcset="{{ '/images/dorian-640.jpg' | relative_url }} 640w, {{ '/images/dorian-960.jpg' | relative_url }} 960w"
         sizes="(max-width: 600px) 200px, (max-width: 900px) 280px, 380px"
         width="640" height="960" fetchpriority="high" decoding="async" alt="Dorian Liu">

  </div>

  <div class="g-split__content">
    <p class="g-overline">Applied Cryptography · Johns Hopkins University</p>
    <h1 class="g-title">Dorian Liu</h1>

    <p class="g-bio">
      I am a first-year Ph.D. student in Computer Science at <strong>Johns Hopkins University</strong>, where I am extremely fortunate to be advised by Professor <a href="https://isi.jhu.edu/~mgreen/">Matthew D. Green</a>. My work is in applied cryptography, motivated by the dream of building a world secured by cryptographic truths — systems whose guarantees hold even when the parties running them, and the machines they run on, do not.
    </p>

    <p class="g-bio">
      My research interests center on building real-world cryptographic technologies, with a particular focus on <strong>zero-knowledge proofs</strong>, <strong>blockchains</strong>, and <strong>decentralized finance</strong>.
    </p>

    <p class="g-bio">
      Feel free to reach out at <a href="mailto:tliu96@jh.edu">tliu96@jh.edu</a>.
    </p>

    <nav class="g-links" aria-label="Research and academic profiles">
      <a href="{{ '/publications/' | relative_url }}">Publications</a>
      <a href="{{ '/cv/' | relative_url }}">CV</a>
      <a href="{{ site.author.googlescholar }}">Google Scholar</a>
      <a href="https://github.com/{{ site.author.github }}">GitHub</a>
    </nav>

  </div>
</section>

<section class="g-news" aria-labelledby="news-heading">
  <h2 id="news-heading">News</h2>
  <ul class="g-news__list">
    {% for item in site.data.news %}
    <li class="g-news__item">
      <time datetime="{{ item.date | date: '%Y-%m-%d' }}">{{ item.date | date: '%b %Y' }}</time>
      <p><a href="{{ item.url | relative_url }}">{{ item.paper }}</a> {{ item.announcement }}</p>
    </li>
    {% endfor %}
  </ul>
</section>
