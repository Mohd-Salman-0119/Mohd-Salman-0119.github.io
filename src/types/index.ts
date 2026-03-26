// Skill types
export interface Skill {
  skill: string;
  icon: string;
}

// Project types
export interface Project {
  image: string;
  projectName: string;
  sourceCode: string;
  liveLink: string;
  techStack: string[];
  duration: string;
  flexRow: string;
  description: string;
  disabled?: boolean;
}

// Education types
export interface Education {
  image: string;
  course: string;
  Institute: string;
  duration: string;
  description: string;
  skills: string;
}

// Experience types
export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  image: string;
  skills: string;
}

// Component Props
export interface SkillProps {
  text: string;
  array: Skill[];
}

export interface ProjectProps {
  image: string;
  projectName: string;
  duration: string;
  techStack: string[];
  description: string;
  sourceCode: string;
  liveLink: string;
  flexRow: string;
  disabled?: boolean;
}

export interface IconButtonProps {
  skill: string;
  icon: string;
  className?: string;
  imgClass?: string;
  onClick?: () => void;
  id?: string;
  disabled?: boolean;
}

export interface TextButtonProps {
  text: string;
  className?: string;
}

export interface FormInputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
}

export interface EducationComponentProps {
  image: string;
  course: string;
  Institute: string;
  duration: string;
  description: string;
  skills: string;
}

export interface ExperienceComponentProps {
  role: string;
  company: string;
  duration: string;
  description: string;
  image: string;
  skills: string;
}
