export interface Project {
  title: string;
  description: string;
  /** Short one-liner used on the project carousel card */
  pitch?: string;
  /** Handwritten margin note shown on the card */
  note?: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "MidHub.ID",
    description: "Indonesia's integrated digital ecosystem for heavy equipment, connecting buyers and sellers across the construction and industrial sectors. Built the entire web frontend from scratch, shipping 15+ feature modules including authentication, equipment listings, real-time chat, advanced search & filtering, Midtrans payments, and full EN/ID bilingual support.",
    pitch: "Indonesia's heavy equipment marketplace - auth, listings, real-time chat, search, and Midtrans payments.",
    note: "built the whole frontend solo - 15+ modules",
    technologies: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Socket.IO", "Midtrans"],
    imageUrl: "image8.png",
    liveUrl: "https://midhub.id",
    gradient: "bg-gradient-to-br from-amber-400 to-blue-700"
  },
  {
    title: "Donation Tracker",
    description: "A full-stack donation management platform facilitating transparent connections between donors and recipients. Features user registration, verification, donation forms, real-time monitoring, and comprehensive dashboards.",
    pitch: "Full-stack donation platform connecting donors and recipients - verification, forms, and live dashboards.",
    note: "transparency, but make it full-stack",
    technologies: ["Next.js", "Express.js", "PostgreSQL", "MinIO", "Tailwind CSS"],
    imageUrl: "image1.png",
    githubUrl: "https://github.com/Nicolas7020/DonationAOL",
    gradient: "bg-gradient-to-br from-blue-400 to-purple-600"
  },
  {
    title: "Christian Wijaya Fashion",
    description: "Complete e-commerce website for fashion brand including prototyping in Figma and implementation with vanilla web technologies. Features responsive design, interactive cart, and smooth user experience.",
    pitch: "E-commerce site for a fashion brand - from Figma prototype to hand-rolled HTML, CSS, and JS.",
    note: "no frameworks were harmed in the making",
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma"],
    imageUrl: "image2.png",
    githubUrl: "https://github.com/Nicolas7020/HCI",
    gradient: "bg-gradient-to-br from-pink-400 to-purple-600"
  },
  {
    title: "Fake News Detection",
    description: "Machine learning system for detecting fake news using Logistic Regression with NLP techniques. Deployed as an interactive web application with real-time prediction and confidence scoring.",
    pitch: "ML system that flags fake news with logistic regression and NLP - live predictions with confidence scores.",
    note: "trust, but verify (with scikit-learn)",
    technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas", "NumPy"],
    imageUrl: "image3.png",
    githubUrl: "https://github.com/Nicolas7020/MachineLearning",
    gradient: "bg-gradient-to-br from-red-400 to-orange-600"
  },
  {
    title: "ATM System",
    description: "Object-oriented ATM simulation implementing State Pattern and Singleton Pattern. Features comprehensive state management, UML documentation, and robust design pattern implementation.",
    pitch: "Object-oriented ATM simulation built on the State and Singleton patterns, fully documented in UML.",
    note: "design patterns, by the book",
    technologies: ["Java", "UML", "Design Patterns", "OOP"],
    imageUrl: "image4.png",
    githubUrl: "https://github.com/Nicolas7020/FrameworkLayerArchitectureAOL",
    gradient: "bg-gradient-to-br from-green-400 to-blue-600"
  },
  {
    title: "AI Classroom Monitor",
    description: "CNN-based student activity monitoring system with face recognition. Detects and classifies student activities (listening, writing, drinking, distracted) with automated Excel reporting.",
    pitch: "CNN-based classroom monitor with face recognition - classifies student activity and reports to Excel.",
    note: "it knows when you're distracted",
    technologies: ["Python", "CNN", "OpenCV", "Face Recognition", "Excel"],
    imageUrl: "image5.png",
    githubUrl: "https://github.com/Nicolas7020/IntelligentClassroomSystem",
    gradient: "bg-gradient-to-br from-cyan-400 to-blue-600"
  },
  {
    title: "Stock Price Prediction",
    description: "LSTM deep learning model for stock price prediction with web application interface. Features hyperparameter tuning, model optimization, and interactive visualization of predictions.",
    pitch: "LSTM deep learning model that forecasts stock prices, served through a Flask web app with visualizations.",
    note: "past performance ≠ future results, but LSTM tries",
    technologies: ["Python", "LSTM", "Flask", "HTML/CSS", "JavaScript"],
    imageUrl: "image6.png",
    githubUrl: "https://github.com/Nicolas7020/StockPredict",
    gradient: "bg-gradient-to-br from-yellow-400 to-orange-600"
  },
  {
    title: "Burncup",
    description: "Competition management platform for Binus Bekasi annual event. Handles competition registration, payment processing, and team management with full frontend implementation.",
    pitch: "Competition platform for BINUS Bekasi's annual festival - registration, payments, and team management.",
    note: "powers a real 5-day campus festival",
    technologies: ["Frontend Stack", "Payment Integration", "Team Management"],
    imageUrl: "image7.png",
    liveUrl: "https://burncup.com",
    gradient: "bg-gradient-to-br from-purple-400 to-pink-600"
  }
];
