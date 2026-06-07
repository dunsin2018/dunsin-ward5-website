# HANDOFF DOCUMENT — Dunsin Fakorede Campaign Website
## Ward 5 Grantham · St. Catharines Municipal Election · October 26, 2026
### Version 4 — FINAL — Complete with Claude Code workflow, Community Gallery & all assets

> **How to use this document with Claude Code:**
> Open VS Code in your project folder. Start Claude Code in the terminal.
> Paste this exact prompt to begin every session:
>
> *"Read the file Dunsin_Website_Handoff.md completely before we do
> anything. This is the full specification for my campaign website.
> Understand every section — design system, pages, forms, assets,
> and build instructions — then confirm you are ready."*
>
> Claude Code will read the full document and hold all context for
> the entire build session.

---

## 1. PROJECT OVERVIEW

| Field | Value |
|---|---|
| Candidate | Dunsin Sunday Fakorede |
| Race | City Councillor — Ward 5 Grantham |
| City | St. Catharines, Ontario, Canada |
| Election Date | Monday, October 26, 2026 |
| Campaign Brand | Arise St. Catharines |
| Campaign Slogan | Together for a Better Ward 5. Building a Stronger Ward 5. |
| Tagline | Next Level |
| Recommended Domain | DunsinWard5.ca or DunsinFakorede.ca |
| Build Platform | Plain HTML/CSS/JS — deploy on Netlify (free tier) |
| Instagram | @DunsinSF4STC_Councillor |
| Facebook | Dunsin Fakorede — Ward 5 Councillor 2026 |

> ⚠️ NO coalition references anywhere on this website.
> No partner candidate names. No coalition page.
> "Arise St. Catharines" is Dunsin's individual campaign brand only.

---

## 2. VISUAL ASSETS — ALL FOUR IMAGES

### ASSET A — Landscape Banner Flyer
**Filename to use:** `hero-banner.png`
**Format:** Wide horizontal ~1500×500px
**Description:** Deep navy, St. Catharines skyline, teal diagonal wave,
Dunsin's name large, four platform pillars, vote date footer.

| Where Used | How |
|---|---|
| Homepage hero background | Full width, overlay: `linear-gradient(to right, rgba(12,35,64,0.90) 45%, rgba(12,35,64,0.30) 100%)` |
| About page hero background | Full width, overlay: `rgba(12,35,64,0.85)` solid |
| Contact page hero background | Full width, overlay: `rgba(12,35,64,0.85)` solid |
| Community page hero background | Full width, overlay: `rgba(12,35,64,0.80)` solid |
| Facebook cover photo | Upload directly — exact dimensions match |
| Twitter/X header | Upload directly — exact dimensions match |
| LinkedIn banner | Upload directly — exact dimensions match |
| OG meta image | Crop to 1200×630px |

---

### ASSET B — Portrait Campaign Poster
**Filename to use:** `campaign-poster.jpeg`
**Format:** Vertical portrait ~1080×1350px
**Description:** Navy background, large name, navy suit arms-crossed,
three platform pillars, slogan, vote date, hashtag bar.

| Where Used | How |
|---|---|
| Get Involved page | Right column visual on desktop, 55% width |
| Homepage mobile hero | Full width on screens under 768px only |
| Donate page sidebar | Right column alongside donation form |
| Media download | "Download Campaign Poster" link on Contact page |
| Instagram grid placeholder | First post in the grid before live feed connects |

---

### ASSET C — Headshot from Flyers (Navy Suit)
**Filename to use:** `headshot-navy.png`
**Description:** Navy suit, burgundy tie, arms crossed, confident smile.
Authoritative. Decisive. Campaign-formal.

| Where Used | How |
|---|---|
| Homepage hero right column | Circular crop 420px, 4px teal ring border |
| Platform page header | Small circular 80px beside H1 |
| Footer | Circular 60px bottom-left |
| Facebook profile photo | Square crop 180×180px |

---

### ASSET D — Professional Seated Headshot (Beige Blazer) ← NEW
**Filename to use:** `headshot-warm.jpg`
**Description:** Beige/champagne blazer, burgundy patterned tie,
hands clasped on desk, genuine wide smile, warm blurred interior
background with plant. Approachable. Human. Conversational.
This photo communicates the "neighbour" and "listener" identity.

| Where Used | How |
|---|---|
| About page — main bio photo | Rectangular, 500px wide, 4px teal left border |
| Homepage About Preview section | Left column photo — warm feel matches "your neighbour" copy |
| First 100 Days page | Right column — listening/engagement tone matches perfectly |
| Contact page | Beside contact details — approachable expression for "reach out" |
| Community Events page intro | Intro section — reinforces community engagement identity |
| Donate page right column | Warm ask — genuine smile works for the donation request |

> **Design note for developer:** Use ASSET D (beige blazer) wherever
> the copy is personal, conversational, or community-focused.
> Use ASSET C (navy suit) wherever the copy is authoritative,
> professional, or platform-focused. The two photos work together
> to show both sides of the candidate — leader and neighbour.

---

## 3. DESIGN SYSTEM

### Colours (extracted directly from campaign flyers)
```css
:root {
  --navy:        #0C2340;   /* main background */
  --royal:       #1A4FA0;   /* secondary blue */
  --teal:        #0A6E56;   /* primary accent */
  --gold:        #C49200;   /* dates, highlights */
  --white:       #FFFFFF;
  --light-bg:    #F5F5F5;
  --body-text:   #2C2C2C;
  --muted:       #666666;
  --border:      #CCCCCC;
  --error:       #9B1C1C;
  --ltteal:      #D1EDE6;
  --ltblue:      #D6E4F7;

  --font-head:   'Montserrat', 'Arial Black', sans-serif;
  --font-body:   'DM Sans', Inter, Arial, sans-serif;
  --font-label:  'Barlow Condensed', Arial Narrow, sans-serif;

  --xs:4px; --sm:8px; --md:16px;
  --lg:24px; --xl:40px; --2xl:64px; --3xl:96px;

  --radius-btn:  6px;
  --radius-card: 12px;
  --radius-pill: 999px;

  --shadow-card: 0 2px 12px rgba(12,35,64,0.10);
  --shadow-btn:  0 4px 16px rgba(10,110,86,0.20);
  --shadow-nav:  0 2px  8px rgba(12,35,64,0.15);
}
```

