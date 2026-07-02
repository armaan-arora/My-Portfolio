import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO" id="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          {/* Vertical dashed line overlays */}
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="rgba(0, 168, 255, 0.3)"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="rgba(0, 168, 255, 0.3)"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* Card 1: AI Development */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="rgba(0, 168, 255, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="rgba(0, 168, 255, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI DEVELOPMENT</h3>
              <h4>01 / WORKFLOW ORCHESTRATION</h4>
              <p>
                Building production-ready AI applications powered by LLMs, RAG pipelines, and autonomous AI agents.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <span className="what-tags">Python</span>
                <span className="what-tags">LangChain</span>
                <span className="what-tags">LangGraph</span>
                <span className="what-tags">OpenAI API</span>
                <span className="what-tags">JavaScript</span>
                <span className="what-tags">React</span>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Card 2: Data & Agents */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="rgba(0, 168, 255, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            
            <div className="what-content-in">
              <h3>DATA &amp; AGENTS</h3>
              <h4>02 / KNOWLEDGE RETRIEVAL</h4>
              <p>
                Architecting scalable AI systems combining intelligent retrieval, vector search, structured reasoning, and multi-agent systems.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <span className="what-tags">Pinecone</span>
                <span className="what-tags">ChromaDB</span>
                <span className="what-tags">FAISS</span>
                <span className="what-tags">Prompt Engineering</span>
                <span className="what-tags">Multi-Agent Systems</span>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Card 3: Backend & Deployment */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="rgba(0, 168, 255, 0.3)"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            
            <div className="what-content-in">
              <h3>SYSTEMS &amp; DEPLOY</h3>
              <h4>03 / INFRASTRUCTURE</h4>
              <p>
                Designing highly reliable backends, implementing LLM observability, and setting up scalable container deployments.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <span className="what-tags">FastAPI</span>
                <span className="what-tags">Docker</span>
                <span className="what-tags">LangSmith</span>
                <span className="what-tags">PostgreSQL</span>
                <span className="what-tags">Vercel</span>
                <span className="what-tags">Streamlit</span>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
