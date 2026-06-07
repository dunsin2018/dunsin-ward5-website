# HANDOFF DOCUMENT — Dunsin Fakorede Campaign Admin CMS
## Backend Content Management System
### Ward 5 Grantham · St. Catharines · October 26, 2026

> **How to use this document with Claude Code:**
> Start every session with:
> *"Read Dunsin_Admin_CMS_Handoff.md completely.
> This is the full specification for my campaign admin panel.
> Do not write any code yet. Confirm when ready."*

---

## 1. WHAT THIS DOCUMENT COVERS

This document specifies a complete backend admin system that allows
Dunsin (or any campaign team member) to:

- Log in to a private admin dashboard via browser
- Update website content without touching any code
- Add community events and photos
- View and export volunteer sign-ups
- View and export donation records
- View and export contact form submissions
- Generate Word (.docx), PDF (.pdf), and XML files
  from campaign data at the click of a button

**No coding knowledge required to use the admin panel once built.**

---

## 2. IS THIS POSSIBLE?

Yes. 100%.

This is standard web development. The approach recommended here
uses tools that are:
- Free to use
- Work with your existing GitHub + Netlify setup
- Buildable entirely with Claude Code
- Operable by any campaign team member via a browser

---

## 3. RECOMMENDED TECHNOLOGY STACK

```
Frontend (already built):
  HTML / CSS / JavaScript — existing campaign website

Admin Panel:
  HTML / CSS / JavaScript — separate admin dashboard
  Protected by username + password login

Backend:
  Node.js + Express — handles data and file generation
  Runs on Render.com (free tier) or Railway.app (free tier)

Database:
  MongoDB Atlas — free cloud database
  Stores: events, volunteers, donations, contacts, content

Authentication:
  JSON Web Tokens (JWT) — secure admin login
  bcrypt — password hashing

Document Generation:
  docx — Word document generation (already used in campaign docs)
  pdfkit — PDF generation
  Built-in XML — sitemap and data export

File Uploads (event photos):
  Cloudinary — free image hosting and management
  Admin uploads photos through the panel
  Website displays them automatically
```

---

## 4. SYSTEM ARCHITECTURE

```
┌─────────────────────────────────────────────────────────┐
│                    CAMPAIGN WEBSITE                      │
│              dunsinward5.ca (Netlify)                   │
│         Reads content from MongoDB via API              │
└────────────────────────┬────────────────────────────────┘
                         │ API calls
                         ▼
┌─────────────────────────────────────────────────────────┐
│                   NODE.JS BACKEND                        │
│              api.dunsinward5.ca (Render)                │
│    Handles auth, data, document generation, uploads     │
└────────────┬──────────────────────┬─────────────────────┘
             │                      │
             ▼                      ▼
┌────────────────────┐   ┌──────────────────────────────┐
│   MONGODB ATLAS    │   │        CLOUDINARY             │
│  Free cloud DB     │   │   Free image hosting          │
│  Stores all data   │   │   Stores event photos         │
└────────────────────┘   └──────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────┐
│                   ADMIN DASHBOARD                        │
│            admin.dunsinward5.ca (Netlify)               │
│         Private login — campaign team only              │
└─────────────────────────────────────────────────────────┘
```

---

## 5. ADMIN DASHBOARD — ALL FEATURES

### 5.1 Login Page
```
URL: admin.dunsinward5.ca/login
Fields: Username + Password
Security: JWT token stored in browser session
Session: Expires after 8 hours (auto logout)
Failed attempts: Lock after 5 wrong attempts
```

### 5.2 Dashboard Home
```
After login — shows summary cards:

┌─────────────────────────────────────────────────┐
│ ARISE ST. CATHARINES — CAMPAIGN ADMIN PANEL     │
│ Welcome back, Dunsin                            │
├──────────┬──────────┬──────────┬────────────────┤
│ 47       │ 12       │ 8        │ 3              │
│ Volunteers│ Donations│ Events   │ Messages       │
│ Total    │ This week│ Posted   │ Unread         │
└──────────┴──────────┴──────────┴────────────────┘

Quick actions:
[+ Add Event]  [View Volunteers]  [Export Data]
```

