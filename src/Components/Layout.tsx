import { ReactNode } from "react";
import { theme } from "../theme";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        backgroundColor: theme.colors.background,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: theme.spacing.contentWidth,
        }}
      >
        {children}
      </div>
    </div>
  );
}
