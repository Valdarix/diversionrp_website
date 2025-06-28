# Project Plan

This document outlines the current features and future development of the DIVERSION RP website.

## Current Features
- Static HTML pages for index, contact, rules, support, streams and showcase.
- Tailwind CSS 3 for styling.
- Basic PHP scripts for email forms.
- SQLite backed announcements displayed via `posts.php`.

## Goals
1. Improve layout using responsive components.
2. Add a lightweight backend for dynamic content.
3. Write automated tests for PHP scripts and CSS build.

## Roadmap
1. **Phase 1** *(completed)*
   - Clean up HTML structure with semantic tags, skip links, and ARIA attributes.
   - Expanded Tailwind configuration for custom colors and fonts.
2. **Phase 2** *(completed)*
   - Introduced a simple SQLite database and a `posts.php` page for announcements.
   - PHP backend serves dynamic pages using the new database helper.
3. **Phase 3**
   - Prepare for conversion to the Laravel + React stack (see `Conversion.md`).

Updates to this plan should be committed whenever features are added or revised.