---

### 5.3 Events Manager
```
PURPOSE: Add, edit, delete community events without
         touching community.html directly.

LIST VIEW:
┌────────────────────────────────────────────────────┐
│ COMMUNITY EVENTS                    [+ Add Event]  │
├──────────────┬──────────────┬──────────┬───────────┤
│ Title        │ Date         │ Category │ Actions   │
├──────────────┼──────────────┼──────────┼───────────┤
│ Door Knock   │ Jul 15, 2026 │ Canvass  │ Edit/Del  │
│ Business Mtg │ Jul 18, 2026 │ Business │ Edit/Del  │
└──────────────┴──────────────┴──────────┴───────────┘

ADD / EDIT EVENT FORM:
- Event Title*         text
- Date*                date picker
- Category*            dropdown:
                         Canvassing / Business Visits /
                         Community Events /
                         Faith & Cultural / Seniors / Meetings
- Location*            text
- Description*         textarea (2-3 sentences)
- Photo*               file upload (jpg/png max 5MB)
                       → uploads to Cloudinary automatically
- Status               toggle: Published / Draft

WHAT HAPPENS WHEN SAVED:
- Event saved to MongoDB
- Photo uploaded to Cloudinary
- Campaign website community.html reads from MongoDB
  and displays the new event automatically
- Homepage community snapshot updates automatically
```

---

### 5.4 Website Content Editor
```
PURPOSE: Update key text on the website without
         touching any HTML files.

EDITABLE SECTIONS:
┌────────────────────────────────────────────────────┐
│ CONTENT EDITOR                                     │
├────────────────────────────────────────────────────┤
│ Homepage Hero Headline          [Edit]             │
│ Homepage Subheadline            [Edit]             │
│ About Page Bio                  [Edit]             │
│ Platform Initiative Descriptions [Edit]            │
│ First 100 Days content          [Edit]             │
│ Contact Details                 [Edit]             │
│ Event Announcements             [Edit]             │
│ Footer Tagline                  [Edit]             │
└────────────────────────────────────────────────────┘

Each section opens a simple text editor.
Changes go live on the website within 30 seconds.
```

---

### 5.5 Volunteers Manager
```
PURPOSE: View all volunteer form submissions from
         the website. Export to Word, PDF, or Excel.

LIST VIEW:
┌───────────────────────────────────────────────────────────┐
│ VOLUNTEERS                   [Export Word] [Export PDF]   │
├───────────┬───────────────┬──────────┬────────────────────┤
│ Name      │ Email         │ Phone    │ How to Help        │
├───────────┼───────────────┼──────────┼────────────────────┤
│ John S.   │ john@mail.com │ 647-xxx  │ Canvassing, Events │
│ Mary T.   │ mary@mail.com │ 905-xxx  │ Phone Banking      │
└───────────┴───────────────┴──────────┴────────────────────┘

FILTERS:
- By availability
- By how they want to help
- By date registered
- By neighbourhood

EXPORT OPTIONS:
[Export to Word]  → generates volunteer-list.docx
[Export to PDF]   → generates volunteer-list.pdf
[Export to XML]   → generates volunteer-list.xml
[Export to CSV]   → generates volunteer-list.csv

EXPORTED WORD DOCUMENT CONTAINS:
- Arise St. Catharines header
- Campaign branding (navy/teal/gold)
- Full volunteer table with all details
- Date generated
- Total count
- Sorted by date registered
```

---

