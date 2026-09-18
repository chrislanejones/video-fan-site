# PARKING_LOT

Adjacent problems found during the dependency refresh. Not fixed on purpose.

- **Build is broken at baseline.** `src/app/page.tsx:42` passes Prisma `Video[]` to a prop typed `VideoType[]`. The Prisma type lacks `artistName`, `artistImageSrc`, and `views`. Both `tsc --noEmit` and `next build` fail on it. Same error before and after the update.
- **`prisma/dev.db` is tracked in git.** A committed SQLite file. Decide whether it belongs in the repo.
- **`shadcn-ui` is dead weight.** npm marks it "no longer supported". It is not imported anywhere in `src/` and sits in runtime `dependencies`. Remove it. The current CLI package is `shadcn`, and it belongs in devDependencies or `npx` only.
- **Prod audit still shows 12 findings** (3 low, 2 moderate, 6 high, 1 critical). The rest need major bumps: Next 16 and next-video 2.x. The Prisma chain (`deepmerge-ts` via `@prisma/config`) has no in-range fix.
- **ESLint 8 is end-of-life.** Upgrading means ESLint 9+ with flat config, and `eslint-config-next` moves with Next.
