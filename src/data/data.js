import profileimg1 from "../assets/user-1.jpg";
import profileimg2 from "../assets/user-2.jpg";
import profileimg3 from "../assets/user-3.jpg";
import profileimg4 from "../assets/user-4.jpg";
import seniorSoftwareEngineer from "../assets/jobs/senior-software-engineer.jpg";
import productManager from "../assets/jobs/product-manager.jpg";
import aiEngineer from "../assets/jobs/ai-engineer.jpg";
import backendDeveloper from "../assets/jobs/backend-developer.jpg";
import cloudarchitect from "../assets/jobs/cloud-architect.png";
import developerEducation from "../assets/jobs/developer-education.jpg";
import devopsEngineer from "../assets/jobs/devops-engineer.jpg";
import frontendDeveloper from "../assets/jobs/frontend-developer.jpg";
import fullStackDeveloper from "../assets/jobs/full-stack-developer.jpg";
import digitalMarketer from "../assets/jobs/digital-marketing.jpg";
import digitaltransformer from "../assets/jobs/digital-transformation.png";
import financialAnalyst from "../assets/jobs/financial-analyst.jpg";
import healthcareAdministrator from "../assets/jobs/health-care.jpg";
import registernurse from "../assets/jobs/register-nurse.jpg";
import renewableEnergy from "../assets/jobs/renewable-energy.jpg";
import retailManager from "../assets/jobs/retailer.jpg";
import uxDesigner from "../assets/jobs/ux-designer.jpg";
import careConnect from "../assets/company/care-connect.png";
import digital from "../assets/company/digital.png";
import finserve from "../assets/company/finserve.jpg";
import greenEnergy from "../assets/company/green-energy.jpg";
import healthPlus from "../assets/company/health-plus.jpg"
import retailMax from "../assets/company/retailmax.png"
import techCorp from "../assets/company/tech-pro.jpg"





