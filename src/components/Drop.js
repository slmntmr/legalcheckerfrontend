"use client";

import React, { useEffect } from "react";
import styles from "@/styles/drop.module.css";

export default function Drop() {
  useEffect(() => {
    const jQueryScript = document.createElement("script");
    jQueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    jQueryScript.onload = () => {
      const jQueryUiScript = document.createElement("script");
      jQueryUiScript.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js";
      jQueryUiScript.onload = () => {
        const raindropsScript = document.createElement("script");
        raindropsScript.src = "/libs/jquery.raindrops.js";
        raindropsScript.onload = () => {
          if (window.jQuery && window.jQuery.fn.raindrops) {
            window.jQuery("#drop-container").raindrops({
              waveLength: 340,
              canvasHeight: 80,
              color: "#007bff",
              frequency: 3,
              waveHeight: 50,
              rippleSpeed: 0.1,
            });
          }
        };
        document.body.appendChild(raindropsScript);
      };
      document.body.appendChild(jQueryUiScript);
    };
    document.body.appendChild(jQueryScript);
  }, []);

  return (
    <section id="drop-container" className={styles.dropContainer}>
      <canvas id="drop-canvas"></canvas>
    </section>
  );
}
