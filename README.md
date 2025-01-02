# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

To run the project directory use:

**npm run dev**

**SQL Query for BookAppointment.jsx:**

**In PostgreSQL:**

CREATE DATABASE appointment_db;

CREATE TABLE appointments1 (
  id SERIAL PRIMARY KEY,
  doctor VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  patient_name VARCHAR(255) NOT NULL,
  patient_email VARCHAR(255) NOT NULL,
  appointment_reason TEXT,
  payment BOOLEAN DEFAULT FALSE
);