const companyData = [
  {
    id: 1,
    name: "TechCorp Solutions",
    logo: techCorp,
    description:
      "Leading provider of innovative technology solutions for enterprise businesses.",
    industry: "technology",
    companyType: "corporate",
    companySize: "1000-5000",
    location: "usa",
    founded: "2005",
    openJobs: 45,
    benefits: [
      "Health Insurance",
      "Remote Work",
      "401(k)",
      "Professional Development",
    ],
  },
  {
    id: 2,
    name: "HealthPlus Care",
    logo: healthPlus,
    description:
      "Modern healthcare solutions provider focusing on patient-centric care.",
    industry: "healthcare",
    companyType: "corporate",
    companySize: "5000+",
    location: "uk",
    founded: "1995",
    openJobs: 32,
    benefits: [
      "Medical Coverage",
      "Life Insurance",
      "Flexible Hours",
      "Career Growth",
    ],
  },

  {
    id: 3,
    name: "EduTech Innovate",
    logo: digital,
    description:
      "Transforming education through cutting-edge technology and personalized learning.",
    industry: "education",
    companyType: "startup",
    companySize: "51-200",
    location: "india",
    founded: "2018",
    openJobs: 12,
    benefits: [
      "Stock Options",
      "Learning Budget",
      "Remote Work",
      "Health Benefits",
    ],
  },
  {
    id: 4,
    name: "FinServe Global",
    logo: finserve,
    description:
      "International financial services provider specializing in digital banking solutions.",
    industry: "finance",
    companyType: "corporate",
    companySize: "5000+",
    location: "canada",
    founded: "1980",
    openJobs: 28,
    benefits: [
      "Competitive Salary",
      "Bonuses",
      "Health Insurance",
      "Retirement Plans",
    ],
  },
  {
    id: 5,
    name: "RetailMax",
    logo: retailMax,
    description:
      "Leading retail chain with focus on customer experience and digital innovation.",
    industry: "retail",
    companyType: "corporate",
    companySize: "1000-5000",
    location: "usa",
    founded: "1990",
    openJobs: 56,
    benefits: [
      "Employee Discount",
      "Health Coverage",
      "Career Development",
      "Flexible Schedule",
    ],
  },
  {
    id: 6,
    name: "GreenEnergy Solutions",
    logo: greenEnergy,
    description:
      "Sustainable energy solutions provider committed to environmental conservation.",
    industry: "manufacturing",
    companyType: "corporate",
    companySize: "501-1000",
    location: "australia",
    founded: "2010",
    openJobs: 18,
    benefits: [
      "Health Benefits",
      "Sustainability Bonus",
      "401(k)",
      "Professional Training",
    ],
  },
  {
    id: 7,
    name: "Digital Dynamics",
    logo: digital,
    description:
      "Digital transformation consultancy helping businesses embrace technology.",
    industry: "technology",
    companyType: "startup",
    companySize: "51-200",
    location: "remote",
    founded: "2019",
    openJobs: 15,
    benefits: [
      "Remote Work",
      "Flexible Hours",
      "Learning Budget",
      "Health Insurance",
    ],
  },
  {
    id: 8,
    name: "Care Connect Health",
    logo: careConnect,
    description:
      "Telehealth platform connecting patients with healthcare providers globally.",
    industry: "healthcare",
    companyType: "startup",
    companySize: "201-500",
    location: "india",
    founded: "2017",
    openJobs: 22,
    benefits: [
      "Health Coverage",
      "Stock Options",
      "Remote Work",
      "Learning Allowance",
    ],
  },
  {
    id: 9,
    name: "EduGrowth Academy",
    logo: developerEducation,
    description: "Online learning platform democratizing education worldwide.",
    industry: "education",
    companyType: "ngo",
    companySize: "1-50",
    location: "remote",
    founded: "2020",
    openJobs: 8,
    benefits: [
      "Flexible Schedule",
      "Remote Work",
      "Professional Development",
      "Health Benefits",
    ],
  },
  {
    id: 10,
    name: "SmartRetail Solutions",
    logo: retailMax,
    description:
      "Retail technology provider specializing in AI-powered inventory management.",
    industry: "retail",
    companyType: "startup",
    companySize: "201-500",
    location: "uk",
    founded: "2015",
    openJobs: 25,
    benefits: [
      "Competitive Salary",
      "Stock Options",
      "Health Insurance",
      "Remote Work",
    ],
  },
];

export { companyData };