### 5.6 Donations Manager
```
PURPOSE: Track all donation record submissions.
         Generate receipts and reports.

⚠️ LEGAL NOTE: This tracks self-reported donations.
   The official financial records must still be
   maintained separately per the Municipal Elections
   Act. This is a tracking tool only.

LIST VIEW:
┌──────────────────────────────────────────────────────────────┐
│ DONATIONS                  [Export Report] [Generate Receipt]│
├──────────┬────────────┬─────────┬────────┬───────────────────┤
│ Name     │ Amount     │ Method  │ Date   │ Receipt           │
├──────────┼────────────┼─────────┼────────┼───────────────────┤
│ J. Smith │ $100.00    │ E-Trans │ Jul 15 │ [Generate PDF]    │
│ M. Jones │ $250.00    │ Cheque  │ Jul 18 │ [Generate PDF]    │
└──────────┴────────────┴─────────┴────────┴───────────────────┘

TOTAL RAISED CARD:
┌─────────────────────────────────────┐
│ Total Recorded: $350.00             │
│ This week: $350.00                  │
│ Number of contributions: 2          │
│ Legal maximum remaining: $850.00    │
│ (based on $1,200 individual limit)  │
└─────────────────────────────────────┘

RECEIPT PDF CONTAINS:
- Arise St. Catharines letterhead
- Donor full name and address
- Amount contributed
- Date of contribution
- Payment method
- Receipt number (auto-generated)
- Legal disclaimer text
- "Authorised by Dunsin Sunday Fakorede,
   official agent for the Ward 5 Grantham
   campaign, St. Catharines, Ontario."
```

---

### 5.7 Messages / Contact Manager
```
PURPOSE: View all contact form submissions.

LIST VIEW:
┌─────────────────────────────────────────────────────────┐
│ MESSAGES                              [Mark All Read]   │
├─────────────┬──────────┬──────────────┬─────────────────┤
│ Name        │ Subject  │ Date         │ Status          │
├─────────────┼──────────┼──────────────┼─────────────────┤
│ Jane D.     │ Media    │ Jul 15, 2026 │ ● Unread       │
│ Bob T.      │ Volunteer│ Jul 14, 2026 │ ✓ Read         │
└─────────────┴──────────┴──────────────┴─────────────────┘

Click any row to read the full message.
Reply button opens email client with pre-filled
reply-to address.
```

---

### 5.8 Document Generator
```
PURPOSE: Generate campaign documents on demand
         without opening Word or any other software.

AVAILABLE DOCUMENTS:

┌────────────────────────────────────────────────────────┐
│ DOCUMENT GENERATOR                                     │
├────────────────────────────────────────────────────────┤
│                                                        │
│ VOLUNTEER DOCUMENTS                                    │
│ [Generate Volunteer List — Word]                       │
│ [Generate Volunteer List — PDF]                        │
│ [Generate Canvassing Schedule — Word]                  │
│                                                        │
│ DONATION DOCUMENTS                                     │
│ [Generate Donation Report — Word]                      │
│ [Generate Donation Report — PDF]                       │
│ [Generate Individual Receipt — PDF]                    │
│                                                        │
│ CAMPAIGN DOCUMENTS                                     │
│ [Generate Platform Summary — PDF]                      │
│ [Generate Press Release Template — Word]               │
│ [Generate Event Schedule — Word]                       │
│ [Generate Ward 5 Contact Sheet — PDF]                  │
│                                                        │
│ DATA EXPORTS                                           │
│ [Export All Volunteers — XML]                          │
│ [Export All Events — XML]                              │
│ [Export Sitemap — XML]                                 │
│                                                        │
└────────────────────────────────────────────────────────┘

All documents download instantly to your computer.
All Word docs use Arise St. Catharines branding
(navy/teal/gold — same as existing campaign documents).
```

---

### 5.9 Settings Panel
```
PURPOSE: Update site-wide settings without code.

SETTINGS SECTIONS:

Contact Details:
- Campaign email
- Campaign phone
- Campaign office address
- Instagram link
- Facebook link

Social Media:
- All social media URLs
- Hashtags displayed in footer

Election Settings:
- Election date (drives the countdown timer)
- GOTV banner activation (on/off)
- GOTV banner message text

Admin Users:
- Add / remove admin accounts
- Change admin password
- View login history

Site Status:
- Toggle maintenance mode (shows "Coming Soon" page)
- Toggle election day mode (shows "Vote Today" banner)
```

