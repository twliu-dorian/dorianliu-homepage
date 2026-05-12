---
title: "HoneyCodes: Auditable Short-Code Authentication After Verifier Compromise"
collection: publications
category: manuscripts
permalink: /publication/2026-05-11-honeycodes
excerpt: "Under review at ACM CCS 2026. Auditable short-code authentication that lets a client prove non-generation of disputed codes after verifier compromise, with a practical TOTP instantiation."
date: 2026-05-11
venue: "Under review at ACM CCS 2026"
---

**Abstract**

Many authentication systems rely on extremely short codes, often bound to a message or time epoch, in order to support human entry, low-bandwidth transmission, or strict format constraints. A prominent example is time-based one-time password (TOTP) authentication, where a client proves possession of a secret by transmitting a short decimal code derived from the current time period. In this regime, compromise of verifier-side secret material creates a fundamental limitation: because the authentication space is tiny, an attacker that learns the verifier's secret can efficiently identify valid codes for future messages or epochs, and can therefore impersonate the legitimate client in a way that is indistinguishable to the verifier. Thus, for short-code authentication, post-compromise unforgeability is unattainable in the usual sense.

We therefore study a different goal: **auditability after verifier compromise**. Informally, we seek schemes in which a client can later provide sound evidence that it did not have the ability to generate a disputed accepted code, thereby supporting an allegation that the code was produced using compromised verifier state.

The challenge in enabling auditing for short-code systems is to avoid storing large amounts of state at the client or verifier. Our contribution is to realize this goal while keeping state compact, using techniques from the area of constrained pseudorandom primitives. Our primary application is TOTP, for which we design and implement a reference system that preserves the standard short-code interface while enabling ex post auditability. At a high level, our approach separates the verifier's ability to validate short authentication codes from the client's ability to later prove non-generation for selected time epochs. We prove security against an adversary that persistently compromises the verifier, observes prior honest authentications, and then attempts to generate fresh accepted codes for new epochs.

We instantiate our construction using RSA-based projective PRGs and show that it is practical: to support 30 second epochs over a year, our prototype requires one-time communication of a ~100 KB client key, ~100 KB client storage, per-epoch code generation under 1 second, and server verification in ~250 ns. These results show that short authentication codes and post-compromise auditability can be achieved simultaneously in practice.
