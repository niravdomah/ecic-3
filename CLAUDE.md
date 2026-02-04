# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Template repository** for building frontend applications with:

- Next.js 16 (App Router) + React 19 + TypeScript 5 (strict)
- Tailwind CSS 4 + Shadcn UI (via MCP server)
- Vitest + React Testing Library
- Production-ready API client for OpenAPI-defined REST endpoints

Users clone this template and use Claude Code to generate features, components, and API integrations.

## Repository Structure

```
project-root/
├── .claude/          # Claude Code config and logs (TRACKED - see below)
├── web/              # Next.js frontend
├── documentation/    # Feature specs, OpenAPI specs, and sample datasets
└── generated-docs/   # Auto-generated progress tracking
```

**Session Logs Must Be Committed:** The `.claude/logs/*.md` files are intentionally tracked in Git for traceability. Always include them in commits (`git add .claude/logs/`). Do NOT add `.claude/logs/` to `.gitignore`.

## Development Commands

All commands run from `/web`:

```bash
npm run dev          # Dev server (http://localhost:3000)
npm run build        # Production build
npm run lint         # Linting
npm run lint:fix     # Auto-fix lint issues
npm test             # Run all tests
npm test -- path/to/file.test.tsx  # Run single test file
npm run test:watch   # Watch mode for development
npm run test:quality # Validate test quality (must pass)
```

## Workflow Commands (Claude Code)

```
/setup          # Initialize project - install deps, verify setup
/start          # Begin TDD workflow from feature spec in documentation/
/status         # Show current workflow progress
/continue       # Resume interrupted workflow
/quality-check  # Validate all 5 quality gates before PR
```

## Critical Rules

### 1. Session Log Safety

**MANDATORY:** After every response, output the following on its own line as the very last thing:

`[Logs saved]`

This signals to the user that the response is complete and the session logging hook is about to run. The user relies on this to know when it is safe to close the chat window without losing log data. **Never omit this, even for short or text-only responses.**

### 2. Use Shadcn UI via MCP

Always use Shadcn components (`<Button />`, `<Dialog />`, `<Card />`, etc.). If a component doesn't exist, install it via MCP:

```
mcp__shadcn__add_component
```

Never write "Shadcn-style" components manually.

### 3. Use the API Client

All API calls must use `web/src/lib/api/client.ts`. Never call `fetch()` directly in components.

```typescript
import { get, post, put, del } from '@/lib/api/client';
export const getUsers = () => get<User[]>('/v1/users');
export const createUser = (data: CreateUserRequest) =>
  post<User>('/v1/users', data);
```

**If an OpenAPI spec exists in `documentation/`**, use it as the source of truth for:

- Endpoint paths and HTTP methods
- Request/response types (generate TypeScript types from the spec)
- Query parameters and request bodies
- Error response shapes

### 4. API Spec Detection (Multi-Layer)

**Never assume** that a backend does not exist. Use this detection system:

**Layer 1 - Early Detection (at workflow start):**
Before implementing any API-related features, check `documentation/` for:
- OpenAPI specs (`*.yaml`, `*.json` with openapi/swagger content)
- API documentation files

If found: A backend API is expected. Note the base URL, endpoints, and ports.

**Layer 2 - Pre-Implementation (before writing API calls):**
When a story involves API calls:
1. Locate the relevant OpenAPI spec
2. Verify the endpoint path, method, request/response types
3. Check the configured API base URL in the codebase

**Layer 3 - Error Handling (when API calls fail):**
If an API call returns an error (404, 500, connection refused, etc.):
1. Report the actual error accurately
2. Reference what the OpenAPI spec says the endpoint should be
3. Ask the user about backend status - don't guess or rationalize

**Never dismiss API errors.** Possible causes include:
- Backend server isn't running
- Endpoint isn't implemented yet
- Endpoint path/method doesn't match the spec
- No backend exists for this project

Let the user determine the cause.

### 5. No Error Suppressions

**Never use suppression directives:**

- `// eslint-disable` / `// eslint-disable-next-line`
- `// @ts-expect-error` / `// @ts-ignore` / `// @ts-nocheck`

Fix errors properly. Suppressions hide problems and accumulate technical debt.

### 6. Quality Gates Are Binary

Report actual exit codes truthfully. Never rationalize failures as "expected" or "acceptable." Let the user decide whether to proceed.

### 7. Test Quality Must Pass

