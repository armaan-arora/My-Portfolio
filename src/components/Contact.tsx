import { MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { TbFileText, TbArrowUpRight } from "react-icons/tb";
import { useEffect, useRef } from "react";
import "./styles/Contact.css";

const contactCards = [
  {
    label: "EMAIL",
    title: "armaanxdev@gmail.com",
    subtitle: "Drop me a line anytime",
    href: "mailto:armaanxdev@gmail.com",
    icon: <FaEnvelope />,
    external: false,
  },
  {
    label: "GITHUB",
    title: "armaan-arora",
    subtitle: "Check out my repositories",
    href: "https://github.com/armaan-arora",
    icon: <FaGithub />,
    external: true,
  },
  {
    label: "LINKEDIN",
    title: "Armaan Singh Arora",
    subtitle: "Let's connect professionally",
    href: "https://www.linkedin.com/in/armaan-singh-arora/",
    icon: <FaLinkedinIn />,
    external: true,
  },
  {
    label: "RESUME",
    title: "View My Resume",
    subtitle: "Download or preview my CV",
    href: "https://drive.google.com/file/d/1pY1Vvip79bPNvyxG4Yz9X95WRlOiRDy4/view?usp=sharing",
    icon: <TbFileText />,
    external: true,
  },
];

const Contact = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>(".contact-card");

    const handleMouseMove = (e: MouseEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      });
    };

    grid.addEventListener("mousemove", handleMouseMove);
    return () => grid.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <p className="contact-eyebrow">Get In Touch</p>
        <h2 className="contact-headline">
          Let's <span>Connect</span>
        </h2>
        <p className="contact-subtext">
          Have a project in mind or just want to chat? I'm always open to new
          opportunities and conversations.
        </p>

        <div className="contact-grid" ref={gridRef}>
          {contactCards.map((card, i) => (
            <a
              key={i}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              className="contact-card"
              data-cursor="disable"
            >
              <div className="contact-card-icon">{card.icon}</div>
              <span className="contact-card-label">{card.label}</span>
              <h3 className="contact-card-title">{card.title}</h3>
              <p className="contact-card-subtitle">{card.subtitle}</p>
              <div className="contact-card-arrow">
                <TbArrowUpRight />
              </div>
            </a>
          ))}
        </div>

        <div className="contact-footer">
          <p className="contact-footer-credit">
            Designed & Developed by <span>Armaan Singh</span>
          </p>
          <p className="contact-footer-copy">
            <MdCopyright /> 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
