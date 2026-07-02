import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-columns">
          {/* ── Left Column: Education & Experience ── */}
          <div className="career-col career-col-left">
            <h3 className="career-col-heading">Education & Experience</h3>

            <div className="career-info">
              <div className="career-timeline">
                <div className="career-dot"></div>
              </div>

              <div className="career-info-box">
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>Class X</h4>
                    <h5>Holy Cross School</h5>
                  </div>
                  <h3>Mar 2020</h3>
                </div>
              </div>

              <div className="career-info-box">
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>Class XII</h4>
                    <h5>Holy Cross School</h5>
                  </div>
                  <h3>Apr 2022</h3>
                </div>
              </div>

              <div className="career-info-box">
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>B.E. Computer Science & Engineering</h4>
                    <h5>Chandigarh University</h5>
                  </div>
                  <h3>June 2026</h3>
                </div>

                {/* Nested sub-entry under University */}
                <div className="career-sub-entry">
                  <div className="career-sub-line"></div>
                  <div className="career-sub-content">
                    <div className="career-info-in">
                      <div className="career-role">
                        <h4>Generative AI Engineer Intern</h4>
                        <h5>TDA, Bengaluru</h5>
                      </div>
                      <h3 className="career-date-sm">Jun 2025 — Aug 2025</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Certifications ── */}
          <div className="career-col career-col-right">
            <h3 className="career-col-heading">Certifications</h3>

            <div className="cert-stack">
              <div className="cert-card">
                <div className="cert-badge">IBM</div>
                <h4>Agentic AI with LangChain & LangGraph</h4>
                <p>
                  Building autonomous AI agents using LangChain & LangGraph
                  orchestration frameworks.
                </p>
              </div>

              <div className="cert-card">
                <div className="cert-badge">IBM</div>
                <h4>Fundamentals of AI Agents Using RAG & LangChain</h4>
                <p>
                  Core fundamentals of retrieval-augmented generation
                  pipelines and AI agent architecture.
                </p>
              </div>

              <div className="cert-card">
                <div className="cert-badge">University of Michigan (Coursera)</div>
                <h4>Python Data Structures</h4>
                <p>
                  Advanced data structure patterns and algorithmic problem
                  solving with Python.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
