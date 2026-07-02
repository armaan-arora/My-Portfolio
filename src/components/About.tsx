import "./styles/About.css";
import ArsenalCanvas from "./ArsenalCanvas";

const About = () => {
  return (
    <div className="about-section" id="about">

      {/* Header */}
      <p className="about-eyebrow">About Me</p>
      <h2 className="about-headline">
        Architecting <span>Intelligence.</span>
      </h2>

      {/* ── Top two-column row ── */}
      <div className="about-top-grid">

        {/* Journey card */}
        <div className="ab-card ab-journey">
          <p className="ab-card-label">The Journey</p>
          <h3>Building AI That Works in the Real World</h3>
          <p>
            As a final-year CS undergraduate and <strong>Generative AI Engineer</strong>, I
            architect complex systems around{" "}
            <em>Large Language Models (LLMs)</em> and{" "}
            <em>Retrieval-Augmented Generation (RAG)</em> pipelines. My focus is entirely
            on building AI applications that are accurate, efficient, and hallucination-free.
          </p>
          <p>
            I specialize in transforming raw machine intelligence into scalable,
            production-ready solutions. By leveraging advanced orchestration frameworks like{" "}
            <em>LangChain</em> &amp; <em>LangGraph</em>, powerful vector databases{" "}
            (<em>Pinecone, ChromaDB, FAISS</em>), and the <em>OpenAI API</em>, I engineer
            end-to-end pipelines that allow intelligent agents to interact fluidly with
            massive datasets.
          </p>
          <p className="journey-philosophy">
            My core philosophy:{" "}
            <span>elegant AI architectures solve complex problems.</span>
          </p>
        </div>

        {/* Technical Arsenal card */}
        <div className="ab-card ab-arsenal" style={{ display: "flex", flexDirection: "column" }}>
          <p className="ab-card-label">Technical Arsenal</p>
          <div style={{ flex: 1, minHeight: "260px", marginTop: "10px" }}>
            <ArsenalCanvas />
          </div>
        </div>
      </div>

      {/* ── Bottom info cards ── */}
      <div className="about-bottom-grid">

        {/* Quote card */}
        <div className="ab-card ab-quote">
          <span className="quote-mark">"</span>
          <p>
            Driven to build scalable, production-ready AI applications that solve
            complex real-world challenges through elegant engineering.
          </p>
        </div>

        {/* Primary Focus card */}
        <div className="ab-card ab-focus">
          <p className="ab-card-label">Primary Focus</p>
          <div className="focus-title">
            RAG<br />Architecture
          </div>
          <p className="focus-sub">Retrieval-Augmented Generation</p>
        </div>

        {/* Education card */}
        <div className="ab-card ab-edu">
          <p className="ab-card-label">Education</p>
          <div className="edu-title">
            B.E.<br />CS&nbsp;&amp;&nbsp;Engg
          </div>
          <p className="edu-sub">Chandigarh University · 2026</p>
        </div>
      </div>

      {/* ── Status bar ── */}
      <div className="ab-status">
        <div className="status-dot-wrap">
          <span className="status-dot" />
          <span className="status-label">Current Status</span>
        </div>
        <p>
          Currently building highly-scalable LLM agents and actively seeking{" "}
          <span>Generative AI Engineering Roles</span>.
        </p>
      </div>

    </div>
  );
};

export default About;
