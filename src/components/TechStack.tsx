import "./styles/TechStack.css";

const row1 = [
  "LangChain", "LangGraph", "OpenAI API", "Retrieval-Augmented Generation",
  "Prompt Engineering", "Multi-Agent Systems", "LangSmith", "Embeddings",
];

const row2 = [
  "Python", "JavaScript", "C++", "FastAPI", "Streamlit",
  "Pinecone", "ChromaDB", "FAISS", "PostgreSQL", "SQL",
];

const row3 = [
  "Git", "GitHub", "Docker", "Vercel", "Jupyter Notebook",
  "LangChain", "LangGraph", "OpenAI API",
];

// Duplicate for seamless infinite scroll
const doubled = (arr: string[]) => [...arr, ...arr];

const TechStack = () => {
  return (
    <div className="techstack" id="techstack">
      <h2>My <span>Techstack</span></h2>

      <div className="tech-track-wrapper">
        <div className="tech-track forward">
          {doubled(row1).map((tech, i) => (
            <span className="tech-pill" key={i}>
              <span className="tech-dot" />
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="tech-track-wrapper" style={{ marginTop: "12px" }}>
        <div className="tech-track reverse">
          {doubled(row2).map((tech, i) => (
            <span className="tech-pill" key={i}>
              <span className="tech-dot" />
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="tech-track-wrapper" style={{ marginTop: "12px" }}>
        <div className="tech-track forward">
          {doubled(row3).map((tech, i) => (
            <span className="tech-pill" key={i}>
              <span className="tech-dot" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
