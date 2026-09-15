# Beida Basic School — Result Manager

A redesigned, componentised school result & attendance portal built with
**Next.js (JavaScript, App Router)** and **Tailwind CSS**. No TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Design

- **Palette**: deep indigo (`brand`), warm amber accent, near-black `ink` for
  text/sidebar, warm paper background — see `tailwind.config.js`.
- **Type**: Manrope for headings/display, Inter for body & UI text.
- Print-friendly: result and broadsheet pages use a `.print-area` /
  `.no-print` convention (see `app/globals.css`) so "Print" buttons and nav
  chrome disappear from the printed page automatically.

## Structure

```
app/
  page.js                    Landing page (choose staff or student portal)
  login/users/page.js        Staff & admin login
  login/students/page.js     Student login
  (admin)/                   Route group — every staff/admin page,
                              wrapped in AdminShell (sidebar + topbar)
    dashboard/
    update-school/
    manage-result/
    print-result/
    result-availability/
    student-performance/
    review-result/
    remark/
    assign-class/
    add-subject/
    import-students/
    add-student/
    add-user/
    student-credential/
    admin/
    teachers/
    students/
    task/
  (student)/                 Route group — student portal,
                              wrapped in StudentShell (top nav)
    student-dashboard/
    student-result/
    student-task/

components/
  ui/            Generic, reusable building blocks: Button, Input, Select,
                 Textarea, Field, Switch, Table, Card, Badge, StatCard,
                 PageHeader, Avatar, FileDrop
  charts/        DonutChart (recharts)
  layout/        Sidebar, Topbar, AdminShell, StudentTopNav, StudentShell,
                 AuthCard
  ReportCard.js  Shared student report/result card (used by Review Result,
                 Print Result and the student portal's My Result page)
  StudentIdCard.js  Student ID card shown on the student dashboard

lib/
  navigation.js  Single source of truth for the sidebar/top-nav links —
                 add a page here once and it shows up everywhere it should.
  mockData.js    Placeholder data standing in for a real API/database.
```

## Wiring up real data

Every page currently reads from `lib/mockData.js` or local component state.
To connect a backend:

1. Replace the mock arrays/objects in `lib/mockData.js` with API calls
   (e.g. `fetch` in a Server Component, or a data-fetching hook).
2. Form pages (`add-student`, `add-user`, `update-school`, `remark`, etc.)
   already isolate their fields into `useState` — swap the `onSubmit`
   handler's `alert(...)` placeholder for your real API call.
3. Auth pages (`login/users`, `login/students`) currently redirect straight
   to the dashboard on submit — swap that for your real auth check.

## Notes

- All components are plain `.js` (no TypeScript), using function components
  and hooks only.
- `clsx` is used for conditional class names; `lucide-react` for icons;
  `recharts` for the dashboard's gender-split donut charts.
