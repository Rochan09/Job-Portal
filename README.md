# 🧑‍💼 Job Portal App – MERN Stack

A fully functional **Job Portal Application** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The platform empowers **job seekers** to find and apply for jobs, while allowing **employers** to post and manage job listings efficiently.

---

## 🚀 Features

- 🔐 **User Authentication** – Secure login/signup for both job seekers and employers using JWT.
- 📄 **Job Listings** – Dynamic job board powered by MongoDB.
- 📂 **Application Management** – Job seekers can track applications; employers can review candidates.
- 📱 **Responsive UI** – Optimized for all devices using React and Bootstrap.
- ☁️ **Image Uploads** – Integrated with Cloudinary for managing profile and job images.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, React Router, Bootstrap  
- **Backend:** Node.js, Express.js, MongoDB  
- **Authentication:** JWT, Bcrypt  
- **Image Hosting:** Cloudinary  
- **Deployment:**  
  - Frontend: Vercel  
  - Backend: Render  
  - Database: MongoDB Atlas

---
### 🌐 Common to Both (Employer & Job Seeker)

- **HOME** – Redirects to the homepage with overview  
  ![Home Page](./screenshots/home.png)

- **ALL JOBS** – Displays all active job listings  
  ![All Jobs Page](./screenshots/all-jobs.png)

---

### 🧑‍💼 Employer-Only

- **APPLICANT'S APPLICATIONS** – View applications received for posted jobs  
  ![Applicant's Applications](./screenshots/applicants-applications.png)

- **POST NEW JOB** – Publish new job openings  
  ![Post Job Page](./screenshots/post-new-job.png)

- **VIEW YOUR JOBS** – List and manage jobs posted by the employer  
  ![View Your Jobs](./screenshots/view-your-jobs.png)

- **Employer Navigation Bar** – Displays all employer-specific nav options  
  ![Employer Nav](./screenshots/employer-nav.png)

---

### 👨‍🎓 Job Seeker-Only

- **MY APPLICATIONS** – Track the jobs the user has applied to  
  ![My Applications](./screenshots/my-applications.png)

- **Job Seeker Navigation Bar** – Displays job seeker-specific nav options  
  ![Job Seeker Nav](./screenshots/jobseeker-nav.png)

---

## ⚙️ Getting Started

Follow these steps to run the project locally.

### ✅ Prerequisites

- Node.js (v22.2.0 or above)
- MongoDB Atlas account (or local MongoDB instance)
- Cloudinary account (for image storage)

### 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rochan09/Job-Portal.git
   ```

2. **Install dependencies**
   ```bash
   cd Job-Portal
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. ### 📝 Configure Environment Variables (Optional)
   If you want to use your own configuration, create a `config.env` file inside a new `config` folder in the `/backend` directory:

   ```env
   PORT=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
   CLOUDINARY_CLOUD_NAME=
   FRONTEND_URL=
   DB_URL=
   JWT_SECRET_KEY=
   JWT_EXPIRE=
   COOKIE_EXPIRE=
   ```

4. **Start the backend**
   ```bash
   cd backend
   node server.js
   ```

5. **Start the frontend**
   ```bash
   cd ../frontend
   npm run dev
   ```

6. **Visit the app**  
   Open your browser and go to:  
   [`http://localhost:5173`](http://localhost:5173)
