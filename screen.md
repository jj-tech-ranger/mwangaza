# Mwangaza — Screen Documentation & v0 Prompts
**Version 1.0 | May 2026**
*Lighting the path to a better life, one skill at a time.*

---

> **Design Language**
> Mwangaza is warm, African, and bold — not a clone of Duolingo.
> The palette is anchored in **Mwangaza Gold** (`#D4A017`) on a warm off-white (`#F8F4E8`).
> Typography uses a display font for headings and clean UI text for body copy.
> Interactions are celebratory and encouraging — never punishing.
> Every screen is mobile-first (375px base), designed as a PWA.

---

## Brand Tokens (paste into every v0 prompt)

```
Brand colors:
- Gold: #D4A017
- Gold light: #FDF3D0
- Gold dark: #A67C00
- Background: #F8F4E8
- Surface: #FFFFFF
- Text: #1A1A2E
- Success: #22C55E
- Error: #EF4444

Stack: Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui
Mobile-first PWA. All screens are 375px wide, full viewport height.
Font: "Plus Jakarta Sans" for headings, "DM Sans" for body text.
No blue. No purple. No generic gradients.
```

---

## Screen 1 — Splash Screen

**Purpose:** First thing a new user sees when they open the app. Creates brand recall and sets the emotional tone.

**Key elements:**
- Full-screen warm off-white background
- Mwangaza logo (sun/lantern icon + wordmark) centered
- Tagline: *"Lighting the path to a better life, one skill at a time."*
- Brief fade-in animation, auto-navigates to Onboarding after 2.5s
- No user interaction needed

---

**v0 Prompt:**
```
Build a mobile splash screen for a learning app called Mwangaza.

Background: #F8F4E8 (warm off-white), full viewport height and width.
Center a large circular golden sun/lantern SVG icon (color #D4A017, size ~120px).
Below the icon, show the app name "MWANGAZA" in a bold serif or display font, color #1A1A2E, font size 32px, letter-spacing wide.
Below the name, show the tagline: "Lighting the path to a better life, one skill at a time." in #A67C00, font size 14px, italic, centered, max-width 260px.
At the bottom center, show a small loading dot animation (3 pulsing dots in #D4A017).

Animate the icon and text with a gentle fade-in + slight upward translate (duration 800ms, ease-out).
No buttons. No input. Pure brand moment.
Stack: Next.js, Tailwind CSS, TypeScript.
```

---

## Screen 2 — Onboarding (3 slides)

**Purpose:** Introduce Mwangaza's value in 3 swipeable slides before sign-up.

**Slide 1 — "Learn at your own pace"**
- Illustration: person on a phone with a lightbulb glow
- Headline: "Learn at your own pace"
- Body: "Short lessons you can finish in 5 minutes. Anytime. Anywhere."

**Slide 2 — "Earn as you learn"**
- Illustration: trophy / badge icons floating
- Headline: "Earn as you learn"
- Body: "Collect XP, level up, and earn real certificates for every course you complete."

**Slide 3 — "Built for you"**
- Illustration: African adult with a warm smile
- Headline: "Built for you"
- Body: "Mwangaza was made for working adults across Africa — practical skills that change your life."

**Navigation:** Dot indicators at bottom. Swipe or tap arrow. Last slide has "Get Started" CTA button.

---

**v0 Prompt:**
```
Build a 3-slide mobile onboarding carousel for a learning app called Mwangaza.

Global styles:
- Background: #F8F4E8
- Primary: #D4A017 (gold)
- Text: #1A1A2E
- Font: Plus Jakarta Sans (heading), DM Sans (body)

Each slide:
- Full screen (375px wide, 100vh)
- Large illustration placeholder (SVG icon or emoji-style illustration, ~200px, centered top half)
- Headline: bold, 26px, #1A1A2E, centered
- Body: 15px, #6B6B6B, centered, max-width 280px, line-height 1.6

Slide 1: lightbulb/phone icon. Headline: "Learn at your own pace". Body: "Short lessons you can finish in 5 minutes. Anytime. Anywhere."
Slide 2: trophy/badge icon. Headline: "Earn as you learn". Body: "Collect XP, level up, and earn real certificates for every course you complete."
Slide 3: star/person icon. Headline: "Built for you". Body: "Mwangaza was made for working adults across Africa — practical skills that change your life."

Navigation:
- 3 dot indicators below illustration, active dot is gold (#D4A017), inactive dots are #D4A017 at 30% opacity
- "Next" arrow button (ghost, right-aligned) on slides 1 and 2
- On slide 3, show a full-width "Get Started" button: background #D4A017, text white, rounded-full, 52px height, bold

Transition between slides: smooth horizontal slide animation (350ms ease-in-out).
Stack: Next.js, Tailwind, TypeScript, shadcn/ui.
```