---

## 6. DATABASE STRUCTURE (MongoDB)

```javascript
// COLLECTIONS

// events
{
  _id: ObjectId,
  title: String,
  date: Date,
  category: String,       // canvassing|business|community|faith|seniors|meeting
  location: String,
  description: String,
  photoUrl: String,       // Cloudinary URL
  photoAlt: String,
  status: String,         // published|draft
  createdAt: Date,
  updatedAt: Date
}

// volunteers
{
  _id: ObjectId,
  fullName: String,
  email: String,
  phone: String,
  neighbourhood: String,
  helpWith: [String],     // array of selected checkboxes
  availability: String,
  message: String,
  submittedAt: Date,
  status: String          // new|contacted|active|inactive
}

// donations
{
  _id: ObjectId,
  fullName: String,
  email: String,
  phone: String,
  homeAddress: String,
  amount: Number,
  paymentMethod: String,  // etransfer|cheque|cash
  donationDate: Date,
  receiptNumber: String,  // auto-generated: WARD5-2026-0001
  receiptGenerated: Boolean,
  submittedAt: Date
}

// contacts
{
  _id: ObjectId,
  fullName: String,
  email: String,
  subject: String,
  message: String,
  submittedAt: Date,
  status: String,         // unread|read|replied
  notes: String           // admin internal notes
}

// content
{
  _id: ObjectId,
  key: String,            // e.g. "homepage_hero_headline"
  value: String,          // the actual text content
  updatedAt: Date,
  updatedBy: String
}

// admins
{
  _id: ObjectId,
  username: String,
  passwordHash: String,   // bcrypt hashed
  email: String,
  role: String,           // superadmin|editor
  lastLogin: Date,
  createdAt: Date
}
```

---

## 7. API ENDPOINTS

```
BASE URL: https://api.dunsinward5.ca/v1

AUTHENTICATION:
POST   /auth/login          Login — returns JWT token
POST   /auth/logout         Logout
POST   /auth/change-password Change admin password

EVENTS:
GET    /events              Get all events (public)
GET    /events/:id          Get single event
POST   /events              Create event (admin only)
PUT    /events/:id          Update event (admin only)
DELETE /events/:id          Delete event (admin only)
POST   /events/:id/photo    Upload event photo (admin only)

VOLUNTEERS:
GET    /volunteers          Get all volunteers (admin only)
POST   /volunteers          Submit volunteer form (public)
PUT    /volunteers/:id      Update volunteer status (admin only)
GET    /volunteers/export/word   Export Word doc (admin only)
GET    /volunteers/export/pdf    Export PDF (admin only)
GET    /volunteers/export/xml    Export XML (admin only)

DONATIONS:
GET    /donations           Get all donations (admin only)
POST   /donations           Submit donation record (public)
GET    /donations/:id/receipt   Generate receipt PDF (admin only)
GET    /donations/export/word   Export Word report (admin only)
GET    /donations/report        Get totals/summary (admin only)

CONTACTS:
GET    /contacts            Get all messages (admin only)
POST   /contacts            Submit contact form (public)
PUT    /contacts/:id        Update status/notes (admin only)

CONTENT:
GET    /content             Get all content blocks (public)
PUT    /content/:key        Update content block (admin only)

DOCUMENTS:
GET    /documents/volunteer-list/word   Generate Word
GET    /documents/volunteer-list/pdf    Generate PDF
GET    /documents/donation-report/word  Generate Word
GET    /documents/donation-report/pdf   Generate PDF
GET    /documents/receipt/:id/pdf       Generate receipt
GET    /documents/press-release/word    Generate template
GET    /documents/platform/pdf          Generate platform PDF
GET    /documents/events/xml            Export events XML
```

