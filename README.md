# apex-corbet-ch

Apex landing page for [corbet.ch](https://corbet.ch). A linkpage that will (eventually) map all services Julian runs under the corbet.ch domain.

## Tech stack

- [Astro 6](https://astro.build/) — static site generation
- [bun](https://bun.sh/) — package manager + runtime
- [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) — hosting

Naming convention: `apex` is the DNS-canonical name for the bare-domain slot, in the same family as `cv-corbet-ch`, `baggagelimits-corbet-ch`, etc. Local folder drops the `-corbet-ch` suffix.

## Develop

```bash
bun install
bun run dev
```

## Deploy

```bash
bun run build
CLOUDFLARE_EMAIL="$cf_email" CLOUDFLARE_API_KEY="$cf_key" bunx wrangler deploy
```

Credentials live in `~/.agent/secrets/cloudflare.md`.

## Routing

The Worker binds `corbet.ch` as a custom domain. More-specific Worker routes on the same hostname (`corbet.ch/.well-known/*` → `well-known` Worker) continue to win on their paths.
