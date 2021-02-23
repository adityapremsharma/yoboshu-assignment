import React from "react";

const Button = () => {
  return (
    <button
      aria-label="Activate dark mode"
      title="Activate dark mode"
      class="UnstyledButton-sc-1qlpyz4-0 DarkModeToggle__IconWrapper-sc-1ngd9fq-0 inCGfg"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 18 18"
        style={{ transform: "rotate(90deg)" }}
        class="DarkModeToggle__MoonOrSun-sc-1ngd9fq-1 dBeOcn"
      >
        <mask id="moon-mask-sound-demo">
          <rect x="0" y="0" width="18" height="18" fill="#FFF"></rect>
          <circle cx="25" cy="0" r="8" fill="black"></circle>
        </mask>
        <circle
          cx="9"
          cy="9"
          fill="var(--color-text)"
          mask="url(#moon-mask-sound-demo)"
          r="5"
        ></circle>
        <g>
          <circle
            cx="17"
            cy="9"
            r="1.5"
            fill="var(--color-text)"
            style={{ transformOrigin: "center center", transform: "scale(1)" }}
          ></circle>
          <circle
            cx="13"
            cy="15.928203230275509"
            r="1.5"
            fill="var(--color-text)"
            style={{ transformOrigin: "center center", transform: "scale(1)" }}
          ></circle>
          <circle
            cx="5.000000000000002"
            cy="15.92820323027551"
            r="1.5"
            fill="var(--color-text)"
            style={{ transformOrigin: "center center", transform: "scale(1)" }}
          ></circle>
          <circle
            cx="1"
            cy="9.000000000000002"
            r="1.5"
            fill="var(--color-text)"
            style={{ transformOrigin: "center center", transform: "scale(1)" }}
          ></circle>
          <circle
            cx="4.9999999999999964"
            cy="2.071796769724492"
            r="1.5"
            fill="var(--color-text)"
            style={{ transformOrigin: "center center", transform: "scale(1)" }}
          ></circle>
          <circle
            cx="13"
            cy="2.0717967697244912"
            r="1.5"
            fill="var(--color-text)"
            style={{ transformOrigin: "center center", transform: "scale(1)" }}
          ></circle>
        </g>
      </svg>
    </button>
  );
};

export default Button;