---

## 8. FOLDER STRUCTURE — BACKEND

```
dunsin-ward5-backend/
│
├── server.js                 ← Express app entry point
├── package.json
├── .env                      ← environment variables (never commit)
├── .env.example              ← template (commit this)
├── .gitignore
│
├── config/
│   ├── database.js           ← MongoDB connection
│   ├── cloudinary.js         ← Cloudinary config
│   └── jwt.js                ← JWT config
│
├── middleware/
│   ├── auth.js               ← JWT verification middleware
│   ├── adminOnly.js          ← Admin role check
│   └── upload.js             ← Multer file upload handler
│
├── models/
│   ├── Event.js              ← MongoDB event schema
│   ├── Volunteer.js          ← MongoDB volunteer schema
│   ├── Donation.js           ← MongoDB donation schema
│   ├── Contact.js            ← MongoDB contact schema
│   ├── Content.js            ← MongoDB content schema
│   └── Admin.js              ← MongoDB admin schema
│
├── routes/
│   ├── auth.js               ← Login/logout routes
│   ├── events.js             ← Event CRUD routes
│   ├── volunteers.js         ← Volunteer routes
│   ├── donations.js          ← Donation routes
│   ├── contacts.js           ← Contact routes
│   ├── content.js            ← Content routes
│   └── documents.js          ← Document generation routes
│
├── controllers/
│   ├── authController.js
│   ├── eventsController.js
│   ├── volunteersController.js
│   ├── donationsController.js
│   ├── contactsController.js
│   ├── contentController.js
│   └── documentsController.js
│
├── services/
│   ├── wordGenerator.js      ← Word document generation (docx)
│   ├── pdfGenerator.js       ← PDF generation (pdfkit)
│   ├── xmlGenerator.js       ← XML export generation
│   └── emailService.js       ← Email notifications
│
└── admin-panel/              ← Admin dashboard (separate frontend)
    ├── index.html            ← Login page
    ├── dashboard.html        ← Main dashboard
    ├── events.html           ← Events manager
    ├── volunteers.html       ← Volunteers manager
    ├── donations.html        ← Donations manager
    ├── contacts.html         ← Messages manager
    ├── content.html          ← Content editor
    ├── documents.html        ← Document generator
    ├── settings.html         ← Settings panel
    ├── assets/
    │   ├── css/
    │   │   ├── admin-main.css
    │   │   └── admin-components.css
    │   └── js/
    │       ├── admin-auth.js
    │       ├── admin-api.js
    │       └── admin-ui.js
    └── components/
        ├── sidebar.html
        ├── header.html
        └── modals.html
```

---

## 9. ENVIRONMENT VARIABLES

```bash
# .env — never commit this file to GitHub

# Server
PORT=5000
NODE_ENV=production

# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dunsin-ward5

# JWT
JWT_SECRET=your-very-long-random-secret-key-here
JWT_EXPIRES_IN=8h

# Cloudinary (image hosting)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Admin credentials (initial setup only)
ADMIN_USERNAME=dunsin_admin
ADMIN_EMAIL=dunsin4ward5councillor@gmail.com
ADMIN_PASSWORD=change-this-immediately-after-first-login

# Campaign details
CAMPAIGN_EMAIL=dunsin4ward5councillor@gmail.com
ELECTION_DATE=2026-10-26

# Frontend URL (for CORS)
FRONTEND_URL=https://dunsinward5.ca
ADMIN_URL=https://admin.dunsinward5.ca
```

---

## 10. ADMIN PANEL DESIGN SYSTEM

```css
/* Admin panel uses same campaign colours */
:root {
  --navy:    #0C2340;
  --teal:    #0A6E56;
  --gold:    #C49200;
  --white:   #FFFFFF;
  --sidebar: #0A1C33;   /* slightly darker navy for sidebar */
  --bg:      #F0F2F5;   /* light grey admin background */
  --card:    #FFFFFF;   /* white card background */
  --border:  #E0E4E8;   /* light border */
  --text:    #2C2C2C;   /* body text */
  --muted:   #666666;   /* secondary text */
  --success: #145A32;   /* green for success states */
  --warning: #9A6F00;   /* amber for warnings */
  --danger:  #9B1C1C;   /* red for delete/errors */
}
```

