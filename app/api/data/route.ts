import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

const todos = [
  // Week 1: Basic Projects + Java Basics + Docker Intro
  // Day 1
  {
    title: "تطوير مشروع React صغير (واجهة + state)",
    description: "إنشاء واجهة مستخدم تفاعلية باستخدام React مع إدارة الحالة",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-26T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },
  {
    title: "Python: سكريبت صغير لمعالجة بيانات",
    description: "كتابة سكريبت Python لمعالجة وتحليل البيانات",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-26T11:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Java: أساسيات + OOP",
    description: "تعلم أساسيات Java والبرمجة الموجهة بالكائنات",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-26T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-08-26T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 2
  {
    title: "Node.js backend: REST API بسيط",
    description: "إنشاء REST API باستخدام Node.js و Express",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 150
  },
  {
    title: "MySQL/MongoDB: استعلامات أساسية",
    description: "تعلم الاستعلامات الأساسية في قواعد البيانات",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-27T11:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Java: حل مسائل بسيطة (arrays, loops)",
    description: "حل مسائل برمجية بسيطة في Java",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-27T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-08-27T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 3
  {
    title: "React: إضافة ميزات جديدة (forms, validation)",
    description: "إضافة النماذج والتحقق من صحة البيانات في React",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },
  {
    title: "Python: Flask أو Django تجربة",
    description: "تجربة إطار عمل Flask أو Django لتطوير الويب",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-28T11:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 105
  },
  {
    title: "Java: حل مسائل على HackerRank (loops, conditions)",
    description: "حل مسائل الحلقات والشروط على منصة HackerRank",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-28T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-08-28T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 4
  {
    title: "Laravel: مشروع CRUD بسيط",
    description: "إنشاء تطبيق CRUD باستخدام Laravel",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 135
  },
  {
    title: "Node.js: ربط API بقاعدة بيانات",
    description: "ربط REST API مع قاعدة البيانات",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-29T11:45:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Java: OOP: classes, objects, methods",
    description: "تعلم الفئات والكائنات والطرق في Java",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-29T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-08-29T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 5
  {
    title: "React + Node.js: ربط Frontend مع Backend",
    description: "ربط واجهة المستخدم مع الخادم الخلفي",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 150
  },
  {
    title: "Python: معالجة ملفات أو بيانات JSON",
    description: "معالجة الملفات وبيانات JSON باستخدام Python",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-30T11:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 75
  },
  {
    title: "Java: حل مسائل arrays + strings",
    description: "حل مسائل المصفوفات والنصوص في Java",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-30T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-08-30T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 6
  {
    title: "Docker: تعلم أوامر build, run, images",
    description: "تعلم الأوامر الأساسية في Docker",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },
  {
    title: "Node.js: حاوية مشروع صغير بـ Docker",
    description: "إنشاء حاوية Docker لمشروع Node.js",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-08-31T11:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Java: مسائل basic algorithms",
    description: "حل مسائل الخوارزميات الأساسية في Java",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-08-31T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-08-31T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 7
  {
    title: "راحة / مراجعة كل ما تعلمته خلال الأسبوع",
    description: "يوم راحة ومراجعة شاملة للأسبوع الأول",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-01T10:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 180
  },
  {
    title: "تحسين Portfolio: نشر مشاريع على GitHub",
    description: "تحديث وتحسين المحفظة ونشر المشاريع",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-01T13:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },

  // Week 2: Projects + Java Algorithms + Docker
  // Day 8
  {
    title: "React project: إضافة authentication",
    description: "إضافة نظام المصادقة لمشروع React",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },
  {
    title: "Python: مشروع ويب صغير",
    description: "إنشاء مشروع ويب صغير باستخدام Python",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-02T11:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Java: data structures (arrays, linked lists)",
    description: "تعلم هياكل البيانات في Java",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-02T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Docker: تجربة compose لمشروعك",
    description: "استخدام Docker Compose لإدارة المشاريع",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-02T15:45:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-02T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 9
  {
    title: "Node.js: إضافة CRUD كامل",
    description: "إكمال عمليات CRUD في Node.js",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },
  {
    title: "Laravel: روابط قواعد بيانات + REST API",
    description: "ربط Laravel بقاعدة البيانات وإنشاء REST API",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-03T11:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 105
  },
  {
    title: "Java: حل مسائل sorting",
    description: "حل مسائل الترتيب في Java",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-03T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 75
  },
  {
    title: "Docker: حاوية مشروع Laravel",
    description: "إنشاء حاوية Docker لمشروع Laravel",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-03T15:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-03T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 10
  {
    title: "React: تحسين UI/UX",
    description: "تحسين واجهة المستخدم وتجربة المستخدم",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },
  {
    title: "Python: إضافة feature جديدة للمشروع",
    description: "إضافة ميزة جديدة للمشروع Python",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-04T11:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Java: حل مسائل searching (linear, binary)",
    description: "حل مسائل البحث الخطي والثنائي",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-04T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 75
  },
  {
    title: "Docker: نشر مشروع على VPS",
    description: "نشر المشروع على خادم خاص باستخدام Docker",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-04T15:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-04T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 11
  {
    title: "Node.js + MongoDB: aggregation queries",
    description: "استخدام استعلامات التجميع في MongoDB",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },
  {
    title: "Laravel: middleware + authentication",
    description: "إضافة البرمجيات الوسيطة والمصادقة في Laravel",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-05T11:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Java: recursion problems",
    description: "حل مسائل الاستدعاء المتكرر في Java",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-05T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Docker: التعامل مع volumes",
    description: "تعلم استخدام Volumes في Docker",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-05T15:45:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-05T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 12
  {
    title: "React + Node.js: مشروع Full-Stack بسيط",
    description: "إنشاء مشروع Full-Stack كامل",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 150
  },
  {
    title: "Python: REST API صغير",
    description: "إنشاء REST API صغير باستخدام Python",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-06T11:45:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 75
  },
  {
    title: "Java: stack, queue problems",
    description: "حل مسائل المكدس والطابور في Java",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-06T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 75
  },
  {
    title: "Docker: تجربة networking بين حاويتين",
    description: "تعلم الشبكات بين الحاويات في Docker",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-06T15:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 60
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-06T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 13
  {
    title: "مراجعة مشاريع الأسبوع",
    description: "مراجعة شاملة لجميع مشاريع الأسبوع الثاني",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },
  {
    title: "تحسين ال Portfolio",
    description: "تحديث وتحسين المحفظة البرمجية",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-07T11:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Java: حل مسائل on LeetCode (easy/medium)",
    description: "حل مسائل متوسطة على منصة LeetCode",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-07T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Docker: قراءة documentation متقدمة",
    description: "قراءة الوثائق المتقدمة لـ Docker",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-07T15:45:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-07T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 14
  {
    title: "راحة / مراجعة عامة",
    description: "يوم راحة ومراجعة عامة للأسبوعين الأولين",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-08T10:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 180
  },
  {
    title: "تطبيق ما تعلمته على مشروع واحد كامل",
    description: "تطبيق جميع المهارات المكتسبة في مشروع واحد",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-08T13:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 180
  },

  // Week 3: Improve Portfolio + Advanced Algorithms + Docker
  // Day 15
  {
    title: "React + Node.js: إضافة ميزات متقدمة (Redux / context)",
    description: "إضافة إدارة الحالة المتقدمة باستخدام Redux أو Context",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 150
  },
  {
    title: "Java: sorting + searching advanced",
    description: "خوارزميات الترتيب والبحث المتقدمة",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-09T12:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Docker: كتابة Dockerfile لكل مشروع",
    description: "إنشاء Dockerfile مخصص لكل مشروع",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-09T14:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 75
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-09T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 16
  {
    title: "Laravel: إضافة REST API متقدم",
    description: "تطوير REST API متقدم في Laravel",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 135
  },
  {
    title: "Python: Django project إضافي",
    description: "إنشاء مشروع إضافي باستخدام Django",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-10T11:45:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 105
  },
  {
    title: "Java: recursion + dynamic programming simple",
    description: "الاستدعاء المتكرر والبرمجة الديناميكية البسيطة",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-10T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 105
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-10T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 17
  {
    title: "Node.js: تحسين الأداء + security",
    description: "تحسين أداء وأمان تطبيقات Node.js",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },
  {
    title: "React: تحسين UI/UX",
    description: "تحسين واجهة المستخدم وتجربة المستخدم في React",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-11T11:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Java: data structures (trees)",
    description: "تعلم هياكل البيانات الشجرية في Java",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-11T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Docker: Compose multi-container project",
    description: "إنشاء مشروع متعدد الحاويات باستخدام Docker Compose",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-11T15:45:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-11T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 18
  {
    title: "Full-Stack project: ربط كل شيء (React + Node + DB)",
    description: "إنشاء مشروع Full-Stack كامل مع React وNode.js وقاعدة البيانات",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 180
  },
  {
    title: "Java: solve problems on LeetCode",
    description: "حل مسائل متنوعة على منصة LeetCode",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-12T12:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Docker: نشر المشروع",
    description: "نشر المشروع الكامل باستخدام Docker",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-12T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 75
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-12T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 19
  {
    title: "Laravel + MySQL: تحسين queries",
    description: "تحسين استعلامات قاعدة البيانات في Laravel",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },
  {
    title: "Python: إضافة feature جديدة",
    description: "إضافة ميزة جديدة للمشروع Python",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-13T11:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Java: dynamic programming (easy)",
    description: "حل مسائل البرمجة الديناميكية السهلة",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-13T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Docker: optimization",
    description: "تحسين وتطوير حاويات Docker",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-13T15:45:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 45
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-13T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 20
  {
    title: "مراجعة جميع المشاريع، إصلاح الأخطاء",
    description: "مراجعة شاملة وإصلاح الأخطاء في جميع المشاريع",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 150
  },
  {
    title: "Java: حل مسائل متنوعة على HackerRank",
    description: "حل مسائل متنوعة على منصة HackerRank",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-14T12:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Docker: تجربة deployment على VPS",
    description: "تجربة نشر المشاريع على خادم VPS",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-14T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 75
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-14T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 21
  {
    title: "راحة / مراجعة عامة",
    description: "يوم راحة ومراجعة عامة للأسبوع الثالث",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-15T10:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 180
  },
  {
    title: "تحديث GitHub portfolio بكل المشاريع",
    description: "تحديث المحفظة على GitHub بجميع المشاريع الجديدة",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-15T13:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },

  // Week 4: Review, Apply, and Prepare for Job Applications
  // Day 22
  {
    title: "مراجعة Java: all topics (OOP, DS, algorithms)",
    description: "مراجعة شاملة لجميع مواضيع Java",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 150
  },
  {
    title: "حل مسائل متوسطة على LeetCode",
    description: "حل مسائل متوسطة الصعوبة على منصة LeetCode",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-16T12:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Docker: تجربة مشاريع متعددة containers",
    description: "العمل مع مشاريع معقدة متعددة الحاويات",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-16T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 75
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-16T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 23
  {
    title: "React + Node.js: مشروع كامل جاهز للنشر",
    description: "إنهاء مشروع Full-Stack كامل وجاهز للنشر",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 180
  },
  {
    title: "Python: إضافة REST API صغير",
    description: "إنشاء REST API صغير إضافي باستخدام Python",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-17T12:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Java: dynamic programming medium",
    description: "حل مسائل البرمجة الديناميكية متوسطة الصعوبة",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-17T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 105
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-17T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 24
  {
    title: "Laravel project كامل + REST API",
    description: "إنهاء مشروع Laravel كامل مع REST API",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 150
  },
  {
    title: "Java: Trees + Recursion problems",
    description: "حل مسائل الأشجار والاستدعاء المتكرر",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-18T12:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 105
  },
  {
    title: "Docker: كتابة documentation لمشاريعك",
    description: "كتابة وثائق شاملة للمشاريع مع Docker",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-18T14:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 75
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-18T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 25
  {
    title: "Full-Stack project: نشر على GitHub + deployment",
    description: "نشر المشروع الكامل على GitHub مع deployment",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 180
  },
  {
    title: "Java: حل مسائل متنوعة على HackerRank",
    description: "حل مسائل متنوعة ومتقدمة على HackerRank",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-19T12:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 105
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-19T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 26
  {
    title: "تحسين Portfolio: README + screenshots + فيديو قصير لكل مشروع",
    description: "تحسين المحفظة بإضافة وثائق ولقطات شاشة وفيديوهات",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-20T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 180
  },
  {
    title: "Java: مراجعة جميع الحلول",
    description: "مراجعة شاملة لجميع الحلول البرمجية في Java",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-20T12:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "Docker: تحسين images",
    description: "تحسين وتطوير Docker images للمشاريع",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-20T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 75
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-20T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 27
  {
    title: "تحديث CV + LinkedIn",
    description: "تحديث السيرة الذاتية وملف LinkedIn بالمهارات الجديدة",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },
  {
    title: "البحث عن وظائف مناسبة",
    description: "البحث عن الوظائف المناسبة في الشركات التقنية",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T11:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "تقديم على 3–5 وظائف",
    description: "التقديم على وظائف مناسبة في الشركات التقنية",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-21T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-21T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 28
  {
    title: "التدرب على مقابلات تقنية (JavaScript, Node, Python)",
    description: "التحضير والتدرب على المقابلات التقنية",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 150
  },
  {
    title: "خوارزميات Java على الورق",
    description: "حل خوارزميات Java بالقلم والورق للتحضير للمقابلات",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-22T12:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  },
  {
    title: "مراجعة Docker concepts",
    description: "مراجعة شاملة لمفاهيم Docker الأساسية والمتقدمة",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-22T14:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 75
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-22T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 29
  {
    title: "التدرب على مقابلات سلوكية (teamwork, problem solving)",
    description: "التحضير للمقابلات السلوكية والشخصية",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 150
  },
  {
    title: "حل مسائل Java إضافية على LeetCode",
    description: "حل مسائل إضافية ومتقدمة على LeetCode",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-23T12:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },
  {
    title: "15 دقيقة Monkey Type",
    description: "تحسين سرعة الكتابة باستخدام Monkey Type",
    completed: false,
    priority: "low",
    dueDate: new Date("2025-09-23T16:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 15
  },

  // Day 30
  {
    title: "راحة / مراجعة عامة لكل ما تعلمته",
    description: "يوم راحة ومراجعة شاملة لجميع المهارات المكتسبة خلال الشهر",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-24T09:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 180
  },
  {
    title: "تنظيم المشاريع على GitHub / Portfolio",
    description: "التنظيم النهائي للمحفظة والمشاريع على GitHub",
    completed: false,
    priority: "high",
    dueDate: new Date("2025-09-24T12:00:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 120
  },
  {
    title: "وضع خطة الشهر التالي للتقدم أكثر في الخوارزميات و Docker",
    description: "وضع خطة استراتيجية للشهر التالي لتطوير المهارات أكثر",
    completed: false,
    priority: "medium",
    dueDate: new Date("2025-09-24T14:30:00.000Z"),
    createdAt: new Date(),
    updatedAt: new Date(),
    duration: 90
  }
];



export async function GET(req: NextRequest) {
  try {




   /*  const { db } = await connectToDatabase();

    // clear existing docs if
    await db.collection('todos').deleteMany({});

    // insert all todos
    await db.collection('todos').insertMany(todos); */

    return NextResponse.json({ message: 'Todos inserted successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error inserting todos', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}