### Typography
```
Google Fonts import:
https://fonts.googleapis.com/css2?
  family=Montserrat:wght@400;700;900&
  family=DM+Sans:wght@400;500;700&
  family=Barlow+Condensed:wght@400;600;700
  &display=swap

H1: 52px / 900 / Montserrat / --white (dark bg) or --navy (light bg)
H2: 40px / 700 / Montserrat / --navy
H3: 26px / 700 / Montserrat / --teal
H4: 20px / 700 / DM Sans   / --navy
Body: 17px / 400 / DM Sans  / --body-text
Small: 14px / 400 / DM Sans / --muted
Label: 12px / 700 / Barlow Condensed / uppercase / --teal
```

---

## 4. FOLDER STRUCTURE

```
dunsin-ward5-website/
│
├── index.html
├── about.html
├── platform.html
├── first-100-days.html
├── get-involved.html
├── donate.html
├── contact.html
├── community.html          ← NEW — Events & Photo Gallery
├── privacy.html
├── 404.html
├── sitemap.xml
├── robots.txt
├── favicon.ico
│
├── assets/
│   ├── images/
│   │   ├── hero-banner.png          ← ASSET A
│   │   ├── campaign-poster.jpeg     ← ASSET B
│   │   ├── headshot-navy.png        ← ASSET C
│   │   ├── headshot-warm.jpg        ← ASSET D (NEW)
│   │   ├── headshot-circle.png      ← ASSET C circular crop
│   │   ├── og-image.jpg             ← 1200x630 from ASSET A
│   │   ├── favicon-32.png
│   │   ├── favicon-180.png
│   │   └── icons/
│   │       └── (12 SVG icons — see Section 6)
│   │
│   ├── images/events/               ← NEW — all event photos go here
│   │   ├── README.md                ← instructions for adding photos
│   │   ├── 2026-07-farmers-market-01.jpg
│   │   ├── 2026-07-farmers-market-02.jpg
│   │   └── (add new photos here following naming convention)
│   │
│   ├── css/
│   │   ├── main.css
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── components.css
│   │   ├── forms.css
│   │   ├── footer.css
│   │   └── pages/
│   │       ├── home.css
│   │       ├── about.css
│   │       ├── platform.css
│   │       ├── first-100-days.css
│   │       ├── get-involved.css
│   │       ├── donate.css
│   │       ├── contact.css
│   │       └── community.css        ← NEW
│   │
│   └── js/
│       ├── main.js
│       ├── countdown.js
│       ├── mobile-nav.js
│       ├── cookie-consent.js
│       ├── election-banner.js
│       ├── forms.js
│       ├── scroll-animations.js
│       └── gallery-filter.js        ← NEW — category filter for events
│
├── forms/
│   ├── volunteer-success.html
│   ├── donate-success.html
│   ├── contact-success.html
│   └── lawn-sign-success.html
│
└── docs/
    ├── dunsin-bio.pdf
    ├── campaign-poster.pdf
    └── headshot-hires.jpg
```

---

## 5. NAVIGATION STRUCTURE

### Desktop (sticky, --navy background)
```
[Logo: DUNSIN | WARD 5]
Home · About · Platform · First 100 Days · Community · Get Involved · Contact · [DONATE →]
```

### Mobile (full-screen overlay)
```
Home
About
Platform
First 100 Days
Community
Get Involved
Contact
[DONATE]
```

### Footer columns
```
Col 1 — About:       About Dunsin / My Values / Bio / Timeline
Col 2 — Platform:    10 Initiatives / Three Pillars / First 100 Days
Col 3 — Community:   Events & Gallery / Canvassing / Business Visits ← NEW
Col 4 — Get Involved: Volunteer / Donate / Lawn Sign
Col 5 — Connect:     Contact / Media
```

---

## 6. PAGE SPECIFICATIONS

---

### PAGE 1 — HOMEPAGE (/)

#### HERO SECTION
Background: ASSET A full width
Overlay: `linear-gradient(to right, rgba(12,35,64,0.90) 45%, rgba(12,35,64,0.30) 100%)`

```
LEFT COLUMN (55%):

  [Label — teal] ARISE ST. CATHARINES

  [H1 — white 52px]
  Together for a
  Better Ward 5.

  [H3 — teal]
  Building a Stronger Ward 5.

  [Body — white 70% 18px]
  I am Dunsin Sunday Fakorede — your Ward 5
  neighbour, Senior Project Manager, and
  community leader running for City Councillor
  in the St. Catharines Municipal Election.

  [Buttons row]
  [Learn My Platform →]   teal fill
  [Get Involved]          white outline

  [Countdown timer]
  ELECTION DAY — OCTOBER 26, 2026
  [XX] Days · [XX] Hours · [XX] Mins · [XX] Secs

RIGHT COLUMN (45%):
  ASSET C (headshot-navy.png)
  Circular, 420px, 4px teal ring border
  Shadow: 0 20px 60px rgba(0,0,0,0.4)
```

MOBILE (<768px): ASSET B full width above text stack

TRUST BAR (below hero, full width, subtle teal tint):
```
[people icon]     COMMUNITY FIRST
[shield icon]     SAFER NEIGHBOURHOODS
[chart icon]      STRONG LOCAL ECONOMY
[handshake icon]  ACCOUNTABLE LEADERSHIP
```

---

#### TOP 3 ISSUES SECTION
Background: #F5F5F5