### Admin Layout
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER: Arise St. Catharines Admin · Welcome Dunsin · Logout│
├──────────────┬──────────────────────────────────────────────┤
│              │                                              │
│  SIDEBAR     │           MAIN CONTENT AREA                 │
│              │                                              │
│  Dashboard   │  ┌────────────────────────────────────────┐ │
│  Events      │  │  Page title                            │ │
│  Volunteers  │  │  Action buttons (top right)            │ │
│  Donations   │  │                                        │ │
│  Messages    │  │  Data table / Form / Cards             │ │
│  Documents   │  │                                        │ │
│  Content     │  └────────────────────────────────────────┘ │
│  Settings    │                                              │
│              │                                              │
└──────────────┴──────────────────────────────────────────────┘
```

---

## 11. SECURITY REQUIREMENTS

```
Authentication:
☐ JWT tokens expire after 8 hours
☐ Passwords hashed with bcrypt (minimum 12 rounds)
☐ Lock account after 5 failed login attempts
☐ HTTPS only — no HTTP in production

API Security:
☐ All admin routes require valid JWT
☐ CORS restricted to campaign frontend URLs only
☐ Rate limiting: 100 requests per 15 minutes per IP
☐ Input validation on all form fields (express-validator)
☐ File upload restricted to jpg/png under 5MB
☐ MongoDB injection prevention (mongoose built-in)

Data Privacy:
☐ Volunteer and donor data never exposed publicly
☐ All sensitive endpoints require admin role
☐ .env file never committed to GitHub
☐ MongoDB Atlas IP whitelist configured

Headers:
☐ Helmet.js for security headers
☐ X-Frame-Options: DENY
☐ X-Content-Type-Options: nosniff
```

---

## 12. DEPLOYMENT PLAN

```
BACKEND (Node.js API):
Platform: Render.com (free tier)
URL: api.dunsinward5.ca
Auto-deploy: Connected to GitHub
Repo: dunsin2018/dunsin-ward5-backend (NEW repo)

DATABASE:
Platform: MongoDB Atlas (free tier — 512MB)
Cluster: AWS us-east-1
Access: IP whitelist + username/password

IMAGE HOSTING:
Platform: Cloudinary (free tier — 25GB)
Used for: All event photos uploaded via admin panel

ADMIN PANEL:
Platform: Netlify (free tier)
URL: admin.dunsinward5.ca
Repo: Same backend repo (admin-panel subfolder)
Protected: Login required before any content visible
```

---

## 13. CLAUDE CODE BUILD PROMPTS

### Setup — paste this first
```
Read the file Dunsin_Admin_CMS_Handoff.md completely.
This is the specification for my campaign admin backend.
I need you to build:
1. A Node.js Express backend API
2. A MongoDB database with 6 collections
3. An admin dashboard HTML frontend
4. Document generation for Word, PDF, and XML
Do not write any code yet. Confirm you understand
the full scope and are ready to begin.
```

---

**PROMPT 1 — Project setup**
```
Set up the Node.js backend project structure:
1. Run: npm init -y
2. Install packages: express mongoose bcryptjs jsonwebtoken
   dotenv cors helmet express-rate-limit express-validator
   multer cloudinary multer-storage-cloudinary docx pdfkit
3. Create the folder structure from Section 8 of the handoff
4. Create .env.example with all variables from Section 9
   (use placeholder values not real credentials)
5. Create .gitignore including node_modules and .env
6. Create server.js with basic Express setup,
   helmet security headers, CORS, and rate limiting
