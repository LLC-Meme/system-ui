import React, { useCallback } from "react";
import styles from "./spinner.module.css";
import { cn } from "../../../lib/cn";

const POINTS = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
const OPACITIES = [
  0.17, 0.25, 0.33, 0.42, 0.5, 0.58, 0.66, 0.75, 0.83, 1, 0.92, 0.08,
];

const Spinner = ({ className }: { className?: string }) => {
  const lines = useCallback(
    () =>
      POINTS.map((point, index) => (
        <polyline
          key={point}
          points="24,12 24,4"
          transform={`rotate(${point}, 24, 24)`}
          strokeLinecap="round"
          style={{
            strokeWidth: "4px",
            strokeOpacity: OPACITIES[index] ?? 1,
          }}
        />
      )),
    [4],
  );

  return (
    <svg
      className={cn(
        "inline-block",
        "text-foreground-muted",
        styles.spinner,
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="96"
      stroke="currentColor"
      data-testid="rotating-lines-svg"
      aria-label="spinner"
      aria-busy={true}
      role="progressbar"
    >
      {lines()}
    </svg>
  );
};
Spinner.displayName = "Spinner";

export default Spinner;
