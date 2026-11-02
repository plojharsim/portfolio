# Portfolio – plojharsim.cz

Osobní portfolio Šimona Plojhara (15 let, programátor z ČR). Web je česky (`lang="cs"`), veškerý obsah a texty piš česky se správnou mluvnicí.

## Nasazení
- GitHub: `plojharsim/portfolio`, větev `main`.
- Vercel nasazuje automaticky z `main` na doméně **plojharsim.cz**. Push do `main` = ostrý web. Uživatel si přeje, aby se hotové změny **vždy rovnou commitly a pushly do `main`** (bez ptaní); předtím ověř `npm run build`.
- Původně vzniklo v Lovable/Dyad (`.dyad/` je v `.gitignore`). `lovable-tagger` je jen dev plugin ve `vite.config.ts`.
- `vercel.json` obsahuje SPA rewrite, aby přímé odkazy na podstránky nevracely 404.

## Stack
Vite 5 + React 18 + TypeScript, Tailwind 3, shadcn/ui (Radix) v `src/components/ui/` (generované, needituj bez důvodu), React Router 6, lucide-react, React Query (zatím nepoužité pro reálná data).

## Příkazy
- `npm run dev` – dev server na portu 8080
- `npm run build` – produkční build do `dist/` (ignorovaný gitem)
- `npx tsc -p tsconfig.app.json --noEmit` – typová kontrola (aktuálně čistá)
- `npm run lint` – bez chyb (zbývají jen varování ve shadcn `ui/*`)
- Žádné testy. Používej **npm**, lockfile je jen `package-lock.json`.

## Struktura
- `src/pages/` – `Index` (home: Hero, About, Skills, Projects, Contact), `MyStory` (`/muj-pribeh`), `ProjectsPage` (`/projekty`), `Blog` (`/blog`), `BlogPost` (`/blog/:id`), `NotFound`.
- `src/components/` – sekce domovské stránky, `Navigation`, `Footer`.
- `src/data/projects.ts` – seznam projektů (přidání projektu = nový objekt, status `Vydáno | Ve vývoji | Plánováno`).
- `src/data/blog.ts` – články blogu; `content` je HTML řetězec, `date` ve formátu `D. M. RRRR`, kategorie `Osobní | Technologie | Vize | YouTube`.
- `public/certifikaty/` – PDF certifikáty, `public/robots.txt`.
- Routy jsou v `src/App.tsx`; nové přidávej nad catch-all `*`.

## Konvence
- Alias `@/` → `src/`. Stylování jen Tailwind třídami, ikony z lucide-react, formuláře React Hook Form + Zod.
- SEO meta je v `index.html` (canonical `https://plojharsim.cz`). Sitemapa ani JSON-LD záměrně nejsou (dřívější verze se vědomě nevracejí).
- Kontaktní e-mail: kontakt@plojharsim.cz (`src/components/Contact.tsx`).
