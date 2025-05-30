import {
  FaChalkboardTeacher,
  FaChartLine,
  FaCloud,
  FaCode,
  FaDatabase,
  FaFileAlt,
  FaGraduationCap,
  FaHandshake,
  FaHeartbeat,
  FaSearch,
  FaStore,
  FaUserMd,
  FaUserPlus,
  FaWrench,
} from "react-icons/fa";
import createAccount from "../assets/create-account.jpg"
import findJob from "../assets/find-job.jpg"
import oneClick from "../assets/one-click.jpg"
import hero from "../assets/heroimg.png"

export const categories = [
  {
    icon: <FaCode className="text-blue-500 w-6 h-6" />,
    title: "Software Development",
    jobs: 25,
    color: "from-blue-500/10 to-blue-600/10",
    borderColor: "border-blue-500/30",
    hoverText: "text-blue-500",
    iconBg: "from-blue-500/10 to-blue-600/10",
  },
  {
    icon: <FaHeartbeat className="text-red-500 w-6 h-6" />,
    title: "Healthcare",
    jobs: 32,
    color: "from-red-500/10 to-red-600/10",
    borderColor: "border-red-500/30",
    hoverText: "text-red-500",
    iconBg: "from-red-500/10 to-red-600/10",
  },
  {
    icon: <FaGraduationCap className="text-indigo-500 w-6 h-6" />,
    title: "Education",
    jobs: 12,
    color: "from-indigo-500/10 to-indigo-600/10",
    borderColor: "border-indigo-500/30",
    hoverText: "text-indigo-500",
    iconBg: "from-indigo-500/10 to-indigo-600/10",
  },
  {
    icon: <FaChartLine className="text-green-500 w-6 h-6" />,
    title: "Finance & Banking",
    jobs: 28,
    color: "from-green-500/10 to-green-600/10",
    borderColor: "border-green-500/30",
    hoverText: "text-green-500",
    iconBg: "from-green-500/10 to-green-600/10",
  },
  {
    icon: <FaStore className="text-yellow-500 w-6 h-6" />,
    title: " E-commerce",
    jobs: 56,
    color: "from-yellow-500/10 to-yellow-600/10",
    borderColor: "border-yellow-500/30",
    hoverText: "text-yellow-500",
    iconBg: "from-yellow-500/10 to-yellow-600/10",
  },
  {
    icon: <FaWrench className="text-purple-500 w-6 h-6" />,
    title: "Manufacturing",
    jobs: 18,
    color: "from-purple-500/10 to-purple-600/10",
    borderColor: "border-purple-500/30",
    hoverText: "text-purple-500",
    iconBg: "from-purple-500/10 to-purple-600/10",
  },
  {
    icon: <FaCloud className="text-cyan-500 w-6 h-6" />,
    title: "Cloud & DevOps",
    jobs: 15,
    color: "from-cyan-500/10 to-cyan-600/10",
    borderColor: "border-cyan-500/30",
    hoverText: "text-cyan-500",
    iconBg: "from-cyan-500/10 to-cyan-600/10",
  },

  {
    icon: <FaUserMd className="text-emerald-500 w-6 h-6" />,
    title: "Medical & Nursing",
    jobs: 22,
    color: "from-emerald-500/10 to-emerald-600/10",
    borderColor: "border-emerald-500/30",
    hoverText: "text-emerald-500",
    iconBg: "from-emerald-500/10 to-emerald-600/10",
  },
  {
    icon: <FaChalkboardTeacher className="text-fuchsia-500 w-6 h-6" />,
    title: "Teaching & Training",
    jobs: 8,
    color: "from-fuchsia-500/10 to-fuchsia-600/10",
    borderColor: "border-fuchsia-500/30",
    hoverText: "text-fuchsia-500",
    iconBg: "from-fuchsia-500/10 to-fuchsia-600/10",
  },
  {
    icon: <FaDatabase className="text-amber-500 w-6 h-6" />,
    title: "Data & Analytics",
    jobs: 12,
    color: "from-amber-500/10 to-amber-600/10",
    borderColor: "border-amber-500/30",
    hoverText: "text-amber-500",
    iconBg: "from-amber-500/10 to-amber-600/10",
  },
];

export const steps = [
  {
    icon: <FaUserPlus className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Create Your Account",
    description:
      "Sign up and create your professional profile. Add your skills, experience, and career goals.",
    image: createAccount,
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <FaSearch className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Find Your Dream Job",
    description:
      "Browse through thousands of job listings. Use our smart filters to find the perfect match.",
    image: findJob,
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <FaFileAlt className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Apply with One Click",
    description:
      "Apply to multiple jobs with your saved profile. Track your applications in real-time.",
    image: oneClick,
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <FaHandshake className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Get Hired",
    description:
      "Connect with employers, attend interviews, and land your dream job!",
    image: hero,
    color: "from-green-500 to-emerald-500",
  },
];