---

## Screen 3 — Sign Up / Sign In

**Purpose:** Register or log in via Clerk. Minimal, warm, not intimidating.

**Key elements:**
- App logo + name at top
- "Welcome back" or "Create your account" heading
- Sign in with Google (OAuth)
- Sign in with phone number (OTP)
- Email + password fallback
- Link to switch between sign-up and sign-in

---

**v0 Prompt:**
```
Build a mobile authentication screen for Mwangaza, a learning app.

Layout:
- Background: #F8F4E8
- Top: Mwangaza logo (sun icon) + app name centered, top padding 48px
- Below logo: heading "Create your account" (24px bold, #1A1A2E)
- Subheading: "Join thousands of learners across Africa" (14px, #6B6B6B)

Auth options (stacked, full width, max-width 320px, centered):
1. Button: "Continue with Google" — white background, 1px border #D4A017, Google icon on left, text #1A1A2E, rounded-xl, 52px height
2. Button: "Continue with Phone" — same style but with phone icon
3. Divider: "or" in #9CA3AF with lines on either side
4. Email input: placeholder "Email address", border #D4A017 when focused, rounded-xl
5. Password input: placeholder "Password", show/hide toggle, same styling
6. CTA button: "Sign Up" — full width, background #D4A017, white text, bold, rounded-full, 52px height

At bottom: "Already have an account? Sign in" — #D4A017 link, centered, 14px.

No dark mode. Warm, welcoming, not corporate.
Stack: Next.js, Tailwind, TypeScript, Clerk components or custom form.
```

---

## Screen 4 — Home / Dashboard

**Purpose:** The daily hub. Shows progress, motivates the user to open their next lesson.