```
[Label] THE THREE PRIORITIES
[H2] What Ward 5 Needs Most Right Now.

CARD 1 — teal left border 4px
[01 — large teal]
Keeping Ward 5 Affordable for Renters and Families
New tenants in St. Catharines are currently paying
25.7% more than long-term tenants for the same
units. With rental occupancy at ~95%, Ward 5
residents have almost no negotiating power.
I will be the explicit renter advocate at council
on every zoning, property standards, and housing vote.
[Stat pill — teal]  25.7% rent premium · CMHC 2024

CARD 2 — teal left border 4px
[02 — large teal]
Infrastructure That Actually Works in the North End
Ward 5 scores only 2/5 for transit availability.
Sidewalk clearing near schools and bus stops
consistently falls short. With 23.3% of residents
being seniors — above the national average — this
is a safety issue, not a convenience issue.
[Stat pill — teal]  23.3% seniors · Statistics Canada 2021

CARD 3 — teal left border 4px
[03 — large teal]
Building Community — Not Just Buildings
Walker's Creek Trail, Port Weller Community Centre,
and $400,000 in City cultural grants available in 2025.
Ward 5 needs a councillor who shows up at planning
tables and ensures our ward's voice is heard.
[Stat pill — gold]  $400,000 cultural grants · SCCIP 2025

[CTA centred]
[See My Full Platform →]  → /platform.html
```

---

#### ABOUT PREVIEW SECTION
Background: white

```
LEFT: ASSET D (headshot-warm.jpg)
      Rectangular, 480px, 4px teal left border, 12px radius

RIGHT:
  [Label — teal] WHY I'M RUNNING

  [H2 — navy]
  Ward 5 deserves more than
  it has been getting.

  [Body 17px]
  I am Dunsin Sunday Fakorede — your Ward 5
  neighbour, a Senior Project Manager with 8+
  years of experience delivering $8M+ in capital
  construction projects across Ontario, and a
  community leader who has called St. Catharines home.

  I am running because Ward 5 deserves a councillor
  with the credentials to deliver, the community ties
  to listen, and the record to prove both.

  The skills that make a great project manager —
  accountability, precision, and delivery on time and
  on budget — are exactly the skills City Hall needs
  at the Ward 5 council table.

  [Button — teal]
  [Read My Full Story →]  → /about.html
```

---

#### COMMUNITY SNAPSHOT SECTION ← NEW
Background: --navy
Purpose: Preview of community events from /community page

```
[Label — teal] IN THE COMMUNITY
[H2 — white] Dunsin Out in Ward 5

[Body — white 70%]
Knocking doors. Meeting neighbours.
Listening to local businesses. This campaign
is being built one conversation at a time.

[Photo grid — 3 most recent event photos]
Each photo: square crop, 8px radius
Hover: teal overlay with event title + date

[Button — white outline centred]
[See All Community Events →]  → /community.html
```

> **Developer note:** These 3 photos are pulled from the first 3
> event cards in community.html. When Dunsin adds a new event,
> the homepage grid automatically shows the 3 most recent.
> Implement with JavaScript reading the first 3 .event-card
> elements from the community page, OR simply update these
> 3 image slots manually whenever a new event is added.
> The manual update approach is simpler and recommended.

---

#### KEY STATS BAR
Background: --navy

```
23.3%   seniors in St. Catharines · Statistics Canada 2021
$8M+    in capital projects delivered
25.7%   new tenant rent premium · CMHC 2024
5.8km   Walker's Creek Trail from our doorstep
```

---

#### VOLUNTEER / DONATE SPLIT
Left: #0A6E56 (teal)
Right: #0C2340 (navy)

```
LEFT:  Volunteer With Us   → /get-involved.html
RIGHT: Support the Campaign → /donate.html
```

---

#### UPCOMING EVENTS STRIP
Background: white

```
July 19      Coalition Launch Event
September 13 Ward 5 Community Night
October 21   GOTV Rally
```

---

#### INSTAGRAM FEED PLACEHOLDER
Background: #F5F5F5

```
@DunsinSF4STC_Councillor
6-image grid — use ASSET B as image 1
[Follow on Instagram →]
```

---

#### FOOTER
Background: --navy
Top bar: 4px teal
Bottom bar: 4px gold

```
[ASSET C circular 60px] DUNSIN FAKOREDE · WARD 5 GRANTHAM
Together for a Better Ward 5. Building a Stronger Ward 5.

[5 column links — see Section 5]

TEAL FOOTER BAR (#0A6E56 background):
[FB icon] #AriseStCatharines | #DunsinForWard5 | #NextLevel
                                        VOTE OCTOBER 26, 2026

LEGAL:
"Authorised by Dunsin Sunday Fakorede, official agent for the
Ward 5 Grantham campaign, St. Catharines, Ontario."
© 2026 · Privacy Policy · Cookie Policy
```

---

### PAGE 2 — ABOUT (/about.html)

#### HERO
Background: ASSET A + `rgba(12,35,64,0.85)` overlay

```
[Label] ABOUT THE CANDIDATE
[H1] Dunsin Sunday Fakorede
[Subtext] Your Ward 5 neighbour, project manager,
          and community builder.
```

#### BIO SECTION
Left: ASSET D (headshot-warm.jpg) — 500px, teal left border
Right: Full approved bio (use exact copy below)

```
EXACT BIO COPY — do not paraphrase:

Dunsin Sunday Fakorede is a Senior Project Manager
and mechanical engineer with 8+ years of hands-on
experience delivering $8M+ in capital construction
projects across Ontario. He holds degrees in both
Mechanical Engineering and Software Development,
and has built a career that bridges physical
infrastructure and digital technology.

In his community, he serves as Secretary of the
Nigerian Community and Professionals Forum of Canada
(NCPFC), is a founding member of the Nigerians in
Diaspora Organization Youth Council, and served on
its Constitution Drafting Committee — someone who
does not just participate in community, but helps
build its foundations.

One of the co-founders of Dudu Vibes Entertainment,
he has brought people together across the Niagara
region for years. He lives in the heart of Ward 5
and is running because this community deserves a
councillor with the credentials to deliver, the
community ties to listen, and the record to prove both.

Dunsin is running for Ward 5 because the skills that
make a great project manager — accountability,
precision, and delivery on time and on budget — are
exactly the skills City Hall needs at the ward
council table.
```

#### MY VALUES SECTION
Full width, teal 4px left accent bar

