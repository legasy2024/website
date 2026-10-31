'use client';

import { MotionConfig } from "framer-motion";

// Respeta "reducir movimiento" del sistema operativo en todas las animaciones de framer-motion
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