**Key elements:**
- Top bar: avatar + user name + level badge (e.g. "Mwanzo 🌱") + XP counter
- Daily goal ring: circular progress (like Duolingo's) showing today's XP earned vs daily goal (default: 50 XP)
- "Continue Learning" card: thumbnail of current course, current lesson title, progress bar, "Resume" button
- "Your Courses" section: list of enrolled courses with progress
- Bottom nav: Home | Learn | Profile | (Premium)

---

**v0 Prompt:**
```
Build a mobile home/dashboard screen for Mwangaza, a gamified learning app.

Brand: background #F8F4E8, gold #D4A017, text #1A1A2E, surface white.
Font: Plus Jakarta Sans headings, DM Sans body.

Top bar (full width, white background, 64px height, shadow-sm):
- Left: circular avatar (32px) + greeting "Good morning, Amina 👋" (14px bold)
- Right: XP badge showing "⚡ 120 XP" in gold pill shape

Daily Goal section (white card, rounded-2xl, mx-4, mt-4, padding 20px):
- Title: "Today's Goal" (12px uppercase, #A67C00, letter-spacing)
- Centered circular ring progress (SVG, 100px diameter): gold stroke on grey track, shows "30/50 XP" in center (20px bold), "lessons done today" below in 11px grey
- Below ring: "3 of 5 daily lessons done" in 13px #6B6B6B

Continue Learning card (gold gradient card #D4A017 to #A67C00, rounded-2xl, mx-4, mt-4, padding 20px, white text):
- Label: "CONTINUE" (10px uppercase, white/70%)
- Title: "Basic Math" (20px bold white)
- Subtitle: "Lesson 3 · Adding two-digit numbers" (13px white/80%)
- Progress bar: white/30% track, white fill, showing 40% progress
- "Resume →" button: white background, #D4A017 text, rounded-full, right-aligned, 36px height

Your Courses section (mx-4, mt-6):
- Section title: "Your Courses" (16px bold)
- Course card: white, rounded-xl, shadow-sm, padding 16px, flex row
  - Left: course color dot + icon
  - Middle: course name (14px bold) + "Module 1 of 6" (12px grey)
  - Right: circular mini progress (28px)

Bottom nav bar: 4 icons (Home active=gold, Learn, Profile, Premium star). White background, shadow above.

Stack: Next.js, Tailwind, TypeScript, shadcn/ui.
```

---

## Screen 5 — Course Screen

**Purpose:** Shows all modules within a course, their lock/unlock state, and overall course progress.

**Key elements:**
- Course banner (gold gradient) with course name, description, and overall progress bar
- Module list: each module shows title, lesson count, and lock/unlock state
- Completed modules show a green checkmark badge
- Locked modules are greyed out with a 🔒 icon
- Current module is highlighted with a gold border

---

**v0 Prompt:**
```
Build a mobile Course screen for Mwangaza showing the module list for "Basic Math".

Top banner (full width, #D4A017 to #A67C00 gradient, 160px height, white text):
- Back arrow (top left)
- Course title: "Basic Math" (24px bold)
- Subtitle: "6 Modules · 24 Lessons" (13px, white/80%)
- Progress bar at bottom of banner: white/30% track, white fill, "2 of 6 modules complete" label (11px)

Module list (scrollable, mx-4, mt-4, gap-3):
Each module is a white card, rounded-2xl, shadow-sm, padding 16px.

Module states:
1. Completed: left border 4px #22C55E, green checkmark badge top-right, title normal opacity
2. Current/Active: left border 4px #D4A017, "IN PROGRESS" badge (gold pill, 10px), title full opacity
3. Locked: grey overlay, 🔒 icon top-right, title 40% opacity (only for free users nearing cap)

Each module card contains:
- Module number + title (15px bold, #1A1A2E)
- "4 lessons" label (12px #6B6B6B)
- Mini progress bar (full width, 6px height, gold fill on #E5E7EB track)
- For completed: "Badge earned 🏅" in 11px #22C55E

Module list (in order):
1. Counting & Number Sense — completed
2. Addition & Subtraction — in progress (2/4 lessons)
3. Multiplication & Division — locked
4. Fractions — locked
5. Decimals & Percentages — locked
6. Practical Math — locked

Stack: Next.js, Tailwind, TypeScript.
```

---

## Screen 6 — Module Screen

**Purpose:** Lists all lessons within a module. Shows completion state per lesson.

**Key elements:**
- Module header with title and description
- Lesson list with checkmarks for completed lessons
- Current lesson highlighted with "Start" or "Continue" button
- XP reward shown per lesson (e.g. "+10 XP")

---

**v0 Prompt:**
```
Build a mobile Module screen for Mwangaza showing lessons in "Addition & Subtraction".

Header (white card, mx-4, mt-4, rounded-2xl, padding 20px):
- Back arrow at top
- Module badge icon (🔢 emoji or custom SVG, 40px)
- Module title: "Addition & Subtraction" (20px bold)
- Description: "Master adding and subtracting numbers, including word problems." (13px grey)
- Progress: "2 of 4 lessons complete" + mini progress bar (gold fill)

Lesson list (mx-4, mt-4, gap-2):
Each lesson is a row card (white, rounded-xl, shadow-sm, padding 16px, flex row, align-center).

Lesson states:
- Completed: left icon is a green filled circle with white checkmark. Title slightly muted.
- Current: left icon is a gold circle with play arrow. Title bold. Right side: "Continue →" button (gold, small, rounded-full)
- Upcoming: left icon is a grey circle with number. Title normal. Right: "+10 XP" badge in gold/10% background, gold text.

Lessons:
1. ✅ Single-digit addition — Completed
2. ✅ Single-digit subtraction — Completed
3. ▶ Adding two-digit numbers — Current (show Continue button)
4. 🔵 Word problems — Upcoming

At the bottom of the list:
"Complete all lessons to earn the Addition & Subtraction badge 🏅" — gold card, centered text, 13px.

Stack: Next.js, Tailwind, TypeScript, shadcn/ui.
```

---

## Screen 7 — Lesson Screen

**Purpose:** The core learning experience. Three sequential parts: text explanation → worked examples → quiz entry.

**Key elements:**
- Progress bar at top (shows position in lesson)
- Part 1: Text explanation with illustration placeholder
- Part 2: Worked example cards with "Reveal Answer" tap mechanic
- "Start Quiz →" CTA at the end of examples
- No back navigation once lesson has started

---

**v0 Prompt:**
```
Build a mobile Lesson screen for Mwangaza. The lesson is "Adding two-digit numbers".

Top bar:
- Close (X) icon top-left (exits lesson with confirmation)
- Linear progress bar (full width, 8px, gold fill on #E5E7EB, showing 33% — in explanation section)
- "Lesson 3 of 4" label (12px grey, top right)

Section 1 — Explanation (scrollable):
- Section label: "LEARN" (10px uppercase, #A67C00, letter-spacing)
- Illustration: a simple SVG of two stacked numbers with a plus sign (placeholder box if needed, 120px, centered, warm gold border)
- Explanation text (15px, #1A1A2E, line-height 1.7, max-width 320px):
  "When adding two-digit numbers, start with the ones column, then move to the tens column.
  For example: 23 + 15. First add 3 + 5 = 8. Then add 2 + 1 = 3. The answer is 38."
- Font: DM Sans

Section 2 — Worked Examples (below explanation, same scroll):
- Section label: "TRY IT" (10px uppercase)
- 2 worked example cards (white, rounded-2xl, shadow-sm, padding 16px, border 1px #FDF3D0):
  Card 1: Problem: "34 + 22 = ?" — "Tap to reveal" button (dashed gold border, white bg, #D4A017 text)
  When revealed: shows answer "56" in 28px bold gold, with explanation "4+2=6, 3+2=5 → 56"
  Card 2: Problem: "47 + 31 = ?" — same reveal mechanic

Bottom CTA:
- Sticky bottom bar (white, shadow above, padding 16px)
- Full-width button "Start Quiz →" (#D4A017 background, white bold text, rounded-full, 52px)
- Only active after both examples have been revealed

Stack: Next.js, Tailwind, TypeScript. Use useState for reveal mechanic.
```

---

## Screen 8 — Quiz Screen

**Purpose:** One MCQ at a time. Immediate feedback. Gold for correct, red for wrong.

**Key elements:**
- Question number indicator (e.g. Question 2 of 5)
- Question text, large and clear
- 4 answer options as tappable cards
- After tap: card turns gold (correct) or red (wrong) with brief explanation
- "Next Question" button appears after answer is selected

---

**v0 Prompt:**
```
Build a mobile Quiz screen for Mwangaza. This is question 2 of 5 in the "Adding two-digit numbers" quiz.

Background: #F8F4E8.

Top bar:
- Progress dots: 5 dots, dot 1 filled green (correct), dot 2 filled gold (current), dots 3-5 grey outline
- "Question 2 of 5" label (12px grey, centered)
- Timer: "0:45" shown as a small pill top-right (grey background)

Question card (white, rounded-2xl, mx-4, mt-6, padding 24px, shadow-sm):
- Question text: "What is 45 + 33?" — 22px bold, #1A1A2E, centered, line-height 1.4

Answer options (mx-4, mt-4, gap-3):
4 cards, each white, rounded-xl, border 1.5px #E5E7EB, padding 16px, text 16px bold #1A1A2E, full width.

Show the "after answer selected" state:
- Option A "78" — gold background #FDF3D0, border #D4A017, text #A67C00, checkmark icon right ✓ (this is the correct answer)
- Option B "77" — white, normal (not selected)
- Option C "88" — red background #FEE2E2, border #EF4444, text #EF4444, X icon right (this was the wrong selection)
- Option D "68" — white, normal

Feedback banner (below options, rounded-xl, mx-4):
- Green banner: "✓ Correct! 45 + 33 = 78. Add 5+3=8, then 4+3=7." (13px, white text on #22C55E background, padding 12px 16px)

Sticky bottom:
- "Next Question →" button (full width, #D4A017 bg, white text bold, rounded-full, 52px, mx-4)

Stack: Next.js, Tailwind, TypeScript. Use useState to manage selected answer and show feedback.
```

---

## Screen 9 — Results Screen

**Purpose:** Celebrates lesson completion. Shows XP earned, score, and stars. Gateway to next lesson.

**Key elements:**
- Celebratory animation (confetti or star burst)
- Star rating (0–3 stars based on score)
- XP earned (large, gold, animated count-up)
- Score: e.g. "4 out of 5 correct"
- Two CTAs: "Continue" (go to next lesson) and "Review" (see quiz answers)

---

**v0 Prompt:**
```
Build a mobile lesson Results screen for Mwangaza.

Background: #F8F4E8.
This screen celebrates completing a lesson quiz.

Top section (centered, padding-top 60px):
- Animated trophy or star icon (80px, gold #D4A017, with a subtle pulse animation)
- Headline: "Great job, Amina!" (26px bold, #1A1A2E, Plus Jakarta Sans)
- Subheading: "You scored 4 out of 5" (15px, #6B6B6B)

Stars row (centered, mt-4):
- 3 star icons: stars 1 and 2 are filled gold (#D4A017, 36px), star 3 is outlined grey
- Stars animate in sequentially with a pop (scale from 0 to 1, 150ms delay each)

XP card (white, rounded-2xl, mx-6, mt-6, padding 20px, shadow-sm, text-center):
- Label: "XP EARNED" (10px uppercase, #A67C00, letter-spacing)
- Large number: "+15 XP" (40px bold, #D4A017) — animate count-up from 0
- Below: "10 base + 5 bonus for scoring 80%+" (12px grey)

Streak/bonus info (mx-6, mt-3, gold card #FDF3D0, rounded-xl, padding 12px):
- "🔥 Keep going! You've done 3 lessons today." (13px #A67C00)

Bottom CTAs (sticky bottom, padding 16px, gap 12px):
- "Continue →" — full width, #D4A017 background, white bold text, rounded-full, 52px
- "Review Answers" — full width, white background, #D4A017 border + text, rounded-full, 52px

Add subtle gold confetti particles animating down from top (CSS keyframes, 10–15 particles, different sizes and speeds).

Stack: Next.js, Tailwind, TypeScript.
```

---

## Screen 10 — Profile Screen

**Purpose:** User's personal hub. Shows identity, level, XP, badges, and certificates.

**Key elements:**
- Avatar + name + level badge (e.g. "Msomi — Scholar ✦")
- XP progress bar toward next level
- Stats row: Lessons completed | Courses enrolled | Badges earned
- Badge shelf (horizontal scroll of earned badges)
- Certificates section with download/share actions
- Settings link

---

**v0 Prompt:**
```
Build a mobile Profile screen for Mwangaza.

Background: #F8F4E8.

Profile header (white card, mx-4, mt-4, rounded-2xl, padding 20px, shadow-sm):
- Centered avatar: 72px circle, gold border 2px #D4A017, initials "AM" in white on #D4A017 bg
- Name: "Amina Wanjiku" (18px bold, #1A1A2E)
- Level badge: "⭐ Msomi — Scholar" (13px, gold pill background #FDF3D0, text #A67C00)
- XP progress bar (full width, 8px, #D4A017 fill on #E5E7EB track):
  "250 / 500 XP to Hodari" label (11px grey, right-aligned)

Stats row (white card, mx-4, mt-3, rounded-2xl, padding 16px, flex row, 3 equal columns):
- Column 1: "12" (20px bold gold) + "Lessons" (11px grey)
- Column 2: "2" (20px bold gold) + "Courses" (11px grey)
- Column 3: "3" (20px bold gold) + "Badges" (11px grey)

Badges section (mt-4, mx-4):
- Section title: "Badges" (16px bold)
- Horizontal scroll row of badge cards:
  Each badge card: white, rounded-xl, 80px wide, 90px tall, centered icon (emoji 32px) + badge name (10px grey below)
  Show 3 earned badges (gold border): 🔢 "Counting" | ➕ "Addition" | 💯 "Perfect Score"
  Show 1 locked badge (grey, 40% opacity, 🔒 overlay): ✖️ "Multiplication"

Certificates section (mt-4, mx-4):
- Section title: "Certificates" (16px bold)
- Certificate card: white, rounded-2xl, shadow-sm, padding 16px, flex row:
  - Left: 📜 icon in gold circle (40px)
  - Middle: "Basic Math" (14px bold) + "Issued May 2026" (12px grey)
  - Right: two icon buttons: Download ↓ | Share ↗ (both #D4A017)

Settings link at bottom (14px, #D4A017, centered): "⚙ Account Settings"

Stack: Next.js, Tailwind, TypeScript, shadcn/ui.
```

---

## Screen 11 — Premium Upgrade Screen

**Purpose:** Upsell free users to Premium. Warm, value-focused — never aggressive.

**Key elements:**
- Triggered when user hits 5-lesson daily cap or taps "Go Premium"
- Shows what they're missing (unlimited lessons, offline, no ads)
- Pricing cards: Free vs Premium Monthly vs Premium Annual
- CTA: "Unlock Premium" button

---

**v0 Prompt:**
```
Build a mobile Premium Upgrade screen for Mwangaza.

Background: #F8F4E8.

Hero section (centered, padding-top 40px):
- Icon: 🌟 or crown icon in gold (#D4A017), 64px, with warm glow effect
- Headline: "Unlock your full potential" (24px bold, #1A1A2E, Plus Jakarta Sans)
- Subtext: "You've reached today's lesson limit. Go Premium for unlimited learning." (14px grey, max-width 280px, centered)

Feature comparison (white card, mx-4, mt-6, rounded-2xl, padding 20px):
Each row: feature name left, Free column (grey X or ✓), Premium column (gold ✓)
Rows:
- All courses & lessons | ✓ | ✓
- Daily lesson limit | 5/day | Unlimited
- Ad-free experience | ✗ | ✓
- Offline access | Limited | Full
- Priority new courses | ✗ | ✓

Pricing cards (mx-4, mt-4, gap-3):
Card 1 (Monthly):
- "KES 299/month" (20px bold #1A1A2E)
- "Billed monthly" (12px grey)
- White card, border 1.5px #E5E7EB, rounded-2xl

Card 2 (Annual) — RECOMMENDED:
- Gold border 2px #D4A017, rounded-2xl, white card
- "BEST VALUE" badge (gold pill, 10px, top-right)
- "KES 2,499/year" (20px bold #D4A017)
- "Save 30% · KES 208/month" (12px #22C55E)

CTA (sticky bottom, padding 16px):
- "Unlock Premium →" — full width, #D4A017 bg, white bold text, rounded-full, 52px
- "Maybe later" — text link below, 13px grey, centered

Stack: Next.js, Tailwind, TypeScript.
```

---

## Screen 12 — Admin Dashboard

**Purpose:** Internal tool at `/admin`. Lets the admin manage courses, modules, and lessons.

**Key elements:**
- Sidebar nav (desktop-first for admin): Courses | Modules | Lessons | Users | Analytics
- Course list with Add/Edit/Delete actions
- Lesson editor with content block builder
- Preview mode for a lesson

---

**v0 Prompt:**
```
Build a desktop Admin Dashboard for Mwangaza (internal tool, route: /admin).

Layout: sidebar (240px, white, shadow-r) + main content area.

Sidebar:
- Top: Mwangaza logo + "Admin Panel" label (12px grey)
- Nav links (14px, #1A1A2E, padding 10px 16px, rounded-lg on hover):
  📚 Courses | 📦 Modules | 📝 Lessons | 👤 Users | 📊 Analytics
  Active link: gold background #FDF3D0, text #A67C00, left border 3px #D4A017

Main area — show the "Courses" view:
Top bar: "Courses" heading (24px bold) + "Add Course" button (#D4A017 bg, white text, rounded-lg)

Table (white card, rounded-2xl, shadow-sm, full width):
Columns: Course Name | Slug | Modules | Status | Actions
Rows (3 rows):
1. Basic Math | basic-math | 6 | 🟢 Published | Edit | Archive
2. English Communication | english-comm | 0 | 🟡 Draft | Edit | Delete
3. Kiswahili Literacy | kiswahili | 0 | 🟡 Draft | Edit | Delete

Table styling:
- Header row: #F8F4E8 background, 12px uppercase, #6B6B6B
- Row dividers: 1px #E5E7EB
- Status pills: green/yellow pill badges
- Action buttons: small ghost buttons with icons

Color scheme matches Mwangaza brand: #D4A017 gold, #F8F4E8 bg, #1A1A2E text.
Stack: Next.js, Tailwind, TypeScript, shadcn/ui Table and Button components.
```

---

## Summary: All Screens

| # | Screen | Route | User Type |
|---|--------|--------|-----------|
| 1 | Splash Screen | `/` | All |
| 2 | Onboarding (3 slides) | `/onboarding` | New users |
| 3 | Sign Up / Sign In | `/auth` | All |
| 4 | Home / Dashboard | `/home` | Logged in |
| 5 | Course Screen | `/courses/[slug]` | Logged in |
| 6 | Module Screen | `/modules/[id]` | Logged in |
| 7 | Lesson Screen | `/lessons/[id]` | Logged in |
| 8 | Quiz Screen | `/lessons/[id]/quiz` | Logged in |
| 9 | Results Screen | `/lessons/[id]/results` | Logged in |
| 10 | Profile Screen | `/profile` | Logged in |
| 11 | Premium Upgrade | `/upgrade` | Free users |
| 12 | Admin Dashboard | `/admin` | Admin only |

---

---

# Project Initialization — From CMD (No WebStorm)

> You have NOT initialized the project yet. Below is everything you need to run from your terminal (Command Prompt, PowerShell, or any Unix terminal).

---

## Prerequisites

Make sure you have these installed first:

```bash
# Check Node.js (need v18+)
node --version

# Check npm
npm --version

# Check git
git --version
```

If Node.js is not installed, download it from https://nodejs.org (LTS version).

---

## Step 1 — Create the Turborepo Monorepo

```bash
# Navigate to where you want your project
cd C:\Users\YourName\Projects   # Windows
# or
cd ~/Projects                    # Mac/Linux

# Create the monorepo using the official Turborepo starter
npx create-turbo@latest mwangaza

# When prompted:
# - Package manager: npm
# - That's it — accept defaults
```

---

## Step 2 — Navigate into the project

```bash
cd mwangaza
```

---

## Step 3 — Rename and configure the apps

Turborepo creates `apps/web` and `apps/docs` by default. You'll rename `docs` to `api`:

```bash
# Windows CMD
ren apps\docs apps\api

# Mac/Linux
mv apps/docs apps/api
```

---

## Step 4 — Set up the Next.js frontend (apps/web)

```bash
cd apps/web

# Install core dependencies
npm install

# Install Mwangaza-specific packages
npm install @clerk/nextjs zustand next-pwa
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install shadcn/ui
npx shadcn@latest init
# When prompted:
# - Style: Default
# - Base color: Stone (closest to warm off-white)
# - CSS variables: Yes

# Add commonly needed shadcn components
npx shadcn@latest add button card progress badge avatar

cd ../..
```

---

## Step 5 — Set up the Express.js backend (apps/api)

```bash
cd apps/api

# Initialize if needed
npm init -y

# Install backend dependencies
npm install express typescript ts-node @types/express @types/node
npm install @prisma/client @clerk/backend stripe
npm install -D prisma nodemon ts-node-dev

# Initialize Prisma
npx prisma init
# This creates prisma/schema.prisma and a .env file

cd ../..
```

---

## Step 6 — Install root-level dependencies

```bash
# From the root mwangaza/ folder
npm install

# Install Turborepo globally (optional but useful)
npm install -g turbo
```

---

## Step 7 — Set up TypeScript in apps/api

```bash
cd apps/api

# Create tsconfig.json
echo '{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}' > tsconfig.json

cd ../..
```

---

## Step 8 — Create your .env files

```bash
# apps/web/.env.local
cd apps/web
echo "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_API_URL=http://localhost:3001" > .env.local
cd ../..

# apps/api/.env  (Prisma already created this)
cd apps/api
echo "DATABASE_URL=postgresql://user:password@your-neon-host/mwangaza
CLERK_SECRET_KEY=sk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_key" >> .env
cd ../..
```

> Replace the placeholder values with your actual keys from Clerk, Neon, and Stripe dashboards.

---

## Step 9 — Verify the project structure

```bash
# From the root, run both apps simultaneously
npm run dev
```

This should start:
- `apps/web` on http://localhost:3000
- `apps/api` on http://localhost:3001 (once you configure it)

---

## Step 10 — Initialize Git

```bash
# From root mwangaza/ folder
git init
git add .
git commit -m "feat: initial Mwangaza monorepo scaffold"

# Create a repo on GitHub, then:
git remote add origin https://github.com/your-username/mwangaza.git
git branch -M main
git push -u origin main
```

---

## Final Structure After Init

```
mwangaza/
├── apps/
│   ├── web/                   # Next.js 14 PWA
│   │   ├── src/app/           # App Router pages
│   │   ├── src/components/    # UI components
│   │   ├── src/lib/           # Clerk config, utils
│   │   ├── public/            # PWA manifest, icons
│   │   └── .env.local         # Clerk keys, API URL
│   └── api/                   # Express.js backend
│       ├── src/
│       │   ├── routes/        # Route handlers
│       │   ├── middleware/    # Auth, rate limiting
│       │   └── services/      # Business logic
│       ├── prisma/
│       │   └── schema.prisma  # DB schema
│       └── .env               # Neon, Clerk, Stripe keys
├── packages/
│   └── types/                 # Shared TypeScript types
├── turbo.json
└── package.json
```

---

*Mwangaza — Lighting the path to a better life, one skill at a time.*
*www.mwangaza.com | info@mwangaza.com*