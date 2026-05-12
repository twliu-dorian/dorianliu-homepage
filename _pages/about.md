---
permalink: /
title: ""
excerpt: "About me"
author_profile: false
classes: about-page
redirect_from:
  - /about/
  - /about.html
---

<!-- Split Layout: Left Image | Right Content -->
<section class="g-split">
  <div class="g-split__media">
    <img src="{{ '/images/20260102_Dorian_1.jpg' | relative_url }}" alt="Dorian Liu">

  </div>

  <div class="g-split__content">
    <p class="g-overline">About Me</p>

    <p class="g-bio">
      I am a first-year Ph.D. student in Computer Science at <strong>Johns Hopkins University</strong>, where I am extremely fortunate to be advised by Professor <a href="https://isi.jhu.edu/~mgreen/">Matthew D. Green</a>. My work is in applied cryptography, motivated by the dream of building a world secured by cryptographic truths — systems whose guarantees hold even when the parties running them, and the machines they run on, do not.
    </p>

    <p class="g-bio">
      My research interests center on building real-world cryptographic technologies, with a particular focus on <strong>zero-knowledge proofs</strong>, <strong>blockchains</strong>, and <strong>decentralized finance</strong>.
    </p>

    <p class="g-bio">
      Feel free to reach out at <a id="contact-email" href="#" data-u="tliu96" data-d="jh.edu" rel="nofollow">tliu96 [at] jh [dot] edu</a>.
    </p>

    <script>
      (function () {
        var a = document.getElementById('contact-email');
        if (!a) return;
        a.addEventListener('click', function (e) {
          e.preventDefault();
          window.location.href = 'mailto:' + a.dataset.u + '@' + a.dataset.d;
        });
      })();
    </script>

  </div>
</section>
