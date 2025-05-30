import React, { useState, useRef } from "react";
import {
  FaBriefcase,
  FaCode,
  FaEdit,
  FaGraduationCap,
  FaPlus,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import {
  SummaryModal,
  SkillsModal,
  CertificationModal,
  ExperienceModal,
  EducationModal,
  ProjectModal,
} from "../components/Modal/ProfileModals";

import profile_Image2 from "../assets/user-2.jpg";

const ProfilePage = () => {
  // Modal states
  const [summaryModal, setSummaryModal] = useState(false);
  const [skillsModal, setSkillsModal] = useState(false);
  const [certificationModal, setCertificationModal] = useState(false);
  const [experienceModal, setExperienceModal] = useState(false);
  const [educationModal, setEducationModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  
  const [profileImage, setProfileImage] = useState(() => {
    return localStorage.getItem('profile_Image2') || profile_Image2;
  });
  const fileInputRef = useRef(null);

  // Data states with localStorage persistence
  const [summary, setSummary] = useState(() => {
    return localStorage.getItem('profile_summary') || 
    "Passionate Software Engineer with 3+ years of experience in full-stack development, specializing in React, Node.js, and cloud technologies. Proven track record of delivering high-performance web applications and leading development teams. Strong focus on user experience and writing clean, maintainable code."
  });

  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('profile_skills');
    return saved ? JSON.parse(saved) : ["HTML", "CSS", "JavaScript", "React", "Node.js"];
  });

  const [certifications, setCertifications] = useState(() => {
    const saved = localStorage.getItem('profile_certifications');
    return saved ? JSON.parse(saved) : [
      {
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        year: "2023",
      },
      {
        name: "Google Cloud Certified",
        issuer: "Professional Cloud Developer",
        year: "2022",
      },
    ];
  });

  const [experiences, setExperiences] = useState(() => {
    const saved = localStorage.getItem('profile_experiences');
    return saved ? JSON.parse(saved) : [
      {
        title: "Software Engineer",
        company: "ABC Company",
        startDate: "2021-01",
        endDate: "",
        current: true,
        responsibilities: [
          "Led frontend development for multiple client projects using React and TypeScript",
          "Implemented responsive designs and improved site performance by 40%",
        ],
      },
    ];
  });

  const [education, setEducation] = useState(() => {
    const saved = localStorage.getItem('profile_education');
    return saved ? JSON.parse(saved) : [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University of XYZ",
        startYear: "2018",
        endYear: "2022",
        grade: "8.5 CGPA",
      },
    ];
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('profile_projects');
    return saved ? JSON.parse(saved) : [
      {
        title: "E-commerce Platform",
        description: "Built a full-stack e-commerce platform with React, Node.js, and MongoDB",
        technologies: ["React", "Node.js", "MongoDB"],
        projectUrl: "#",
      },
      {
        title: "Task Management App",
        description: "Developed a real-time task management application with drag-and-drop functionality",
        technologies: ["React", "Firebase", "Tailwind CSS"],
        projectUrl: "#",
      },
    ];
  });

  // Save to localStorage whenever state changes
  React.useEffect(() => {
    localStorage.setItem('profile_summary', summary);
  }, [summary]);

  React.useEffect(() => {
    localStorage.setItem('profile_skills', JSON.stringify(skills));
  }, [skills]);

  React.useEffect(() => {
    localStorage.setItem('profile_certifications', JSON.stringify(certifications));
  }, [certifications]);

  React.useEffect(() => {
    localStorage.setItem('profile_experiences', JSON.stringify(experiences));
  }, [experiences]);

  React.useEffect(() => {
    localStorage.setItem('profile_education', JSON.stringify(education));
  }, [education]);

  React.useEffect(() => {
    localStorage.setItem('profile_projects', JSON.stringify(projects));
  }, [projects]);

  React.useEffect(() => {
    localStorage.setItem('profile_Image2', profileImage);
  }, [profileImage]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Main Content */}
        <div className="relative bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 backdrop-blur-lg border border-primary/10 dark:border-gray-700/50 hover:border-primary/20 dark:hover:border-primary/40 transition-all duration-500">
          {/* Header */}
          <div className="relative mb-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 w-full">
              <div className="flex flex-col items-center lg:items-center w-full lg:w-auto">
                <div className="relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-primary via-primary to-primary p-1.5 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-primary/25 cursor-pointer">
                    <div className="bg-white p-1 rounded-full h-full">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        accept="image/*"
                        className="hidden"
                      />
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <button 
                      onClick={triggerImageUpload}
                      className="absolute bottom-0 right-0 bg-primary rounded-full p-2 sm:p-2.5 shadow-lg hover:bg-primary/90 transition-all hover:scale-110 hover:rotate-12 duration-300">
                      <FaEdit className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
                <div className=" text-center md:text-left">
                  <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent dark:from-primary dark:via-primary dark:to-primary">
                    John Doe
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
                    Software Engineer
                  </p>
                </div>
              </div>
              {/* Contact Info */}
              <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-6 lg:mt-0">
                <div className="group bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-xl p-4 border border-primary/10 dark:border-gray-700/50 hover:border-primary/20 dark:hover:border-primary/40 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                  <div className="text-gray-500 dark:text-gray-400 text-sm mb-1 group-hover:text-primary transition-colors font-medium">
                    Location
                  </div>
                  <div className="text-gray-900 dark:text-gray-100 font-medium">New York, USA</div>
                </div>
                <div className="group bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-xl p-4 border border-primary/10 dark:border-gray-700/50 hover:border-primary/20 dark:hover:border-primary/40 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                  <div className="text-gray-500 dark:text-gray-400 text-sm mb-1 group-hover:text-primary transition-colors font-medium">
                    Freelance
                  </div>
                  <div className="text-gray-900 dark:text-gray-100 font-medium">Available</div>
                </div>
                <div className="group bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-xl p-4 border border-primary/10 dark:border-gray-700/50 hover:border-primary/20 dark:hover:border-primary/40 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                  <div className="text-gray-500 dark:text-gray-400 text-sm mb-1 group-hover:text-primary transition-colors font-medium">
                    Phone
                  </div>
                  <div className="text-gray-900 dark:text-gray-100 font-medium">
                    +1 123 456 7890
                  </div>
                </div>
                <div className="group bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-xl p-4 border border-primary/10 dark:border-gray-700/50 hover:border-primary/20 dark:hover:border-primary/40 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                  <div className="text-gray-500 dark:text-gray-400 text-sm mb-1 group-hover:text-primary transition-colors font-medium">
                    Email
                  </div>
                  <div className="text-gray-900 dark:text-gray-100 font-medium">
                    john.doe@example.com
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <section className="my-4 sm:my-6 p-4 sm:p-6 lg:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-primary/10 dark:border-gray-700/50 hover:border-primary/20 dark:hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 sm:gap-3">
                  <FaUser className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  Professional Summary
                </h2>
                <button
                  onClick={() => setSummaryModal(true)}
                  className="p-2 sm:p-2.5 hover:bg-primary/10 rounded-lg text-primary transition-all hover:scale-110 duration-300"
                >
                  <FaEdit className="w-4 h-4" />
                </button>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                {summary}
              </p>
            </section>

            {/* Skills */}
            <section className="mb-4 sm:mb-6 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-100/50 dark:border-gray-700/50 hover:border-primary/20 dark:hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 sm:gap-3">
                  <FaCode className="w-6 h-6 text-primary" />
                  Skills
                </h2>
                <button
                  onClick={() => setSkillsModal(true)}
                  className="p-2 sm:p-2.5 hover:bg-primary/10 rounded-lg text-primary transition-all hover:scale-110 duration-300"
                >
                  <FaPlus className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border border-primary/20 dark:border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="mb-4 sm:mb-6 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-100/50 dark:border-gray-700/50 hover:border-primary/20 dark:hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 sm:gap-3">
                  <FaGraduationCap className="w-6 h-6 text-primary" />
                  Certifications
                </h2>
                <button
                  onClick={() => {
                    setEditingItem(null);
                    setCertificationModal(true);
                  }}
                  className="p-2 sm:p-2.5 hover:bg-primary/10 rounded-lg text-primary transition-all hover:scale-110 duration-300"
                >
                  <FaPlus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center justify-between p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 group hover:border-primary dark:hover:border-primary/40 transition-colors">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingItem(cert);
                          setCertificationModal(true);
                        }}
                        className="p-2.5 opacity-0 group-hover:opacity-100 hover:bg-primary/10 rounded-lg text-primary transition-all hover:scale-110 duration-300"
                      >
                        <FaEdit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setCertifications(prev => prev.filter(c => c !== cert));
                        }}
                        className="p-2.5 opacity-0 group-hover:opacity-100 hover:bg-red-100 rounded-lg text-red-500 transition-all hover:scale-110 duration-300"
                      >
                        <FaTimes className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
              ))}
            </div>
            </section>

            {/* Work Experience */}
            <section className="mb-4 sm:mb-6 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-100/50 dark:border-gray-700/50 hover:border-primary/20 dark:hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 sm:gap-3">
                  <FaBriefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  Work Experience
                </h2>
                <button 
                  onClick={() => {
                    setEditingItem(null);
                    setExperienceModal(true);
                  }}
                  className="p-2 sm:p-2.5 hover:bg-primary/10 rounded-lg text-primary transition-all hover:scale-110 duration-300"
                >
                  <FaPlus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                {experiences.map((exp) => (
                <div key={exp.title} className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-primary/10 dark:border-gray-700/50 group hover:border-primary/20 dark:hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                        {exp.title}
                      </h3>
                      <p className="text-primary mt-1">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.startDate} - {exp.endDate || "Present"} • {exp.current ? "Current" : "Past"}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingItem(exp);
                          setExperienceModal(true);
                        }}
                        className="p-2.5 opacity-0 group-hover:opacity-100 hover:bg-primary/10 rounded-lg text-primary transition-all hover:scale-110 duration-300"
                      >
                        <FaEdit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setExperiences(prev => prev.filter(e => e !== exp));
                        }}
                        className="p-2.5 opacity-0 group-hover:opacity-100 hover:bg-red-100 rounded-lg text-red-500 transition-all hover:scale-110 duration-300"
                      >
                        <FaTimes className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    {exp.responsibilities.map((resp) => (
                      <p key={resp} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0" />
                        {resp}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            </section>

            {/* Education */}
            <section className="mb-4 sm:mb-6 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-100/50 dark:border-gray-700/50 hover:border-primary/20 dark:hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 sm:gap-3">
                  <FaGraduationCap className="w-6 h-6 text-primary" />
                  Education
                </h2>
                <button
                  onClick={() => setEducationModal(true)}
                  className="p-2 sm:p-2.5 hover:bg-primary/10 rounded-lg text-primary transition-all hover:scale-110 duration-300"
                >
                  <FaPlus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.degree} className="p-4 bg-white/5 dark:bg-gray-800/5 rounded-lg border border-white/5 dark:border-gray-700/5 group hover:border-primary dark:hover:border-primary/40 transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-primary mt-1">{edu.school}</p>
                        <p className="text-sm text-gray-500">
                          {edu.startYear} - {edu.endYear} • {edu.grade}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditingItem(edu);
                            setEducationModal(true);
                          }}
                          className="p-2.5 opacity-0 group-hover:opacity-100 hover:bg-primary/10 rounded-lg text-primary transition-all hover:scale-110 duration-300"
                        >
                          <FaEdit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setEducation(prev => prev.filter(e => e !== edu));
                          }}
                          className="p-2.5 opacity-0 group-hover:opacity-100 hover:bg-red-100 rounded-lg text-red-500 transition-all hover:scale-110 duration-300"
                        >
                          <FaTimes className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="mb-4 sm:mb-6 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-100/50 dark:border-gray-700/50 hover:border-primary/20 dark:hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 sm:gap-3">
                  <FaCode className="w-6 h-6 text-primary" />
                  Projects
                </h2>
                <button
                  onClick={() => {
                    setEditingItem(null);
                    setProjectModal(true);
                  }}
                  className="p-2 sm:p-2.5 hover:bg-primary/10 rounded-lg text-primary transition-all hover:scale-110 duration-300"
                >
                  <FaPlus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.title} className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-primary/10 dark:border-gray-700/50 group hover:border-primary/20 dark:hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.projectUrl}
                          className="text-primary hover:underline text-sm mt-3 inline-block"
                        >
                          View Project →
                        </a>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditingItem(project);
                            setProjectModal(true);
                          }}
                          className="p-2.5 opacity-0 group-hover:opacity-100 hover:bg-primary/10 rounded-lg text-primary transition-all hover:scale-110 duration-300"
                        >
                          <FaEdit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setProjects(prev => prev.filter(p => p !== project));
                          }}
                          className="p-2.5 opacity-0 group-hover:opacity-100 hover:bg-red-100 rounded-lg text-red-500 transition-all hover:scale-110 duration-300"
                        >
                          <FaTimes className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Modals */}
            <SummaryModal
              isOpen={summaryModal}
              closeModal={() => setSummaryModal(false)}
              summary={summary}
              onSave={setSummary}
            />

            <SkillsModal
              isOpen={skillsModal}
              closeModal={() => setSkillsModal(false)}
              skills={skills}
              onSave={setSkills}
            />

            <CertificationModal
              isOpen={certificationModal}
              closeModal={() => {
                setCertificationModal(false);
                setEditingItem(null);
              }}
              certification={editingItem}
              onSave={(cert) => {
                if (editingItem) {
                  setCertifications((prev) =>
                    prev.map((c) => (c === editingItem ? cert : c))
                  );
                } else {
                  setCertifications((prev) => [...prev, cert]);
                }
              }}
              isEdit={!!editingItem}
            />

            <ExperienceModal
              isOpen={experienceModal}
              closeModal={() => {
                setExperienceModal(false);
                setEditingItem(null);
              }}
              experience={editingItem}
              onSave={(exp) => {
                if (editingItem) {
                  setExperiences((prev) =>
                    prev.map((e) => (e === editingItem ? exp : e))
                  );
                } else {
                  setExperiences((prev) => [...prev, exp]);
                }
              }}
              isEdit={!!editingItem}
            />

            <EducationModal
              isOpen={educationModal}
              closeModal={() => {
                setEducationModal(false);
                setEditingItem(null);
              }}
              education={editingItem}
              onSave={(edu) => {
                if (editingItem) {
                  setEducation((prev) =>
                    prev.map((e) => (e === editingItem ? edu : e))
                  );
                } else {
                  setEducation((prev) => [...prev, edu]);
                }
              }}
              isEdit={!!editingItem}
            />

            <ProjectModal
              isOpen={projectModal}
              closeModal={() => {
                setProjectModal(false);
                setEditingItem(null);
              }}
              project={editingItem}
              onSave={(proj) => {
                if (editingItem) {
                  setProjects((prev) =>
                    prev.map((p) => (p === editingItem ? proj : p))
                  );
                } else {
                  setProjects((prev) => [...prev, proj]);
                }
              }}
              isEdit={!!editingItem}
            />

            <button className="w-full sm:w-auto bg-gradient-to-r from-primary via-primary to-primary hover:opacity-90 transition-all hover:scale-[1.02] duration-300 text-white px-8 sm:px-12 py-3.5 sm:py-4 rounded-2xl font-semibold shadow-lg hover:shadow-primary/25 mt-8">
              <span className="flex items-center gap-2">
                Save Profile <FaEdit className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
