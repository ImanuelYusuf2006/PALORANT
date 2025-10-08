# 🎯 PALORANT – Official Game Website Prototype & Implementation

Welcome to **PALORANT**, a front-end web project developed for **Giot Company’s** new multiplayer tactical FPS game — *Palorant*.  
This project combines **creative design** and **technical execution**, showcasing both a **Figma prototype** and a **fully functional, responsive website** built only with **HTML, CSS, and JavaScript**.

---

## 📖 Table of Contents

- [🌍 Overview](#-overview)
- [🎨 Figma Prototype](#-figma-prototype)
- [💻 Website Pages](#-website-pages)
- [📱 Responsiveness](#-responsiveness)
- [⚙️ Features Used](#️-features-used)
- [🧠 Design & Usability](#-design--usability)
- [📁 Folder Structure](#-folder-structure)
- [🔗 References](#-references)
- [👨‍💻 Developer](#-developer)
- [🏁 Project Summary](#-project-summary)

---

## 🌍 Overview

**PALORANT** is designed to be the official game information hub for *Palorant*, providing players with everything they need to know — from agent abilities and map guides to patch news and bug reporting.  

The project was created with a strong focus on:
- **Human-Computer Interaction (HCI) principles**
- **User-friendly navigation**
- **Creative and consistent visual design**
- **Fully responsive experience** across all devices

This repository contains both:
1. 🧩 A **Figma prototype** (visual concept)
2. 🧱 A **real, responsive website** using vanilla HTML, CSS, and JavaScript — no frameworks.

---

## 🎨 Figma Prototype

The **Figma prototype** serves as the initial concept design before the actual implementation.  
While the final website looks slightly different, both share the same **visual theme** and **game-inspired atmosphere**.

### The prototype includes:
- Color palette & typography system  
- Header, navigation, and footer components  
- Interactive navigation  
- Consistent visual hierarchy  
- Desktop and mobile variants  

> 🔗 *Add your Figma link here once uploaded.*

---

## 💻 Website Pages

### 🏠 1. Home Page (`index.html`)
Introduces the Palorant universe with:
- A large **banner** showcasing the game  
- Section highlighting **the best agent**  
- A brief **description** about Palorant’s story and gameplay  

---

### 🧙‍♂️ 2. Agents Page (`agents.html`)
Helps players learn about the **available agents**:
- Displays **at least 5 agents**  
- Each includes **name**, **role**, and **image**  
- Designed with a clean, card-based layout  

---

### 🗺️ 3. Maps Page (`maps.html`)
Guides players through the **Palorant maps**:
- Showcases **5 maps** with names, images, and brief descriptions  
- Highlights **strategic points** and unique features  

---

### 📰 4. News Page (`news.html`)
Keeps players updated with:
- Latest **news, patch notes, and announcements**  
- Articles with **headlines**, **images**, and **short summaries**  
- Prominent **Palorant logo** for consistent branding  

---

### 🐞 5. Report Bug Page (`report.html`)
Allows players to **report bugs easily** through a form containing:
- Username  
- Email  
- Server  
- Description of the bug  
- Checkbox for follow-up permission  

#### 🧠 Includes 5 JavaScript Validations (No Regex):
1. All fields must be filled.  
2. Email must contain “@” and “.” characters.  
3. Description must meet minimum length.  
4. Server must be selected.  
5. Checkbox must be checked before submission.  

---

## 📱 Responsiveness

The site is **fully responsive** across all major devices:
- 💻 **Desktop** – Full layout and animations  
- 📟 **Tablet** – Adjusted grid and scaling  
- 📱 **Mobile** – Collapsible navigation (hamburger menu)  

Implemented using:
- `meta viewport` tag  
- `@media screen and (max-width: 768px)` rules  
- Flexible **Flexbox and Grid layouts**  
- No tables used for layout structure  

---

## ⚙️ Features Used

### 🧾 CSS Features
1. Flexbox and Grid layouts for structure  
2. Transitions & animations for interactivity  
3. Color variables and custom fonts for consistency  
4. Box shadows and hover effects for depth  
5. Media queries for responsive design  

### ⚡ JavaScript Features
- Dynamic menu toggle for mobile navigation  
- Form validation without regex  
- Input feedback alerts and highlighting  
- Interactive content display  
- Smooth user feedback for submissions  

---

## 🧠 Design & Usability

This project follows the **Human-Computer Interaction (HCI)** principles:

| Principle | Description |
|------------|--------------|
| **Consistency** | Uniform color palette, layout, and typography |
| **Feedback** | Real-time form validation and visual indicators |
| **Simplicity** | Minimal clicks, clear structure |
| **Error Prevention** | Input validation for all form fields |
| **Flexibility** | Smooth adaptation to all screen sizes |

---

## 📁 Folder Structure

```
PALORANT/
│
├── index.html               # Home Page
├── agents.html              # Agents Page
├── maps.html                # Maps Page
├── news.html                # News Page
├── report.html              # Report Bug Page
│
├── /css
│   └── style.css            # External stylesheet (no inline or internal CSS)
│
├── /js
│   └── script.js            # JavaScript logic and form validations
│
├── /assets
│   ├── /images              # All images (agents, maps, banners, logo)
│   └── /icons               # Icons and vector assets
│
└── README.md
```

---

## 🔗 References

Here are some references used during development:

1. [W3Schools – HTML, CSS, and JavaScript](https://www.w3schools.com/)  
2. [MDN Web Docs](https://developer.mozilla.org/en-US/)  
3. [Color Hunt](https://colorhunt.co/) – Color palette inspiration  
4. [Figma](https://www.figma.com/) – UI/UX design tool  
5. [Valorant Official Site](https://playvalorant.com/) – For thematic reference  

---

## 👨‍💻 Developer

**Name:** Imanuel Yusuf  
**Role:** Front-End Web Developer  
**GitHub:** [@ImanuelYusuf2006](https://github.com/ImanuelYusuf2006)  
**Repository:** [PALORANT](https://github.com/ImanuelYusuf2006/PALORANT)

---

## 🏁 Project Summary

The **PALORANT Website Project** demonstrates:
- Responsive web design using **pure HTML, CSS, and JS**
- Application of **HCI and UX principles**
- Use of **interactive features** and **media responsiveness**
- Clear separation of design and implementation stages (Figma → Website)

> 🚀 *Palorant – where creativity meets competitive spirit.*  
> Explore. Learn. Compete.

