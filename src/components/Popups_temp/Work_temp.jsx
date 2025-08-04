import projects from "../../data/Projects_temp";
import { useState } from "react";

function Work() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className="border-b border-gray-700 p-4">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p className="text-sm text-gray-400">{project.description}</p>
        </div>
      ))}
    </>
  );
}

export default Work;