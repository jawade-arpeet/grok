import React from "react";

import "@/styles/globals.css";
import { fontInter } from "@/lib/font";

const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body className={fontInter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
