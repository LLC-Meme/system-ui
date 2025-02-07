import { useEffect, useState } from "react";

export interface ThemeSwitchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  current?: boolean;
}

export const useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
};
