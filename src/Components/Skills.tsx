import React from "react";
import "./Skills.css";

// react-icons (you already have it installed)
import { FaJava, FaReact, FaDocker, FaAws, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiSpringboot,
  SiApachekafka,
  SiTypescript,
  SiKubernetes,
  SiMysql,
  SiPostgresql,
  SiOracle,
} from "react-icons/si";

/**
 * IMPORTANT:
 * We intentionally type `icon` as `any` to avoid ALL the TS errors you hit:
 * - TS2786: icon cannot be used as JSX component
 * - TS2769: createElement overload mismatch with IconType
 * - TS2503: Cannot find namespace JSX (we don't use JSX.Element anywhere)
 */
type Skill = {
  label: string;
  icon: any;
};

const skills: Skill[] = [
  { label: "Java (8–17)", icon: FaJava },
  { label: "Spring Boot", icon: SiSpringboot },
  { label: "Microservices", icon: FaGitAlt },
  { label: "Apache Kafka", icon: SiApachekafka },
  { label: "React", icon: FaReact },
  { label: "TypeScript", icon: SiTypescript },
  { label: "AWS", icon: FaAws },
  { label: "Docker", icon: FaDocker },
  { label: "Kubernetes", icon: SiKubernetes },
  { label: "MySQL", icon: SiMysql },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "Oracle", icon: SiOracle },
  { label: "Git", icon: FaGitAlt },
  { label: "GitHub", icon: FaGithub },
  { label: "CI/CD", icon: FaGitAlt },
];

export default function Skills() {
  return (
    <section className="skills">
      <span className="skills-subtitle">the magic behind</span>
      <h2 className="skills-title">My Skillset</h2>

      <div className="skills-cloud">
        {skills.map((skill) => (
          <span key={skill.label} className="skill-pill">
            <span className="skill-icon" aria-hidden="true">
              {React.createElement(skill.icon as any)}
            </span>
            <span className="skill-label">{skill.label}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