`npm run test:quality` must always pass. Anti-patterns in test files (even skipped tests) will fail CI/CD. In TDD, failing tests create expected TypeScript errors, but this still counts as a failed quality gate until implementation is complete.

### 8. Manual Verification Is Required

**Automated tests are not a substitute for manual verification.** Before marking any story as COMPLETE:

1. **STOP** after automated quality gates pass
2. **ASK** the user to perform manual verification, or offer to outline what should be verified
3. **NEVER** transition directly from IMPLEMENT → COMPLETE just because tests pass

Manual verification catches issues that tests cannot:
- Visual/layout problems
- Real API integration issues (tests use mocks)
- UX flow issues
- Edge cases not covered by tests
- Browser-specific behavior

**The workflow phases exist for a reason:**
- IMPLEMENT → REVIEW (code review + manual verification)
- REVIEW → VERIFY (automated quality gates)
- VERIFY → COMPLETE (only after both manual and automated verification)

Do not conflate "all tests pass" with "story is complete." They are different things.

### 9. Context Clearing at Major Milestones

**Major milestones are session management checkpoints.** When an epic completes:

1. **STOP** and recognize this is a natural breakpoint
2. **ASK** the user if they want to clear context before starting the next epic
3. **EXPLAIN** the benefits: workflow-state.json preserves progress, fresh context prevents old implementation details from causing confusion

**Why this matters:**
- Sessions that run out of context mid-epic are disruptive
- The workflow state file captures all progress - nothing is lost by clearing
- Starting a new epic with clean context improves focus and reduces errors

**When to offer context clearing:**
- Epic completion (all stories COMPLETE)
- Before starting `/start` for a new epic
- When the session was already continued from a compacted conversation

Do not treat epic completion as purely a workflow state transition. It is also a session state checkpoint.

## Testing Strategy

### Focus on Integration Tests

Test realistic user workflows, not implementation details. Ask: **"Would a user care if this broke?"**

**Valid tests verify user-observable behavior:**

- User can see specific content displayed
- User can perform actions (click, submit, navigate)
- User receives appropriate feedback (errors, success messages)
- User workflows complete end-to-end

**Invalid tests (DO NOT WRITE):**

- Internal DOM structure or CSS classes
- Internal state values or store shape
- Function call counts or prop passing
- Third-party library internals (Recharts SVGs, Zod schema validation, etc.)
- TypeScript types (compiler handles this)
- Constants or config object values

### Query Priority (Accessibility-First)

1. `getByRole` - Buttons, links, headings (preferred)
2. `getByLabelText` - Form inputs with labels
3. `getByText` - Non-interactive content
4. `getByTestId` - **Last resort only**

### Anti-Pattern: Testing Library Internals

Never query internal DOM of third-party components (charts, editors, etc.):

```typescript
// BAD - Testing Recharts internals
expect(container.querySelector('.recharts-bar-rectangle')).toHaveAttribute(
  'fill',
  '#8884d8'
);

// GOOD - Testing user-observable behavior
expect(screen.getByText('Sales: $1,234')).toBeInTheDocument();
```

### Test Mocks

**Fix mock issues - never skip tests to avoid them.** Common fixes:

- **Multiple API calls:** Use `mockResolvedValue` for consistent returns or chain `mockResolvedValueOnce`
- **Missing providers:** Mock context providers at test file top
- **Navigation:** Mock `next/navigation` before component imports
- **Async updates:** Use `waitFor` for assertions

Only acceptable uses of `.skip()`: TDD red phase (unimplemented features) or unavailable test environment capabilities. If you can't fix a mock, ask the user - don't skip the test.

## Architecture Quick Reference

### Directory Structure (`web/src/`)

- `app/` - Next.js App Router pages (server components by default)
- `components/` - Reusable React components
- `lib/api/` - API client and endpoint functions
- `lib/auth/` - Authentication and RBAC (see [auth README](web/src/lib/auth/README.md))
- `lib/validation/` - Zod schemas (see [validation README](web/src/lib/validation/README.md))
- `types/` - TypeScript definitions

### Key Patterns

- **Path alias:** Use `@/` for imports from `src/`
- **Server components by default:** Add `"use client"` only when needed
- **App Router:** Pages go in `app/`, not `pages/`

## Additional Documentation

- [Testing Guide](.template-docs/guides/TESTING.md) - Detailed testing patterns and examples
- [Auth & RBAC](.template-docs/Help/RBAC.md) - Role-based access control and input validation
- [Contributing](.template-docs/CONTRIBUTING.md) - For template maintainers
