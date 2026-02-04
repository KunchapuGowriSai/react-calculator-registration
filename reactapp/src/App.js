import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  // ---------- HOME / INTRO PAGE ----------
  if (page === "home") {
    return (
      <div style={styles.pageWrapper}>
        <div style={styles.container}>
          <h1 style={styles.title}>Gowri Sai Students Quick Resources Application</h1>

          <p style={styles.tagline}>
            Empowering Students with Knowledge, Skills & Innovation
          </p>

          <p style={styles.description}>
            Welcome to our digital utilities portal.
            This platform provides smart tools like a calculator and
            a seamless online college registration system.
          </p>

          <div style={styles.buttonBox}>
            <button
              style={styles.button}
              onClick={() => setPage("calculator")}
            >
              Open Calculator
            </button>

            <button
              style={styles.button}
              onClick={() => setPage("registration")}
            >
              Open Registration Form
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <footer style={styles.footer}>
          © 2026 Gowri Sai Students Quick Resources Application | Learn • Build • Grow
        </footer>
      </div>
    );
  }

  // ---------- CALCULATOR PAGE ----------
  if (page === "calculator") {
    return (
      <div style={styles.fullPage}>
        <iframe
          src="/calculator/index.html"
          title="Calculator"
          style={styles.iframe}
        />

        <button style={styles.backBtn} onClick={() => setPage("home")}>
          ⬅ Back to Home
        </button>
      </div>

    );
  }

  // ---------- REGISTRATION PAGE ----------
  if (page === "registration") {
    return (
      <div style={styles.fullPage}>
        <iframe
          src="/registration/index.html"
          title="Registration"
          style={styles.iframe}
        />

        <button style={styles.backBtn} onClick={() => setPage("home")}>
          ⬅ Back to Home
        </button>
      </div>

    );
  }
}

export default App;

// ---------- STYLES ----------
const styles = {
  pageWrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    color: "white",
  },

  container: {
    padding: "40px",
    textAlign: "center",
    flex: 1,
  },

  title: {
    fontSize: "42px",
    marginBottom: "10px",
  },

  tagline: {
    fontSize: "20px",
    fontStyle: "italic",
    marginBottom: "20px",
  },

  description: {
    maxWidth: "700px",
    margin: "0 auto 40px",
    fontSize: "18px",
    lineHeight: "1.6",
  },

  buttonBox: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },

  button: {
    padding: "15px 35px",
    fontSize: "18px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#ffcc00",
    fontWeight: "bold",
  },

  footer: {
    marginTop: "auto",
    padding: "15px",
    textAlign: "center",
    fontSize: "14px",
    backgroundColor: "rgba(0,0,0,0.3)",
  },


  fullPage: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f4f4f4",
  },
  iframe: {
    flex: 1,
    width: "100%",
    border: "none",
  },

  backBtn: {
    padding: "12px 25px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "0",
    border: "none",
    backgroundColor: "#222",
    color: "white",
  },
};
