import React from 'react';

function SkillsSection() {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'ReactJS', level: 85 },
    { name: 'React Native', level: 80 },
    { name: 'C++', level: 70 },
    { name: 'HTML5/CSS3', level: 85 },
    { name: 'MySQL', level: 78 },
    { name: 'AI/ML', level: 85 },
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      {skills.map(skill => (
        <div key={skill.name} className="skill">
          <svg viewBox="0 0 36 36" className="skill-chart" style={{ transform: 'rotate(-90deg)' }}>
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#f5f5f5"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#3B444B"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray={`${skill.level}, 100`}
            />
          </svg>
          <div className="skill-info">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level">{skill.level}%</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsSection;