```

---

**PROMPT 2 — Database models**
```
Create all 6 MongoDB models in the models/ folder
using the exact schemas from Section 6 of the handoff:
Event.js, Volunteer.js, Donation.js, Contact.js,
Content.js, Admin.js
Include input validation on all required fields.
Include pre-save middleware on Admin.js to hash
passwords with bcrypt before saving.
```

---

**PROMPT 3 — Authentication**
```
Build the complete authentication system:
1. config/jwt.js — JWT configuration
2. middleware/auth.js — verify JWT on protected routes
3. middleware/adminOnly.js — check admin role
4. routes/auth.js — POST /login, POST /logout,
   POST /change-password
5. controllers/authController.js — login logic,
   bcrypt password comparison, JWT generation
6. Create a setup script scripts/createAdmin.js
   that creates the first admin user from .env variables
Security requirements from Section 11 must be met.
```

---

**PROMPT 4 — Events API**
```
Build the complete events system:
1. config/cloudinary.js — Cloudinary configuration
2. middleware/upload.js — Multer + Cloudinary storage
3. routes/events.js — all 6 endpoints from Section 7
4. controllers/eventsController.js — full CRUD
   with photo upload to Cloudinary
Public GET endpoints require no authentication.
POST, PUT, DELETE require valid JWT admin token.
```

---

**PROMPT 5 — Volunteers, Donations, Contacts APIs**
```
Build these three route/controller pairs:
routes/volunteers.js + controllers/volunteersController.js
routes/donations.js + controllers/donationsController.js
routes/contacts.js + controllers/contactsController.js

Use the endpoints from Section 7.
Public POST endpoints (form submissions) require no auth.
All GET and export endpoints require admin JWT.
Auto-generate receipt numbers for donations:
format WARD5-2026-XXXX (auto-incrementing).
```

---

**PROMPT 6 — Document generation**
```
Build services/wordGenerator.js, services/pdfGenerator.js,
and services/xmlGenerator.js and routes/documents.js.

