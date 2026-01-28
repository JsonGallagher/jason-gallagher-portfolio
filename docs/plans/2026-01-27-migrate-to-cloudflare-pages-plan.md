# Migrate to Cloudflare Pages + Transfer Domain from Namecheap

**Date:** 2026-01-27
**Type:** Migration
**Status:** In Progress
**Estimated Timeline:** 3-7 days (mostly waiting for DNS/transfer)
**Cost:** ~$10-12/year domain renewal at cost (vs ~$15-18 at Namecheap)

---

## Progress Tracker

| Phase | Status | Completed |
|-------|--------|-----------|
| Phase 1: Preparation | Done | 2026-01-27 |
| Phase 2: Add Site to Cloudflare | Done | 2026-01-27 |
| Phase 3: Set Up Cloudflare Pages | Done | 2026-01-28 |
| Phase 4: Point Nameservers | Done | 2026-01-27 |
| Phase 5: Domain Transfer | Not Started | - |
| Phase 6: Post-Migration Cleanup | In Progress | - |

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
| Type | Host | Value | Proxy Status |
|------|------|-------|--------------|
| A | @ | 75.2.60.5 | Proxied (orange) |
| CNAME | www | jgportfolio2026.netlify.app. | Proxied (orange) |

### iCloud Email (preserved in Cloudflare)
| Type | Host | Value | Priority | Proxy Status |
|------|------|-------|----------|--------------|
| MX | @ | mx01.mail.icloud.com. | 10 | DNS only (gray) |
| MX | @ | mx02.mail.icloud.com. | 10 | DNS only (gray) |
| CNAME | sig1._domainkey | sig1.dkim.jasongallagher.co.at.icloudmailadmin.com. | - | DNS only (gray) |
| TXT | @ | apple-domain=uAUhCRadgFz3lv7k | - | - |
| TXT | @ | v=spf1 include:icloud.com ~all | - | - |

### Other Records Found During Import
| Type | Host | Value | Notes |
|------|------|-------|-------|
| TXT | _atproto | did=did:plc:... | Bluesky verification (can delete if not using) |

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
- [x] Second deploy failed (_redirects infinite loop)
- [x] Fixed by using wrangler.jsonc SPA handling instead of _redirects rule
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
- [ ] Use [dnschecker.org](https://dnschecker.org) to monitor NS records
- [ ] Check that nameservers show Cloudflare's globally
- [ ] Run `dig NS jasongallagher.co +short` to verify

### 4.3 Confirm in Cloudflare
- [ ] Cloudflare dashboard shows "Active" status
- [ ] SSL certificate provisioned automatically

**Note:** Site continues to work via Netlify during propagation. Cloudflare proxies traffic to Netlify's IP (75.2.60.5) until Cloudflare Pages is set up.

**Completed:** 2026-01-27 (awaiting propagation confirmation)

---

## Phase 5: Domain Transfer (Day 3+) - NOT STARTED

### 5.1 Unlock Domain at Namecheap
1. Namecheap > Domain List > your domain
2. Go to "Sharing & Transfer" tab
3. Turn off Domain Lock

### 5.2 Get Auth/EPP Code
1. Same page > Request Auth Code
2. Code will be emailed to your registered email
3. Code is valid for a limited time

### 5.3 Initiate Transfer in Cloudflare
1. Cloudflare Dashboard > Domain Registration > Transfer Domains
2. Enter your domain name
3. Enter the EPP code
4. Pay the renewal fee (extends domain by 1 year)

### 5.4 Approve Transfer
1. Check email for transfer approval request from Namecheap
2. Approve immediately to speed up transfer
3. Transfer completes in 1-5 days (often faster if approved quickly)

---

## Phase 6: Post-Migration Cleanup - IN PROGRESS

### 6.1 Verify Everything Works
- [x] Website loads on custom domain
- [x] SSL certificate is active (padlock icon)
- [x] All pages load correctly (test React Router routes)
- [x] **Test iCloud email:** Send a test email TO your @jasongallagher.co address
- [ ] **Test outbound:** Send a test email FROM your @jasongallagher.co address
- [ ] Check email doesn't land in spam (SPF/DKIM should pass)

**Email troubleshooting:** If email breaks, verify in Cloudflare DNS:
- MX records point to `mx01.mail.icloud.com` and `mx02.mail.icloud.com`
- The `sig1._domainkey` CNAME exists for DKIM signing
- Both TXT records exist (SPF and apple-domain verification)
- All email records have proxy **disabled** (gray cloud, not orange)

### 6.2 Configure Cloudflare Settings (Optional)
- [ ] Enable "Always Use HTTPS"
- [ ] Set up Page Rules for caching
- [ ] Enable Web Analytics (free, privacy-focused)
- [ ] Review security settings

### 6.3 Remove Netlify Site
1. Netlify Dashboard > your site > Site configuration
2. Delete site (do this AFTER confirming everything works on Cloudflare Pages)

### 6.4 Update Documentation
- [ ] Update any README references to hosting
- [ ] Update deploy instructions if documented anywhere

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
- Domain registration still at Namecheap (transfer pending)

---

## Cost Summary

| Item | Namecheap | Cloudflare |
|------|-----------|------------|
| Domain renewal | ~$13-18/year | ~$10-12/year (at cost) |
| Hosting | Free (Netlify) | Free (Pages) |
| SSL | Free | Free |
| CDN | Free (Netlify CDN) | Free (better global coverage) |
| Analytics | Extra cost | Free |

**Annual savings:** ~$3-6/year + free analytics

---

## References

- [Cloudflare: Transfer your domain](https://developers.cloudflare.com/registrar/get-started/transfer-domain-to-cloudflare/)
- [Cloudflare: Deploy a Vite project](https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/)
- [DNS Propagation Checker](https://dnschecker.org)

---

## Migration Log

| Date | Action | Notes |
|------|--------|-------|
| 2026-01-27 | Lowered TTL on all DNS records | Including MX records, set to 300 seconds |
| 2026-01-27 | Added site to Cloudflare | Free plan selected |
| 2026-01-27 | Imported DNS records | Fixed sig1._domainkey proxy setting |
| 2026-01-27 | Changed nameservers at Namecheap | leonidas.ns.cloudflare.com, lola.ns.cloudflare.com |
| 2026-01-27 | DNS propagation complete | Verified with `dig NS jasongallagher.co +short` |
| 2026-01-28 | Created Cloudflare Pages project | Connected GitHub repo, configured build |
| 2026-01-28 | Added wrangler.jsonc | For static asset deployment from dist/ |
| 2026-01-28 | Fixed SPA routing | Used not_found_handling instead of _redirects rule |
| 2026-01-28 | Deployed to workers.dev | jason-gallagher-portfolio.jasong13.workers.dev |
| 2026-01-28 | Added custom domains | jasongallagher.co and www.jasongallagher.co |
| 2026-01-28 | Verified site and email | All working on Cloudflare Pages |
