# Graph Report - asd-san-domenico-savio  (2026-11-17)

## Corpus Check
- 300 files · ~32,929 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: .css 3, (none) 2, .ico 1)

## Summary
- 788 nodes · 1883 edges · 44 communities (32 shown, 12 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e49b13df`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- tailwind-variants
- Container
- content.config.ts
- carousel-context.tsx
- @base-ui/react
- Button
- navigation-menu/index.ts
- sheet/index.ts
- field.types.ts
- react
- SectionHeading
- content.config.ts
- avatar/index.ts
- events.tsx
- contact.tsx
- package.json
- dependencies
- aliases
- .oxfmtrc.json
- Sito società di pattinaggio artistico
- checkbox.tsx
- astro.config.mjs
- .oxlintrc.json
- scripts
- tsconfig.json
- theme-switcher.tsx
- Image pipeline and art direction
- Feature-Sliced Design contract
- Visual fidelity contract
- Codex repository contract
- Small-task contract
- zod@^4.6.7
- Tailwind CSS and Tailwind Variants
- astro-react.md
- pnpm-workspace.yaml
- README.md

## God Nodes (most connected - your core abstractions)
1. `tailwind-variants` - 69 edges
2. `@base-ui/react` - 55 edges
3. `react` - 38 edges
4. `Container()` - 29 edges
5. `Button()` - 25 edges
6. `fieldStyles` - 19 edges
7. `PhotoPlaceholder()` - 19 edges
8. `selectStyles` - 19 edges
9. `navigationMenuStyles` - 17 edges
10. `cardStyles` - 15 edges

## Surprising Connections (you probably didn't know these)
- `ContactRequestForm()` --calls--> `Button()`  [EXTRACTED]
  src/features/contact-request/ui/contact-request-form.tsx → src/shared/ui/button/button.tsx
- `MobileNavigation()` --calls--> `isActivePath()`  [EXTRACTED]
  src/features/main-navigation/ui/mobile-navigation.tsx → src/features/main-navigation/lib/is-active-path.ts
- `MobileNavigation()` --calls--> `Button()`  [EXTRACTED]
  src/features/main-navigation/ui/mobile-navigation.tsx → src/shared/ui/button/button.tsx
- `Portrait()` --calls--> `PhotoPlaceholder()`  [EXTRACTED]
  src/features/portrait/ui/portrait.tsx → src/shared/ui/photo-placeholder/photo-placeholder.tsx
- `ThemeSwitcher()` --calls--> `Button()`  [EXTRACTED]
  src/features/theme-switcher/ui/theme-switcher.tsx → src/shared/ui/button/button.tsx

## Import Cycles
- None detected.

## Communities (44 total, 12 thin omitted)

### Community 0 - "tailwind-variants"
Cohesion: 0.08
Nodes (32): Carousel(), CarouselProps, carouselStyles, PhotoCaption(), PhotoCaptionProps, photoCaptionStyles, PhotoPlaceholder(), PhotoPlaceholderProps (+24 more)

### Community 1 - "Container"
Cohesion: 0.05
Nodes (31): trialCta, getNavigation(), NavigationItem, BrandMark(), BrandMarkProps, brandMarkStyles, Logo(), PageContent() (+23 more)

### Community 2 - "content.config.ts"
Cohesion: 0.08
Nodes (25): tailwind-variants, getStaffMembers(), staffMemberCollection, staffRoleFilters, staffRoles, StaffMember, StaffRole, StaffRoleFilter (+17 more)

### Community 3 - "carousel-context.tsx"
Cohesion: 0.09
Nodes (33): embla-carousel, useBasicCarousel(), useCarousel(), useCarouselActions(), useOGLCarousel(), fragment, vertex, CarouselContext (+25 more)

### Community 4 - "@base-ui/react"
Cohesion: 0.14
Nodes (26): @base-ui/react, lucide-react, SelectContent(), SelectGroup(), SelectItem(), SelectLabel(), SelectScrollDownButton(), SelectScrollUpButton() (+18 more)

### Community 5 - "Button"
Cohesion: 0.13
Nodes (25): Button(), buttonVariants, ButtonProps, ButtonVariantProps, DialogClose(), DialogContent(), DialogDescription(), Dialog() (+17 more)

### Community 6 - "navigation-menu/index.ts"
Cohesion: 0.15
Nodes (25): isActivePath(), normalize(), MainNavigation(), MainNavigationProps, navigationLinkStyle, navigationListStyle, navigationStyle, NavigationMenuContent() (+17 more)

### Community 7 - "sheet/index.ts"
Cohesion: 0.15
Nodes (24): MobileNavigation(), MobileNavigationProps, mobileNavigationStyles, SheetClose(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader() (+16 more)

### Community 8 - "field.types.ts"
Cohesion: 0.16
Nodes (22): FieldContent(), FieldDescription(), FieldError(), Field(), FieldGroup(), FieldLabel(), FieldLegend(), FieldSeparator() (+14 more)

### Community 9 - "react"
Cohesion: 0.17
Nodes (12): react, CardAction(), Card(), CardContent(), CardDescription(), CardFooter(), CardHeader(), cardStyles (+4 more)

### Community 10 - "SectionHeading"
Cohesion: 0.07
Nodes (29): getReels(), Reel, Badge(), badgeVariants, BadgeProps, BandSection(), bandSectionStyles, SectionHeading() (+21 more)

### Community 11 - "content.config.ts"
Cohesion: 0.07
Nodes (26): astro@^7.4.5, astro, collections, getClub(), clubCollection, Club, SocialLink, getCourses() (+18 more)

### Community 12 - "avatar/index.ts"
Cohesion: 0.31
Nodes (13): Avatar(), AvatarBadge(), AvatarFallback(), AvatarGroup(), AvatarGroupCount(), AvatarImage(), avatarStyles, AvatarBadgeProps (+5 more)

### Community 13 - "events.tsx"
Cohesion: 0.19
Nodes (11): getEvents(), ClubEvent, EventList(), eventListStyles, EventListItem(), eventListItemStyles, EventItem(), eventItemStyles (+3 more)

### Community 14 - "contact.tsx"
Cohesion: 0.18
Nodes (11): ContactRequestForm(), fields, contactRequestFormStyles, Input(), inputStyles, InputProps, Contact(), contactStyles (+3 more)

### Community 15 - "package.json"
Cohesion: 0.16
Nodes (16): devDependencies, @astrojs/compiler-rs@^0.5.2, oxfmt@^0.76.0, oxlint@^1.91.0, tailwindcss@^4.3.5, tw-animate-css@^1.4.0, @types/node@^26.6.6, name (+8 more)

### Community 16 - "dependencies"
Cohesion: 0.12
Nodes (16): dependencies, @base-ui/react@^1.9.0, embla-carousel@^8.6.0, embla-carousel-react@^8.6.0, lucide-react@^1.73.0, ogl@^1.0.11, react@^19.3.1, react-dom@^19.3.1 (+8 more)

### Community 17 - "aliases"
Cohesion: 0.13
Nodes (14): aliases, components, hooks, lib, ui, utils, rsc, $schema (+6 more)

### Community 19 - ".oxfmtrc.json"
Cohesion: 0.18
Nodes (10): astro, ignorePatterns, jsxSingleQuote, printWidth, $schema, semi, singleQuote, sortImports (+2 more)

### Community 20 - "Sito società di pattinaggio artistico"
Cohesion: 0.20
Nodes (9): Contenuto della cartella, Cosa NON fare, Da fare / non definito, Decisioni di design prese, Ordine di lavoro suggerito, Regole di sviluppo, Sito società di pattinaggio artistico, Stack e metodologia (+1 more)

### Community 21 - "checkbox.tsx"
Cohesion: 0.56
Nodes (5): Checkbox(), CheckboxIndicator(), checkboxStyles, CheckboxIndicatorProps, CheckboxProps

### Community 22 - "astro.config.mjs"
Cohesion: 0.22
Nodes (8): @astrojs/mdx@^8.1.3, @astrojs/partytown@^2.1.9, @astrojs/react@^7.1.2, @tailwindcss/vite@^4.3.5, @astrojs/mdx, @astrojs/partytown, @astrojs/react, @tailwindcss/vite

### Community 23 - ".oxlintrc.json"
Cohesion: 0.22
Nodes (8): categories, correctness, env, browser, node, ignorePatterns, plugins, $schema

### Community 24 - "scripts"
Cohesion: 0.22
Nodes (9): scripts, astro, build, dev, format, format:check, lint, lint:fix (+1 more)

### Community 25 - "tsconfig.json"
Cohesion: 0.22
Nodes (8): astro/tsconfigs/strict, compilerOptions, jsx, jsxImportSource, paths, exclude, extends, include

### Community 26 - "theme-switcher.tsx"
Cohesion: 0.43
Nodes (6): applyTheme(), getServerSnapshot(), getSnapshot(), subscribe(), ThemeSwitcher(), toggleTheme()

### Community 27 - "Image pipeline and art direction"
Cohesion: 0.29
Nodes (6): Asset contract, Automation, Image pipeline and art direction, Motion assets, Responsive art direction, Two separate operations

### Community 28 - "Feature-Sliced Design contract"
Cohesion: 0.33
Nodes (5): Astro mapping, Examples, Feature-Sliced Design contract, Layer order and imports, Slice conventions

### Community 29 - "Visual fidelity contract"
Cohesion: 0.33
Nodes (5): Acceptance, Before styling, Do not generate stereotypical AI design, Hierarchy of truth, Visual fidelity contract

### Community 30 - "Codex repository contract"
Cohesion: 0.40
Nodes (4): Codex repository contract, Completion report (max 5 lines), Execution budget, Non-negotiable

### Community 31 - "Small-task contract"
Cohesion: 0.50
Nodes (3): Small-task contract, Suggested task example, Token discipline

### Community 32 - "zod@^4.6.7"
Cohesion: 0.33
Nodes (4): zod@^4.6.7, engines, node, zod

## Knowledge Gaps
- **1 isolated node(s):** `astro/tsconfigs/strict`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 145 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `tailwind-variants` connect `content.config.ts` to `tailwind-variants`, `Container`, `carousel-context.tsx`, `@base-ui/react`, `Button`, `navigation-menu/index.ts`, `sheet/index.ts`, `field.types.ts`, `react`, `SectionHeading`, `content.config.ts`, `avatar/index.ts`, `events.tsx`, `contact.tsx`, `package.json`, `dependencies`, `checkbox.tsx`?**
  _High betweenness centrality (0.261) - this node is a cross-community bridge._
- **What connects `astro/tsconfigs/strict` to the rest of the system?**
  _1 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `tailwind-variants` be split into smaller, more focused modules?**
  _Cohesion score 0.0841799709724238 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `tailwind-variants`, `Container`, `content.config.ts`, `carousel-context.tsx`, `@base-ui/react`, `Button`, `navigation-menu/index.ts`, `sheet/index.ts`, `field.types.ts`, `SectionHeading`, `avatar/index.ts`, `contact.tsx`, `package.json`, `dependencies`, `theme-switcher.tsx`?**
  _High betweenness centrality (0.158) - this node is a cross-community bridge._
- **Should `Container` be split into smaller, more focused modules?**
  _Cohesion score 0.05223880597014925 - nodes in this community are weakly interconnected._
- **Why does `@base-ui/react` connect `@base-ui/react` to `Button`, `navigation-menu/index.ts`, `sheet/index.ts`, `SectionHeading`, `avatar/index.ts`, `contact.tsx`, `package.json`, `dependencies`, `checkbox.tsx`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Should `content.config.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0797872340425532 - nodes in this community are weakly interconnected._