```
[Label] MY VALUES
[H2] Championing Diversity in Ward 5

[Exact copy:]
Ward 5 is one of the most culturally diverse corners
of St. Catharines — and that diversity is one of its
greatest strengths. As Secretary of the Nigerian
Community and Professionals Forum of Canada and
co-founder of Dudu Vibes Entertainment, I have spent
years building bridges across communities — not just
attending events but actively creating the spaces
where people come together.

Championing diversity for me is not a campaign
promise. It is already my lived practice.

As councillor, I will ensure that every Ward 5
resident — regardless of where they were born,
what language they speak at home, or how long they
have lived here — feels genuinely represented at
City Hall. I will advocate for multilingual
communications on Ward 5 matters, support cultural
programming through the City's grants infrastructure,
and ensure our community events, our community
centre, and our public spaces reflect the full
richness of who we are.

Representation at the council table is where
diversity either gets championed or gets ignored.
I intend to champion it.

[Value pills — teal]
Community First · Every Voice Heard · Representation That Reflects Ward 5
```

#### CREDENTIALS GRID — 4 cards
```
Card 1 (teal icon) — Professional
· Senior Project Manager, Sky Development Group
· 8+ years, $8M+ capital construction
· B.Sc. Mechanical Engineering
· B.Sc. Software Development & Entrepreneurship
· Diploma, Project Management

Card 2 (gold icon) — Community
· Secretary — NCPFC
· Founding Member — NIDOYC
· Constitution Drafting Committee — NIDOYC
· Co-founder — Dudu Vibes Entertainment

Card 3 (teal icon) — Technical
· Capital construction and CAPEX delivery
· Preventative maintenance (UpKeep, Yardi)
· Contract administration (CCDC2, RFIs)
· CMMS platform deployment

Card 4 (gold icon) — Ward 5 Roots
· Ward 5 Grantham resident
· Daily walker of Ward 5 streets and trails
· North-end Niagara community advocate
```

#### PULL QUOTE
Full width, teal background

```
"Ward 5 is a great community.
But it deserves more than it has been getting."
— Dunsin Sunday Fakorede
```

#### CAREER TIMELINE
```
2013 — Project Manager, IT & Infrastructure · Bolt, Toronto
2016 — Property & Facilities Manager · Public Storage Canada
2018 — Co-founded Dudu Vibes Entertainment
2019 — Senior Project Manager · Sky Development Group
2021 — B.Sc. Software Development & Entrepreneurship
2023 — Secretary elected — NCPFC
2024 — Founding Member, NIDOYC · Constitution Drafting Committee
2026 — Candidate, Ward 5 City Councillor, St. Catharines
```

---

### PAGE 3 — PLATFORM (/platform.html)

#### HERO
```
[Label] THE PLATFORM
[H1] My 10 Commitments for Ward 5
[Subtext] Specific. Researched. Deliverable.
```

#### THREE PILLARS
```
Pillar 1 (teal):  A North End That Works
Pillar 2 (navy):  Rental Residents Belong Here Too
Pillar 3 (gold):  Community Investment
```

#### 10 INITIATIVES (full cards with stat badges)
```
01 Ward 5 Senior Support Network
   STAT: 23.3% seniors — above national avg 19%
   Actions: Quarterly Senior Connection Day · VON partnership ·
   Friendly Visitor program · Accessible trail infrastructure

02 Grantham Clean & Beautiful
   STAT: Walkability score 3/5 (Wahi 2025)
   Actions: Quarterly clean-up days · Friends of Walker's Creek
   partnership · Dedicated parks maintenance budget line

03 Community Centre Revamp
   STAT: City Recreation Plan update underway (Feb 2025)
   Actions: Shape the City Recreation Plan for Ward 5 ·
   Expanded programming at Port Weller · Outdoor sports pad

04 Grantham Tech Hub
   STAT: No tech skills program in Ward 5 north end
   Actions: Library partnership · Brock/Niagara College mentors ·
   Coding workshops · Digital equity grants

05 Sports & Recreation Expansion
   STAT: Drop-in programs at Port Weller CC — expansion needed
   Actions: Expanded drop-in sports · FAIR program awareness ·
   Multi-sport outdoor court · Swim lesson hours

06 Strategic Winter Snow Clearing
   STAT: Transit score 2/5 (Wahi 2025)
   Actions: Ward 5 Priority Snow Map · 24hr clearing standard ·
   Real-time tracker via City app · Senior snow removal expansion

07 Small Business Support
   STAT: Median household income $72,500 (Statistics Canada)
   Actions: Ward 5 Business Directory · BIA connections ·
   Faster permit processing · Quarterly networking night

08 Walker's Creek Trail Safety
   STAT: 5.8km trail · Active extension project 2025
   Actions: Champion trail extension · LED lighting at crossings ·
   Trail Safety Audit · Friends of Walker's Creek partnership

09 Renter Advocacy & Housing Voice
   STAT: 25.7% new tenant premium · 95% occupancy (CMHC 2024)
   Actions: Renter advocate at council · Faster bylaw response ·
   Annual Ward 5 Renter Town Hall

10 Cultural Programming & Community Celebration
   STAT: $400,000 SCCIP grants · Culture Plan 2025-2030 adopted
   Actions: Annual Ward 5 Festival via Dudu Vibes ·
   SCCIP grant access · Ward 5 Cultural Calendar
```

---

### PAGE 4 — FIRST 100 DAYS (/first-100-days.html)

#### HERO
```
[Label] THE COMMITMENT
[H1] My First 100 Days in Ward 5
[Subtext] Before asking for your vote, I want to
          tell you exactly what I will do with it.

RIGHT COLUMN: ASSET D (headshot-warm.jpg)
```

#### THREE PHASE BLOCKS
```
[Phase 01 — gold badge]
DAYS 1—30  |  Listen First. Then Act.
• Host Ward 5 Resident Town Hall within 30 days
• Meet City Recreation Facility Plan staff
• Introduce myself to all City department leads
• Review all outstanding Ward 5 service requests
  and bylaw complaints

[Phase 02 — gold badge]
DAYS 31—60  |  Establish Ward 5 as a Priority.
• Table a Ward 5 Priority Snow Clearing Map motion
• Connect with Friends of Walker's Creek and City
  Parks for a formal trail safety review
• Submit request to City Engineering for a Ward 5
  sidewalk and infrastructure condition assessment
• Attend all council/committee meetings

[Phase 03 — gold badge]
DAYS 61—100  |  Build the Foundation for Delivery.
• Establish first Ward 5 Business Networking Night
• Begin groundwork for Ward 5 Senior Connection Day
  with VON Canada and CONTACT Niagara
• Submit request to expand FAIR program visibility
  across Ward 5
• Publish a public Ward 5 Progress Update — what
  was committed, what has been actioned
```

