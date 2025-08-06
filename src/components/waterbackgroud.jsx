import { useEffect, useRef } from "react";

const WaterBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous content
    container.innerHTML = "";

    const lottie = document.createElement("dotlottie-wc");
    lottie.setAttribute("src", "https://lottie.host/635c710c-911e-4866-9c53-f97845c6b956/GSku7H8Fui.lottie");
    lottie.setAttribute("autoplay", "");
    lottie.setAttribute("loop", "");
    lottie.setAttribute("speed", "1");

    lottie.style.width = "100%";
    lottie.style.height = "100vh";
    lottie.style.position = "absolute";
    lottie.style.top = "0";
    lottie.style.left = "0";
    lottie.style.zIndex = "-1";
    lottie.style.pointerEvents = "none";

    container.appendChild(lottie);
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-[-1]" />;
};

export default WaterBackground;
