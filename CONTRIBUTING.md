# Contributing to CodeSnippets

Thanks for contributing.

This repository is a collection of small, reusable snippets grouped by language and feature. Contributions should prioritize clarity, correctness, and easy copy/paste reuse.

## Before You Start

- Check existing snippet folders to avoid duplicate submissions.
- Keep snippets focused on one clear task.
- Prefer practical, dependency-light examples when possible.

## Repository Conventions

- Language folders are lowercase: `html`, `js`, `python`, `react`, `ts`.
- Snippet folder names use kebab-case (for example: `copy-to-clipboard`).
- Each snippet folder should include:
  - A source file (or files)
  - A local `README.md`
- HTML snippets should use `index.html` as the entry file.

## How to Add a New Snippet

1. Pick the correct top-level language folder.
2. Create a new kebab-case snippet folder.
3. Add the snippet source file(s).
4. Add a `README.md` in that folder.
5. Verify naming and paths follow existing patterns.
6. Run checks relevant to your changes (see below).

## Snippet README Requirements

Every snippet-level `README.md` should include:

- A short summary of what the snippet does
- Files included
- How to use it
- Notes or caveats (if any)

Keep documentation concise and practical.

## Language-Specific Notes

- TypeScript snippets should compile cleanly with the project `tsconfig.json` settings.
- JavaScript and React snippets should clearly list any required packages in the local README.
- Python snippets should include dependency notes if external libraries are used.

## Validation Checklist

Before opening a pull request, confirm:

- [ ] Folder and file names follow repository conventions
- [ ] Snippet code is readable and self-contained
- [ ] Local snippet `README.md` is present and accurate
- [ ] No secrets, tokens, or private credentials are committed
- [ ] TypeScript changes compile without errors (if applicable)

## Pull Request Guidelines

- Use a clear title that describes the snippet or improvement.
- In the PR description, include:
  - What you added or changed
  - Why it is useful
  - Any dependencies or setup steps
- Keep PRs focused. Prefer one snippet or one cohesive improvement per PR.

## Commit Message Suggestions

Examples:

- `feat(js): add jwt configuration snippet`
- `feat(ts): add scheduler utility snippet`
- `docs(html): improve copy-to-clipboard README`
- `fix(python): correct data handling example`

## Security and Licensing

- Never commit API keys, secrets, or environment-specific credentials.
- Ensure contributions are compatible with the repository MIT license.

Thanks again for helping improve this snippet collection.