#### CLOSING QUOTE
Teal background

```
"The first 100 days are not about grand announcements.
They are about showing Ward 5 that their councillor
is present, prepared, and getting to work."
— Dunsin Sunday Fakorede
```

---

### PAGE 5 — COMMUNITY EVENTS & GALLERY (/community.html) ← NEW

> **Purpose:** This page shows Dunsin actively engaged in the Ward 5
> community — canvassing businesses, attending events, meeting residents,
> visiting faith communities. It is a living record of campaign presence.
> It must be EASY TO UPDATE — adding a new event should take 5 minutes.

#### HERO
Background: ASSET A + `rgba(12,35,64,0.80)` overlay
Right visual: ASSET D (headshot-warm.jpg)

```
[Label — teal] IN THE COMMUNITY
[H1 — white] Dunsin Out in Ward 5
[Subtext — white 70%]
Every conversation matters. Every door knocked.
Every business visited. Every community event attended.
This is what a campaign that listens looks like.
```

#### FILTER BAR
```
[All]  [Canvassing]  [Business Visits]  [Community Events]
[Faith & Cultural]  [Seniors]  [Meetings]
```

JavaScript filter: clicking a category shows only matching cards.
Active filter: teal background, white text.
Default: All cards visible.

---

#### EVENT CARD TEMPLATE
> **CRITICAL FOR DEVELOPER:** This is the exact HTML template to use
> for every event. To add a new event, Dunsin copies this block,
> fills in the details, and pastes it at the TOP of the events grid.
> New events always appear first.

```html
<!-- ═══ EVENT CARD TEMPLATE — copy this block for each new event ═══
     Categories: canvassing | business | community | faith | seniors | meeting
     To add: copy block below, update all fields, paste at TOP of .events-grid
     Photo: save to assets/images/events/ using YYYY-MM-description-NN.jpg -->

<div class="event-card" data-category="CATEGORY_HERE">
  <div class="event-photo">
    <img src="assets/images/events/PHOTO-FILENAME.jpg"
         alt="DESCRIBE THE EVENT FOR ACCESSIBILITY"
         loading="lazy">
    <span class="event-category-tag">CATEGORY LABEL</span>
  </div>
  <div class="event-info">
    <span class="event-date">MONTH DD, 2026</span>
    <h3 class="event-title">EVENT TITLE</h3>
    <p class="event-location">📍 LOCATION, Ward 5</p>
    <p class="event-description">
      2-3 sentence description of the event, who was met,
      and what was discussed or accomplished.
    </p>
  </div>
</div>
<!-- ═══ END EVENT CARD ═══ -->
```

---

#### EVENTS GRID SECTION
Layout: 3-column grid desktop, 2-column tablet, 1-column mobile
Each card: white background, 12px radius, teal top border 3px,
category tag (teal pill top-right of photo), hover: lift shadow

```
PLACEHOLDER EVENTS (update with real events as they happen):

Event Card 1 — canvassing
Photo: [photo from canvassing session]
Date: July 2026
Title: Knocking Doors in Linwell
Location: Linwell Road, Ward 5
Description: Spent Saturday morning meeting residents along
Linwell Road. Heard concerns about sidewalk maintenance and
the need for better senior programming in the north end.

Event Card 2 — business
Photo: [photo with business owner]
Date: July 2026
Title: Meeting Local Business Owners
Location: Grantham area, Ward 5
Description: Sat down with Ward 5 business owners to
understand the real challenges they face — from permit
delays to the need for a stronger local business network.

Event Card 3 — community
Photo: [photo at community event]
Date: July 2026
Title: Ward 5 Community Gathering
Location: Port Weller, Ward 5
Description: Joined Ward 5 residents at a community
gathering. Conversations about recreation programming,
trail safety, and what it means to have real representation.

Event Card 4 — faith
Photo: [photo at faith community visit]
Date: July 2026
Title: Visiting Our Faith Communities
Location: Ward 5 / St. Catharines
Description: Visited faith community leaders across Ward 5
to listen, introduce the campaign, and hear directly what
matters most to their congregations.

[Add more cards above this line as events happen]
```

---

#### HOW TO ADD A NEW EVENT — developer instructions
```
STEP 1: Take or receive the event photo
STEP 2: Rename it: YYYY-MM-description-NN.jpg
        Example: 2026-09-business-visit-01.jpg
STEP 3: Save it to: assets/images/events/
STEP 4: Open community.html
STEP 5: Copy the EVENT CARD TEMPLATE block above
STEP 6: Fill in: category, photo filename, alt text,
        date, title, location, description
STEP 7: Paste the new card at the TOP of .events-grid
        (newest events always appear first)
STEP 8: Save and publish

Total time per event: approximately 5 minutes.
No CMS or backend required.
```

---

#### CALL TO ACTION STRIP (below events grid)
Background: teal

```
[H3 — white] Want to join Dunsin in the community?
[Body — white] Volunteer to canvass, attend events,
               or help at campaign activities.
[Button — white fill, teal text]
[Volunteer With Us →]  → /get-involved.html
```

---

#### "LATEST FROM THE COMMUNITY" ON HOMEPAGE
The homepage Community Snapshot section (see Page 1) shows
the 3 most recent event photos. Update those 3 image slots
manually whenever a new event is added to community.html.

```html
<!-- Homepage community snapshot — update these 3 when new events added -->
<div class="community-preview">
  <img src="assets/images/events/LATEST-EVENT-01.jpg" alt="...">
  <img src="assets/images/events/LATEST-EVENT-02.jpg" alt="...">
  <img src="assets/images/events/LATEST-EVENT-03.jpg" alt="...">
</div>
```

