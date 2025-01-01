"use client";

import { useState } from "react";
import styles from "@/styles/check-url-form.module.css";
import { checkUrl } from "@/services/check-url.service";

export default function CheckUrlForm() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Yeni state: loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    setLoading(true); // Loading başlasın

    try {
      const response = await checkUrl(url);
      setResult(response);
    } catch (err) {
      setError("An error occurred while checking the URL.");
    } finally {
      setLoading(false); // Loading bitsin
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
        <button type="submit" disabled={loading}>
          {loading ? "Checking..." : "Check"} {/* Buton metni değişiyor */}
        </button>
      </form>
      {result && (
        <div className={styles.results}>
          <h3>Analysis Results:</h3>
          <div className={styles.cardContainer}>
            {[
              { label: "Cookie Policy", value: result.cookiePolicy },
              { label: "Privacy Policy", value: result.privacyPolicy },
              { label: "Terms of Service", value: result.termsOfService },
              { label: "SSL Validity", value: result.ssl },
              { label: "Contact Info", value: result.contactInfo },
              { label: "Copyright", value: result.copyright },
              { label: "Brand Info", value: result.brandInfo },
              { label: "GDPR/KVKK Compliance", value: result.gdprKvkkCompliance },
            ].map((item, index) => (
              <div key={index} className={styles.card}>
                <span className={styles.cardTitle}>{item.label}</span>
                <span className={styles.cardStatus}>
                  {item.value ? "✅" : "❌"}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}
