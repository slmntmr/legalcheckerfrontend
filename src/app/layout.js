import "@/styles/globals.css";
import "@/styles/layout.module.css";
import CheckUrlHeader from "@/components/check-url-header";
import CheckUrlFooter from "@/components/check-url-footer";
import Drop from "@/components/Drop";

export const metadata = {
  title: "Legal Checker",
  description: "Analyze your website for legal compliance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <CheckUrlHeader /> */}
        <main className="main-content">{children}</main>
        <Drop/>
        {/* <CheckUrlFooter /> */}
      </body>
    </html>
  );
}