---

### PAGE 6 — GET INVOLVED (/get-involved.html)

#### HERO
```
[H1] Get Involved — Ward 5 Needs You
[Subtext] Every door knocked and every conversation counts.
RIGHT COLUMN: ASSET B (campaign-poster.jpeg) 55% width
```

#### VOLUNTEER FORM
Form name: ward5-volunteer (Netlify Forms)

```
Full Name*              text
Email Address*          email
Phone Number            tel
Neighbourhood           text (e.g. Linwell, Port Weller)
How to help?            checkboxes:
  ☐ Door-to-door canvassing
  ☐ Phone banking
  ☐ Social media support
  ☐ Event setup & logistics
  ☐ Driving supporters to polls
  ☐ Translation / multilingual outreach
  ☐ Office support
  ☐ Other
Availability            text
Message (optional)      textarea
Honeypot: <input type="text" name="_gotcha" style="display:none">

Submit: "Sign Me Up" — teal, full-width mobile
Privacy: "Your information will only be used for
          campaign communications."
```

#### THREE WAYS
```
[Door]   CANVASS DOORS — Join a Ward 5 canvassing team
[Phone]  PHONE BANK — Call from home, scripts provided
[Sign]   LAWN SIGN — Request a sign for your yard
         [Request a Lawn Sign] → modal form
```

#### LAWN SIGN MODAL FORM
Form name: lawn-sign-request

```
Full Name*, Address*, Ward 5? (yes/no), Phone*, Email*
Submit: "Request My Sign"
```

---

### PAGE 7 — DONATE (/donate.html)

#### HERO
```
[H1] Support the Campaign
[Subtext] Help us reach every door in Ward 5.
RIGHT COLUMN: ASSET D (headshot-warm.jpg)
```

#### LEGAL DISCLAIMER (above all donation content — non-negotiable)
```
⚠ MUNICIPAL ELECTIONS ACT, 1996

• Maximum individual contribution: $1,200
• Corporations and trade unions cannot contribute
• All contributions publicly reported post-election
• Canadian citizens and permanent residents only
```

#### IMPACT AMOUNTS
```
$25   → 50 door-hangers delivered to Ward 5
$50   → One canvassing session supplies
$100  → One lawn sign planted in Ward 5
$250  → Digital advertising to 1,000 Ward 5 residents
$500  → Direct mail to 500 Ward 5 households
[Custom Amount]
```

#### HOW TO DONATE
```
E-Transfer: [campaign email] · Reference: name + "Ward 5 Dunsin"
Cheque: Payable to Dunsin Sunday Fakorede Campaign
Cash: Accepted at events · Receipt issued
```

#### DONATION RECORD FORM
Form name: donation-record

```
Full Legal Name*, Email*, Phone*, Home Address* (legal requirement),
Amount*, Payment Method* (radio), Date
Submit: "Submit Donation Record" — gold
Note: "For receipt tracking only. Does not process payment."
```

---

### PAGE 8 — CONTACT (/contact.html)

#### HERO
Background: ASSET A + `rgba(12,35,64,0.85)`
Right: ASSET D (headshot-warm.jpg)

```
[H1] Get in Touch
[Subtext] Questions, media inquiries, or just want
          to introduce yourself?
```

#### CONTACT FORM
Form name: contact-general

```
Full Name*, Email*, Subject* (dropdown: General / Volunteer /
Media / Lawn Sign / Event Invitation / Endorsement / Other),
Message* (min 20 chars)
Submit: "Send Message" — teal
Success: "Thank you — we'll respond within 24 hours."
```

#### CONTACT DETAILS
```
📧 [campaign email]
📞 [campaign phone]
📍 Ward 5 — Grantham, St. Catharines
📸 @DunsinSF4STC_Councillor
👍 Dunsin Fakorede — Ward 5 Councillor 2026
🏢 [office address — add when public]
```

#### MEDIA
```
Headshot (hi-res):    [Download headshot-hires.jpg]
Candidate bio:        [Download dunsin-bio.pdf]
Campaign poster:      [Download campaign-poster.pdf]
Response time:        Within 24 hours
```

---

## 7. REMOVED PAGE

```
/coalition   REMOVED — no partner candidate references on website.
             "Arise St. Catharines" is Dunsin's individual brand only.
```

---

## 8. COMPLETE SITE MAP

```
/                        Homepage
/about.html              About Dunsin
/platform.html           10 Initiatives
/first-100-days.html     First 100 Days
/community.html          Community Events & Gallery  ← NEW
/get-involved.html       Volunteer & Lawn Signs
/donate.html             Donate
/contact.html            Contact & Media
/privacy.html            Privacy Policy
/404.html                Custom error page
```

---

## 9. SEO META TAGS (paste into every page `<head>`)

```html
<title>Dunsin Fakorede — Ward 5 Councillor | St. Catharines 2026</title>
<meta name="description" content="Dunsin Sunday Fakorede is running for City Councillor in Ward 5 Grantham, St. Catharines — October 26, 2026. Together for a Better Ward 5.">
<meta name="keywords" content="Ward 5 Grantham councillor, St. Catharines election 2026, Dunsin Fakorede, Arise St. Catharines, municipal election, October 26 2026">
<meta name="author" content="Dunsin Sunday Fakorede">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.DunsinWard5.ca/">

<meta property="og:type" content="website">
<meta property="og:url" content="https://www.DunsinWard5.ca/">
<meta property="og:title" content="Dunsin Fakorede for Ward 5 City Councillor 2026">
<meta property="og:description" content="Together for a Better Ward 5. Vote Dunsin Fakorede — October 26, 2026.">
<meta property="og:image" content="https://www.DunsinWard5.ca/assets/images/og-image.jpg">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Dunsin Fakorede for Ward 5 City Councillor 2026">
<meta name="twitter:description" content="Together for a Better Ward 5. Vote — October 26, 2026.">
<meta name="twitter:image" content="https://www.DunsinWard5.ca/assets/images/og-image.jpg">

<!-- Google Analytics 4 — replace G-XXXXXXXXXX with real ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  gtag('js',new Date()); gtag('config','G-XXXXXXXXXX');
</script>
```