export const jobsData = [
  // TechCorp Solutions Jobs (45 open jobs)
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp Solutions",
    logo: seniorSoftwareEngineer,
    location: "San Francisco, USA",
    workMode: "hybrid",
    type: "full-time",
    industry: "technology",
    experienceLevel: "senior",
    salary: "$120,000 - $180,000",
    posted: "2 days ago",
    description:
      "Join our engineering team to build innovative enterprise solutions using cutting-edge technologies.",
    skills: ["React", "Node.js", "AWS", "Python", "Microservices"],
  },
  {
    id: 2,
    title: "Product Manager",
    company: "TechCorp Solutions",
    logo: productManager,
    location: "New York, USA",
    workMode: "on-site",
    type: "full-time",
    industry: "technology",
    experienceLevel: "senior",
    salary: "$130,000 - $160,000",
    posted: "1 week ago",
    description:
      "Lead product strategy and development for our enterprise software solutions.",
    skills: ["Product Strategy", "Agile", "User Research", "Data Analysis"],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "TechCorp Solutions",
    logo: devopsEngineer,
    location: "Remote",
    workMode: "remote",
    type: "full-time",
    industry: "technology",
    experienceLevel: "intermediate",
    salary: "$100,000 - $140,000",
    posted: "3 days ago",
    description:
      "Build and maintain our cloud infrastructure and CI/CD pipelines.",
    skills: ["AWS", "Kubernetes", "Docker", "Jenkins", "Terraform"],
  },

  // HealthPlus Care Jobs
  {
    id: 4,
    title: "Healthcare Administrator",
    company: "HealthPlus Care",
    logo: healthcareAdministrator,
    location: "London, UK",
    workMode: "on-site",
    type: "full-time",
    industry: "healthcare",
    experienceLevel: "intermediate",
    salary: "£45,000 - £60,000",
    posted: "3 days ago",
    description:
      "Oversee daily operations and administrative functions of our healthcare facility.",
    skills: [
      "Healthcare Administration",
      "EMR Systems",
      "Staff Management",
      "Compliance",
    ],
  },
  {
    id: 5,
    title: "Registered Nurse",
    company: "HealthPlus Care",
    logo: registernurse,
    location: "Manchester, UK",
    workMode: "on-site",
    type: "full-time",
    industry: "healthcare",
    experienceLevel: "intermediate",
    salary: "£35,000 - £45,000",
    posted: "1 week ago",
    description: "Join our nursing team to provide high-quality patient care.",
    skills: [
      "Patient Care",
      "Clinical Documentation",
      "Medical Procedures",
      "Team Collaboration",
    ],
  },

  // EduTech Innovate Jobs
  {
    id: 6,
    title: "Educational Content Developer",
    company: "EduTech Innovate",
    logo: developerEducation,
    location: "Bangalore, India",
    workMode: "remote",
    type: "full-time",
    industry: "education",
    experienceLevel: "intermediate",
    salary: "₹8,00,000 - ₹12,00,000",
    posted: "1 day ago",
    description:
      "Create engaging educational content for our online learning platform.",
    skills: [
      "Instructional Design",
      "E-learning",
      "Content Creation",
      "Educational Technology",
    ],
  },
  {
    id: 7,
    title: "UX Designer",
    company: "EduTech Innovate",
    logo: uxDesigner,
    location: "Remote",
    workMode: "remote",
    type: "full-time",
    industry: "education",
    experienceLevel: "senior",
    salary: "₹15,00,000 - ₹25,00,000",
    posted: "2 days ago",
    description:
      "Design intuitive and engaging learning experiences for our educational platform.",
    skills: [
      "UI/UX Design",
      "User Research",
      "Prototyping",
      "Educational Design",
    ],
  },

  // Digital Dynamics Jobs
  {
    id: 8,
    title: "Full Stack Developer",
    company: "Digital Dynamics",
    logo: fullStackDeveloper,
    location: "Remote",
    workMode: "remote",
    type: "full-time",
    industry: "technology",
    experienceLevel: "senior",
    salary: "$100,000 - $140,000",
    posted: "4 days ago",
    description:
      "Build and maintain full-stack applications for our digital transformation projects.",
    skills: ["React", "Node.js", "MongoDB", "AWS", "DevOps"],
  },
  {
    id: 9,
    title: "Digital Transformation Consultant",
    company: "Digital Dynamics",
    logo: digitaltransformer,
    location: "Remote",
    workMode: "remote",
    type: "full-time",
    industry: "technology",
    experienceLevel: "senior",
    salary: "$120,000 - $160,000",
    posted: "1 week ago",
    description:
      "Help clients navigate their digital transformation journey with strategic guidance and technical expertise.",
    skills: [
      "Digital Strategy",
      "Change Management",
      "Enterprise Architecture",
      "Agile",
    ],
  },

  // RetailMax Jobs
  {
    id: 10,
    title: "Retail Operations Manager",
    company: "RetailMax",
    logo: retailManager,
    location: "Chicago, USA",
    workMode: "on-site",
    type: "full-time",
    industry: "retail",
    experienceLevel: "senior",
    salary: "$70,000 - $90,000",
    posted: "5 days ago",
    description:
      "Manage store operations and lead digital transformation initiatives.",
    skills: [
      "Retail Management",
      "Team Leadership",
      "Digital Operations",
      "Customer Experience",
    ],
  },
  {
    id: 11,
    title: "E-commerce Specialist",
    company: "RetailMax",
    logo: digitalMarketer,
    location: "Remote",
    workMode: "remote",
    type: "full-time",
    industry: "retail",
    experienceLevel: "intermediate",
    salary: "$60,000 - $80,000",
    posted: "3 days ago",
    description:
      "Drive our online retail presence and optimize e-commerce operations.",
    skills: [
      "E-commerce",
      "Digital Marketing",
      "Analytics",
      "Inventory Management",
    ],
  },

  // Additional jobs for TechCorp Solutions (total: 45)
  {
    id: 12,
    title: "Frontend Developer",
    company: "TechCorp Solutions",
    logo: frontendDeveloper,
    location: "Remote",
    workMode: "remote",
    type: "full-time",
    industry: "technology",
    experienceLevel: "intermediate",
    salary: "$90,000 - $120,000",
    posted: "1 week ago",
    description:
      "Create responsive and user-friendly web applications using modern frontend technologies.",
    skills: ["React", "TypeScript", "CSS", "Redux", "Jest"],
  },
  {
    id: 13,
    title: "Backend Developer",
    company: "TechCorp Solutions",
    logo: backendDeveloper,
    location: "Remote",
    workMode: "remote",
    type: "full-time",
    industry: "technology",
    experienceLevel: "intermediate",
    salary: "$95,000 - $130,000",
    posted: "2 weeks ago",
    description:
      "Build scalable backend services and APIs using Node.js and microservices architecture.",
    skills: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
  },

  // Additional jobs for HealthPlus Care (total: 32)
  {
    id: 14,
    title: "Medical Director",
    company: "HealthPlus Care",
    logo: healthcareAdministrator,
    location: "London, UK",
    workMode: "on-site",
    type: "full-time",
    industry: "healthcare",
    experienceLevel: "senior",
    salary: "£90,000 - £120,000",
    posted: "5 days ago",
    description:
      "Lead our medical team and oversee patient care quality standards.",
    skills: [
      "Healthcare Management",
      "Clinical Leadership",
      "Medical Protocols",
      "Team Management",
    ],
  },
  {
    id: 15,
    title: "Healthcare IT Specialist",
    company: "HealthPlus Care",
    logo: healthcareAdministrator,
    location: "Remote",
    workMode: "remote",
    type: "full-time",
    industry: "healthcare",
    experienceLevel: "intermediate",
    salary: "£45,000 - £60,000",
    posted: "1 week ago",
    description:
      "Maintain and optimize healthcare IT systems and electronic medical records.",
    skills: [
      "Healthcare IT",
      "EMR Systems",
      "IT Security",
      "System Administration",
    ],
  },

  // Additional jobs for EduTech Innovate (total: 12)
  {
    id: 16,
    title: "Learning Experience Designer",
    company: "EduTech Innovate",
    logo: developerEducation,
    location: "Remote",
    workMode: "remote",
    type: "full-time",
    industry: "education",
    experienceLevel: "intermediate",
    salary: "₹10,00,000 - ₹15,00,000",
    posted: "3 days ago",
    description:
      "Design engaging and effective learning experiences for our online education platform.",
    skills: [
      "Learning Design",
      "Educational Psychology",
      "Content Strategy",
      "E-learning Tools",
    ],
  },
  {
    id: 17,
    title: "Education Technology Researcher",
    company: "EduTech Innovate",
    logo: developerEducation,
    location: "Bangalore, India",
    workMode: "hybrid",
    type: "full-time",
    industry: "education",
    experienceLevel: "senior",
    salary: "₹18,00,000 - ₹25,00,000",
    posted: "1 week ago",
    description:
      "Research and implement innovative educational technology solutions.",
    skills: [
      "EdTech Research",
      "Data Analysis",
      "Educational Psychology",
      "Research Methods",
    ],
  },

  // Additional jobs for Digital Dynamics (total: 15)
  {
    id: 18,
    title: "Cloud Solutions Architect",
    company: "Digital Dynamics",
    logo: cloudarchitect,
    location: "Remote",
    workMode: "remote",
    type: "full-time",
    industry: "technology",
    experienceLevel: "senior",
    salary: "$130,000 - $180,000",
    posted: "2 days ago",
    description:
      "Design and implement cloud-native solutions for enterprise clients.",
    skills: [
      "AWS",
      "Azure",
      "Cloud Architecture",
      "Microservices",
      "Kubernetes",
    ],
  },
  {
    id: 19,
    title: "AI/ML Engineer",
    company: "Digital Dynamics",
    logo: aiEngineer,
    location: "Remote",
    workMode: "remote",
    type: "full-time",
    industry: "technology",
    experienceLevel: "senior",
    salary: "$140,000 - $190,000",
    posted: "1 week ago",
    description:
      "Develop machine learning models and AI solutions for business problems.",
    skills: [
      "Python",
      "TensorFlow",
      "Machine Learning",
      "Deep Learning",
      "Data Science",
    ],
  },

  // Additional jobs for RetailMax (total: 56)
  {
    id: 20,
    title: "Store Manager",
    company: "RetailMax",
    logo: retailManager,
    location: "New York, USA",
    workMode: "on-site",
    type: "full-time",
    industry: "retail",
    experienceLevel: "senior",
    salary: "$65,000 - $85,000",
    posted: "2 days ago",
    description:
      "Lead and manage store operations, staff, and customer experience.",
    skills: [
      "Retail Management",
      "Staff Leadership",
      "Inventory Control",
      "Customer Service",
    ],
  },
  {
    id: 21,
    title: "Digital Marketing Manager",
    company: "RetailMax",
    logo: digitalMarketer,
    location: "Remote",
    workMode: "remote",
    type: "full-time",
    industry: "retail",
    experienceLevel: "senior",
    salary: "$75,000 - $95,000",
    posted: "1 week ago",
    description:
      "Lead digital marketing initiatives and e-commerce growth strategies.",
    skills: [
      "Digital Marketing",
      "SEO",
      "Social Media",
      "E-commerce",
      "Analytics",
    ],
  },

  // Additional jobs for GreenEnergy Solutions (total: 18)
  {
    id: 22,
    title: "Renewable Energy Engineer",
    company: "GreenEnergy Solutions",
    logo: renewableEnergy,
    location: "Melbourne, Australia",
    workMode: "hybrid",
    type: "full-time",
    industry: "manufacturing",
    experienceLevel: "senior",
    salary: "$110,000 - $140,000",
    posted: "3 days ago",
    description:
      "Design and implement renewable energy solutions for commercial clients.",
    skills: [
      "Renewable Energy",
      "Solar Power",
      "Energy Storage",
      "Project Management",
    ],
  },
  {
    id: 23,
    title: "Sustainability Consultant",
    company: "GreenEnergy Solutions",
    logo: renewableEnergy,
    location: "Sydney, Australia",
    workMode: "hybrid",
    type: "full-time",
    industry: "manufacturing",
    experienceLevel: "intermediate",
    salary: "$85,000 - $110,000",
    posted: "1 week ago",
    description:
      "Help clients develop and implement sustainable energy strategies.",
    skills: [
      "Sustainability",
      "Energy Efficiency",
      "Environmental Analysis",
      "Consulting",
    ],
  },

  // Additional jobs for Care Connect Health (total: 22)
  {
    id: 24,
    title: "Telemedicine Specialist",
    company: "Care Connect Health",
    logo: healthcareAdministrator,
    location: "Remote",
    workMode: "remote",
    type: "full-time",
    industry: "healthcare",
    experienceLevel: "intermediate",
    salary: "₹12,00,000 - ₹18,00,000",
    posted: "4 days ago",
    description:
      "Provide virtual healthcare consultations and manage telehealth services.",
    skills: [
      "Telemedicine",
      "Patient Care",
      "Healthcare Technology",
      "Communication",
    ],
  },
  {
    id: 25,
    title: "Healthcare App Developer",
    company: "Care Connect Health",
    logo: healthcareAdministrator,
    location: "Bangalore, India",
    workMode: "hybrid",
    type: "full-time",
    industry: "healthcare",
    experienceLevel: "intermediate",
    salary: "₹15,00,000 - ₹25,00,000",
    posted: "1 week ago",
    description:
      "Develop and maintain mobile applications for telehealth services.",
    skills: [
      "React Native",
      "iOS",
      "Android",
      "Healthcare APIs",
      "Mobile Development",
    ],
  },

  // Additional jobs for FinServe Global (total: 28)
  {
    id: 26,
    title: "Financial Analyst",
    company: "FinServe Global",
    logo: financialAnalyst,
    location: "Toronto, Canada",
    workMode: "hybrid",
    type: "full-time",
    industry: "finance",
    experienceLevel: "intermediate",
    salary: "$75,000 - $95,000",
    posted: "3 days ago",
    description:
      "Analyze financial data and provide insights for investment decisions.",
    skills: [
      "Financial Analysis",
      "Excel",
      "SQL",
      "Risk Assessment",
      "Modeling",
    ],
  },
  {
    id: 27,
    title: "FinTech Developer",
    company: "FinServe Global",
    logo: financialAnalyst,
    location: "Vancouver, Canada",
    workMode: "hybrid",
    type: "full-time",
    industry: "finance",
    experienceLevel: "senior",
    salary: "$110,000 - $140,000",
    posted: "1 week ago",
    description: "Build secure and scalable financial technology solutions.",
    skills: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Financial APIs",
      "Security",
    ],
  },

  // Additional jobs for SmartRetail Solutions (total: 25)
  {
    id: 28,
    title: "AI Product Manager",
    company: "SmartRetail Solutions",
    logo: aiEngineer,
    location: "London, UK",
    workMode: "hybrid",
    type: "full-time",
    industry: "retail",
    experienceLevel: "senior",
    salary: "£80,000 - £100,000",
    posted: "4 days ago",
    description: "Lead the development of AI-powered retail solutions.",
    skills: ["Product Management", "AI/ML", "Retail Tech", "Agile", "Strategy"],
  },
  {
    id: 29,
    title: "Data Scientist",
    company: "SmartRetail Solutions",
    logo: aiEngineer,
    location: "Remote",
    workMode: "remote",
    type: "full-time",
    industry: "retail",
    experienceLevel: "intermediate",
    salary: "£65,000 - £85,000",
    posted: "2 weeks ago",
    description: "Develop machine learning models for inventory optimization.",
    skills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "SQL",
      "Statistics",
    ],
  },

  // Additional jobs for EduGrowth Academy (total: 8)
  {
    id: 30,
    title: "Online Course Developer",
    company: "EduGrowth Academy",
    logo: developerEducation,
    location: "Remote",
    workMode: "remote",
    type: "full-time",
    industry: "education",
    experienceLevel: "intermediate",
    salary: "$55,000 - $75,000",
    posted: "5 days ago",
    description: "Create engaging online courses and learning materials.",
    skills: ["Course Development", "E-learning", "Video Production", "LMS"],
  },
  {
    id: 31,
    title: "Student Success Manager",
    company: "EduGrowth Academy",
    logo: developerEducation,
    location: "Remote",
    workMode: "remote",
    type: "full-time",
    industry: "education",
    experienceLevel: "intermediate",
    salary: "$50,000 - $65,000",
    posted: "1 week ago",
    description:
      "Support student learning and ensure course completion success.",
    skills: [
      "Student Support",
      "Education",
      "Communication",
      "Problem Solving",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Tech Solutions Inc.",
    image: profileimg1,
    quote:
      "This job portal transformed my career journey. The platform's intuitive interface and personalized job recommendations helped me find my dream role within weeks!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Designer",
    company: "Design Studio Co.",
    image: profileimg2,
    quote:
      "The quality of job listings and the ease of application process is unmatched. I received multiple interview calls within days of creating my profile.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    company: "Growth Marketing",
    image: profileimg3,
    quote:
      "As a hiring manager, I've found exceptional talent through this platform. The candidate matching system is incredibly accurate and saves us valuable time.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Data Scientist",
    company: "AI Innovations",
    image: profileimg4,
    quote:
      "The platform's AI-powered job matching is impressive. It understands my skills and preferences perfectly, leading to relevant opportunities.",
    rating: 5,
  },
];
