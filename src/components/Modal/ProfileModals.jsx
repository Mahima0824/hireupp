import React, { useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'
import ProfileModal from './ProfileModal'

export const SummaryModal = ({ isOpen, closeModal, summary, onSave }) => {
  const [value, setValue] = useState(summary)

  return (
    <ProfileModal isOpen={isOpen} closeModal={closeModal} title="Edit Professional Summary">
      <div className="mt-4">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-40 p-4 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-primary/20 dark:border-primary/30 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
          placeholder="Write your professional summary..."
        />
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={closeModal}
          className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            onSave(value)
            closeModal()
          }}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </ProfileModal>
  )
}

export const SkillsModal = ({ isOpen, closeModal, skills, onSave }) => {
  const [skillList, setSkillList] = useState(skills)
  const [newSkill, setNewSkill] = useState('')

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkillList([...skillList, newSkill.trim()])
      setNewSkill('')
    }
  }

  const removeSkill = (index) => {
    setSkillList(skillList.filter((_, i) => i !== index))
  }

  return (
    <ProfileModal isOpen={isOpen} closeModal={closeModal} title="Edit Skills">
      <div className="mt-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="flex-1 p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700"
            placeholder="Add a new skill..."
            onKeyPress={(e) => e.key === 'Enter' && addSkill()}
          />
          <button
            onClick={addSkill}
            className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <FaPlus className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {skillList.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1.5 rounded-lg"
            >
              <span>{skill}</span>
              <button
                onClick={() => removeSkill(index)}
                className="hover:text-red-500 transition-colors"
              >
                <FaTimes className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={closeModal}
          className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            onSave(skillList)
            closeModal()
          }}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </ProfileModal>
  )
}

export const CertificationModal = ({ isOpen, closeModal, certification, onSave, isEdit }) => {
  const [formData, setFormData] = useState(
    certification || {
      name: '',
      issuer: '',
      year: new Date().getFullYear(),
    }
  )

  return (
    <ProfileModal
      isOpen={isOpen}
      closeModal={closeModal}
      title={isEdit ? 'Edit Certification' : 'Add Certification'}
    >
      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Certification Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Issuing Organization
          </label>
          <input
            type="text"
            value={formData.issuer}
            onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
            className="w-full p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Year</label>
          <input
            type="number"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            className="w-full p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={closeModal}
          className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            onSave(formData)
            closeModal()
          }}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          {isEdit ? 'Save Changes' : 'Add Certification'}
        </button>
      </div>
    </ProfileModal>
  )
}

export const ExperienceModal = ({ isOpen, closeModal, experience, onSave, isEdit }) => {
  const [formData, setFormData] = useState(
    experience || {
      title: '',
      company: '',
      startDate: '',
      endDate: '',
      current: false,
      responsibilities: [''],
    }
  )

  const addResponsibility = () => {
    setFormData({
      ...formData,
      responsibilities: [...formData.responsibilities, ''],
    })
  }

  const updateResponsibility = (index, value) => {
    const newResponsibilities = [...formData.responsibilities]
    newResponsibilities[index] = value
    setFormData({ ...formData, responsibilities: newResponsibilities })
  }

  const removeResponsibility = (index) => {
    setFormData({
      ...formData,
      responsibilities: formData.responsibilities.filter((_, i) => i !== index),
    })
  }

  return (
    <ProfileModal
      isOpen={isOpen}
      closeModal={closeModal}
      title={isEdit ? 'Edit Experience' : 'Add Experience'}
    >
      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Job Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Start Date</label>
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              className="w-full p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">End Date</label>
            <input
              type="date"
              value={formData.endDate}
              disabled={formData.current}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              className="w-full p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700 disabled:bg-gray-100 dark:disabled:bg-gray-600"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.current}
            onChange={(e) => setFormData({ ...formData, current: e.target.checked })}
            className="text-primary dark:text-primary focus:ring-primary rounded bg-white dark:bg-gray-700"
          />
          <label className="text-sm text-gray-700 dark:text-gray-300">I currently work here</label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Responsibilities
          </label>
          <div className="space-y-2">
            {formData.responsibilities.map((resp, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={resp}
                  onChange={(e) => updateResponsibility(index, e.target.value)}
                  className="flex-1 p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700"
                  placeholder="Add a responsibility..."
                />
                <button
                  onClick={() => removeResponsibility(index)}
                  className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/20 rounded-lg transition-colors"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={addResponsibility}
            className="mt-2 text-primary hover:text-primary/80 dark:hover:text-primary/60 text-sm font-medium"
          >
            + Add Another Responsibility
          </button>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={closeModal}
          className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            onSave(formData)
            closeModal()
          }}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          {isEdit ? 'Save Changes' : 'Add Experience'}
        </button>
      </div>
    </ProfileModal>
  )
}

