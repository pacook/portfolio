# Portfolio (GitHub Pages)

Repo: **[github.com/pacook/portfolio](https://github.com/pacook/portfolio)** · Live site: **[pacook.github.io/portfolio](https://pacook.github.io/portfolio/)**

Static portfolio for **Paul Cook** — bio, accomplishments, three case studies, and a printable resume. Content and positioning align with [paulcook.name](https://paulcook.name).

## Publish to GitHub Pages

1. Push this repository to GitHub as **`pacook/portfolio`** (this project’s files live at the repo root so `index.html` is at the root).
2. In **Settings → Pages**: **Deploy from a branch**, branch **`main`**, folder **`/ (root)`**.
3. After the first deploy, the site is available at **`https://pacook.github.io/portfolio/`** (project site URL pattern: `https://<user>.github.io/<repo>/`).
4. Replace remaining placeholders on **`resume.html`**: email, LinkedIn, education, and employer names/dates under **Professional experience**.
5. Optional: **Custom domain** — in Pages settings add your domain; in DNS use the records GitHub provides. For `paulcook.name`, add a **`CNAME`** at the repo root if that domain should point at this site.

## Local preview

Open `index.html` in a browser, or from this directory run a short-lived server, for example:

```bash
npx --yes serve .
```

## Files

| Path | Purpose |
|------|--------|
| `index.html` | Home: hero, about, accomplishments, case study cards |
| `resume.html` | Full resume; use **Print → Save as PDF** |
| `case-studies/*.html` | Three case studies |
| `css/styles.css` | Styles |
| `js/main.js` | Minor navigation helpers |

Edit copy directly in HTML. There is no build step.
