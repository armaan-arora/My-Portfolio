import { useState } from "react";
import { createPortal } from "react-dom";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    id: "01",
    title: "Intelligent Study Assistant",
    type: "RAG Platform",
    description:
      "A production-ready study companion that ingests PDFs, lecture notes, and textbooks into a FAISS vector store. Uses LangGraph to orchestrate multi-step retrieval and answer generation with source citations.",
    overview:
      "A highly scalable Retrieval-Augmented Generation (RAG) application enabling users to converse intimately with their private documents. It leverages semantic search to retrieve the most relevant context vectors, injecting them into the LLM prompt for accurate, hallucination-free answers.",
    features: [
      "Vector embeddings generated via advanced OpenAI models",
      "Extremely fast semantic similarity search utilizing FAISS",
      "Intelligent document chunking and preprocessing pipeline",
      "Conversational memory buffer for handling complex follow-up questions",
    ],
    tags: ["Python", "LangChain", "LangGraph", "OpenAI", "FAISS", "Streamlit"],
    image: "/images/project1.png",
    liveDemo: "#",
    sourceCode: "https://github.com/armaan-arora/intelligent-study-assistant",
  },
  {
    id: "02",
    title: "AI Research Agent",
    type: "Autonomous Multi-Agent",
    description:
      "An autonomous research pipeline that breaks complex queries into sub-tasks, dispatches specialized agents for web search, summarization, and fact-checking, and synthesizes a final report.",
    overview:
      "This system functions as a robust multi-agent research pipeline. It breaks down complex queries, fetches data from the web using search agents, validates information via fact-checking agents, and collates everything into a detailed summary.",
    features: [
      "Dynamic task planning and agent delegation using LangGraph",
      "Real-time web search integration with Google Search API",
      "Structured output parsing using Pydantic",
      "Continuous state tracking and logging for observability",
    ],
    tags: ["Python", "LangGraph", "ChromaDB", "Pydantic", "Streamlit"],
    image: "/images/project2.png",
    liveDemo: "#",
    sourceCode: "https://github.com/armaan-arora/ai-research-agent",
  },
  {
    id: "03",
    title: "AI Support Chatbot",
    type: "Conversational AI",
    description:
      "A context-aware AI support agent built with RAG over a custom FAQ knowledge base. Features sentiment detection, smart escalation to human agents, and multi-turn memory using LangChain's ConversationBufferMemory.",
    overview:
      "Designed for customer-facing deployment, this AI Support Chatbot can autonomously resolve tier-1 support queries. If it detects negative sentiment or is unable to find an answer in the vector database, it seamlessly escalates the conversation to a human representative.",
    features: [
      "Context-aware RAG pipeline over MongoDB vector search",
      "Sentiment analysis integration for intelligent escalation",
      "Custom FastAPI backend ensuring low-latency interactions",
      "Modern React-based chat interface with typing indicators",
    ],
    tags: ["Python", "LangChain", "OpenAI", "FastAPI", "React", "MongoDB"],
    image: "/images/project3.png",
    liveDemo: "#",
    sourceCode: "https://github.com/armaan-arora",
  },
  {
    id: "04",
    title: "Intelligent Meeting Assistant",
    type: "Meeting AI · RAG",
    description:
      "An intelligent meeting assistant that transcribes audio/video, generates structured summaries, extracts action items, identifies key decisions, and lets you chat with your meeting using Retrieval-Augmented Generation (RAG).",
    overview:
      "A comprehensive AI-powered meeting analysis platform that supports YouTube URLs, audio, and video files. It transcribes content using Whisper AI and Sarvam AI (for Hindi/Hinglish), generates structured summaries with action items, key decisions, and open questions — then lets you interactively chat with your meeting via a RAG pipeline backed by ChromaDB.",
    features: [
      "English transcription using local Whisper AI",
      "Hindi & Hinglish transcription via Sarvam AI",
      "AI-generated meeting summaries with action items & deadlines",
      "Chat with your meeting using RAG + ChromaDB",
      "Export reports as PDF or TXT",
    ],
    tags: ["Python", "Streamlit", "Whisper", "Sarvam AI", "Mistral AI", "LangChain", "ChromaDB"],
    image: "/images/project4.png",
    liveDemo: "#",
    sourceCode: "https://github.com/armaan-arora/ai-video-assistant",
  },
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);



  return (
    <>
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <div className="work-header">
            <p className="work-eyebrow">Selected Projects</p>
            <h2>
              My <span>Work</span>
            </h2>
          </div>

          <div className="work-flex">
            {projects.map((project, idx) => (
              <div
                className={`work-box ${idx % 2 !== 0 ? "work-box--alt" : ""}`}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                style={{ cursor: "pointer" }}
                data-cursor="pointer"
              >
                {/* Image */}
                <div className="work-image-wrap">
                  <div className="work-image-hover">
                    <WorkImage
                      image={project.image}
                      alt={project.title}
                      link={project.liveDemo}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="work-info">
                  <div className="work-title">
                    <h3>{project.id}</h3>
                    <div>
                      <h4>{project.title}</h4>
                      <p className="work-type">{project.type}</p>
                    </div>
                  </div>

                  <p className="work-desc">{project.description}</p>

                  <div className="work-tags">
                    {project.tags.map((tag) => (
                      <span className="work-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className="work-cta"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="14"
                      height="14"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal using React Portal to mount at body level */}
      {selectedProject &&
        createPortal(
          <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="project-modal-close" onClick={() => setSelectedProject(null)}>
                ✕
              </button>
              
              <div className="project-modal-header">
                <p className="project-modal-type">{selectedProject.type}</p>
                <h2>{selectedProject.title}</h2>
              </div>
              
              <div className="project-modal-body">
                <div className="project-modal-left">
                  <h3>Overview</h3>
                  <p>{selectedProject.overview}</p>
                  
                  <h3>Key Features</h3>
                  <ul>
                    {selectedProject.features.map((feature: string, i: number) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-modal-right">
                  <div className="project-modal-tech">
                    <h3>Technologies</h3>
                    <div className="project-modal-tags">
                      {selectedProject.tags.map((tag: string) => (
                        <span className="project-modal-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-modal-links">
                    <a href={selectedProject.liveDemo} target="_blank" rel="noreferrer" className="modal-btn-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      Live Demo
                    </a>
                    <a href={selectedProject.sourceCode} target="_blank" rel="noreferrer" className="modal-btn-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Work;
