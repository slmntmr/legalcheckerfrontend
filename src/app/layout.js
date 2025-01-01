import "@/styles/globals.css";
import "@/styles/layout.module.css";
import Drop from "@/components/Drop";

export const metadata = {
  title: "Legal Checker",
  description: "Analyze your website for legal compliance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="main-content">{children}</main>
        <Drop />
      </body>
    </html>
  );
}