---

## 10. JAVASCRIPT — READY TO USE

### Countdown Timer (countdown.js)
```javascript
function updateCountdown() {
  const election = new Date('2026-10-26T08:00:00-04:00');
  const diff = election - new Date();
  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      '<span class="election-live">ELECTION DAY — VOTE NOW!</span>';
    return;
  }
  const pad = n => String(Math.floor(n)).padStart(2,'0');
  const el = id => document.getElementById(id);
  if(el('days'))    el('days').textContent    = pad(diff/86400000);
  if(el('hours'))   el('hours').textContent   = pad((diff%86400000)/3600000);
  if(el('minutes')) el('minutes').textContent = pad((diff%3600000)/60000);
  if(el('seconds')) el('seconds').textContent = pad((diff%60000)/1000);
}
setInterval(updateCountdown,1000);
updateCountdown();
```

### Gallery Category Filter (gallery-filter.js)
```javascript
// Community events category filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const category = this.dataset.filter;

    // Update active button
    document.querySelectorAll('.filter-btn')
      .forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    // Show/hide cards
    document.querySelectorAll('.event-card').forEach(card => {
      if (category === 'all' ||
          card.dataset.category === category) {
        card.style.display = 'block';
        card.classList.add('reveal');
      } else {
        card.style.display = 'none';
      }
    });
  });
});
```

### Election Day Mobile Banner (election-banner.js)
```javascript
const daysLeft = Math.floor(
  (new Date('2026-10-26') - new Date()) / 86400000);
const banner = document.getElementById('election-banner');
if (banner && daysLeft <= 14 && daysLeft >= 0)
  banner.style.display = 'flex';
```

### Cookie Consent (cookie-consent.js)
```javascript
const banner = document.getElementById('cookie-banner');
if (localStorage.getItem('cc') && banner)
  banner.style.display = 'none';
```

### Scroll Animations (scroll-animations.js)
```javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el =>
  observer.observe(el));
```

---

## 11. CLAUDE CODE — COMPLETE BUILD WORKFLOW

> This section is for use inside VS Code terminal with Claude Code.
> Every prompt below is production-ready. Paste them in order.
> Do not skip steps — each builds on the last.

### Prerequisites
```bash
# Required: Node.js 18+ and VS Code 1.85+
# Windows users: must use WSL2

# Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# Authenticate — choose one:
# Option A: Claude Pro/Max subscription (OAuth)
# Option B: API key from console.anthropic.com

# Open project in VS Code
cd dunsin-ward5-website
code .
# Then open integrated terminal: Ctrl + `
```

### Starting every session
```bash
# Start Claude Code
claude

# Run this once per session — configures Shift+Enter for multi-line
/terminal-setup

# Feed the handoff document — run this at the START of every session
```

**Session start prompt (paste this every time):**
```
Read the file Dunsin_Website_Handoff.md completely.
This is the full specification for my political campaign
website. Understand every section including: design system,
all page specifications, all four image assets and where
they go, the community events gallery, all form specs,
the JavaScript code, and SEO requirements.
Do not write any code yet. Confirm when ready.
```

---

### Build Sequence — paste prompts in this exact order

**PROMPT 1 — Design system**
```
Build assets/css/main.css using the complete design system
from Section 3 of the handoff. Include all CSS custom
properties (colour variables, font variables, spacing,
shadows, radius), base reset styles, typography scale,
.btn classes (primary/outline/gold), .container,
.label class, .skip-link, and .back-to-top button.
Do not build any page layout yet.
```

**PROMPT 2 — Navigation**
```
Build the sticky navigation bar using Section 5 of
the handoff. Create assets/css/navbar.css and
assets/js/mobile-nav.js. The navbar must: stick on
scroll, hide scrolling down and reappear scrolling up,
show a gold Donate button, have a teal active underline,
and a full-screen navy mobile overlay with hamburger.
Use the logo text "DUNSIN | WARD 5".
```

**PROMPT 3 — Shared HTML template**
```
Create a base HTML template that all 8 pages will use.
It must include: the skip-link, navbar, mobile menu,
footer with the teal hashtag bar matching the campaign
flyer design, election day mobile banner, back-to-top
button, and cookie consent banner.
Wire all JS files. Include the Google Fonts import.
This template will be copied for each page.
```

**PROMPT 4 — Homepage hero and trust bar**
```
Build the homepage hero section in index.html using
PAGE 1 HERO spec from the handoff.
Use assets/images/hero-banner.png as background with
the gradient overlay specified.
Place assets/images/headshot-navy.png (ASSET C) as a
circular 420px image on the right with 4px teal ring.
Add the countdown timer and wire countdown.js.
Add the four-pillar trust bar below the hero.
```

**PROMPT 5 — Homepage remaining sections**
```
Add all remaining homepage sections to index.html
in this order: Top 3 Issues, About Preview, Community
Snapshot, Stats Bar, Volunteer/Donate Split, Events
Strip, Instagram placeholder, Footer.

CRITICAL: Use the exact approved copy from the handoff
for all sections. Do not rewrite or paraphrase any text.
For the About Preview, use ASSET D (headshot-warm.jpg)
not the navy suit headshot.
```

**PROMPT 6 — About page**
```
Build about.html using PAGE 2 spec from the handoff.
Sections in order: Hero (ASSET A background), Bio
(ASSET D warm headshot left column), My Values section
(teal accent bar, exact copy), Credentials grid (4 cards),
Pull quote (teal background), Career timeline.
Use the exact approved copy throughout.
```

**PROMPT 7 — Platform page**
```
Build platform.html using PAGE 3 spec.
Include: Hero, Three Pillars bar, then all 10 initiative
cards. Each card needs: number badge, icon placeholder,
title, teal stat pill with verified figure, problem
statement (2 sentences), 4-5 action bullets, and a
"Why this matters for Ward 5" callout box.
```

**PROMPT 8 — First 100 Days page**
```
Build first-100-days.html using PAGE 4 spec.
Three phase blocks (Days 1-30, 31-60, 61-100) as a
vertical timeline on desktop and stacked cards on mobile.
Each phase has a gold number badge, teal date label,
H3 title, and bulleted action list.
Place ASSET D (headshot-warm.jpg) in the right column
of the hero. End with the closing quote on teal background.
```

**PROMPT 9 — Community Events & Gallery page**
```
Build community.html using PAGE 5 spec (the new Community
Events & Gallery page).

