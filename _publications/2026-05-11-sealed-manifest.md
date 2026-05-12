---
title: "The Sealed Manifest: Privacy-Preserving Vulnerability Assurance for Software Bills of Materials"
collection: publications
category: manuscripts
permalink: /publication/2026-05-11-sealed-manifest
excerpt: "Under review at ACM CCS 2026. A zero-knowledge framework that lets manufacturers demonstrate SBOM vulnerability assurance without revealing component-level supply chain details."
date: 2026-05-11
venue: "Under review at ACM CCS 2026"
---

**Abstract**

Software Bills of Materials (SBOMs) enumerate software components and dependencies within a product. They are increasingly mandated by regulatory bodies, including for medical devices, to support supply chain transparency and vulnerability management. Regulators and downstream stakeholders, such as hospitals, are also expecting SBOM disclosure. This expectation is not without risk, as detailed component information enables adversaries to identify and exploit vulnerabilities. Prior work demonstrates that functional exploits can be generated using regulatory-compliant SBOMs, public vulnerability databases, and large language models with high success rates and minimal cost.

To mitigate this risk, we present a zero-knowledge cryptographic framework for privacy-preserving vulnerability assurance called the **Sealed Manifest**. Our construction performs private CVE lookups using verifiable private information retrieval (VPIR) to ensure that vulnerability databases return correct and complete results without revealing which components are queried. We incorporate updatable non-interactive zero-knowledge proofs (NIZKs) with asynchronous callbacks to address rapidly evolving software and newly disclosed vulnerabilities, enabling manufacturers to continuously refresh security attestations without re-disclosing their SBOM. The Sealed Manifest allows manufacturers to demonstrate regulatory compliance while minimizing exposure of sensitive supply chain information.

We evaluate our system using the National Vulnerability Database, covering 327,967 CVEs across 304,084 components from 35,456 vendors. VPIR queries over an 881,603-record database complete in 3.5 seconds with approximately 2% overhead. The full proof pipeline proves in 1.2 seconds, verifies in 10 milliseconds, and produces a constant-size 2.2 KB credential bundle, demonstrating that privacy-preserving vulnerability assurance is practical for real-world regulatory settings.
