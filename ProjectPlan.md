# Project Plan

This document outlines the current features and planned development phases for the DIVERSION RP website.

## Current Features
- Laravel 12 backend with React 18 frontend
- Tailwind CSS 4 styling and HeroUI components
- Framer Motion 12 for animations
- SQLite database tracked under version control

## Roadmap
1. **Phase 1** *(completed)*
   - Clean HTML structure with semantic tags and custom Tailwind configuration.
2. **Phase 2** *(completed)*
   - Introduced SQLite storage and basic PHP scripts.
3. **Phase 3** *(completed)*
   - Migrated to Laravel + React stack.
   - Added Vite build pipeline and Tailwind 4.
   - Replaced legacy PHP pages with React components.
4. **Phase 4** - Public Pages
   - Implement Home, Rules (GitBook wrapper), Streams, Showcase, About, Contact pages.
   - Add a public view for the Discipline tracker.
5. **Phase 5** - Authentication & Private Areas
   - Integrate Discord OAuth for login and role-based permissions.
   - Create dashboard to modify Discord permissions by role ID.
   - Add submission form for Discipline tracker and secure the workflow.
   - Integrate GitHub API for issue submission and project views.
   - Provide an interface to view Grafana/Loki logs.
6. **Phase 6** - Documentation Tooling
   - Add plugin or custom editor for writing Markdown docs (Gitbook/Docusaurus style).
   - Allow editing by authenticated users while keeping docs publicly readable.

Future updates will expand automated tests and CI/CD.
