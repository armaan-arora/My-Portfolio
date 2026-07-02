import { useEffect, useRef, useState } from "react";
import "./styles/Landing.css";

const Landing = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try playing WITH sound first
    video.muted = false;
    video.volume = 0.8;

    const playAttempt = video.play();

    if (playAttempt !== undefined) {
      playAttempt
        .then(() => {
          // Browser allowed unmuted autoplay — sound is on!
          setIsMuted(false);
          setHasInteracted(true);
        })
        .catch(() => {
          // Browser blocked unmuted autoplay — fall back to muted
          video.muted = true;
          video.volume = 0;
          setIsMuted(true);
          setHasInteracted(false);
          video.play().catch(() => {});
        });
    }

    // Mute when user scrolls past the hero
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      if (scrollY > heroHeight * 0.3) {
        if (!video.muted) {
          video.muted = true;
          video.volume = 0;
          setIsMuted(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeVolume = (video: HTMLVideoElement, targetVol: number) => {
    const step = targetVol > video.volume ? 0.05 : -0.05;
    const interval = setInterval(() => {
      const next = video.volume + step;
      if ((step > 0 && next >= targetVol) || (step < 0 && next <= targetVol)) {
        video.volume = targetVol;
        clearInterval(interval);
      } else {
        video.volume = Math.max(0, Math.min(1, next));
      }
    }, 50);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      // Unmute
      setHasInteracted(true);
      video.muted = false;
      video.volume = 0;
      fadeVolume(video, 0.8);
      video.play().catch(() => {});
      setIsMuted(false);
    } else {
      // Mute
      fadeVolume(video, 0);
      setTimeout(() => {
        video.muted = true;
        video.volume = 0;
      }, 600);
      setIsMuted(true);
    }
  };

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ARMAAN
              <br />
              <span>SINGH</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Generative</div>
              <div className="landing-h2-2">AI Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">AI Engineer</div>
              <div className="landing-h2-info-1">Generative</div>
            </h2>
          </div>
        </div>

        {/* Mute / Unmute Button */}
        <button
          className="video-mute-btn"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            /* Muted icon — speaker with X */
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M13 3.17v17.66a1 1 0 01-1.64.77L6.29 17H3a1 1 0 01-1-1V8a1 1 0 011-1h3.29l5.07-4.6A1 1 0 0113 3.17z"/>
              <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            /* Unmuted icon — speaker with waves */
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M13 3.17v17.66a1 1 0 01-1.64.77L6.29 17H3a1 1 0 01-1-1V8a1 1 0 011-1h3.29l5.07-4.6A1 1 0 0113 3.17z"/>
              <path d="M16 8.5a5 5 0 010 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M19 5.5a9 9 0 010 13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          )}
          <span className="mute-label">{isMuted ? "Click for Sound" : "Mute"}</span>
          {!hasInteracted && isMuted && <span className="mute-pulse" />}
        </button>

        {/* Video Background */}
        <div style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}>
          <video
            ref={videoRef}
            autoPlay
            loop
            playsInline
            preload="auto"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              minWidth: "100%",
              minHeight: "100%",
              width: "auto",
              height: "auto",
              transform: "translate(-50%, -50%) translateZ(0)",
              willChange: "transform",
              opacity: 0.75,
              objectFit: "cover",
            }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "60%", background: "linear-gradient(to top, var(--backgroundColor), transparent)" }} />
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "30%", background: "linear-gradient(to bottom, var(--backgroundColor), transparent)" }} />
        </div>
      </div>
    </>
  );
};

export default Landing;