Word documents must:
- Use Arise St. Catharines branding (navy #0C2340,
  teal #0A6E56, gold #C49200)
- Include campaign header on every page
- Use the same docx library already used in the campaign

PDF receipts must include:
- Arise St. Catharines letterhead
- Donor name, address, amount, date, method
- Auto-generated receipt number
- Legal disclaimer from Municipal Elections Act
- "Authorised by Dunsin Sunday Fakorede" footer

XML exports must be valid well-formed XML with
proper headers and encoding declarations.

Build all document endpoints from Section 7.
```

---

**PROMPT 7 — Admin panel login page**
```
Build admin-panel/index.html — the admin login page.
Use the admin design system from Section 10.
Navy sidebar colour (#0A1C33), light grey background.
Include:
- Arise St. Catharines logo/wordmark at top
- Username and password fields
- Login button (teal)
- Error message display for failed attempts
- Loading state during authentication
On successful login: store JWT in sessionStorage
and redirect to dashboard.html.
On failed login: show error message and increment
attempt counter. Lock form after 5 attempts.
```

---

**PROMPT 8 — Admin dashboard and sidebar**
```
Build the shared admin layout used by all admin pages:
- admin-panel/components/sidebar.html
  (navigation links to all 7 sections)
- admin-panel/components/header.html
  (welcome message, logout button)
- admin-panel/dashboard.html
  (4 summary cards: volunteers, donations,
   events, unread messages)
- admin-panel/assets/css/admin-main.css
- admin-panel/assets/js/admin-auth.js
  (checks JWT on every page load, redirects
   to login if expired)
- admin-panel/assets/js/admin-api.js
  (reusable fetch wrapper with JWT headers)
```

---

**PROMPT 9 — Events, Volunteers, Donations admin pages**
```
Build these three admin pages:
admin-panel/events.html
- Table of all events with edit/delete buttons
- Add new event form with photo upload preview
- Category filter and search
- Published/draft toggle

admin-panel/volunteers.html
- Table of all volunteers
- Filter by how they want to help
- Status update dropdown per row
- Export buttons: Word, PDF, XML

admin-panel/donations.html
- Table of all donations with amounts
- Running total card showing amount raised
- Per-donor receipt generation button
- Export buttons: Word report, PDF report
- Legal maximum remaining calculation
```

---

**PROMPT 10 — Messages, Documents, Content, Settings pages**
```
Build the remaining four admin pages:

admin-panel/contacts.html
- Message inbox with read/unread status
- Click to expand full message
- Reply button opens mailto link
- Mark as read/unread toggle

admin-panel/documents.html
- All document generation buttons from Section 5.8
- Download triggers for each document type

admin-panel/content.html
- List of all editable content blocks
- Click to edit inline with save button
- Shows last updated date and who updated

admin-panel/settings.html
- Contact details form (email, phone, social links)
- Election settings (date, GOTV banner toggle)
- Admin users management (add/remove)
- Change password form
```

---

**PROMPT 11 — Update campaign website to use API**
```
Update the main campaign website HTML files to fetch
dynamic content from the backend API instead of
having it hardcoded in HTML.

Specifically update:
1. community.html — fetch events from GET /events
   instead of static HTML cards
2. index.html community snapshot — fetch 3 most recent
   events from GET /events?limit=3
3. All contact forms — POST to API endpoints instead
   of Netlify Forms:
   - Volunteer form → POST /volunteers
   - Donation record form → POST /donations
   - Contact form → POST /contacts
   - Lawn sign form → POST /volunteers (with note)

Add loading states and error handling to all fetches.
```

---

**PROMPT 12 — Final security audit**
```
Audit the complete backend for security:
1. Verify all admin routes require valid JWT
2. Verify CORS only allows campaign frontend URLs
3. Verify rate limiting is active on all routes
4. Verify file uploads reject non-image files
5. Verify all user inputs are sanitised
6. Verify passwords are bcrypt hashed
7. Verify .env variables are never exposed in responses
8. Verify MongoDB queries use parameterised inputs
9. Add HTTP security headers via Helmet
10. Test: attempt to access /volunteers without JWT
    → should return 401 Unauthorized
List all issues found and fix them.
```

---

## 14. GETTING STARTED — STEP BY STEP

```
Step 1: Create a NEW GitHub repo
        Name: dunsin-ward5-backend
        Visibility: Private (always private for backend)

Step 2: Clone it locally
        git clone https://github.com/dunsin2018/dunsin-ward5-backend
        cd dunsin-ward5-backend
        code .

Step 3: Start Claude Code in VS Code terminal
        claude
        /terminal-setup

Step 4: Feed the handoff document
        "Read Dunsin_Admin_CMS_Handoff.md"

Step 5: Work through Prompts 1-12 one at a time

Step 6: Set up free accounts (all free):
        - MongoDB Atlas: mongodb.com/atlas
        - Cloudinary: cloudinary.com
        - Render.com: render.com

Step 7: Add real credentials to .env

Step 8: Deploy to Render.com

Step 9: Connect admin panel to Netlify

Step 10: Log in to admin panel and test all features
```

---

## 15. OUTSTANDING ITEMS BEFORE BUILD

```
Accounts to create (all free):
☐ MongoDB Atlas account — mongodb.com/atlas
☐ Cloudinary account — cloudinary.com
☐ Render.com account — render.com

Information needed:
☐ Admin username (e.g. dunsin_admin)
☐ Strong admin password (min 12 characters)
☐ Confirm campaign email for notifications:
  dunsin4ward5councillor@gmail.com ✓

Domain setup (optional but recommended):
☐ api.dunsinward5.ca → Render.com backend
☐ admin.dunsinward5.ca → Netlify admin panel
```

---

*Handoff document — Campaign Admin CMS*
*Dunsin Sunday Fakorede — Ward 5 Grantham*
*Prepared June 2026*
*12 build prompts · 6 database collections · 7 admin sections*
*Word + PDF + XML document generation included*
