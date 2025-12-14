import React from "react";

const Skills: React.FC = () => {
  const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "React Native",
    "Flutter",
    "Prisma",
    "CakePHP",
    "Unity",
    "Blender",
    "Illustrator",
  ];

  return (
    <section>
      <header className="ml-10 mb-10">
        <h1 className="text-9xl font-thin">Skills</h1>
      </header>
      {/* Skills component */}
      {skills.length === 0 ? null : (
        <ul className="grid grid-cols-4 gap-4 px-20">
          {skills.map((skill) => (
            <li
              key={skill}
              className="aspect-square max-w-50 max-h-50 border flex items-center justify-center p-2"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Skills;
