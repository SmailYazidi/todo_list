import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

const todos =  [
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 1",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 1",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-28T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 1",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-28T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 1",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-28T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 1",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-28T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 1",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-28T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 1",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-28T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 1",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-28T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 1",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-28T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 1",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-28T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 2",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 2",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-29T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 2",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-29T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 2",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-29T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 2",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-29T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 2",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-29T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 2",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-29T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 2",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-29T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 2",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-29T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 2",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-29T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 3",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 3",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-30T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 3",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-30T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 3",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-30T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 3",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-30T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 3",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-30T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 3",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-30T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 3",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-30T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 3",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-30T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 3",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-30T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 4",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 4",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-31T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 4",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-31T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 4",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-31T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 4",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-31T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 4",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-31T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 4",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-31T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 4",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-31T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 4",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-31T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 4",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-31T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 5",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 5",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-01T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 5",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-01T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 5",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-01T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 5",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-01T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 5",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-01T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 5",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-01T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 5",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-01T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 5",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-01T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 5",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-01T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 6",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 6",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-02T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 6",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-02T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 6",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-02T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 6",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-02T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 6",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-02T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 6",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-02T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 6",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-02T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 6",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-02T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 6",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-02T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 7",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 7",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-03T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 7",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-03T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 7",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-03T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 7",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-03T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 7",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-03T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 7",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-03T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 7",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-03T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 7",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-03T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 7",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-03T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 8",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 8",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-04T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 8",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-04T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 8",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-04T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 8",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-04T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 8",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-04T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 8",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-04T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 8",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-04T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 8",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-04T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 8",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-04T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 9",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 9",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-05T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 9",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-05T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 9",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-05T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 9",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-05T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 9",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-05T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 9",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-05T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 9",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-05T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 9",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-05T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 9",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-05T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 10",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 10",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-06T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 10",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-06T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 10",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-06T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 10",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-06T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 10",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-06T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 10",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-06T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 10",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-06T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 10",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-06T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 10",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-06T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 11",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 11",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-07T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 11",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-07T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 11",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-07T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 11",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-07T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 11",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-07T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 11",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-07T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 11",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-07T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 11",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-07T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 11",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-07T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 12",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 12",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-08T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 12",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-08T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 12",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-08T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 12",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-08T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 12",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-08T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 12",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-08T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 12",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-08T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 12",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-08T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 12",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-08T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 13",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 13",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-09T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 13",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-09T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 13",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-09T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 13",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-09T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 13",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-09T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 13",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-09T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 13",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-09T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 13",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-09T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 13",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-09T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 14",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 14",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-10T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 14",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-10T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 14",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-10T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 14",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-10T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 14",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-10T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 14",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-10T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 14",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-10T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 14",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-10T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 14",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-10T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 15",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 15",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-11T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 15",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-11T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 15",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-11T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 15",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-11T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 15",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-11T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 15",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-11T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 15",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-11T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 15",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-11T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 15",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-11T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 16",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 16",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-12T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 16",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-12T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 16",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-12T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 16",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-12T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 16",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-12T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 16",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-12T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 16",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-12T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 16",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-12T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 16",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-12T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 17",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 17",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-13T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 17",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-13T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 17",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-13T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 17",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-13T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 17",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-13T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 17",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-13T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 17",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-13T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 17",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-13T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 17",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-13T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 18",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 18",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-14T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 18",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-14T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 18",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-14T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 18",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-14T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 18",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-14T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 18",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-14T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 18",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-14T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 18",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-14T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 18",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-14T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 19",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 19",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-15T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 19",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-15T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 19",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-15T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 19",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-15T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 19",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-15T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 19",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-15T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 19",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-15T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 19",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-15T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 19",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-15T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 20",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 20",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-16T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 20",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-16T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 20",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-16T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 20",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-16T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 20",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-16T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 20",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-16T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 20",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-16T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 20",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-16T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 20",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-16T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 21",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 21",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-17T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 21",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-17T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 21",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-17T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 21",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-17T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 21",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-17T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 21",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-17T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 21",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-17T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 21",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-17T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 21",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-17T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 22",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 22",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-18T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 22",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-18T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 22",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-18T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 22",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-18T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 22",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-18T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 22",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-18T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 22",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-18T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 22",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-18T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 22",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-18T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 23",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 23",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-19T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 23",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-19T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 23",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-19T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 23",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-19T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 23",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-19T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 23",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-19T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 23",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-19T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 23",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-19T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 23",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-19T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 24",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 24",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-20T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 24",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-20T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 24",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-20T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 24",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-20T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 24",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-20T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 24",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-20T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 24",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-20T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 24",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-20T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 24",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-20T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 25",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 25",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-21T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 25",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-21T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 25",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-21T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 25",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-21T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 25",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-21T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 25",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-21T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 25",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-21T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 25",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-21T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 25",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-21T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 26",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 26",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-22T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 26",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-22T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 26",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-22T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 26",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-22T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 26",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-22T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 26",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-22T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 26",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-22T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 26",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-22T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 26",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-22T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 27",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 27",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-23T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 27",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-23T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 27",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-23T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 27",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-23T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 27",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-23T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 27",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-23T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 27",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-23T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 27",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-23T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 27",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-23T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 28",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 28",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-24T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 28",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-24T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 28",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-24T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 28",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-24T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 28",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-24T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 28",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-24T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 28",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-24T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 28",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-24T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 28",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-24T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 29",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 29",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-25T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 29",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-25T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 29",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-25T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 29",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-25T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 29",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-25T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 29",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-25T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 29",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-25T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 29",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-25T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 29",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-25T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "HTML Basics",
    description: "Front-End - HTML Basics task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T10:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "CSS Basics",
    description: "Front-End - CSS Basics task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T11:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Flexbox & Grid",
    description: "Front-End - Flexbox & Grid task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T12:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Responsive Design",
    description: "Front-End - Responsive Design task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T13:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "CSS Frameworks",
    description: "Front-End - CSS Frameworks task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T13:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vanilla JS DOM & Events",
    description: "Front-End - Vanilla JS DOM & Events task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T14:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "JS ES6+",
    description: "Front-End - JS ES6+ task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T15:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Components & Props",
    description: "Front-End - React Components & Props task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T16:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "React Hooks",
    description: "Front-End - React Hooks task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T17:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Vue CLI & Components",
    description: "Front-End - Vue CLI & Components task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T18:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Vue Directives",
    description: "Front-End - Vue Directives task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T19:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular TypeScript Basics",
    description: "Front-End - Angular TypeScript Basics task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T20:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Angular Routing & Components",
    description: "Front-End - Angular Routing & Components task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T20:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Java OOP & Collections",
    description: "Back-End - Java OOP & Collections task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T21:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Spring Boot Basics",
    description: "Back-End - Spring Boot Basics task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T22:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Python OOP Basics",
    description: "Back-End - Python OOP Basics task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-25T23:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Django / Flask / FastAPI Basics",
    description: "Back-End - Django / Flask / FastAPI Basics task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-26T00:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "PHP Laravel Basics",
    description: "Back-End - PHP Laravel Basics task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-26T01:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "Node.js & Express Basics",
    description: "Back-End - Node.js & Express Basics task for day 30",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-26T02:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Basics",
    description: "Databases - SQL Basics task for day 30",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-26T03:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "SQL Joins & Relationships",
    description: "Databases - SQL Joins & Relationships task for day 30",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-26T04:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Basics",
    description: "Databases - MongoDB Basics task for day 30",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-26T04:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "MongoDB Aggregation & Indexes",
    description: "Databases - MongoDB Aggregation & Indexes task for day 30",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-26T05:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Linux Commands Basics",
    description: "DevOps - Linux Commands Basics task for day 30",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-26T06:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Git & GitHub Basics",
    description: "DevOps - Git & GitHub Basics task for day 30",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-26T06:45:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Docker Basics",
    description: "DevOps - Docker Basics task for day 30",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-26T07:15:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "Plan mini project",
    description: "Projects - Plan mini project task for day 30",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-26T08:00:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
  {
    title: "Agile & Scrum Notes",
    description: "Soft Skills - Agile & Scrum Notes task for day 30",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-26T08:30:00"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 30
  },
];



export async function GET(req: NextRequest) {
  try {


/* 
    const { db } = await connectToDatabase();

    // clear existing docs if
    await db.collection('todos').deleteMany({});

    // insert all todos
    await db.collection('todos').insertMany(todos);  */

    return NextResponse.json({ message: 'Todos inserted successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error inserting todos', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}