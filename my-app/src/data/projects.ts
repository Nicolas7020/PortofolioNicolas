export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "Donation Tracker",
    description: "A full-stack donation management platform facilitating transparent connections between donors and recipients. Features user registration, verification, donation forms, real-time monitoring, and comprehensive dashboards.",
    technologies: ["Next.js", "Express.js", "PostgreSQL", "MinIO", "Tailwind CSS"],
    imageUrl: "image1.png",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "bg-gradient-to-br from-blue-400 to-purple-600"
  },
  {
    title: "Christian Wijaya Fashion",
    description: "Complete e-commerce website for fashion brand including prototyping in Figma and implementation with vanilla web technologies. Features responsive design, interactive cart, and smooth user experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma"],
    imageUrl: "image2.png",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "bg-gradient-to-br from-pink-400 to-purple-600"
  },
  {
    title: "Fake News Detection",
    description: "Machine learning system for detecting fake news using Logistic Regression with NLP techniques. Deployed as an interactive web application with real-time prediction and confidence scoring.",
    technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas", "NumPy"],
    imageUrl: "image3.png",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "bg-gradient-to-br from-red-400 to-orange-600"
  },
  {
    title: "ATM System",
    description: "Object-oriented ATM simulation implementing State Pattern and Singleton Pattern. Features comprehensive state management, UML documentation, and robust design pattern implementation.",
    technologies: ["Java", "UML", "Design Patterns", "OOP"],
    imageUrl: "image4.png",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "bg-gradient-to-br from-green-400 to-blue-600"
  },
  {
    title: "AI Classroom Monitor",
    description: "CNN-based student activity monitoring system with face recognition. Detects and classifies student activities (listening, writing, drinking, distracted) with automated Excel reporting.",
    technologies: ["Python", "CNN", "OpenCV", "Face Recognition", "Excel"],
    imageUrl: "image5.png",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "bg-gradient-to-br from-cyan-400 to-blue-600"
  },
  {
    title: "Stock Price Prediction",
    description: "LSTM deep learning model for stock price prediction with web application interface. Features hyperparameter tuning, model optimization, and interactive visualization of predictions.",
    technologies: ["Python", "LSTM", "Flask", "HTML/CSS", "JavaScript"],
    imageUrl: "image6.png",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "bg-gradient-to-br from-yellow-400 to-orange-600"
  },
  {
    title: "Burncup",
    description: "Competition management platform for Binus Bekasi annual event. Handles competition registration, payment processing, and team management with full frontend implementation.",
    technologies: ["Frontend Stack", "Payment Integration", "Team Management"],
    imageUrl: "image7.png",
    liveUrl: "https://burncup.com",
    githubUrl: "#",
    gradient: "bg-gradient-to-br from-purple-400 to-pink-600"
  }
];