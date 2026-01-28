# Migrate to Cloudflare Pages + Transfer Domain from Namecheap

**Date:** 2026-01-27
**Type:** Migration
**Status:** Complete
**Completed:** 2026-01-28 (2 days)
**Cost:** ~$10-12/year domain renewal at cost (vs ~$15-18 at Namecheap)

---

## Progress Tracker

| Phase                            | Status | Completed  |
| -------------------------------- | ------ | ---------- |
| Phase 1: Preparation             | Done   | 2026-01-27 |
| Phase 2: Add Site to Cloudflare  | Done   | 2026-01-27 |
| Phase 3: Set Up Cloudflare Pages | Done   | 2026-01-28 |
| Phase 4: Point Nameservers       | Done   | 2026-01-27 |
| Phase 5: Domain Transfer         | Done   | 2026-01-28 |
| Phase 6: Post-Migration Cleanup  | Done   | 2026-01-28 |

---

## Overview

Consolidate hosting and domain management by:

1. Moving hosting from Netlify to Cloudflare Pages
2. Transferring domain registration from Namecheap to Cloudflare Registrar

**Benefits:**

- Everything in one dashboard (DNS, hosting, analytics, security)
- Faster performance (served directly from Cloudflare's edge)
- Cheaper domain renewal (at-cost pricing)
- Free unlimited bandwidth (vs Netlify's 100GB limit)
- Built-in DDoS protection, analytics, and SSL

---

## Pre-Migration Checklist

- [x] Domain is 60+ days old
- [x] Domain has 15+ days until expiration
- [x] Note any custom DNS records (email, etc.) - you'll need to recreate them

---

## Your DNS Records (Reference)

### Website (Netlify - will be replaced by Cloudflare Pages)

| Type  | Host | Value                        | Proxy Status     |
| ----- | ---- | ---------------------------- | ---------------- |
| A     | @    | 75.2.60.5                    | Proxied (orange) |
| CNAME | www  | jgportfolio2026.netlify.app. | Proxied (orange) |

### iCloud Email (preserved in Cloudflare)

| Type  | Host             | Value                                               | Priority | Proxy Status    |
| ----- | ---------------- | --------------------------------------------------- | -------- | --------------- |
| MX    | @                | mx01.mail.icloud.com.                               | 10       | DNS only (gray) |
| MX    | @                | mx02.mail.icloud.com.                               | 10       | DNS only (gray) |
| CNAME | sig1.\_domainkey | sig1.dkim.jasongallagher.co.at.icloudmailadmin.com. | -        | DNS only (gray) |
| TXT   | @                | apple-domain=uAUhCRadgFz3lv7k                       | -        | -               |
| TXT   | @                | v=spf1 include:icloud.com ~all                      | -        | -               |

### Other Records Found During Import

| Type | Host      | Value           | Notes                                          |
| ---- | --------- | --------------- | ---------------------------------------------- |
| TXT  | \_atproto | did=did:plc:... | Bluesky verification (can delete if not using) |

---

## Phase 1: Preparation (Day 1) - COMPLETED

### 1.1 Lower TTL at Namecheap

- [x] Log into Namecheap
- [x] Go to Domain List > your domain > Advanced DNS
- [x] Lower TTL on all records to **300 seconds** (5 minutes)
- [x] Include MX records in TTL change

### 1.2 Disable DNSSEC (if enabled)

- [x] Namecheap > Domain List > your domain > Advanced DNS
- [x] DNSSEC section > Verified off or turned off

### 1.3 Document Current DNS Records

- [x] Screenshot/documented all DNS records from Namecheap

**Completed:** 2026-01-27

---

## Phase 2: Add Site to Cloudflare (Day 2) - COMPLETED

### 2.1 Create Cloudflare Account

- [x] Go to [dash.cloudflare.com](https://dash.cloudflare.com)
- [x] Sign up for free account

### 2.2 Add Your Domain to Cloudflare

- [x] Click "Add a Site"
- [x] Enter domain name: `jasongallagher.co`
- [x] Select **Free** plan
- [x] Cloudflare scanned and imported DNS records

### 2.3 Verify DNS Records Match

- [x] Verified all iCloud email records imported correctly
- [x] MX records present with priority 10
- [x] DKIM CNAME (`sig1._domainkey`) present
- [x] SPF TXT record present
- [x] Apple domain verification TXT present
- [x] **Fixed:** Changed `sig1._domainkey` CNAME from Proxied (orange) to DNS only (gray) - critical for email delivery

**Issue Found:** Cloudflare auto-enabled proxy on `sig1._domainkey` CNAME which would break DKIM email signing. Fixed by clicking the orange cloud to turn it gray (DNS only).

**Extra Record Found:** `_atproto` TXT record appeared in Cloudflare import but wasn't visible in Namecheap. This is for Bluesky domain verification. Can be deleted if not using Bluesky with this domain as handle.

### 2.4 Cloudflare Nameservers Assigned

- [x] Nameservers received:
- [x]
  - `leonidas.ns.cloudflare.com`
  - `lola.ns.cloudflare.com`

**Completed:** 2026-01-27

---

## Phase 3: Set Up Cloudflare Pages - COMPLETED

### 3.1 Connect GitHub Repository

- [x] Cloudflare Dashboard > Developer Platform > Start Building
- [x] Connected to Git and authorized GitHub access
- [x] Selected `jason-gallagher-portfolio` repository

### 3.2 Configure Build Settings

- [x] Build command: `npm run build`
- [x] Added `VITE_TMDB_API_KEY` environment variable
- [x] Created `wrangler.jsonc` for static asset deployment
- [x] Configured `not_found_handling: single-page-application` for SPA routing

### 3.3 Deploy and Test

- [x] Initial deploy failed (missing wrangler config)
- [x] Second deploy failed (\_redirects infinite loop)
- [x] Fixed by using wrangler.jsonc SPA handling instead of \_redirects rule
- [x] Successfully deployed to: `jason-gallagher-portfolio.jasong13.workers.dev`

### 3.4 Set Up Custom Domain

- [x] Deleted old Netlify DNS records (A record and www CNAME)
- [x] Added `jasongallagher.co` custom domain
- [x] Added `www.jasongallagher.co` custom domain
- [x] Cloudflare auto-configured new DNS records

**Completed:** 2026-01-28

---

## Phase 4: Point Nameservers to Cloudflare - COMPLETED

### 4.1 Update Nameservers at Namecheap

- [x] Namecheap > Domain List > jasongallagher.co
- [x] Found "Nameservers" section (main domain page, not Advanced DNS or Personal DNS Server)
- [x] Changed from "Namecheap BasicDNS" to "Custom DNS"
- [x] Entered Cloudflare nameservers:
  - `leonidas.ns.cloudflare.com`
  - `lola.ns.cloudflare.com`
- [x] Saved changes

### 4.2 Verify Propagation

- [x] Use [dnschecker.org](https://dnschecker.org) to monitor NS records
- [x] Check that nameservers show Cloudflare's globally
- [x] Run `dig NS jasongallagher.co +short` to verify

### 4.3 Confirm in Cloudflare

- [x] Cloudflare dashboard shows "Active" status
- [x] SSL certificate provisioned automatically

**Completed:** 2026-01-27

---

## Phase 5: Domain Transfer (Day 3+) - COMPLETED

### 5.1 Unlock Domain at Namecheap

- [x] Namecheap > Domain List > your domain
- [x] Turned off Domain Lock
- [x] Propagation complete

### 5.2 Get Auth/EPP Code

- [x] Requested Auth Code
- [x] Code received

### 5.3 Initiate Transfer in Cloudflare

- [x] Cloudflare Dashboard > Domain Registration > Transfer Domains
- [x] Entered domain name
- [x] Entered EPP code
- [x] Paid renewal fee (extends domain by 1 year)

### 5.4 Approve Transfer

- [x] Received transfer approval request from Namecheap
- [x] Approved transfer
- [x] Transfer completed

**Completed:** 2026-01-28

---

## Phase 6: Post-Migration Cleanup - COMPLETED

### 6.1 Verify Everything Works

- [x] Website loads on custom domain
- [x] SSL certificate is active (padlock icon)
- [x] All pages load correctly (test React Router routes)
- [x] **Test iCloud email:** Send a test email TO <jason@jasongallagher.co>
- [x] **Test outbound:** Send a test email FROM <jason@jasongallagher.co>
- [x] Email delivery working correctly (SPF/DKIM passing)

**Email troubleshooting:** If email breaks, verify in Cloudflare DNS:

- MX records point to `mx01.mail.icloud.com` and `mx02.mail.icloud.com`
- The `sig1._domainkey` CNAME exists for DKIM signing
- Both TXT records exist (SPF and apple-domain verification)
- All email records have proxy **disabled** (gray cloud, not orange)

### 6.2 Configure Cloudflare Settings (Optional)

- [x] Enable "Always Use HTTPS"
- [x] Reviewed Page Rules - defaults sufficient for static site
- [x] Reviewed Web Analytics - optional, can enable later
- [x] Reviewed security settings - defaults appropriate
- [x] Reviewed Smart Tiered Cache - not needed for Cloudflare Pages (no external origin)

### 6.3 Remove Netlify Site

- [x] Disabled Netlify site (stops builds)
- [ ] Optionally delete site completely later

### 6.4 Update Documentation

- [x] Updated README with Cloudflare Pages deployment info
- [x] Added live URL, build config, and deployment workflow

---

## Rollback Plan

If something goes wrong:

1. **DNS issues:** Point nameservers back to Namecheap's defaults (`dns1.registrar-servers.com`, `dns2.registrar-servers.com`)
2. **Build failures:** Use Netlify as fallback (don't delete until confirmed)
3. **Transfer issues:** Contact Cloudflare support (transfers can be cancelled mid-process)
4. **Email not working:** Double-check MX records and ensure proxy is OFF (gray cloud) for all email-related records

---

## Technical Notes

### Your Site's Requirements

- Build command: `npm run build`
- Output: `dist/`
- SPA routing: `_redirects` file already exists in `public/` - works on Cloudflare Pages

### Cloudflare Pages Compatible

Your existing setup is fully compatible:

- Vite build: Supported
- React SPA: Supported
- `_redirects` file: Supported (same format as Netlify)
- Tailwind CSS: No special config needed
- Framer Motion: Works as-is

### Current State (as of 2026-01-28)

- DNS managed by Cloudflare
- Hosting on Cloudflare Pages (jasongallagher.co + www)
- Domain registration at Cloudflare (transfer complete)
- Email working: <jason@jasongallagher.co> (inbound + outbound)

---

## Cost Summary

| Item           | Namecheap          | Cloudflare                    |
| -------------- | ------------------ | ----------------------------- |
| Domain renewal | ~$13-18/year       | ~$10-12/year (at cost)        |
| Hosting        | Free (Netlify)     | Free (Pages)                  |
| SSL            | Free               | Free                          |
| CDN            | Free (Netlify CDN) | Free (better global coverage) |
| Analytics      | Extra cost         | Free                          |

**Annual savings:** ~$3-6/year + free analytics

---

## References

- [Cloudflare: Transfer your domain](https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/)
- [Cloudflare: Deploy a Vite project](https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/)
- [DNS Propagation Checker](https://dnschecker.org)

---

## Migration Log

| Date       | Action                           | Notes                                                      |
| ---------- | -------------------------------- | ---------------------------------------------------------- |
| 2026-01-27 | Lowered TTL on all DNS records   | Including MX records, set to 300 seconds                   |
| 2026-01-27 | Added site to Cloudflare         | Free plan selected                                         |
| 2026-01-27 | Imported DNS records             | Fixed sig1.\_domainkey proxy setting                       |
| 2026-01-27 | Changed nameservers at Namecheap | leonidas.ns.cloudflare.com, lola.ns.cloudflare.com         |
| 2026-01-27 | DNS propagation complete         | Verified with `dig NS jasongallagher.co +short`            |
| 2026-01-28 | Created Cloudflare Pages project | Connected GitHub repo, configured build                    |
| 2026-01-28 | Added wrangler.jsonc             | For static asset deployment from dist/                     |
| 2026-01-28 | Fixed SPA routing                | Used not_found_handling instead of \_redirects rule        |
| 2026-01-28 | Deployed to workers.dev          | jason-gallagher-portfolio.jasong13.workers.dev             |
| 2026-01-28 | Added custom domains             | jasongallagher.co and <www.jasongallagher.co>              |
| 2026-01-28 | Verified site and email          | All working on Cloudflare Pages                            |
| 2026-01-28 | Disabled Netlify site            | Stops unnecessary builds                                   |
| 2026-01-28 | Unlocked domain at Namecheap     | Awaiting propagation for transfer                          |
| 2026-01-28 | Domain transfer complete         | jasongallagher.co now registered at Cloudflare             |
| 2026-01-28 | Email verified                   | Inbound and outbound working for <jason@jasongallagher.co> |
| 2026-01-28 | Reviewed Cloudflare settings     | HTTPS enabled, reviewed caching/security options           |
| 2026-01-28 | Updated README                   | Added deployment section with Cloudflare Pages info        |
| 2026-01-28 | Migration complete               | All phases finished                                        |
