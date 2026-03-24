# Professional Engineering Portfolio

A modern, high-performance portfolio platform built with **React (Frontend)** and **Node.js/Express (Backend)**.

## 🚀 Architecture: Why Use a Backend API?

This portfolio is built using a decoupled architecture. Instead of hardcoding all data into the UI, it communicates with a dedicated backend server. Here’s why this approach is essential:

### 1. Dynamic Data Management (`/api/cv`)
The entire content of the portfolio (Projects, Skills, Achievements, etc.) is served via a REST API from a simple `cv.json` file.
- **Why we used it**: 
    - **Ease of Update**: You can update your career details in one JSON file without touching the complex React code.
    - **Consistency**: It ensures a "single source of truth" for all components.
- **The Issue if omitted**: Without this, all data would be hardcoded in the frontend. Every small change (like a new project) would require deep code edits and a full rebuild/redeployment of the site.

### 2. Functional Communication (`/api/contact`)
The "Contact Us" section uses a custom API endpoint to handle user inquiries.
- **Why we used it**:
    - **Persistence**: Messages are securely saved to `messages.json` on the server so you never lose an inquiry.
    - **Automation**: Integrated with **Nodemailer** to trigger real-time email notifications to your inbox.
- **The Issue if omitted**: Without a backend API, the contact form would be a "dead" UI element. It might look nice, but clicking "Send" wouldn't actually store the message or notify you, leading to lost opportunities.

### 3. Professional Scalability
This architecture mirrors real-world engineering platforms.
- **Why we used it**: It demonstrates high-level full-stack capabilities, showcasing knowledge of API design, CORS, environment variables, and asynchronous data fetching.
- **The Issue if omitted**: The portfolio would feel like a static template rather than a dynamic web application.

## 🛠 Tech Stack
- **Frontend**: React, Framer Motion (Animations), Lucide Hooks (Icons).
- **Backend**: Node.js, Express, Nodemailer (Emailing).
- **Security**: Dotenv for environment-based credential management.

---
*Created by the Portfolio Engineering Team*