Requirements:
1. Hero: ASSET A background + overlay, ASSET D right column
2. Filter bar: All / Canvassing / Business Visits /
   Community Events / Faith & Cultural / Seniors / Meetings
3. Events grid: 3-col desktop, 2-col tablet, 1-col mobile
4. Each event card: photo, category tag pill, date, title,
   location, 2-3 sentence description
5. Wire gallery-filter.js to the filter buttons
6. Add 4 placeholder event cards using the exact template
   from the handoff
7. Add the CTA strip at the bottom linking to /get-involved.html

The event card HTML must match the template exactly as
specified in the handoff so Dunsin can add new events
by copying and pasting the template block.
```

**PROMPT 10 — Get Involved, Donate, Contact pages**
```
Build get-involved.html, donate.html, and contact.html
using PAGE 6, 7, and 8 specs.

Get Involved: volunteer form with all 8 checkboxes,
lawn sign modal, three ways section, ASSET B right column.

Donate: legal disclaimer MUST appear above donation amounts,
impact amount buttons ($25-$500 + custom), how to donate
section, donation record form, ASSET D right column.

Contact: contact form with subject dropdown, contact
details panel, media download section, ASSET D right column.

Add data-netlify="true" to all three forms and the
honeypot hidden field to each.
```

**PROMPT 11 — SEO, privacy, 404, sitemap**
```
Add the complete SEO meta tags from Section 9 to every
page. Create privacy.html with a basic PIPEDA-compliant
privacy policy. Create 404.html with campaign branding
and a back-to-homepage button. Generate sitemap.xml
and robots.txt using the site map from Section 8.
```

**PROMPT 12 — Final audit**
```
Audit the complete website for:
1. Mobile responsiveness on all 8 pages (375px, 768px, 1024px)
2. All hex colours match the design system exactly
3. ASSET D (headshot-warm.jpg) is used on: About, First 100 Days,
   Donate, Contact, and Community pages
4. ASSET C (headshot-navy.png) is used on: Homepage hero and footer
5. The legal disclaimer on donate.html appears ABOVE the donation amounts
6. All forms have data-netlify="true" and honeypot fields
7. The election day banner only shows on mobile when daysLeft <= 14
8. The community page filter buttons work correctly
9. All external links have target="_blank" rel="noopener noreferrer"
10. Skip-to-content link is present on every page
List any issues found before fixing them.
```

---

### Adding a new community event (use this prompt)
```
Add a new community event to community.html.

Event details:
- Category: [canvassing / business / community / faith / seniors / meeting]
- Date: [Month DD, 2026]
- Title: [Event title]
- Location: [Location, Ward 5]
- Photo filename: [filename.jpg — already saved to assets/images/events/]
- Description: [2-3 sentence description]

Use the exact event card template from the handoff.
Paste the new card at the TOP of the .events-grid so it
appears first. Also update the 3 community snapshot images
on the homepage to include this new photo as the first image.
```

---

### Useful Claude Code commands during the build
```bash
/plan          # Review Claude's plan before any code is written
/diff          # See exactly what changes Claude proposes
Ctrl+Z         # Undo last change if something breaks
@filename      # Reference a specific file in your prompt
@terminal      # Reference terminal output in your prompt
/clear         # Clear context if session gets long
claude --resume  # Resume a previous session
```

---

## 12. OUTSTANDING TASKS BEFORE LAUNCH

### Must complete
- [ ] Domain purchased: DunsinWard5.ca or DunsinFakorede.ca
- [ ] ASSET A saved as: assets/images/hero-banner.png
- [ ] ASSET B saved as: assets/images/campaign-poster.jpeg
- [ ] ASSET C saved as: assets/images/headshot-navy.png
- [ ] ASSET D saved as: assets/images/headshot-warm.jpg ← NEW
- [ ] headshot-circle.png — circular crop of ASSET C
- [ ] og-image.jpg — crop ASSET A to 1200×630px
- [ ] Campaign email address confirmed — insert in all forms and footer
- [ ] Campaign phone number confirmed — insert on Contact page
- [ ] Google Analytics 4 ID — replace G-XXXXXXXXXX
- [ ] Netlify account created — connect repo for form handling
- [ ] Mobile test: iPhone and Android before launch
- [ ] Independent review before publishing

### Complete when available
- [ ] Campaign office address — insert on Contact page when public
- [ ] First event photos — save to assets/images/events/ and add cards
- [ ] Professional bio PDF — save to docs/dunsin-bio.pdf
- [ ] Favicon — "DF" on navy circle, 32×32 and 180×180

### Ongoing after launch
- [ ] Add new event to community.html after every canvassing session
- [ ] Update homepage community snapshot (3 photos) when new event added
- [ ] Post same event photo to Instagram and Facebook same day

---

## 13. DEVELOPER RULES — NON-NEGOTIABLE

1. **No coalition references anywhere** — not in copy, nav, footer, or meta tags
2. **"Arise St. Catharines" is Dunsin's individual brand only** — not a coalition
3. **All copy is final — do not rewrite or paraphrase any text block**
4. **Hex colours must match design system exactly** — no approximations
5. **ASSET D (warm headshot) and ASSET C (navy headshot) serve different purposes** — do not swap them
6. **Legal disclaimer on donate page must be above the donation buttons**
7. **Candidate's street address must not appear anywhere on the site**
8. **All forms must use Netlify Forms** — no PHP, no mailto links
9. **Event card template must be followed exactly** — enables easy self-updating
10. **Every page must have the skip-to-content accessibility link**

---

*Handoff document — Version 4 FINAL*
*Dunsin Sunday Fakorede — Ward 5 Grantham Campaign*
*Prepared June 2026 — All content approved by candidate*
*8 pages · 4 image assets · 1 community gallery · Full Claude Code workflow*
