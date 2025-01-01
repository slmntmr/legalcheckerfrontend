import CheckUrlForm from "@/components/check-url-form";
import styles from "@/styles/page.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Legal Checker</h1>
      <p className={styles.description}>
        Use our tool to analyze your website for legal compliance. Enter a URL
        below to get started.
      </p>
      <CheckUrlForm />
    </div>
  );
}
