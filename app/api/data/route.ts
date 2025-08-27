import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

const todos = [
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 1",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-27T10:00:00",
    "createdAt": "2025-08-27T11:34:31.764829",
    "updatedAt": "2025-08-27T11:34:31.764833",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 1",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-27T11:00:00",
    "createdAt": "2025-08-27T11:34:31.764840",
    "updatedAt": "2025-08-27T11:34:31.764841",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 1",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-27T12:00:00",
    "createdAt": "2025-08-27T11:34:31.764846",
    "updatedAt": "2025-08-27T11:34:31.764848",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 1",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-27T13:00:00",
    "createdAt": "2025-08-27T11:34:31.764870",
    "updatedAt": "2025-08-27T11:34:31.764871",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 1",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-27T14:00:00",
    "createdAt": "2025-08-27T11:34:31.764876",
    "updatedAt": "2025-08-27T11:34:31.764877",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 1",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-27T15:00:00",
    "createdAt": "2025-08-27T11:34:31.764882",
    "updatedAt": "2025-08-27T11:34:31.764883",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 1",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-27T16:00:00",
    "createdAt": "2025-08-27T11:34:31.764888",
    "updatedAt": "2025-08-27T11:34:31.764889",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 1",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-27T17:00:00",
    "createdAt": "2025-08-27T11:34:31.764896",
    "updatedAt": "2025-08-27T11:34:31.764898",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 1",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-27T17:45:00",
    "createdAt": "2025-08-27T11:34:31.764904",
    "updatedAt": "2025-08-27T11:34:31.764906",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 1",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-27T18:30:00",
    "createdAt": "2025-08-27T11:34:31.764911",
    "updatedAt": "2025-08-27T11:34:31.764913",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 1",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-27T19:15:00",
    "createdAt": "2025-08-27T11:34:31.764921",
    "updatedAt": "2025-08-27T11:34:31.764924",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 1",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-27T20:00:00",
    "createdAt": "2025-08-27T11:34:31.764932",
    "updatedAt": "2025-08-27T11:34:31.764935",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 1",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-27T21:00:00",
    "createdAt": "2025-08-27T11:34:31.764943",
    "updatedAt": "2025-08-27T11:34:31.764946",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 1",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-27T22:00:00",
    "createdAt": "2025-08-27T11:34:31.764954",
    "updatedAt": "2025-08-27T11:34:31.764957",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 1",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-27T22:45:00",
    "createdAt": "2025-08-27T11:34:31.764963",
    "updatedAt": "2025-08-27T11:34:31.764965",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 1",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-27T23:45:00",
    "createdAt": "2025-08-27T11:34:31.764969",
    "updatedAt": "2025-08-27T11:34:31.764971",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 1",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-28T00:30:00",
    "createdAt": "2025-08-27T11:34:31.764976",
    "updatedAt": "2025-08-27T11:34:31.764977",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 1",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-28T01:15:00",
    "createdAt": "2025-08-27T11:34:31.764982",
    "updatedAt": "2025-08-27T11:34:31.764984",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 1",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-28T01:45:00",
    "createdAt": "2025-08-27T11:34:31.764989",
    "updatedAt": "2025-08-27T11:34:31.764990",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 1",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-28T02:15:00",
    "createdAt": "2025-08-27T11:34:31.764995",
    "updatedAt": "2025-08-27T11:34:31.764996",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 1",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-28T02:45:00",
    "createdAt": "2025-08-27T11:34:31.765001",
    "updatedAt": "2025-08-27T11:34:31.765003",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 2",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-28T10:00:00",
    "createdAt": "2025-08-27T11:34:31.765010",
    "updatedAt": "2025-08-27T11:34:31.765011",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 2",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-28T11:00:00",
    "createdAt": "2025-08-27T11:34:31.765016",
    "updatedAt": "2025-08-27T11:34:31.765017",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 2",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-28T12:00:00",
    "createdAt": "2025-08-27T11:34:31.765022",
    "updatedAt": "2025-08-27T11:34:31.765024",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 2",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-28T13:00:00",
    "createdAt": "2025-08-27T11:34:31.765028",
    "updatedAt": "2025-08-27T11:34:31.765030",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 2",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-28T14:00:00",
    "createdAt": "2025-08-27T11:34:31.765035",
    "updatedAt": "2025-08-27T11:34:31.765036",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 2",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-28T15:00:00",
    "createdAt": "2025-08-27T11:34:31.765041",
    "updatedAt": "2025-08-27T11:34:31.765042",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 2",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-28T16:00:00",
    "createdAt": "2025-08-27T11:34:31.765047",
    "updatedAt": "2025-08-27T11:34:31.765048",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 2",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-28T17:00:00",
    "createdAt": "2025-08-27T11:34:31.765053",
    "updatedAt": "2025-08-27T11:34:31.765054",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 2",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-28T17:45:00",
    "createdAt": "2025-08-27T11:34:31.765059",
    "updatedAt": "2025-08-27T11:34:31.765060",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 2",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-28T18:30:00",
    "createdAt": "2025-08-27T11:34:31.765065",
    "updatedAt": "2025-08-27T11:34:31.765066",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 2",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-28T19:15:00",
    "createdAt": "2025-08-27T11:34:31.765070",
    "updatedAt": "2025-08-27T11:34:31.765072",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 2",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-28T20:00:00",
    "createdAt": "2025-08-27T11:34:31.765077",
    "updatedAt": "2025-08-27T11:34:31.765078",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 2",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-28T21:00:00",
    "createdAt": "2025-08-27T11:34:31.765083",
    "updatedAt": "2025-08-27T11:34:31.765085",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 2",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-28T22:00:00",
    "createdAt": "2025-08-27T11:34:31.765089",
    "updatedAt": "2025-08-27T11:34:31.765091",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 2",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-28T22:45:00",
    "createdAt": "2025-08-27T11:34:31.765095",
    "updatedAt": "2025-08-27T11:34:31.765096",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 2",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-28T23:45:00",
    "createdAt": "2025-08-27T11:34:31.765101",
    "updatedAt": "2025-08-27T11:34:31.765103",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 2",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-29T00:30:00",
    "createdAt": "2025-08-27T11:34:31.765109",
    "updatedAt": "2025-08-27T11:34:31.765111",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 2",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-29T01:15:00",
    "createdAt": "2025-08-27T11:34:31.765115",
    "updatedAt": "2025-08-27T11:34:31.765117",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 2",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-29T01:45:00",
    "createdAt": "2025-08-27T11:34:31.765121",
    "updatedAt": "2025-08-27T11:34:31.765123",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 2",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-29T02:15:00",
    "createdAt": "2025-08-27T11:34:31.765127",
    "updatedAt": "2025-08-27T11:34:31.765129",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 2",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-29T02:45:00",
    "createdAt": "2025-08-27T11:34:31.765134",
    "updatedAt": "2025-08-27T11:34:31.765135",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 3",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-29T10:00:00",
    "createdAt": "2025-08-27T11:34:31.765142",
    "updatedAt": "2025-08-27T11:34:31.765144",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 3",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-29T11:00:00",
    "createdAt": "2025-08-27T11:34:31.765148",
    "updatedAt": "2025-08-27T11:34:31.765150",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 3",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-29T12:00:00",
    "createdAt": "2025-08-27T11:34:31.765155",
    "updatedAt": "2025-08-27T11:34:31.765156",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 3",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-29T13:00:00",
    "createdAt": "2025-08-27T11:34:31.765161",
    "updatedAt": "2025-08-27T11:34:31.765162",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 3",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-29T14:00:00",
    "createdAt": "2025-08-27T11:34:31.765167",
    "updatedAt": "2025-08-27T11:34:31.765168",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 3",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-29T15:00:00",
    "createdAt": "2025-08-27T11:34:31.765173",
    "updatedAt": "2025-08-27T11:34:31.765174",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 3",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-29T16:00:00",
    "createdAt": "2025-08-27T11:34:31.765180",
    "updatedAt": "2025-08-27T11:34:31.765182",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 3",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-29T17:00:00",
    "createdAt": "2025-08-27T11:34:31.765186",
    "updatedAt": "2025-08-27T11:34:31.765188",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 3",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-29T17:45:00",
    "createdAt": "2025-08-27T11:34:31.765192",
    "updatedAt": "2025-08-27T11:34:31.765193",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 3",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-29T18:30:00",
    "createdAt": "2025-08-27T11:34:31.765204",
    "updatedAt": "2025-08-27T11:34:31.765206",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 3",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-29T19:15:00",
    "createdAt": "2025-08-27T11:34:31.765210",
    "updatedAt": "2025-08-27T11:34:31.765212",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 3",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-29T20:00:00",
    "createdAt": "2025-08-27T11:34:31.765216",
    "updatedAt": "2025-08-27T11:34:31.765218",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 3",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-29T21:00:00",
    "createdAt": "2025-08-27T11:34:31.765222",
    "updatedAt": "2025-08-27T11:34:31.765224",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 3",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-29T22:00:00",
    "createdAt": "2025-08-27T11:34:31.765228",
    "updatedAt": "2025-08-27T11:34:31.765229",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 3",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-29T22:45:00",
    "createdAt": "2025-08-27T11:34:31.765234",
    "updatedAt": "2025-08-27T11:34:31.765235",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 3",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-29T23:45:00",
    "createdAt": "2025-08-27T11:34:31.765240",
    "updatedAt": "2025-08-27T11:34:31.765241",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 3",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-30T00:30:00",
    "createdAt": "2025-08-27T11:34:31.765246",
    "updatedAt": "2025-08-27T11:34:31.765247",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 3",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-30T01:15:00",
    "createdAt": "2025-08-27T11:34:31.765252",
    "updatedAt": "2025-08-27T11:34:31.765254",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 3",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-30T01:45:00",
    "createdAt": "2025-08-27T11:34:31.765258",
    "updatedAt": "2025-08-27T11:34:31.765260",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 3",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-30T02:15:00",
    "createdAt": "2025-08-27T11:34:31.765265",
    "updatedAt": "2025-08-27T11:34:31.765266",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 3",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-30T02:45:00",
    "createdAt": "2025-08-27T11:34:31.765272",
    "updatedAt": "2025-08-27T11:34:31.765273",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 4",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-30T10:00:00",
    "createdAt": "2025-08-27T11:34:31.765279",
    "updatedAt": "2025-08-27T11:34:31.765280",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 4",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-30T11:00:00",
    "createdAt": "2025-08-27T11:34:31.765285",
    "updatedAt": "2025-08-27T11:34:31.765287",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 4",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-30T12:00:00",
    "createdAt": "2025-08-27T11:34:31.765291",
    "updatedAt": "2025-08-27T11:34:31.765293",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 4",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-30T13:00:00",
    "createdAt": "2025-08-27T11:34:31.765297",
    "updatedAt": "2025-08-27T11:34:31.765299",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 4",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-30T14:00:00",
    "createdAt": "2025-08-27T11:34:31.765303",
    "updatedAt": "2025-08-27T11:34:31.765305",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 4",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-30T15:00:00",
    "createdAt": "2025-08-27T11:34:31.765309",
    "updatedAt": "2025-08-27T11:34:31.765310",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 4",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-30T16:00:00",
    "createdAt": "2025-08-27T11:34:31.765315",
    "updatedAt": "2025-08-27T11:34:31.765316",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 4",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-30T17:00:00",
    "createdAt": "2025-08-27T11:34:31.765321",
    "updatedAt": "2025-08-27T11:34:31.765322",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 4",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-30T17:45:00",
    "createdAt": "2025-08-27T11:34:31.765326",
    "updatedAt": "2025-08-27T11:34:31.765328",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 4",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-30T18:30:00",
    "createdAt": "2025-08-27T11:34:31.765336",
    "updatedAt": "2025-08-27T11:34:31.765339",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 4",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-30T19:15:00",
    "createdAt": "2025-08-27T11:34:31.765346",
    "updatedAt": "2025-08-27T11:34:31.765349",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 4",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-30T20:00:00",
    "createdAt": "2025-08-27T11:34:31.765357",
    "updatedAt": "2025-08-27T11:34:31.765360",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 4",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-30T21:00:00",
    "createdAt": "2025-08-27T11:34:31.765374",
    "updatedAt": "2025-08-27T11:34:31.765376",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 4",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-30T22:00:00",
    "createdAt": "2025-08-27T11:34:31.765380",
    "updatedAt": "2025-08-27T11:34:31.765382",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 4",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-30T22:45:00",
    "createdAt": "2025-08-27T11:34:31.765386",
    "updatedAt": "2025-08-27T11:34:31.765387",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 4",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-30T23:45:00",
    "createdAt": "2025-08-27T11:34:31.765393",
    "updatedAt": "2025-08-27T11:34:31.765394",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 4",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-31T00:30:00",
    "createdAt": "2025-08-27T11:34:31.765399",
    "updatedAt": "2025-08-27T11:34:31.765400",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 4",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-31T01:15:00",
    "createdAt": "2025-08-27T11:34:31.765405",
    "updatedAt": "2025-08-27T11:34:31.765407",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 4",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-31T01:45:00",
    "createdAt": "2025-08-27T11:34:31.765411",
    "updatedAt": "2025-08-27T11:34:31.765413",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 4",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-31T02:15:00",
    "createdAt": "2025-08-27T11:34:31.765417",
    "updatedAt": "2025-08-27T11:34:31.765419",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 4",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-31T02:45:00",
    "createdAt": "2025-08-27T11:34:31.765423",
    "updatedAt": "2025-08-27T11:34:31.765425",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 5",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-31T10:00:00",
    "createdAt": "2025-08-27T11:34:31.765431",
    "updatedAt": "2025-08-27T11:34:31.765432",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 5",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-31T11:00:00",
    "createdAt": "2025-08-27T11:34:31.765437",
    "updatedAt": "2025-08-27T11:34:31.765438",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 5",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-31T12:00:00",
    "createdAt": "2025-08-27T11:34:31.765443",
    "updatedAt": "2025-08-27T11:34:31.765444",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 5",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-31T13:00:00",
    "createdAt": "2025-08-27T11:34:31.765449",
    "updatedAt": "2025-08-27T11:34:31.765450",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 5",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-31T14:00:00",
    "createdAt": "2025-08-27T11:34:31.765455",
    "updatedAt": "2025-08-27T11:34:31.765457",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 5",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-31T15:00:00",
    "createdAt": "2025-08-27T11:34:31.765461",
    "updatedAt": "2025-08-27T11:34:31.765463",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 5",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-31T16:00:00",
    "createdAt": "2025-08-27T11:34:31.765468",
    "updatedAt": "2025-08-27T11:34:31.765469",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 5",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-31T17:00:00",
    "createdAt": "2025-08-27T11:34:31.765473",
    "updatedAt": "2025-08-27T11:34:31.765475",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 5",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-31T17:45:00",
    "createdAt": "2025-08-27T11:34:31.765479",
    "updatedAt": "2025-08-27T11:34:31.765481",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 5",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-31T18:30:00",
    "createdAt": "2025-08-27T11:34:31.765485",
    "updatedAt": "2025-08-27T11:34:31.765487",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 5",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-31T19:15:00",
    "createdAt": "2025-08-27T11:34:31.765491",
    "updatedAt": "2025-08-27T11:34:31.765493",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 5",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-31T20:00:00",
    "createdAt": "2025-08-27T11:34:31.765497",
    "updatedAt": "2025-08-27T11:34:31.765499",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 5",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-31T21:00:00",
    "createdAt": "2025-08-27T11:34:31.765504",
    "updatedAt": "2025-08-27T11:34:31.765505",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 5",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-31T22:00:00",
    "createdAt": "2025-08-27T11:34:31.765510",
    "updatedAt": "2025-08-27T11:34:31.765511",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 5",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-08-31T22:45:00",
    "createdAt": "2025-08-27T11:34:31.765516",
    "updatedAt": "2025-08-27T11:34:31.765517",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 5",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-08-31T23:45:00",
    "createdAt": "2025-08-27T11:34:31.765522",
    "updatedAt": "2025-08-27T11:34:31.765524",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 5",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-01T00:30:00",
    "createdAt": "2025-08-27T11:34:31.765529",
    "updatedAt": "2025-08-27T11:34:31.765530",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 5",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-01T01:15:00",
    "createdAt": "2025-08-27T11:34:31.765535",
    "updatedAt": "2025-08-27T11:34:31.765536",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 5",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-01T01:45:00",
    "createdAt": "2025-08-27T11:34:31.765541",
    "updatedAt": "2025-08-27T11:34:31.765542",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 5",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-01T02:15:00",
    "createdAt": "2025-08-27T11:34:31.765547",
    "updatedAt": "2025-08-27T11:34:31.765548",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 5",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-01T02:45:00",
    "createdAt": "2025-08-27T11:34:31.765553",
    "updatedAt": "2025-08-27T11:34:31.765554",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 6",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-01T10:00:00",
    "createdAt": "2025-08-27T11:34:31.765560",
    "updatedAt": "2025-08-27T11:34:31.765561",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 6",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-01T11:00:00",
    "createdAt": "2025-08-27T11:34:31.765566",
    "updatedAt": "2025-08-27T11:34:31.765568",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 6",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-01T12:00:00",
    "createdAt": "2025-08-27T11:34:31.765572",
    "updatedAt": "2025-08-27T11:34:31.765573",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 6",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-01T13:00:00",
    "createdAt": "2025-08-27T11:34:31.765578",
    "updatedAt": "2025-08-27T11:34:31.765579",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 6",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-01T14:00:00",
    "createdAt": "2025-08-27T11:34:31.765584",
    "updatedAt": "2025-08-27T11:34:31.765586",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 6",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-01T15:00:00",
    "createdAt": "2025-08-27T11:34:31.765590",
    "updatedAt": "2025-08-27T11:34:31.765592",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 6",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-01T16:00:00",
    "createdAt": "2025-08-27T11:34:31.765596",
    "updatedAt": "2025-08-27T11:34:31.765598",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 6",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-01T17:00:00",
    "createdAt": "2025-08-27T11:34:31.765602",
    "updatedAt": "2025-08-27T11:34:31.765603",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 6",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-01T17:45:00",
    "createdAt": "2025-08-27T11:34:31.765608",
    "updatedAt": "2025-08-27T11:34:31.765609",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 6",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-01T18:30:00",
    "createdAt": "2025-08-27T11:34:31.765614",
    "updatedAt": "2025-08-27T11:34:31.765615",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 6",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-01T19:15:00",
    "createdAt": "2025-08-27T11:34:31.765620",
    "updatedAt": "2025-08-27T11:34:31.765621",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 6",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-01T20:00:00",
    "createdAt": "2025-08-27T11:34:31.765626",
    "updatedAt": "2025-08-27T11:34:31.765627",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 6",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-01T21:00:00",
    "createdAt": "2025-08-27T11:34:31.765631",
    "updatedAt": "2025-08-27T11:34:31.765633",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 6",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-01T22:00:00",
    "createdAt": "2025-08-27T11:34:31.765637",
    "updatedAt": "2025-08-27T11:34:31.765639",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 6",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-01T22:45:00",
    "createdAt": "2025-08-27T11:34:31.765643",
    "updatedAt": "2025-08-27T11:34:31.765645",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 6",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-01T23:45:00",
    "createdAt": "2025-08-27T11:34:31.765651",
    "updatedAt": "2025-08-27T11:34:31.765652",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 6",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-02T00:30:00",
    "createdAt": "2025-08-27T11:34:31.765656",
    "updatedAt": "2025-08-27T11:34:31.765658",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 6",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-02T01:15:00",
    "createdAt": "2025-08-27T11:34:31.765663",
    "updatedAt": "2025-08-27T11:34:31.765664",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 6",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-02T01:45:00",
    "createdAt": "2025-08-27T11:34:31.765669",
    "updatedAt": "2025-08-27T11:34:31.765670",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 6",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-02T02:15:00",
    "createdAt": "2025-08-27T11:34:31.765675",
    "updatedAt": "2025-08-27T11:34:31.765676",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 6",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-02T02:45:00",
    "createdAt": "2025-08-27T11:34:31.765681",
    "updatedAt": "2025-08-27T11:34:31.765682",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 7",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-02T10:00:00",
    "createdAt": "2025-08-27T11:34:31.765689",
    "updatedAt": "2025-08-27T11:34:31.765690",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 7",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-02T11:00:00",
    "createdAt": "2025-08-27T11:34:31.765695",
    "updatedAt": "2025-08-27T11:34:31.765697",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 7",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-02T12:00:00",
    "createdAt": "2025-08-27T11:34:31.765701",
    "updatedAt": "2025-08-27T11:34:31.765703",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 7",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-02T13:00:00",
    "createdAt": "2025-08-27T11:34:31.765707",
    "updatedAt": "2025-08-27T11:34:31.765709",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 7",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-02T14:00:00",
    "createdAt": "2025-08-27T11:34:31.765713",
    "updatedAt": "2025-08-27T11:34:31.765715",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 7",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-02T15:00:00",
    "createdAt": "2025-08-27T11:34:31.765719",
    "updatedAt": "2025-08-27T11:34:31.765721",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 7",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-02T16:00:00",
    "createdAt": "2025-08-27T11:34:31.765725",
    "updatedAt": "2025-08-27T11:34:31.765727",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 7",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-02T17:00:00",
    "createdAt": "2025-08-27T11:34:31.765731",
    "updatedAt": "2025-08-27T11:34:31.765732",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 7",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-02T17:45:00",
    "createdAt": "2025-08-27T11:34:31.765737",
    "updatedAt": "2025-08-27T11:34:31.765738",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 7",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-02T18:30:00",
    "createdAt": "2025-08-27T11:34:31.765743",
    "updatedAt": "2025-08-27T11:34:31.765744",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 7",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-02T19:15:00",
    "createdAt": "2025-08-27T11:34:31.765749",
    "updatedAt": "2025-08-27T11:34:31.765750",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 7",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-02T20:00:00",
    "createdAt": "2025-08-27T11:34:31.765755",
    "updatedAt": "2025-08-27T11:34:31.765756",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 7",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-02T21:00:00",
    "createdAt": "2025-08-27T11:34:31.765761",
    "updatedAt": "2025-08-27T11:34:31.765762",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 7",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-02T22:00:00",
    "createdAt": "2025-08-27T11:34:31.765767",
    "updatedAt": "2025-08-27T11:34:31.765768",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 7",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-02T22:45:00",
    "createdAt": "2025-08-27T11:34:31.765773",
    "updatedAt": "2025-08-27T11:34:31.765774",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 7",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-02T23:45:00",
    "createdAt": "2025-08-27T11:34:31.765779",
    "updatedAt": "2025-08-27T11:34:31.765780",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 7",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-03T00:30:00",
    "createdAt": "2025-08-27T11:34:31.765785",
    "updatedAt": "2025-08-27T11:34:31.765786",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 7",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-03T01:15:00",
    "createdAt": "2025-08-27T11:34:31.765791",
    "updatedAt": "2025-08-27T11:34:31.765792",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 7",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-03T01:45:00",
    "createdAt": "2025-08-27T11:34:31.765797",
    "updatedAt": "2025-08-27T11:34:31.765798",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 7",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-03T02:15:00",
    "createdAt": "2025-08-27T11:34:31.765803",
    "updatedAt": "2025-08-27T11:34:31.765804",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 7",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-03T02:45:00",
    "createdAt": "2025-08-27T11:34:31.765809",
    "updatedAt": "2025-08-27T11:34:31.765810",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 8",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-03T10:00:00",
    "createdAt": "2025-08-27T11:34:31.765816",
    "updatedAt": "2025-08-27T11:34:31.765817",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 8",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-03T11:00:00",
    "createdAt": "2025-08-27T11:34:31.765822",
    "updatedAt": "2025-08-27T11:34:31.765823",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 8",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-03T12:00:00",
    "createdAt": "2025-08-27T11:34:31.765828",
    "updatedAt": "2025-08-27T11:34:31.765830",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 8",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-03T13:00:00",
    "createdAt": "2025-08-27T11:34:31.765835",
    "updatedAt": "2025-08-27T11:34:31.765836",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 8",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-03T14:00:00",
    "createdAt": "2025-08-27T11:34:31.765841",
    "updatedAt": "2025-08-27T11:34:31.765842",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 8",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-03T15:00:00",
    "createdAt": "2025-08-27T11:34:31.765847",
    "updatedAt": "2025-08-27T11:34:31.765848",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 8",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-03T16:00:00",
    "createdAt": "2025-08-27T11:34:31.765853",
    "updatedAt": "2025-08-27T11:34:31.765854",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 8",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-03T17:00:00",
    "createdAt": "2025-08-27T11:34:31.765859",
    "updatedAt": "2025-08-27T11:34:31.765860",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 8",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-03T17:45:00",
    "createdAt": "2025-08-27T11:34:31.765865",
    "updatedAt": "2025-08-27T11:34:31.765866",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 8",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-03T18:30:00",
    "createdAt": "2025-08-27T11:34:31.765871",
    "updatedAt": "2025-08-27T11:34:31.765872",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 8",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-03T19:15:00",
    "createdAt": "2025-08-27T11:34:31.765876",
    "updatedAt": "2025-08-27T11:34:31.765878",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 8",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-03T20:00:00",
    "createdAt": "2025-08-27T11:34:31.765882",
    "updatedAt": "2025-08-27T11:34:31.765883",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 8",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-03T21:00:00",
    "createdAt": "2025-08-27T11:34:31.765887",
    "updatedAt": "2025-08-27T11:34:31.765889",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 8",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-03T22:00:00",
    "createdAt": "2025-08-27T11:34:31.765893",
    "updatedAt": "2025-08-27T11:34:31.765894",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 8",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-03T22:45:00",
    "createdAt": "2025-08-27T11:34:31.765899",
    "updatedAt": "2025-08-27T11:34:31.765900",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 8",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-03T23:45:00",
    "createdAt": "2025-08-27T11:34:31.765905",
    "updatedAt": "2025-08-27T11:34:31.765906",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 8",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-04T00:30:00",
    "createdAt": "2025-08-27T11:34:31.765910",
    "updatedAt": "2025-08-27T11:34:31.765911",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 8",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-04T01:15:00",
    "createdAt": "2025-08-27T11:34:31.765916",
    "updatedAt": "2025-08-27T11:34:31.765917",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 8",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-04T01:45:00",
    "createdAt": "2025-08-27T11:34:31.765921",
    "updatedAt": "2025-08-27T11:34:31.765923",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 8",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-04T02:15:00",
    "createdAt": "2025-08-27T11:34:31.765927",
    "updatedAt": "2025-08-27T11:34:31.765928",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 8",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-04T02:45:00",
    "createdAt": "2025-08-27T11:34:31.765933",
    "updatedAt": "2025-08-27T11:34:31.765934",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 9",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-04T10:00:00",
    "createdAt": "2025-08-27T11:34:31.765939",
    "updatedAt": "2025-08-27T11:34:31.765941",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 9",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-04T11:00:00",
    "createdAt": "2025-08-27T11:34:31.765945",
    "updatedAt": "2025-08-27T11:34:31.765946",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 9",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-04T12:00:00",
    "createdAt": "2025-08-27T11:34:31.765951",
    "updatedAt": "2025-08-27T11:34:31.765952",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 9",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-04T13:00:00",
    "createdAt": "2025-08-27T11:34:31.765956",
    "updatedAt": "2025-08-27T11:34:31.765957",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 9",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-04T14:00:00",
    "createdAt": "2025-08-27T11:34:31.765962",
    "updatedAt": "2025-08-27T11:34:31.765963",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 9",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-04T15:00:00",
    "createdAt": "2025-08-27T11:34:31.765968",
    "updatedAt": "2025-08-27T11:34:31.765969",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 9",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-04T16:00:00",
    "createdAt": "2025-08-27T11:34:31.765974",
    "updatedAt": "2025-08-27T11:34:31.765975",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 9",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-04T17:00:00",
    "createdAt": "2025-08-27T11:34:31.765979",
    "updatedAt": "2025-08-27T11:34:31.765980",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 9",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-04T17:45:00",
    "createdAt": "2025-08-27T11:34:31.765985",
    "updatedAt": "2025-08-27T11:34:31.765986",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 9",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-04T18:30:00",
    "createdAt": "2025-08-27T11:34:31.765990",
    "updatedAt": "2025-08-27T11:34:31.765991",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 9",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-04T19:15:00",
    "createdAt": "2025-08-27T11:34:31.765996",
    "updatedAt": "2025-08-27T11:34:31.765997",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 9",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-04T20:00:00",
    "createdAt": "2025-08-27T11:34:31.766003",
    "updatedAt": "2025-08-27T11:34:31.766006",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 9",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-04T21:00:00",
    "createdAt": "2025-08-27T11:34:31.766014",
    "updatedAt": "2025-08-27T11:34:31.766017",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 9",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-04T22:00:00",
    "createdAt": "2025-08-27T11:34:31.766024",
    "updatedAt": "2025-08-27T11:34:31.766027",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 9",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-04T22:45:00",
    "createdAt": "2025-08-27T11:34:31.766036",
    "updatedAt": "2025-08-27T11:34:31.766037",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 9",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-04T23:45:00",
    "createdAt": "2025-08-27T11:34:31.766042",
    "updatedAt": "2025-08-27T11:34:31.766043",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 9",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-05T00:30:00",
    "createdAt": "2025-08-27T11:34:31.766048",
    "updatedAt": "2025-08-27T11:34:31.766049",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 9",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-05T01:15:00",
    "createdAt": "2025-08-27T11:34:31.766054",
    "updatedAt": "2025-08-27T11:34:31.766055",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 9",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-05T01:45:00",
    "createdAt": "2025-08-27T11:34:31.766059",
    "updatedAt": "2025-08-27T11:34:31.766061",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 9",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-05T02:15:00",
    "createdAt": "2025-08-27T11:34:31.766067",
    "updatedAt": "2025-08-27T11:34:31.766068",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 9",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-05T02:45:00",
    "createdAt": "2025-08-27T11:34:31.766073",
    "updatedAt": "2025-08-27T11:34:31.766074",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 10",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-05T10:00:00",
    "createdAt": "2025-08-27T11:34:31.766080",
    "updatedAt": "2025-08-27T11:34:31.766081",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 10",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-05T11:00:00",
    "createdAt": "2025-08-27T11:34:31.766086",
    "updatedAt": "2025-08-27T11:34:31.766088",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 10",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-05T12:00:00",
    "createdAt": "2025-08-27T11:34:31.766092",
    "updatedAt": "2025-08-27T11:34:31.766094",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 10",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-05T13:00:00",
    "createdAt": "2025-08-27T11:34:31.766098",
    "updatedAt": "2025-08-27T11:34:31.766100",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 10",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-05T14:00:00",
    "createdAt": "2025-08-27T11:34:31.766104",
    "updatedAt": "2025-08-27T11:34:31.766106",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 10",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-05T15:00:00",
    "createdAt": "2025-08-27T11:34:31.766110",
    "updatedAt": "2025-08-27T11:34:31.766112",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 10",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-05T16:00:00",
    "createdAt": "2025-08-27T11:34:31.766116",
    "updatedAt": "2025-08-27T11:34:31.766117",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 10",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-05T17:00:00",
    "createdAt": "2025-08-27T11:34:31.766122",
    "updatedAt": "2025-08-27T11:34:31.766123",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 10",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-05T17:45:00",
    "createdAt": "2025-08-27T11:34:31.766128",
    "updatedAt": "2025-08-27T11:34:31.766129",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 10",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-05T18:30:00",
    "createdAt": "2025-08-27T11:34:31.766133",
    "updatedAt": "2025-08-27T11:34:31.766135",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 10",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-05T19:15:00",
    "createdAt": "2025-08-27T11:34:31.766139",
    "updatedAt": "2025-08-27T11:34:31.766141",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 10",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-05T20:00:00",
    "createdAt": "2025-08-27T11:34:31.766145",
    "updatedAt": "2025-08-27T11:34:31.766147",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 10",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-05T21:00:00",
    "createdAt": "2025-08-27T11:34:31.766152",
    "updatedAt": "2025-08-27T11:34:31.766154",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 10",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-05T22:00:00",
    "createdAt": "2025-08-27T11:34:31.766158",
    "updatedAt": "2025-08-27T11:34:31.766160",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 10",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-05T22:45:00",
    "createdAt": "2025-08-27T11:34:31.766164",
    "updatedAt": "2025-08-27T11:34:31.766166",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 10",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-05T23:45:00",
    "createdAt": "2025-08-27T11:34:31.766172",
    "updatedAt": "2025-08-27T11:34:31.766173",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 10",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-06T00:30:00",
    "createdAt": "2025-08-27T11:34:31.766178",
    "updatedAt": "2025-08-27T11:34:31.766179",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 10",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-06T01:15:00",
    "createdAt": "2025-08-27T11:34:31.766184",
    "updatedAt": "2025-08-27T11:34:31.766185",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 10",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-06T01:45:00",
    "createdAt": "2025-08-27T11:34:31.766190",
    "updatedAt": "2025-08-27T11:34:31.766191",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 10",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-06T02:15:00",
    "createdAt": "2025-08-27T11:34:31.766196",
    "updatedAt": "2025-08-27T11:34:31.766198",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 10",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-06T02:45:00",
    "createdAt": "2025-08-27T11:34:31.766203",
    "updatedAt": "2025-08-27T11:34:31.766204",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 11",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-06T10:00:00",
    "createdAt": "2025-08-27T11:34:31.766210",
    "updatedAt": "2025-08-27T11:34:31.766211",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 11",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-06T11:00:00",
    "createdAt": "2025-08-27T11:34:31.766215",
    "updatedAt": "2025-08-27T11:34:31.766216",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 11",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-06T12:00:00",
    "createdAt": "2025-08-27T11:34:31.766221",
    "updatedAt": "2025-08-27T11:34:31.766222",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 11",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-06T13:00:00",
    "createdAt": "2025-08-27T11:34:31.766226",
    "updatedAt": "2025-08-27T11:34:31.766227",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 11",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-06T14:00:00",
    "createdAt": "2025-08-27T11:34:31.766232",
    "updatedAt": "2025-08-27T11:34:31.766233",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 11",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-06T15:00:00",
    "createdAt": "2025-08-27T11:34:31.766237",
    "updatedAt": "2025-08-27T11:34:31.766238",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 11",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-06T16:00:00",
    "createdAt": "2025-08-27T11:34:31.766243",
    "updatedAt": "2025-08-27T11:34:31.766244",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 11",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-06T17:00:00",
    "createdAt": "2025-08-27T11:34:31.766248",
    "updatedAt": "2025-08-27T11:34:31.766249",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 11",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-06T17:45:00",
    "createdAt": "2025-08-27T11:34:31.766253",
    "updatedAt": "2025-08-27T11:34:31.766255",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 11",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-06T18:30:00",
    "createdAt": "2025-08-27T11:34:31.766259",
    "updatedAt": "2025-08-27T11:34:31.766260",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 11",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-06T19:15:00",
    "createdAt": "2025-08-27T11:34:31.766264",
    "updatedAt": "2025-08-27T11:34:31.766266",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 11",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-06T20:00:00",
    "createdAt": "2025-08-27T11:34:31.766270",
    "updatedAt": "2025-08-27T11:34:31.766271",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 11",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-06T21:00:00",
    "createdAt": "2025-08-27T11:34:31.766275",
    "updatedAt": "2025-08-27T11:34:31.766277",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 11",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-06T22:00:00",
    "createdAt": "2025-08-27T11:34:31.766281",
    "updatedAt": "2025-08-27T11:34:31.766282",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 11",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-06T22:45:00",
    "createdAt": "2025-08-27T11:34:31.766286",
    "updatedAt": "2025-08-27T11:34:31.766288",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 11",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-06T23:45:00",
    "createdAt": "2025-08-27T11:34:31.766293",
    "updatedAt": "2025-08-27T11:34:31.766294",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 11",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-07T00:30:00",
    "createdAt": "2025-08-27T11:34:31.766298",
    "updatedAt": "2025-08-27T11:34:31.766300",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 11",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-07T01:15:00",
    "createdAt": "2025-08-27T11:34:31.766304",
    "updatedAt": "2025-08-27T11:34:31.766305",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 11",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-07T01:45:00",
    "createdAt": "2025-08-27T11:34:31.766310",
    "updatedAt": "2025-08-27T11:34:31.766311",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 11",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-07T02:15:00",
    "createdAt": "2025-08-27T11:34:31.766316",
    "updatedAt": "2025-08-27T11:34:31.766317",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 11",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-07T02:45:00",
    "createdAt": "2025-08-27T11:34:31.766321",
    "updatedAt": "2025-08-27T11:34:31.766322",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 12",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-07T10:00:00",
    "createdAt": "2025-08-27T11:34:31.766328",
    "updatedAt": "2025-08-27T11:34:31.766329",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 12",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-07T11:00:00",
    "createdAt": "2025-08-27T11:34:31.766333",
    "updatedAt": "2025-08-27T11:34:31.766334",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 12",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-07T12:00:00",
    "createdAt": "2025-08-27T11:34:31.766340",
    "updatedAt": "2025-08-27T11:34:31.766341",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 12",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-07T13:00:00",
    "createdAt": "2025-08-27T11:34:31.766346",
    "updatedAt": "2025-08-27T11:34:31.766347",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 12",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-07T14:00:00",
    "createdAt": "2025-08-27T11:34:31.766351",
    "updatedAt": "2025-08-27T11:34:31.766353",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 12",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-07T15:00:00",
    "createdAt": "2025-08-27T11:34:31.766357",
    "updatedAt": "2025-08-27T11:34:31.766359",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 12",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-07T16:00:00",
    "createdAt": "2025-08-27T11:34:31.766363",
    "updatedAt": "2025-08-27T11:34:31.766364",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 12",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-07T17:00:00",
    "createdAt": "2025-08-27T11:34:31.766368",
    "updatedAt": "2025-08-27T11:34:31.766369",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 12",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-07T17:45:00",
    "createdAt": "2025-08-27T11:34:31.766374",
    "updatedAt": "2025-08-27T11:34:31.766375",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 12",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-07T18:30:00",
    "createdAt": "2025-08-27T11:34:31.766380",
    "updatedAt": "2025-08-27T11:34:31.766381",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 12",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-07T19:15:00",
    "createdAt": "2025-08-27T11:34:31.766385",
    "updatedAt": "2025-08-27T11:34:31.766386",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 12",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-07T20:00:00",
    "createdAt": "2025-08-27T11:34:31.766391",
    "updatedAt": "2025-08-27T11:34:31.766392",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 12",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-07T21:00:00",
    "createdAt": "2025-08-27T11:34:31.766397",
    "updatedAt": "2025-08-27T11:34:31.766398",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 12",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-07T22:00:00",
    "createdAt": "2025-08-27T11:34:31.766403",
    "updatedAt": "2025-08-27T11:34:31.766404",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 12",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-07T22:45:00",
    "createdAt": "2025-08-27T11:34:31.766409",
    "updatedAt": "2025-08-27T11:34:31.766411",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 12",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-07T23:45:00",
    "createdAt": "2025-08-27T11:34:31.766420",
    "updatedAt": "2025-08-27T11:34:31.766422",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 12",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-08T00:30:00",
    "createdAt": "2025-08-27T11:34:31.766430",
    "updatedAt": "2025-08-27T11:34:31.766433",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 12",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-08T01:15:00",
    "createdAt": "2025-08-27T11:34:31.766442",
    "updatedAt": "2025-08-27T11:34:31.766443",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 12",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-08T01:45:00",
    "createdAt": "2025-08-27T11:34:31.766448",
    "updatedAt": "2025-08-27T11:34:31.766449",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 12",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-08T02:15:00",
    "createdAt": "2025-08-27T11:34:31.766454",
    "updatedAt": "2025-08-27T11:34:31.766455",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 12",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-08T02:45:00",
    "createdAt": "2025-08-27T11:34:31.766459",
    "updatedAt": "2025-08-27T11:34:31.766461",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 13",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-08T10:00:00",
    "createdAt": "2025-08-27T11:34:31.766610",
    "updatedAt": "2025-08-27T11:34:31.766612",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 13",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-08T11:00:00",
    "createdAt": "2025-08-27T11:34:31.766617",
    "updatedAt": "2025-08-27T11:34:31.766619",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 13",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-08T12:00:00",
    "createdAt": "2025-08-27T11:34:31.766623",
    "updatedAt": "2025-08-27T11:34:31.766625",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 13",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-08T13:00:00",
    "createdAt": "2025-08-27T11:34:31.766629",
    "updatedAt": "2025-08-27T11:34:31.766630",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 13",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-08T14:00:00",
    "createdAt": "2025-08-27T11:34:31.766635",
    "updatedAt": "2025-08-27T11:34:31.766636",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 13",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-08T15:00:00",
    "createdAt": "2025-08-27T11:34:31.766640",
    "updatedAt": "2025-08-27T11:34:31.766642",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 13",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-08T16:00:00",
    "createdAt": "2025-08-27T11:34:31.766646",
    "updatedAt": "2025-08-27T11:34:31.766647",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 13",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-08T17:00:00",
    "createdAt": "2025-08-27T11:34:31.766652",
    "updatedAt": "2025-08-27T11:34:31.766653",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 13",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-08T17:45:00",
    "createdAt": "2025-08-27T11:34:31.766658",
    "updatedAt": "2025-08-27T11:34:31.766660",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 13",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-08T18:30:00",
    "createdAt": "2025-08-27T11:34:31.766664",
    "updatedAt": "2025-08-27T11:34:31.766666",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 13",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-08T19:15:00",
    "createdAt": "2025-08-27T11:34:31.766670",
    "updatedAt": "2025-08-27T11:34:31.766671",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 13",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-08T20:00:00",
    "createdAt": "2025-08-27T11:34:31.766676",
    "updatedAt": "2025-08-27T11:34:31.766677",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 13",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-08T21:00:00",
    "createdAt": "2025-08-27T11:34:31.766682",
    "updatedAt": "2025-08-27T11:34:31.766683",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 13",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-08T22:00:00",
    "createdAt": "2025-08-27T11:34:31.766687",
    "updatedAt": "2025-08-27T11:34:31.766688",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 13",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-08T22:45:00",
    "createdAt": "2025-08-27T11:34:31.766693",
    "updatedAt": "2025-08-27T11:34:31.766694",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 13",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-08T23:45:00",
    "createdAt": "2025-08-27T11:34:31.766698",
    "updatedAt": "2025-08-27T11:34:31.766699",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 13",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-09T00:30:00",
    "createdAt": "2025-08-27T11:34:31.766704",
    "updatedAt": "2025-08-27T11:34:31.766705",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 13",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-09T01:15:00",
    "createdAt": "2025-08-27T11:34:31.766710",
    "updatedAt": "2025-08-27T11:34:31.766711",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 13",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-09T01:45:00",
    "createdAt": "2025-08-27T11:34:31.766715",
    "updatedAt": "2025-08-27T11:34:31.766717",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 13",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-09T02:15:00",
    "createdAt": "2025-08-27T11:34:31.766721",
    "updatedAt": "2025-08-27T11:34:31.766723",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 13",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-09T02:45:00",
    "createdAt": "2025-08-27T11:34:31.766727",
    "updatedAt": "2025-08-27T11:34:31.766729",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 14",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-09T10:00:00",
    "createdAt": "2025-08-27T11:34:31.766734",
    "updatedAt": "2025-08-27T11:34:31.766736",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 14",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-09T11:00:00",
    "createdAt": "2025-08-27T11:34:31.766740",
    "updatedAt": "2025-08-27T11:34:31.766741",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 14",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-09T12:00:00",
    "createdAt": "2025-08-27T11:34:31.766745",
    "updatedAt": "2025-08-27T11:34:31.766747",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 14",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-09T13:00:00",
    "createdAt": "2025-08-27T11:34:31.766751",
    "updatedAt": "2025-08-27T11:34:31.766753",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 14",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-09T14:00:00",
    "createdAt": "2025-08-27T11:34:31.766757",
    "updatedAt": "2025-08-27T11:34:31.766758",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 14",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-09T15:00:00",
    "createdAt": "2025-08-27T11:34:31.766763",
    "updatedAt": "2025-08-27T11:34:31.766764",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 14",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-09T16:00:00",
    "createdAt": "2025-08-27T11:34:31.766768",
    "updatedAt": "2025-08-27T11:34:31.766770",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 14",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-09T17:00:00",
    "createdAt": "2025-08-27T11:34:31.766774",
    "updatedAt": "2025-08-27T11:34:31.766776",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 14",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-09T17:45:00",
    "createdAt": "2025-08-27T11:34:31.766780",
    "updatedAt": "2025-08-27T11:34:31.766781",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 14",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-09T18:30:00",
    "createdAt": "2025-08-27T11:34:31.766786",
    "updatedAt": "2025-08-27T11:34:31.766787",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 14",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-09T19:15:00",
    "createdAt": "2025-08-27T11:34:31.766792",
    "updatedAt": "2025-08-27T11:34:31.766793",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 14",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-09T20:00:00",
    "createdAt": "2025-08-27T11:34:31.766798",
    "updatedAt": "2025-08-27T11:34:31.766799",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 14",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-09T21:00:00",
    "createdAt": "2025-08-27T11:34:31.766803",
    "updatedAt": "2025-08-27T11:34:31.766805",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 14",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-09T22:00:00",
    "createdAt": "2025-08-27T11:34:31.766809",
    "updatedAt": "2025-08-27T11:34:31.766810",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 14",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-09T22:45:00",
    "createdAt": "2025-08-27T11:34:31.766814",
    "updatedAt": "2025-08-27T11:34:31.766815",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 14",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-09T23:45:00",
    "createdAt": "2025-08-27T11:34:31.766820",
    "updatedAt": "2025-08-27T11:34:31.766821",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 14",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-10T00:30:00",
    "createdAt": "2025-08-27T11:34:31.766826",
    "updatedAt": "2025-08-27T11:34:31.766827",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 14",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-10T01:15:00",
    "createdAt": "2025-08-27T11:34:31.766831",
    "updatedAt": "2025-08-27T11:34:31.766833",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 14",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-10T01:45:00",
    "createdAt": "2025-08-27T11:34:31.766837",
    "updatedAt": "2025-08-27T11:34:31.766838",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 14",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-10T02:15:00",
    "createdAt": "2025-08-27T11:34:31.766844",
    "updatedAt": "2025-08-27T11:34:31.766845",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 14",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-10T02:45:00",
    "createdAt": "2025-08-27T11:34:31.766851",
    "updatedAt": "2025-08-27T11:34:31.766852",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 15",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-10T10:00:00",
    "createdAt": "2025-08-27T11:34:31.766858",
    "updatedAt": "2025-08-27T11:34:31.766859",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 15",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-10T11:00:00",
    "createdAt": "2025-08-27T11:34:31.766864",
    "updatedAt": "2025-08-27T11:34:31.766865",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 15",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-10T12:00:00",
    "createdAt": "2025-08-27T11:34:31.766870",
    "updatedAt": "2025-08-27T11:34:31.766871",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 15",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-10T13:00:00",
    "createdAt": "2025-08-27T11:34:31.766875",
    "updatedAt": "2025-08-27T11:34:31.766877",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 15",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-10T14:00:00",
    "createdAt": "2025-08-27T11:34:31.766881",
    "updatedAt": "2025-08-27T11:34:31.766883",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 15",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-10T15:00:00",
    "createdAt": "2025-08-27T11:34:31.766887",
    "updatedAt": "2025-08-27T11:34:31.766889",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 15",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-10T16:00:00",
    "createdAt": "2025-08-27T11:34:31.766893",
    "updatedAt": "2025-08-27T11:34:31.766895",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 15",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-10T17:00:00",
    "createdAt": "2025-08-27T11:34:31.766899",
    "updatedAt": "2025-08-27T11:34:31.766901",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 15",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-10T17:45:00",
    "createdAt": "2025-08-27T11:34:31.766905",
    "updatedAt": "2025-08-27T11:34:31.766906",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 15",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-10T18:30:00",
    "createdAt": "2025-08-27T11:34:31.766911",
    "updatedAt": "2025-08-27T11:34:31.766912",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 15",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-10T19:15:00",
    "createdAt": "2025-08-27T11:34:31.766917",
    "updatedAt": "2025-08-27T11:34:31.766918",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 15",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-10T20:00:00",
    "createdAt": "2025-08-27T11:34:31.766923",
    "updatedAt": "2025-08-27T11:34:31.766924",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 15",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-10T21:00:00",
    "createdAt": "2025-08-27T11:34:31.766928",
    "updatedAt": "2025-08-27T11:34:31.766930",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 15",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-10T22:00:00",
    "createdAt": "2025-08-27T11:34:31.766934",
    "updatedAt": "2025-08-27T11:34:31.766936",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 15",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-10T22:45:00",
    "createdAt": "2025-08-27T11:34:31.766940",
    "updatedAt": "2025-08-27T11:34:31.766941",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 15",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-10T23:45:00",
    "createdAt": "2025-08-27T11:34:31.766947",
    "updatedAt": "2025-08-27T11:34:31.766948",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 15",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-11T00:30:00",
    "createdAt": "2025-08-27T11:34:31.766953",
    "updatedAt": "2025-08-27T11:34:31.766955",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 15",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-11T01:15:00",
    "createdAt": "2025-08-27T11:34:31.766959",
    "updatedAt": "2025-08-27T11:34:31.766961",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 15",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-11T01:45:00",
    "createdAt": "2025-08-27T11:34:31.766965",
    "updatedAt": "2025-08-27T11:34:31.766967",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 15",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-11T02:15:00",
    "createdAt": "2025-08-27T11:34:31.766971",
    "updatedAt": "2025-08-27T11:34:31.766973",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 15",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-11T02:45:00",
    "createdAt": "2025-08-27T11:34:31.766977",
    "updatedAt": "2025-08-27T11:34:31.766978",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 16",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-11T10:00:00",
    "createdAt": "2025-08-27T11:34:31.766984",
    "updatedAt": "2025-08-27T11:34:31.766985",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 16",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-11T11:00:00",
    "createdAt": "2025-08-27T11:34:31.766990",
    "updatedAt": "2025-08-27T11:34:31.766991",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 16",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-11T12:00:00",
    "createdAt": "2025-08-27T11:34:31.766996",
    "updatedAt": "2025-08-27T11:34:31.766997",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 16",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-11T13:00:00",
    "createdAt": "2025-08-27T11:34:31.767001",
    "updatedAt": "2025-08-27T11:34:31.767003",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 16",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-11T14:00:00",
    "createdAt": "2025-08-27T11:34:31.767007",
    "updatedAt": "2025-08-27T11:34:31.767009",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 16",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-11T15:00:00",
    "createdAt": "2025-08-27T11:34:31.767013",
    "updatedAt": "2025-08-27T11:34:31.767015",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 16",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-11T16:00:00",
    "createdAt": "2025-08-27T11:34:31.767019",
    "updatedAt": "2025-08-27T11:34:31.767021",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 16",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-11T17:00:00",
    "createdAt": "2025-08-27T11:34:31.767025",
    "updatedAt": "2025-08-27T11:34:31.767026",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 16",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-11T17:45:00",
    "createdAt": "2025-08-27T11:34:31.767031",
    "updatedAt": "2025-08-27T11:34:31.767032",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 16",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-11T18:30:00",
    "createdAt": "2025-08-27T11:34:31.767038",
    "updatedAt": "2025-08-27T11:34:31.767039",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 16",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-11T19:15:00",
    "createdAt": "2025-08-27T11:34:31.767043",
    "updatedAt": "2025-08-27T11:34:31.767045",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 16",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-11T20:00:00",
    "createdAt": "2025-08-27T11:34:31.767049",
    "updatedAt": "2025-08-27T11:34:31.767051",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 16",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-11T21:00:00",
    "createdAt": "2025-08-27T11:34:31.767055",
    "updatedAt": "2025-08-27T11:34:31.767057",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 16",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-11T22:00:00",
    "createdAt": "2025-08-27T11:34:31.767061",
    "updatedAt": "2025-08-27T11:34:31.767063",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 16",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-11T22:45:00",
    "createdAt": "2025-08-27T11:34:31.767067",
    "updatedAt": "2025-08-27T11:34:31.767069",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 16",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-11T23:45:00",
    "createdAt": "2025-08-27T11:34:31.767074",
    "updatedAt": "2025-08-27T11:34:31.767075",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 16",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-12T00:30:00",
    "createdAt": "2025-08-27T11:34:31.767082",
    "updatedAt": "2025-08-27T11:34:31.767085",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 16",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-12T01:15:00",
    "createdAt": "2025-08-27T11:34:31.767093",
    "updatedAt": "2025-08-27T11:34:31.767096",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 16",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-12T01:45:00",
    "createdAt": "2025-08-27T11:34:31.767104",
    "updatedAt": "2025-08-27T11:34:31.767106",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 16",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-12T02:15:00",
    "createdAt": "2025-08-27T11:34:31.767120",
    "updatedAt": "2025-08-27T11:34:31.767122",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 16",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-12T02:45:00",
    "createdAt": "2025-08-27T11:34:31.767126",
    "updatedAt": "2025-08-27T11:34:31.767128",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 17",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-12T10:00:00",
    "createdAt": "2025-08-27T11:34:31.767133",
    "updatedAt": "2025-08-27T11:34:31.767135",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 17",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-12T11:00:00",
    "createdAt": "2025-08-27T11:34:31.767139",
    "updatedAt": "2025-08-27T11:34:31.767140",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 17",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-12T12:00:00",
    "createdAt": "2025-08-27T11:34:31.767144",
    "updatedAt": "2025-08-27T11:34:31.767145",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 17",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-12T13:00:00",
    "createdAt": "2025-08-27T11:34:31.767150",
    "updatedAt": "2025-08-27T11:34:31.767151",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 17",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-12T14:00:00",
    "createdAt": "2025-08-27T11:34:31.767155",
    "updatedAt": "2025-08-27T11:34:31.767156",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 17",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-12T15:00:00",
    "createdAt": "2025-08-27T11:34:31.767160",
    "updatedAt": "2025-08-27T11:34:31.767162",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 17",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-12T16:00:00",
    "createdAt": "2025-08-27T11:34:31.767220",
    "updatedAt": "2025-08-27T11:34:31.767222",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 17",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-12T17:00:00",
    "createdAt": "2025-08-27T11:34:31.767226",
    "updatedAt": "2025-08-27T11:34:31.767228",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 17",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-12T17:45:00",
    "createdAt": "2025-08-27T11:34:31.767232",
    "updatedAt": "2025-08-27T11:34:31.767233",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 17",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-12T18:30:00",
    "createdAt": "2025-08-27T11:34:31.767238",
    "updatedAt": "2025-08-27T11:34:31.767239",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 17",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-12T19:15:00",
    "createdAt": "2025-08-27T11:34:31.767243",
    "updatedAt": "2025-08-27T11:34:31.767244",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 17",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-12T20:00:00",
    "createdAt": "2025-08-27T11:34:31.767249",
    "updatedAt": "2025-08-27T11:34:31.767250",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 17",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-12T21:00:00",
    "createdAt": "2025-08-27T11:34:31.767254",
    "updatedAt": "2025-08-27T11:34:31.767256",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 17",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-12T22:00:00",
    "createdAt": "2025-08-27T11:34:31.767260",
    "updatedAt": "2025-08-27T11:34:31.767261",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 17",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-12T22:45:00",
    "createdAt": "2025-08-27T11:34:31.767266",
    "updatedAt": "2025-08-27T11:34:31.767267",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 17",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-12T23:45:00",
    "createdAt": "2025-08-27T11:34:31.767271",
    "updatedAt": "2025-08-27T11:34:31.767273",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 17",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-13T00:30:00",
    "createdAt": "2025-08-27T11:34:31.767277",
    "updatedAt": "2025-08-27T11:34:31.767279",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 17",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-13T01:15:00",
    "createdAt": "2025-08-27T11:34:31.767285",
    "updatedAt": "2025-08-27T11:34:31.767286",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 17",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-13T01:45:00",
    "createdAt": "2025-08-27T11:34:31.767290",
    "updatedAt": "2025-08-27T11:34:31.767292",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 17",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-13T02:15:00",
    "createdAt": "2025-08-27T11:34:31.767296",
    "updatedAt": "2025-08-27T11:34:31.767297",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 17",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-13T02:45:00",
    "createdAt": "2025-08-27T11:34:31.767302",
    "updatedAt": "2025-08-27T11:34:31.767303",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 18",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-13T10:00:00",
    "createdAt": "2025-08-27T11:34:31.767308",
    "updatedAt": "2025-08-27T11:34:31.767310",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 18",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-13T11:00:00",
    "createdAt": "2025-08-27T11:34:31.767315",
    "updatedAt": "2025-08-27T11:34:31.767316",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 18",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-13T12:00:00",
    "createdAt": "2025-08-27T11:34:31.767320",
    "updatedAt": "2025-08-27T11:34:31.767322",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 18",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-13T13:00:00",
    "createdAt": "2025-08-27T11:34:31.767326",
    "updatedAt": "2025-08-27T11:34:31.767327",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 18",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-13T14:00:00",
    "createdAt": "2025-08-27T11:34:31.767331",
    "updatedAt": "2025-08-27T11:34:31.767333",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 18",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-13T15:00:00",
    "createdAt": "2025-08-27T11:34:31.767337",
    "updatedAt": "2025-08-27T11:34:31.767338",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 18",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-13T16:00:00",
    "createdAt": "2025-08-27T11:34:31.767342",
    "updatedAt": "2025-08-27T11:34:31.767344",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 18",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-13T17:00:00",
    "createdAt": "2025-08-27T11:34:31.767348",
    "updatedAt": "2025-08-27T11:34:31.767349",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 18",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-13T17:45:00",
    "createdAt": "2025-08-27T11:34:31.767353",
    "updatedAt": "2025-08-27T11:34:31.767355",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 18",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-13T18:30:00",
    "createdAt": "2025-08-27T11:34:31.767359",
    "updatedAt": "2025-08-27T11:34:31.767360",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 18",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-13T19:15:00",
    "createdAt": "2025-08-27T11:34:31.767364",
    "updatedAt": "2025-08-27T11:34:31.767365",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 18",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-13T20:00:00",
    "createdAt": "2025-08-27T11:34:31.767370",
    "updatedAt": "2025-08-27T11:34:31.767371",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 18",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-13T21:00:00",
    "createdAt": "2025-08-27T11:34:31.767375",
    "updatedAt": "2025-08-27T11:34:31.767377",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 18",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-13T22:00:00",
    "createdAt": "2025-08-27T11:34:31.767392",
    "updatedAt": "2025-08-27T11:34:31.767394",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 18",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-13T22:45:00",
    "createdAt": "2025-08-27T11:34:31.767398",
    "updatedAt": "2025-08-27T11:34:31.767400",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 18",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-13T23:45:00",
    "createdAt": "2025-08-27T11:34:31.767404",
    "updatedAt": "2025-08-27T11:34:31.767405",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 18",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-14T00:30:00",
    "createdAt": "2025-08-27T11:34:31.767410",
    "updatedAt": "2025-08-27T11:34:31.767411",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 18",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-14T01:15:00",
    "createdAt": "2025-08-27T11:34:31.767415",
    "updatedAt": "2025-08-27T11:34:31.767416",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 18",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-14T01:45:00",
    "createdAt": "2025-08-27T11:34:31.767420",
    "updatedAt": "2025-08-27T11:34:31.767422",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 18",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-14T02:15:00",
    "createdAt": "2025-08-27T11:34:31.767427",
    "updatedAt": "2025-08-27T11:34:31.767428",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 18",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-14T02:45:00",
    "createdAt": "2025-08-27T11:34:31.767433",
    "updatedAt": "2025-08-27T11:34:31.767434",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 19",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-14T10:00:00",
    "createdAt": "2025-08-27T11:34:31.767440",
    "updatedAt": "2025-08-27T11:34:31.767441",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 19",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-14T11:00:00",
    "createdAt": "2025-08-27T11:34:31.767446",
    "updatedAt": "2025-08-27T11:34:31.767447",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 19",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-14T12:00:00",
    "createdAt": "2025-08-27T11:34:31.767451",
    "updatedAt": "2025-08-27T11:34:31.767453",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 19",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-14T13:00:00",
    "createdAt": "2025-08-27T11:34:31.767457",
    "updatedAt": "2025-08-27T11:34:31.767459",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 19",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-14T14:00:00",
    "createdAt": "2025-08-27T11:34:31.767463",
    "updatedAt": "2025-08-27T11:34:31.767464",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 19",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-14T15:00:00",
    "createdAt": "2025-08-27T11:34:31.767469",
    "updatedAt": "2025-08-27T11:34:31.767470",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 19",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-14T16:00:00",
    "createdAt": "2025-08-27T11:34:31.767475",
    "updatedAt": "2025-08-27T11:34:31.767476",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 19",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-14T17:00:00",
    "createdAt": "2025-08-27T11:34:31.767480",
    "updatedAt": "2025-08-27T11:34:31.767482",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 19",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-14T17:45:00",
    "createdAt": "2025-08-27T11:34:31.767490",
    "updatedAt": "2025-08-27T11:34:31.767492",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 19",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-14T18:30:00",
    "createdAt": "2025-08-27T11:34:31.767500",
    "updatedAt": "2025-08-27T11:34:31.767502",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 19",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-14T19:15:00",
    "createdAt": "2025-08-27T11:34:31.767516",
    "updatedAt": "2025-08-27T11:34:31.767526",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 19",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-14T20:00:00",
    "createdAt": "2025-08-27T11:34:31.767532",
    "updatedAt": "2025-08-27T11:34:31.767533",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 19",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-14T21:00:00",
    "createdAt": "2025-08-27T11:34:31.767538",
    "updatedAt": "2025-08-27T11:34:31.767539",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 19",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-14T22:00:00",
    "createdAt": "2025-08-27T11:34:31.767543",
    "updatedAt": "2025-08-27T11:34:31.767544",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 19",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-14T22:45:00",
    "createdAt": "2025-08-27T11:34:31.767549",
    "updatedAt": "2025-08-27T11:34:31.767550",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 19",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-14T23:45:00",
    "createdAt": "2025-08-27T11:34:31.767554",
    "updatedAt": "2025-08-27T11:34:31.767556",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 19",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-15T00:30:00",
    "createdAt": "2025-08-27T11:34:31.767560",
    "updatedAt": "2025-08-27T11:34:31.767561",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 19",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-15T01:15:00",
    "createdAt": "2025-08-27T11:34:31.767566",
    "updatedAt": "2025-08-27T11:34:31.767567",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 19",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-15T01:45:00",
    "createdAt": "2025-08-27T11:34:31.767572",
    "updatedAt": "2025-08-27T11:34:31.767573",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 19",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-15T02:15:00",
    "createdAt": "2025-08-27T11:34:31.767578",
    "updatedAt": "2025-08-27T11:34:31.767579",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 19",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-15T02:45:00",
    "createdAt": "2025-08-27T11:34:31.767583",
    "updatedAt": "2025-08-27T11:34:31.767584",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 20",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-15T10:00:00",
    "createdAt": "2025-08-27T11:34:31.767590",
    "updatedAt": "2025-08-27T11:34:31.767591",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 20",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-15T11:00:00",
    "createdAt": "2025-08-27T11:34:31.767595",
    "updatedAt": "2025-08-27T11:34:31.767597",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 20",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-15T12:00:00",
    "createdAt": "2025-08-27T11:34:31.767602",
    "updatedAt": "2025-08-27T11:34:31.767603",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 20",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-15T13:00:00",
    "createdAt": "2025-08-27T11:34:31.767608",
    "updatedAt": "2025-08-27T11:34:31.767609",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 20",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-15T14:00:00",
    "createdAt": "2025-08-27T11:34:31.767613",
    "updatedAt": "2025-08-27T11:34:31.767614",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 20",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-15T15:00:00",
    "createdAt": "2025-08-27T11:34:31.767619",
    "updatedAt": "2025-08-27T11:34:31.767620",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 20",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-15T16:00:00",
    "createdAt": "2025-08-27T11:34:31.767624",
    "updatedAt": "2025-08-27T11:34:31.767625",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 20",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-15T17:00:00",
    "createdAt": "2025-08-27T11:34:31.767630",
    "updatedAt": "2025-08-27T11:34:31.767631",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 20",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-15T17:45:00",
    "createdAt": "2025-08-27T11:34:31.767638",
    "updatedAt": "2025-08-27T11:34:31.767640",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 20",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-15T18:30:00",
    "createdAt": "2025-08-27T11:34:31.767644",
    "updatedAt": "2025-08-27T11:34:31.767646",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 20",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-15T19:15:00",
    "createdAt": "2025-08-27T11:34:31.767650",
    "updatedAt": "2025-08-27T11:34:31.767651",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 20",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-15T20:00:00",
    "createdAt": "2025-08-27T11:34:31.767656",
    "updatedAt": "2025-08-27T11:34:31.767657",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 20",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-15T21:00:00",
    "createdAt": "2025-08-27T11:34:31.767662",
    "updatedAt": "2025-08-27T11:34:31.767663",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 20",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-15T22:00:00",
    "createdAt": "2025-08-27T11:34:31.767668",
    "updatedAt": "2025-08-27T11:34:31.767669",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 20",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-15T22:45:00",
    "createdAt": "2025-08-27T11:34:31.767673",
    "updatedAt": "2025-08-27T11:34:31.767674",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 20",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-15T23:45:00",
    "createdAt": "2025-08-27T11:34:31.767679",
    "updatedAt": "2025-08-27T11:34:31.767680",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 20",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-16T00:30:00",
    "createdAt": "2025-08-27T11:34:31.767685",
    "updatedAt": "2025-08-27T11:34:31.767686",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 20",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-16T01:15:00",
    "createdAt": "2025-08-27T11:34:31.767691",
    "updatedAt": "2025-08-27T11:34:31.767692",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 20",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-16T01:45:00",
    "createdAt": "2025-08-27T11:34:31.767697",
    "updatedAt": "2025-08-27T11:34:31.767698",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 20",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-16T02:15:00",
    "createdAt": "2025-08-27T11:34:31.767702",
    "updatedAt": "2025-08-27T11:34:31.767703",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 20",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-16T02:45:00",
    "createdAt": "2025-08-27T11:34:31.767708",
    "updatedAt": "2025-08-27T11:34:31.767709",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 21",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-16T10:00:00",
    "createdAt": "2025-08-27T11:34:31.767715",
    "updatedAt": "2025-08-27T11:34:31.767716",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 21",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-16T11:00:00",
    "createdAt": "2025-08-27T11:34:31.767720",
    "updatedAt": "2025-08-27T11:34:31.767722",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 21",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-16T12:00:00",
    "createdAt": "2025-08-27T11:34:31.767726",
    "updatedAt": "2025-08-27T11:34:31.767727",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 21",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-16T13:00:00",
    "createdAt": "2025-08-27T11:34:31.767732",
    "updatedAt": "2025-08-27T11:34:31.767733",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 21",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-16T14:00:00",
    "createdAt": "2025-08-27T11:34:31.767738",
    "updatedAt": "2025-08-27T11:34:31.767739",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 21",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-16T15:00:00",
    "createdAt": "2025-08-27T11:34:31.767743",
    "updatedAt": "2025-08-27T11:34:31.767745",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 21",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-16T16:00:00",
    "createdAt": "2025-08-27T11:34:31.767749",
    "updatedAt": "2025-08-27T11:34:31.767750",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 21",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-16T17:00:00",
    "createdAt": "2025-08-27T11:34:31.767755",
    "updatedAt": "2025-08-27T11:34:31.767757",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 21",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-16T17:45:00",
    "createdAt": "2025-08-27T11:34:31.767761",
    "updatedAt": "2025-08-27T11:34:31.767763",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 21",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-16T18:30:00",
    "createdAt": "2025-08-27T11:34:31.767767",
    "updatedAt": "2025-08-27T11:34:31.767768",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 21",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-16T19:15:00",
    "createdAt": "2025-08-27T11:34:31.767773",
    "updatedAt": "2025-08-27T11:34:31.767774",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 21",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-16T20:00:00",
    "createdAt": "2025-08-27T11:34:31.767779",
    "updatedAt": "2025-08-27T11:34:31.767780",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 21",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-16T21:00:00",
    "createdAt": "2025-08-27T11:34:31.767785",
    "updatedAt": "2025-08-27T11:34:31.767786",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 21",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-16T22:00:00",
    "createdAt": "2025-08-27T11:34:31.767791",
    "updatedAt": "2025-08-27T11:34:31.767792",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 21",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-16T22:45:00",
    "createdAt": "2025-08-27T11:34:31.767796",
    "updatedAt": "2025-08-27T11:34:31.767798",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 21",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-16T23:45:00",
    "createdAt": "2025-08-27T11:34:31.767802",
    "updatedAt": "2025-08-27T11:34:31.767804",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 21",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-17T00:30:00",
    "createdAt": "2025-08-27T11:34:31.767808",
    "updatedAt": "2025-08-27T11:34:31.767810",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 21",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-17T01:15:00",
    "createdAt": "2025-08-27T11:34:31.767818",
    "updatedAt": "2025-08-27T11:34:31.767820",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 21",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-17T01:45:00",
    "createdAt": "2025-08-27T11:34:31.767827",
    "updatedAt": "2025-08-27T11:34:31.767829",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 21",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-17T02:15:00",
    "createdAt": "2025-08-27T11:34:31.767837",
    "updatedAt": "2025-08-27T11:34:31.767840",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 21",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-17T02:45:00",
    "createdAt": "2025-08-27T11:34:31.767853",
    "updatedAt": "2025-08-27T11:34:31.767854",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 22",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-17T10:00:00",
    "createdAt": "2025-08-27T11:34:31.767860",
    "updatedAt": "2025-08-27T11:34:31.767861",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 22",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-17T11:00:00",
    "createdAt": "2025-08-27T11:34:31.767865",
    "updatedAt": "2025-08-27T11:34:31.767867",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 22",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-17T12:00:00",
    "createdAt": "2025-08-27T11:34:31.767871",
    "updatedAt": "2025-08-27T11:34:31.767872",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 22",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-17T13:00:00",
    "createdAt": "2025-08-27T11:34:31.767877",
    "updatedAt": "2025-08-27T11:34:31.767879",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 22",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-17T14:00:00",
    "createdAt": "2025-08-27T11:34:31.767883",
    "updatedAt": "2025-08-27T11:34:31.767884",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 22",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-17T15:00:00",
    "createdAt": "2025-08-27T11:34:31.767889",
    "updatedAt": "2025-08-27T11:34:31.767890",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 22",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-17T16:00:00",
    "createdAt": "2025-08-27T11:34:31.767895",
    "updatedAt": "2025-08-27T11:34:31.767896",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 22",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-17T17:00:00",
    "createdAt": "2025-08-27T11:34:31.767901",
    "updatedAt": "2025-08-27T11:34:31.767902",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 22",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-17T17:45:00",
    "createdAt": "2025-08-27T11:34:31.767906",
    "updatedAt": "2025-08-27T11:34:31.767908",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 22",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-17T18:30:00",
    "createdAt": "2025-08-27T11:34:31.767912",
    "updatedAt": "2025-08-27T11:34:31.767913",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 22",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-17T19:15:00",
    "createdAt": "2025-08-27T11:34:31.767918",
    "updatedAt": "2025-08-27T11:34:31.767919",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 22",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-17T20:00:00",
    "createdAt": "2025-08-27T11:34:31.767924",
    "updatedAt": "2025-08-27T11:34:31.767925",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 22",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-17T21:00:00",
    "createdAt": "2025-08-27T11:34:31.767930",
    "updatedAt": "2025-08-27T11:34:31.767932",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 22",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-17T22:00:00",
    "createdAt": "2025-08-27T11:34:31.767937",
    "updatedAt": "2025-08-27T11:34:31.767938",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 22",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-17T22:45:00",
    "createdAt": "2025-08-27T11:34:31.767943",
    "updatedAt": "2025-08-27T11:34:31.767944",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 22",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-17T23:45:00",
    "createdAt": "2025-08-27T11:34:31.767950",
    "updatedAt": "2025-08-27T11:34:31.767951",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 22",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-18T00:30:00",
    "createdAt": "2025-08-27T11:34:31.767957",
    "updatedAt": "2025-08-27T11:34:31.767959",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 22",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-18T01:15:00",
    "createdAt": "2025-08-27T11:34:31.767963",
    "updatedAt": "2025-08-27T11:34:31.767964",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 22",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-18T01:45:00",
    "createdAt": "2025-08-27T11:34:31.767969",
    "updatedAt": "2025-08-27T11:34:31.767970",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 22",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-18T02:15:00",
    "createdAt": "2025-08-27T11:34:31.767975",
    "updatedAt": "2025-08-27T11:34:31.767977",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 22",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-18T02:45:00",
    "createdAt": "2025-08-27T11:34:31.767981",
    "updatedAt": "2025-08-27T11:34:31.767983",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 23",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-18T10:00:00",
    "createdAt": "2025-08-27T11:34:31.767991",
    "updatedAt": "2025-08-27T11:34:31.767993",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 23",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-18T11:00:00",
    "createdAt": "2025-08-27T11:34:31.768000",
    "updatedAt": "2025-08-27T11:34:31.768002",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 23",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-18T12:00:00",
    "createdAt": "2025-08-27T11:34:31.768006",
    "updatedAt": "2025-08-27T11:34:31.768008",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 23",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-18T13:00:00",
    "createdAt": "2025-08-27T11:34:31.768012",
    "updatedAt": "2025-08-27T11:34:31.768013",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 23",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-18T14:00:00",
    "createdAt": "2025-08-27T11:34:31.768018",
    "updatedAt": "2025-08-27T11:34:31.768019",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 23",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-18T15:00:00",
    "createdAt": "2025-08-27T11:34:31.768023",
    "updatedAt": "2025-08-27T11:34:31.768025",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 23",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-18T16:00:00",
    "createdAt": "2025-08-27T11:34:31.768030",
    "updatedAt": "2025-08-27T11:34:31.768032",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 23",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-18T17:00:00",
    "createdAt": "2025-08-27T11:34:31.768036",
    "updatedAt": "2025-08-27T11:34:31.768037",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 23",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-18T17:45:00",
    "createdAt": "2025-08-27T11:34:31.768042",
    "updatedAt": "2025-08-27T11:34:31.768043",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 23",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-18T18:30:00",
    "createdAt": "2025-08-27T11:34:31.768048",
    "updatedAt": "2025-08-27T11:34:31.768049",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 23",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-18T19:15:00",
    "createdAt": "2025-08-27T11:34:31.768053",
    "updatedAt": "2025-08-27T11:34:31.768055",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 23",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-18T20:00:00",
    "createdAt": "2025-08-27T11:34:31.768059",
    "updatedAt": "2025-08-27T11:34:31.768061",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 23",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-18T21:00:00",
    "createdAt": "2025-08-27T11:34:31.768065",
    "updatedAt": "2025-08-27T11:34:31.768067",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 23",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-18T22:00:00",
    "createdAt": "2025-08-27T11:34:31.768072",
    "updatedAt": "2025-08-27T11:34:31.768074",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 23",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-18T22:45:00",
    "createdAt": "2025-08-27T11:34:31.768078",
    "updatedAt": "2025-08-27T11:34:31.768080",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 23",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-18T23:45:00",
    "createdAt": "2025-08-27T11:34:31.768084",
    "updatedAt": "2025-08-27T11:34:31.768086",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 23",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-19T00:30:00",
    "createdAt": "2025-08-27T11:34:31.768090",
    "updatedAt": "2025-08-27T11:34:31.768091",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 23",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-19T01:15:00",
    "createdAt": "2025-08-27T11:34:31.768096",
    "updatedAt": "2025-08-27T11:34:31.768097",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 23",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-19T01:45:00",
    "createdAt": "2025-08-27T11:34:31.768108",
    "updatedAt": "2025-08-27T11:34:31.768109",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 23",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-19T02:15:00",
    "createdAt": "2025-08-27T11:34:31.768114",
    "updatedAt": "2025-08-27T11:34:31.768115",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 23",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-19T02:45:00",
    "createdAt": "2025-08-27T11:34:31.768120",
    "updatedAt": "2025-08-27T11:34:31.768121",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 24",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-19T10:00:00",
    "createdAt": "2025-08-27T11:34:31.768127",
    "updatedAt": "2025-08-27T11:34:31.768128",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 24",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-19T11:00:00",
    "createdAt": "2025-08-27T11:34:31.768133",
    "updatedAt": "2025-08-27T11:34:31.768134",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 24",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-19T12:00:00",
    "createdAt": "2025-08-27T11:34:31.768138",
    "updatedAt": "2025-08-27T11:34:31.768140",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 24",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-19T13:00:00",
    "createdAt": "2025-08-27T11:34:31.768144",
    "updatedAt": "2025-08-27T11:34:31.768145",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 24",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-19T14:00:00",
    "createdAt": "2025-08-27T11:34:31.768150",
    "updatedAt": "2025-08-27T11:34:31.768151",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 24",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-19T15:00:00",
    "createdAt": "2025-08-27T11:34:31.768157",
    "updatedAt": "2025-08-27T11:34:31.768159",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 24",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-19T16:00:00",
    "createdAt": "2025-08-27T11:34:31.768167",
    "updatedAt": "2025-08-27T11:34:31.768170",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 24",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-19T17:00:00",
    "createdAt": "2025-08-27T11:34:31.768177",
    "updatedAt": "2025-08-27T11:34:31.768180",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 24",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-19T17:45:00",
    "createdAt": "2025-08-27T11:34:31.768187",
    "updatedAt": "2025-08-27T11:34:31.768194",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 24",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-19T18:30:00",
    "createdAt": "2025-08-27T11:34:31.768200",
    "updatedAt": "2025-08-27T11:34:31.768201",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 24",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-19T19:15:00",
    "createdAt": "2025-08-27T11:34:31.768205",
    "updatedAt": "2025-08-27T11:34:31.768207",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 24",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-19T20:00:00",
    "createdAt": "2025-08-27T11:34:31.768212",
    "updatedAt": "2025-08-27T11:34:31.768213",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 24",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-19T21:00:00",
    "createdAt": "2025-08-27T11:34:31.768217",
    "updatedAt": "2025-08-27T11:34:31.768219",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 24",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-19T22:00:00",
    "createdAt": "2025-08-27T11:34:31.768223",
    "updatedAt": "2025-08-27T11:34:31.768225",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 24",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-19T22:45:00",
    "createdAt": "2025-08-27T11:34:31.768236",
    "updatedAt": "2025-08-27T11:34:31.768238",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 24",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-19T23:45:00",
    "createdAt": "2025-08-27T11:34:31.768245",
    "updatedAt": "2025-08-27T11:34:31.768246",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 24",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-20T00:30:00",
    "createdAt": "2025-08-27T11:34:31.768251",
    "updatedAt": "2025-08-27T11:34:31.768252",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 24",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-20T01:15:00",
    "createdAt": "2025-08-27T11:34:31.768257",
    "updatedAt": "2025-08-27T11:34:31.768258",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 24",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-20T01:45:00",
    "createdAt": "2025-08-27T11:34:31.768263",
    "updatedAt": "2025-08-27T11:34:31.768264",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 24",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-20T02:15:00",
    "createdAt": "2025-08-27T11:34:31.768269",
    "updatedAt": "2025-08-27T11:34:31.768270",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 24",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-20T02:45:00",
    "createdAt": "2025-08-27T11:34:31.768275",
    "updatedAt": "2025-08-27T11:34:31.768276",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 25",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-20T10:00:00",
    "createdAt": "2025-08-27T11:34:31.768282",
    "updatedAt": "2025-08-27T11:34:31.768283",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 25",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-20T11:00:00",
    "createdAt": "2025-08-27T11:34:31.768288",
    "updatedAt": "2025-08-27T11:34:31.768289",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 25",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-20T12:00:00",
    "createdAt": "2025-08-27T11:34:31.768294",
    "updatedAt": "2025-08-27T11:34:31.768295",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 25",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-20T13:00:00",
    "createdAt": "2025-08-27T11:34:31.768299",
    "updatedAt": "2025-08-27T11:34:31.768301",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 25",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-20T14:00:00",
    "createdAt": "2025-08-27T11:34:31.768305",
    "updatedAt": "2025-08-27T11:34:31.768307",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 25",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-20T15:00:00",
    "createdAt": "2025-08-27T11:34:31.768312",
    "updatedAt": "2025-08-27T11:34:31.768313",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 25",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-20T16:00:00",
    "createdAt": "2025-08-27T11:34:31.768318",
    "updatedAt": "2025-08-27T11:34:31.768319",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 25",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-20T17:00:00",
    "createdAt": "2025-08-27T11:34:31.768324",
    "updatedAt": "2025-08-27T11:34:31.768325",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 25",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-20T17:45:00",
    "createdAt": "2025-08-27T11:34:31.768329",
    "updatedAt": "2025-08-27T11:34:31.768331",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 25",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-20T18:30:00",
    "createdAt": "2025-08-27T11:34:31.768335",
    "updatedAt": "2025-08-27T11:34:31.768337",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 25",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-20T19:15:00",
    "createdAt": "2025-08-27T11:34:31.768344",
    "updatedAt": "2025-08-27T11:34:31.768346",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 25",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-20T20:00:00",
    "createdAt": "2025-08-27T11:34:31.768350",
    "updatedAt": "2025-08-27T11:34:31.768352",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 25",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-20T21:00:00",
    "createdAt": "2025-08-27T11:34:31.768360",
    "updatedAt": "2025-08-27T11:34:31.768361",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 25",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-20T22:00:00",
    "createdAt": "2025-08-27T11:34:31.768366",
    "updatedAt": "2025-08-27T11:34:31.768367",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 25",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-20T22:45:00",
    "createdAt": "2025-08-27T11:34:31.768371",
    "updatedAt": "2025-08-27T11:34:31.768373",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 25",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-20T23:45:00",
    "createdAt": "2025-08-27T11:34:31.768377",
    "updatedAt": "2025-08-27T11:34:31.768379",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 25",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-21T00:30:00",
    "createdAt": "2025-08-27T11:34:31.768383",
    "updatedAt": "2025-08-27T11:34:31.768385",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 25",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-21T01:15:00",
    "createdAt": "2025-08-27T11:34:31.768389",
    "updatedAt": "2025-08-27T11:34:31.768391",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 25",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-21T01:45:00",
    "createdAt": "2025-08-27T11:34:31.768395",
    "updatedAt": "2025-08-27T11:34:31.768397",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 25",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-21T02:15:00",
    "createdAt": "2025-08-27T11:34:31.768401",
    "updatedAt": "2025-08-27T11:34:31.768413",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 25",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-21T02:45:00",
    "createdAt": "2025-08-27T11:34:31.768418",
    "updatedAt": "2025-08-27T11:34:31.768419",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 26",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-21T10:00:00",
    "createdAt": "2025-08-27T11:34:31.768425",
    "updatedAt": "2025-08-27T11:34:31.768426",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 26",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-21T11:00:00",
    "createdAt": "2025-08-27T11:34:31.768431",
    "updatedAt": "2025-08-27T11:34:31.768432",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 26",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-21T12:00:00",
    "createdAt": "2025-08-27T11:34:31.768437",
    "updatedAt": "2025-08-27T11:34:31.768438",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 26",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-21T13:00:00",
    "createdAt": "2025-08-27T11:34:31.768443",
    "updatedAt": "2025-08-27T11:34:31.768444",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 26",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-21T14:00:00",
    "createdAt": "2025-08-27T11:34:31.768448",
    "updatedAt": "2025-08-27T11:34:31.768450",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 26",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-21T15:00:00",
    "createdAt": "2025-08-27T11:34:31.768454",
    "updatedAt": "2025-08-27T11:34:31.768456",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 26",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-21T16:00:00",
    "createdAt": "2025-08-27T11:34:31.768463",
    "updatedAt": "2025-08-27T11:34:31.768464",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 26",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-21T17:00:00",
    "createdAt": "2025-08-27T11:34:31.768469",
    "updatedAt": "2025-08-27T11:34:31.768470",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 26",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-21T17:45:00",
    "createdAt": "2025-08-27T11:34:31.768476",
    "updatedAt": "2025-08-27T11:34:31.768477",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 26",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-21T18:30:00",
    "createdAt": "2025-08-27T11:34:31.768481",
    "updatedAt": "2025-08-27T11:34:31.768483",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 26",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-21T19:15:00",
    "createdAt": "2025-08-27T11:34:31.768490",
    "updatedAt": "2025-08-27T11:34:31.768492",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 26",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-21T20:00:00",
    "createdAt": "2025-08-27T11:34:31.768496",
    "updatedAt": "2025-08-27T11:34:31.768498",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 26",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-21T21:00:00",
    "createdAt": "2025-08-27T11:34:31.768502",
    "updatedAt": "2025-08-27T11:34:31.768503",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 26",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-21T22:00:00",
    "createdAt": "2025-08-27T11:34:31.768508",
    "updatedAt": "2025-08-27T11:34:31.768509",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 26",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-21T22:45:00",
    "createdAt": "2025-08-27T11:34:31.768514",
    "updatedAt": "2025-08-27T11:34:31.768515",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 26",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-21T23:45:00",
    "createdAt": "2025-08-27T11:34:31.768520",
    "updatedAt": "2025-08-27T11:34:31.768521",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 26",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-22T00:30:00",
    "createdAt": "2025-08-27T11:34:31.768527",
    "updatedAt": "2025-08-27T11:34:31.768529",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 26",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-22T01:15:00",
    "createdAt": "2025-08-27T11:34:31.768533",
    "updatedAt": "2025-08-27T11:34:31.768535",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 26",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-22T01:45:00",
    "createdAt": "2025-08-27T11:34:31.768539",
    "updatedAt": "2025-08-27T11:34:31.768541",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 26",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-22T02:15:00",
    "createdAt": "2025-08-27T11:34:31.768545",
    "updatedAt": "2025-08-27T11:34:31.768547",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 26",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-22T02:45:00",
    "createdAt": "2025-08-27T11:34:31.768552",
    "updatedAt": "2025-08-27T11:34:31.768553",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 27",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-22T10:00:00",
    "createdAt": "2025-08-27T11:34:31.768558",
    "updatedAt": "2025-08-27T11:34:31.768560",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 27",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-22T11:00:00",
    "createdAt": "2025-08-27T11:34:31.768568",
    "updatedAt": "2025-08-27T11:34:31.768571",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 27",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-22T12:00:00",
    "createdAt": "2025-08-27T11:34:31.768583",
    "updatedAt": "2025-08-27T11:34:31.768586",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 27",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-22T13:00:00",
    "createdAt": "2025-08-27T11:34:31.768821",
    "updatedAt": "2025-08-27T11:34:31.768827",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 27",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-22T14:00:00",
    "createdAt": "2025-08-27T11:34:31.768835",
    "updatedAt": "2025-08-27T11:34:31.768836",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 27",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-22T15:00:00",
    "createdAt": "2025-08-27T11:34:31.768843",
    "updatedAt": "2025-08-27T11:34:31.768845",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 27",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-22T16:00:00",
    "createdAt": "2025-08-27T11:34:31.768851",
    "updatedAt": "2025-08-27T11:34:31.768853",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 27",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-22T17:00:00",
    "createdAt": "2025-08-27T11:34:31.768867",
    "updatedAt": "2025-08-27T11:34:31.768868",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 27",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-22T17:45:00",
    "createdAt": "2025-08-27T11:34:31.768873",
    "updatedAt": "2025-08-27T11:34:31.768875",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 27",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-22T18:30:00",
    "createdAt": "2025-08-27T11:34:31.768880",
    "updatedAt": "2025-08-27T11:34:31.768881",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 27",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-22T19:15:00",
    "createdAt": "2025-08-27T11:34:31.768886",
    "updatedAt": "2025-08-27T11:34:31.768887",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 27",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-22T20:00:00",
    "createdAt": "2025-08-27T11:34:31.768894",
    "updatedAt": "2025-08-27T11:34:31.768895",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 27",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-22T21:00:00",
    "createdAt": "2025-08-27T11:34:31.768900",
    "updatedAt": "2025-08-27T11:34:31.768902",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 27",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-22T22:00:00",
    "createdAt": "2025-08-27T11:34:31.768906",
    "updatedAt": "2025-08-27T11:34:31.768908",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 27",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-22T22:45:00",
    "createdAt": "2025-08-27T11:34:31.768912",
    "updatedAt": "2025-08-27T11:34:31.768922",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 27",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-22T23:45:00",
    "createdAt": "2025-08-27T11:34:31.768928",
    "updatedAt": "2025-08-27T11:34:31.768929",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 27",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-23T00:30:00",
    "createdAt": "2025-08-27T11:34:31.768935",
    "updatedAt": "2025-08-27T11:34:31.768936",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 27",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-23T01:15:00",
    "createdAt": "2025-08-27T11:34:31.768943",
    "updatedAt": "2025-08-27T11:34:31.768945",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 27",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-23T01:45:00",
    "createdAt": "2025-08-27T11:34:31.768949",
    "updatedAt": "2025-08-27T11:34:31.768951",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 27",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-23T02:15:00",
    "createdAt": "2025-08-27T11:34:31.768959",
    "updatedAt": "2025-08-27T11:34:31.768961",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 27",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-23T02:45:00",
    "createdAt": "2025-08-27T11:34:31.768966",
    "updatedAt": "2025-08-27T11:34:31.768967",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 28",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-23T10:00:00",
    "createdAt": "2025-08-27T11:34:31.768977",
    "updatedAt": "2025-08-27T11:34:31.768978",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 28",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-23T11:00:00",
    "createdAt": "2025-08-27T11:34:31.768983",
    "updatedAt": "2025-08-27T11:34:31.768984",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 28",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-23T12:00:00",
    "createdAt": "2025-08-27T11:34:31.768989",
    "updatedAt": "2025-08-27T11:34:31.768990",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 28",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-23T13:00:00",
    "createdAt": "2025-08-27T11:34:31.768995",
    "updatedAt": "2025-08-27T11:34:31.768996",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 28",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-23T14:00:00",
    "createdAt": "2025-08-27T11:34:31.769003",
    "updatedAt": "2025-08-27T11:34:31.769005",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 28",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-23T15:00:00",
    "createdAt": "2025-08-27T11:34:31.769009",
    "updatedAt": "2025-08-27T11:34:31.769010",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 28",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-23T16:00:00",
    "createdAt": "2025-08-27T11:34:31.769015",
    "updatedAt": "2025-08-27T11:34:31.769016",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 28",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-23T17:00:00",
    "createdAt": "2025-08-27T11:34:31.769021",
    "updatedAt": "2025-08-27T11:34:31.769022",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 28",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-23T17:45:00",
    "createdAt": "2025-08-27T11:34:31.769027",
    "updatedAt": "2025-08-27T11:34:31.769029",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 28",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-23T18:30:00",
    "createdAt": "2025-08-27T11:34:31.769033",
    "updatedAt": "2025-08-27T11:34:31.769035",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 28",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-23T19:15:00",
    "createdAt": "2025-08-27T11:34:31.769039",
    "updatedAt": "2025-08-27T11:34:31.769040",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 28",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-23T20:00:00",
    "createdAt": "2025-08-27T11:34:31.769045",
    "updatedAt": "2025-08-27T11:34:31.769046",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 28",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-23T21:00:00",
    "createdAt": "2025-08-27T11:34:31.769050",
    "updatedAt": "2025-08-27T11:34:31.769052",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 28",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-23T22:00:00",
    "createdAt": "2025-08-27T11:34:31.769066",
    "updatedAt": "2025-08-27T11:34:31.769068",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 28",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-23T22:45:00",
    "createdAt": "2025-08-27T11:34:31.769072",
    "updatedAt": "2025-08-27T11:34:31.769073",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 28",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-23T23:45:00",
    "createdAt": "2025-08-27T11:34:31.769082",
    "updatedAt": "2025-08-27T11:34:31.769084",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 28",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-24T00:30:00",
    "createdAt": "2025-08-27T11:34:31.769088",
    "updatedAt": "2025-08-27T11:34:31.769090",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 28",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-24T01:15:00",
    "createdAt": "2025-08-27T11:34:31.769094",
    "updatedAt": "2025-08-27T11:34:31.769095",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 28",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-24T01:45:00",
    "createdAt": "2025-08-27T11:34:31.769100",
    "updatedAt": "2025-08-27T11:34:31.769101",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 28",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-24T02:15:00",
    "createdAt": "2025-08-27T11:34:31.769106",
    "updatedAt": "2025-08-27T11:34:31.769107",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 28",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-24T02:45:00",
    "createdAt": "2025-08-27T11:34:31.769116",
    "updatedAt": "2025-08-27T11:34:31.769117",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 29",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-24T10:00:00",
    "createdAt": "2025-08-27T11:34:31.769124",
    "updatedAt": "2025-08-27T11:34:31.769126",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 29",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-24T11:00:00",
    "createdAt": "2025-08-27T11:34:31.769130",
    "updatedAt": "2025-08-27T11:34:31.769132",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 29",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-24T12:00:00",
    "createdAt": "2025-08-27T11:34:31.769140",
    "updatedAt": "2025-08-27T11:34:31.769141",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 29",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-24T13:00:00",
    "createdAt": "2025-08-27T11:34:31.769146",
    "updatedAt": "2025-08-27T11:34:31.769147",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 29",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-24T14:00:00",
    "createdAt": "2025-08-27T11:34:31.769160",
    "updatedAt": "2025-08-27T11:34:31.769162",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 29",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-24T15:00:00",
    "createdAt": "2025-08-27T11:34:31.769169",
    "updatedAt": "2025-08-27T11:34:31.769170",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 29",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-24T16:00:00",
    "createdAt": "2025-08-27T11:34:31.769174",
    "updatedAt": "2025-08-27T11:34:31.769176",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 29",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-24T17:00:00",
    "createdAt": "2025-08-27T11:34:31.769180",
    "updatedAt": "2025-08-27T11:34:31.769181",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 29",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-24T17:45:00",
    "createdAt": "2025-08-27T11:34:31.769186",
    "updatedAt": "2025-08-27T11:34:31.769187",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 29",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-24T18:30:00",
    "createdAt": "2025-08-27T11:34:31.769192",
    "updatedAt": "2025-08-27T11:34:31.769193",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 29",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-24T19:15:00",
    "createdAt": "2025-08-27T11:34:31.769197",
    "updatedAt": "2025-08-27T11:34:31.769198",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 29",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-24T20:00:00",
    "createdAt": "2025-08-27T11:34:31.769206",
    "updatedAt": "2025-08-27T11:34:31.769208",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 29",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-24T21:00:00",
    "createdAt": "2025-08-27T11:34:31.769212",
    "updatedAt": "2025-08-27T11:34:31.769214",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 29",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-24T22:00:00",
    "createdAt": "2025-08-27T11:34:31.769218",
    "updatedAt": "2025-08-27T11:34:31.769219",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 29",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-24T22:45:00",
    "createdAt": "2025-08-27T11:34:31.769223",
    "updatedAt": "2025-08-27T11:34:31.769224",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 29",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-24T23:45:00",
    "createdAt": "2025-08-27T11:34:31.769229",
    "updatedAt": "2025-08-27T11:34:31.769230",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 29",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-25T00:30:00",
    "createdAt": "2025-08-27T11:34:31.769234",
    "updatedAt": "2025-08-27T11:34:31.769236",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 29",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-25T01:15:00",
    "createdAt": "2025-08-27T11:34:31.769240",
    "updatedAt": "2025-08-27T11:34:31.769241",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 29",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-25T01:45:00",
    "createdAt": "2025-08-27T11:34:31.769245",
    "updatedAt": "2025-08-27T11:34:31.769247",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 29",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-25T02:15:00",
    "createdAt": "2025-08-27T11:34:31.769253",
    "updatedAt": "2025-08-27T11:34:31.769255",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 29",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-25T02:45:00",
    "createdAt": "2025-08-27T11:34:31.769262",
    "updatedAt": "2025-08-27T11:34:31.769264",
    "duration": 30
  },
  {
    "title": "HTML Basics",
    "description": "Front-End - HTML Basics task for day 30",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-25T10:00:00",
    "createdAt": "2025-08-27T11:34:31.769270",
    "updatedAt": "2025-08-27T11:34:31.769271",
    "duration": 60
  },
  {
    "title": "CSS Basics",
    "description": "Front-End - CSS Basics task for day 30",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-25T11:00:00",
    "createdAt": "2025-08-27T11:34:31.769276",
    "updatedAt": "2025-08-27T11:34:31.769277",
    "duration": 60
  },
  {
    "title": "Flexbox & Grid",
    "description": "Front-End - Flexbox & Grid task for day 30",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-25T12:00:00",
    "createdAt": "2025-08-27T11:34:31.769282",
    "updatedAt": "2025-08-27T11:34:31.769283",
    "duration": 60
  },
  {
    "title": "Vanilla JS DOM & Events",
    "description": "Front-End - Vanilla JS DOM & Events task for day 30",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-25T13:00:00",
    "createdAt": "2025-08-27T11:34:31.769288",
    "updatedAt": "2025-08-27T11:34:31.769289",
    "duration": 60
  },
  {
    "title": "JS ES6+",
    "description": "Front-End - JS ES6+ task for day 30",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-25T14:00:00",
    "createdAt": "2025-08-27T11:34:31.769294",
    "updatedAt": "2025-08-27T11:34:31.769295",
    "duration": 60
  },
  {
    "title": "React Components & Props",
    "description": "Front-End - React Components & Props task for day 30",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-25T15:00:00",
    "createdAt": "2025-08-27T11:34:31.769299",
    "updatedAt": "2025-08-27T11:34:31.769301",
    "duration": 60
  },
  {
    "title": "React Hooks Intro",
    "description": "Front-End - React Hooks Intro task for day 30",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-25T16:00:00",
    "createdAt": "2025-08-27T11:34:31.769306",
    "updatedAt": "2025-08-27T11:34:31.769307",
    "duration": 60
  },
  {
    "title": "Vue CLI & First Component",
    "description": "Front-End - Vue CLI & First Component task for day 30",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-25T17:00:00",
    "createdAt": "2025-08-27T11:34:31.769317",
    "updatedAt": "2025-08-27T11:34:31.769318",
    "duration": 45
  },
  {
    "title": "Vue Directives",
    "description": "Front-End - Vue Directives task for day 30",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-25T17:45:00",
    "createdAt": "2025-08-27T11:34:31.769322",
    "updatedAt": "2025-08-27T11:34:31.769324",
    "duration": 45
  },
  {
    "title": "Angular TypeScript Basics",
    "description": "Front-End - Angular TypeScript Basics task for day 30",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-25T18:30:00",
    "createdAt": "2025-08-27T11:34:31.769328",
    "updatedAt": "2025-08-27T11:34:31.769330",
    "duration": 45
  },
  {
    "title": "Angular Component & Routing",
    "description": "Front-End - Angular Component & Routing task for day 30",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-25T19:15:00",
    "createdAt": "2025-08-27T11:34:31.769334",
    "updatedAt": "2025-08-27T11:34:31.769335",
    "duration": 45
  },
  {
    "title": "Java OOP Basics",
    "description": "Back-End - Java OOP Basics task for day 30",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-25T20:00:00",
    "createdAt": "2025-08-27T11:34:31.769340",
    "updatedAt": "2025-08-27T11:34:31.769341",
    "duration": 60
  },
  {
    "title": "Python OOP Basics",
    "description": "Back-End - Python OOP Basics task for day 30",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-25T21:00:00",
    "createdAt": "2025-08-27T11:34:31.769346",
    "updatedAt": "2025-08-27T11:34:31.769347",
    "duration": 60
  },
  {
    "title": "Node.js Basics",
    "description": "Back-End - Node.js Basics task for day 30",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-25T22:00:00",
    "createdAt": "2025-08-27T11:34:31.769352",
    "updatedAt": "2025-08-27T11:34:31.769353",
    "duration": 45
  },
  {
    "title": "PHP Laravel Basics",
    "description": "Back-End - PHP Laravel Basics task for day 30",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-09-25T22:45:00",
    "createdAt": "2025-08-27T11:34:31.769359",
    "updatedAt": "2025-08-27T11:34:31.769360",
    "duration": 60
  },
  {
    "title": "SQL Basics",
    "description": "Databases - SQL Basics task for day 30",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-25T23:45:00",
    "createdAt": "2025-08-27T11:34:31.769364",
    "updatedAt": "2025-08-27T11:34:31.769366",
    "duration": 45
  },
  {
    "title": "MongoDB Basics",
    "description": "Databases - MongoDB Basics task for day 30",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-26T00:30:00",
    "createdAt": "2025-08-27T11:34:31.769370",
    "updatedAt": "2025-08-27T11:34:31.769371",
    "duration": 45
  },
  {
    "title": "Linux Basics",
    "description": "DevOps - Linux Basics task for day 30",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-26T01:15:00",
    "createdAt": "2025-08-27T11:34:31.769379",
    "updatedAt": "2025-08-27T11:34:31.769380",
    "duration": 30
  },
  {
    "title": "Git & GitHub Basics",
    "description": "DevOps - Git & GitHub Basics task for day 30",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-26T01:45:00",
    "createdAt": "2025-08-27T11:34:31.769384",
    "updatedAt": "2025-08-27T11:34:31.769386",
    "duration": 30
  },
  {
    "title": "Plan mini project",
    "description": "Projects - Plan mini project task for day 30",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-26T02:15:00",
    "createdAt": "2025-08-27T11:34:31.769390",
    "updatedAt": "2025-08-27T11:34:31.769391",
    "duration": 30
  },
  {
    "title": "Agile & Scrum Notes",
    "description": "Soft Skills - Agile & Scrum Notes task for day 30",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-09-26T02:45:00",
    "createdAt": "2025-08-27T11:34:31.769396",
    "updatedAt": "2025-08-27T11:34:31.769397",
    "duration": 30
  }
];



export async function GET(req: NextRequest) {
  try {




    const { db } = await connectToDatabase();

    // clear existing docs if
    await db.collection('todos').deleteMany({});

    // insert all todos
    await db.collection('todos').insertMany(todos); 

    return NextResponse.json({ message: 'Todos inserted successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error inserting todos', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}