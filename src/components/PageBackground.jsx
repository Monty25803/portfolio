import { useEffect } from "react";
import AIBackground from "./AIBackground";
import Cursor from "./Cursor";
import { useIsMobile } from "../hooks/useMediaQuery";

export default function PageBackground() {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) {
      document.body.style.cursor = "none";
      return () => {
        document.body.style.cursor = "";
      };
    }
  }, [isMobile]);

  return (
    <>
      <AIBackground />
      {!isMobile && <Cursor />}
    </>
  );
}
