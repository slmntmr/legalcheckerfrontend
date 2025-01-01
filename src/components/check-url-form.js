import { useState } from "react";
import styles from "@/styles/check-url-form.module.css";
import { checkUrl } from "@/services/check-url.service";

export default function CheckUrlForm() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    try {
      const response = await checkUrl(url);
      setResult(response);
    } catch (err) {
      setError("An error occurred while checking the URL.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">Enter URL:</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          required
        />
        <button type="submit">Check</button>
      </form>
      {result && (
        <div className={styles.result}>
          <h3>Analysis Results:</h3>
          <ul>
            <li>Cookie Policy: {result.cookiePolicy ? "✅" : "❌"}</li>
            <li>Privacy Policy: {result.privacyPolicy ? "✅" : "❌"}</li>
            <li>SSL Validity: {result.ssl ? "✅" : "❌"}</li>
          </ul>
        </div>
      )}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}
