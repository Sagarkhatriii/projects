# Larger Project Roadmap

These are proposed projects, not completed applications. Choose one and build it in milestones; document decisions and test the important behaviours.

## 1. DeskFlow — IT Service Desk and Asset Tracker

**Recommended first:** connects programming work with IT support experience.

**User journey:** an employee reports a laptop issue; a technician sets priority, links the device, records troubleshooting, and resolves the ticket.

### Milestones

1. Build a responsive ticket list, filters, detail view, and creation form with sample data.
2. Add a server API and relational database. Store tickets, comments, assets, and status history.
3. Add authentication, technician/requester roles, server validation, and access checks.
4. Add an activity log, dashboard counts, CSV export, and tests for role restrictions and ticket transitions.
5. Publish a demo using fictional users and devices; document setup, schema, API endpoints, tests, and tradeoffs.

### Data model

- Users: role, display name, account identity
- Tickets: title, description, priority, status, requester, assigned technician, timestamps
- Comments: ticket, author, text, timestamp
- Assets: device type, fictional serial number, assigned user
- Activity: ticket, action, actor, timestamp

### Acceptance examples

- A requester can see their own tickets and cannot retrieve another user's ticket through the API.
- A technician can move a ticket from open to in-progress to resolved and record a resolution note.
- An asset can be linked to several historical tickets.
- Dashboard numbers match the filtered database query.
- A failed submission shows an actionable error without duplicating a ticket.

## 2. ShiftBoard — Restaurant Operations Manager

Uses hospitality knowledge: staff availability, shift assignment, coverage requests, and manager approval.

**Meaningful complexity:** conflicting shifts, role-based approvals, date/time handling, audit history, and a relational database. Begin with a weekly roster and availability; add conflict detection and swaps after the basic flow works.

## 3. GameShelf — Gaming Backlog and Review Tracker

Track owned games, play status, personal ratings, reviews, and lists. Add search, filtering, statistics, and a game-data integration later.

**Meaningful complexity:** account-owned data, API caching, pagination, validation, and graceful offline/network errors. Start with manually entered game records so an external API does not block development.

## 4. ArenaLab — A Small C# Game

Build a playable 2D arena game: movement, collisions, enemy waves, scoring, pause/restart, and saved high scores.

**Meaningful complexity:** game loop, state transitions, input handling, collision rules, difficulty progression, and reproducible builds. Include a playable build, source, controls, and a short explanation of the core systems.

## Definition of a strong finished project

- Solves one clear problem with a complete user journey
- Has a reproducible setup and a useful demo
- Separates completed features from planned ones
- Tests important failure paths, not just happy paths
- Explains architecture, limitations, and one or two implementation decisions
- Uses only fictional/sample data in public demos
