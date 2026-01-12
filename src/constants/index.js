export const myProjects = [
  {
    id: 1,
    title: "Multi-user RAG Document Intelligence Platform",
    description:
      "Built an Retrieval-Augmented-Generation (RAG) system",
    subDescription: [
      "for context aware document querying using FastAPI and Streamlit, leveraging Groq  accelerated Llama-3.3 70B inference, ChromaDB vector storage, and HuggingFace embeddings, with persistent Multi-User chat sessions managed via SQLite.",
      "Designed a containerized multi service architecture with Docker and Docker compose.",
      "Deployed the application on AWS EC2 with secure VPC networking.",
      "Established a Git based CI/CD workflow to streamline deployment and ensure environment consistency.",
    ],
    href: "https://github.com/Lucky015-7/FastAPI-Streamlit-RAG-Application",
    logo: "",
    image: "/assets/projects/RAG.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 3,
        name: "AWS",
        path: "/assets/logos/aws.svg",
      },
      {
        id: 4,
        name: "Streamlit",
        path: "/assets/logos/streamlit1.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Customer Shopping Behavior Analysis",
    description:
      " Designed and end-to-end analytics solution",
    subDescription: [
      "Involving data cleaning in python, SQL-based querying in PostgreSQL",
      "Interactive Power BI dashboard to analyze customer purchasing behavior and support data driven decisions",
    ],
    href: "https://github.com/Lucky015-7/Customer_behavior_analysis",
    logo: "",
    image: "/assets/projects/powerbi.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Power BI",
        path: "/assets/logos/power bi.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "Pandas",
        path: "/assets/logos/Pandas.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Personal Finance Advisor",
    description:
      "Built an AI driven multi agent system.",
    subDescription: [
      "For automated expense categorization, budgeting, goal tracking, and savings insights.",
      "Developed a real time Streamlit dashboard, implemented secure authentication (JWT, Google OAuth).",
      "Conducted LLM fine-tuning with Unsloth + QLoRA on 500k finance instructions.",
      "Deploying the production system on Gemma 1B via Ollama.",
    ],
    href: "https://github.com/Lucky015-7/Real_state_Price_predictor",
    logo: "",
    image: "/assets/projects/personal finance advisor.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Pandas",
        path: "/assets/logos/Pandas.svg",
      },
      {
        id: 3,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 4,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Real Estate Price Predictor",
    description:
      "Built an ML-based property valuation system.",
    subDescription: [
      "Using XGBoost model trained on 18,000+ Canadian properties, with advanced location based feature engineering.",
      "Developed a physics engine with collision detection and particle effects.",
      "Delivering real-time price predictions, interactive Plotly visualizations, feature importance, regional analysis, and percentile-based market comparisons.",
    ],
    href: "https://github.com/Lucky015-7/Real_state_Price_predictor",
    logo: "",
    image: "/assets/projects/Price predictor.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Pandas",
        path: "/assets/logos/Pandas.svg",
      },
      {
        id: 3,
        name: "Matplotlib",
        path: "/assets/logos/Matplotlib.svg",
      },
      {
        id: 4,
        name: "Scikit-Learn",
        path: "/assets/logos/Scikit learn.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Pet Healthcare Management System",
    description:
      "Developed a MERN based centralized platform.",
    subDescription: [
      "For managing pet profiles, medical records, vaccinations, appointments, billing, and notifications.",
      "With role-based access for pet owners, veterinarians, and admins.",
      "With secure JWT-based authentication.",
    ],
    href: "https://github.com/Lucky015-7/Pet_Universe",
    logo: "",
    image: "/assets/projects/pet.png",
    tags: [
      {
        id: 1,
        name: "MongoDB",
        path: "/assets/logos/mongodb-icon.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/logos/expressjs.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/Lucky015-7",
    icon: "/assets/logos/github-white-icon.webp",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/lakhitha-erandunu-883597345/",
    icon: "/assets/socials/linkedIn.svg",
  },
];