export const EducationModal = ({ isOpen, closeModal, education, onSave, isEdit }) => {
  const [formData, setFormData] = useState(
    education || {
      degree: '',
      school: '',
      startYear: '',
      endYear: '',
      grade: '',
    }
  )

  return (
    <ProfileModal
      isOpen={isOpen}
      closeModal={closeModal}
      title={isEdit ? 'Edit Education' : 'Add Education'}
    >
      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Degree</label>
          <input
            type="text"
            value={formData.degree}
            onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
            className="w-full p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            School/University
          </label>
          <input
            type="text"
            value={formData.school}
            onChange={(e) => setFormData({ ...formData, school: e.target.value })}
            className="w-full p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Start Year</label>
            <input
              type="number"
              value={formData.startYear}
              onChange={(e) => setFormData({ ...formData, startYear: e.target.value })}
              className="w-full p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">End Year</label>
            <input
              type="number"
              value={formData.endYear}
              onChange={(e) => setFormData({ ...formData, endYear: e.target.value })}
              className="w-full p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Grade/CGPA</label>
          <input
            type="text"
            value={formData.grade}
            onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
            className="w-full p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={closeModal}
          className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            onSave(formData)
            closeModal()
          }}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          {isEdit ? 'Save Changes' : 'Add Education'}
        </button>
      </div>
    </ProfileModal>
  )
}

export const ProjectModal = ({ isOpen, closeModal, project, onSave, isEdit }) => {
  const [formData, setFormData] = useState(
    project || {
      title: '',
      description: '',
      technologies: [],
      projectUrl: '',
    }
  )

  const [newTech, setNewTech] = useState('')

  const addTechnology = () => {
    if (newTech.trim()) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, newTech.trim()],
      })
      setNewTech('')
    }
  }

  const removeTechnology = (index) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter((_, i) => i !== index),
    })
  }

  return (
    <ProfileModal
      isOpen={isOpen}
      closeModal={closeModal}
      title={isEdit ? 'Edit Project' : 'Add Project'}
    >
      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full h-24 p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700 resize-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Technologies</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              className="flex-1 p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700"
              placeholder="Add a technology..."
              onKeyPress={(e) => e.key === 'Enter' && addTechnology()}
            />
            <button
              onClick={addTechnology}
              className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <FaPlus className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {formData.technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1.5 rounded-lg"
              >
                <span>{tech}</span>
                <button
                  onClick={() => removeTechnology(index)}
                  className="hover:text-red-500 transition-colors"
                >
                  <FaTimes className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project URL</label>
          <input
            type="url"
            value={formData.projectUrl}
            onChange={(e) => setFormData({ ...formData, projectUrl: e.target.value })}
            className="w-full p-2 text-gray-700 dark:text-gray-200 border border-primary/20 dark:border-primary/30 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white dark:bg-gray-700"
            placeholder="https://..."
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button
          onClick={closeModal}
          className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            onSave(formData)
            closeModal()
          }}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          {isEdit ? 'Save Changes' : 'Add Project'}
        </button>
      </div>
    </ProfileModal>
  )
}
