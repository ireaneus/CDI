---
title: Update Table of Contents in Markdown Files
labels: [automation, toc, copilot]
assignees: [github-copilot]
---

## Task

Update the Table of Contents (ToC) in all Markdown files in the repository that contain a `## Table of Contents` heading. The ToC should accurately reflect the current headings in each file.

### Requirements
- Only update files that contain the `## Table of Contents` heading.
- Use a standard ToC generator (e.g., markdown-toc) to insert or update the ToC below the heading.
- Commit changes with a message like: `chore: update Table of Contents [auto]`.

### Acceptance Criteria
- All Markdown files with a `## Table of Contents` heading have an up-to-date ToC.
- No other content in the files is changed.
- Changes are committed and pushed to the repository.

---

_This issue is intended for GitHub Copilot or an automation workflow._
