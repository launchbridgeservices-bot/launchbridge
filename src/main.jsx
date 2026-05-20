import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function LaunchBridgeWebsite() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f8f8f8", color: "#111" }}>
      
      {/* HERO SECTION */}
      <section
        style={{
          background: "#071a3d",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "56px", marginBottom: "20px" }}>
          LaunchBridge Services
        </h1>

        <p style={{ fontSize: "24px", maxWidth: "800px", margin: "0 auto 30px" }}>
          Helping Businesses Launch, Grow & Succeed Professionally
        </p>

        <a
          href="mailto:launchbridgeservices@gmail.com"
          style={{
            background: "#d4a017",
            color: "#071a3d",
            padding: "15px 30px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Contact Us
        </a>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "white" }}>
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          About LaunchBridge Services
        </h2>

        <p style={{ maxWidth: "900px", margin: "0 auto", fontSize: "20px", lineHeight: "1.7" }}>
          LaunchBridge Services helps startups, healthcare providers, service businesses,
          and entrepreneurs build a strong and professional business presence.
          We provide practical support for business launch, branding, online presence,
          recruitment coordination, and growth strategy support.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px", background: "#f2f4f7" }}>
        <h2 style={{ textAlign: "center", fontSize: "40px", marginBottom: "50px" }}>
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            "Business Setup Support",
            "Professional Branding",
            "Website & Online Presence",
            "Recruitment Support",
            "Growth Strategy Guidance",
            "Ongoing Business Support",
          ].map((service, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#071a3d" }}>{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: "60px 20px", background: "white" }}>
        <h2 style={{ textAlign: "center", fontSize: "40px", marginBottom: "40px" }}>
          Why Choose LaunchBridge Services
        </h2>

        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {[
            "Professional & Practical Support",
            "Global Service Coverage",
            "Business Growth Focused",
            "Reliable & Transparent",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#071a3d",
                color: "white",
                padding: "30px",
                borderRadius: "15px",
              }}
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          background: "#071a3d",
          color: "white",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Let’s Build Your Business Together
        </h2>

        <p style={{ fontSize: "22px", marginBottom: "20px" }}>
          Australia-based. Supporting businesses globally.
        </p>

        <p style={{ fontSize: "20px", marginBottom: "10px" }}>
          📧 launchbridgeservices@gmail.com
        </p>

        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          📞 +61 450 745 520
        </p>

        <a
          href="mailto:launchbridgeservices@gmail.com"
          style={{
            background: "#d4a017",
            color: "#071a3d",
            padding: "15px 30px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Email LaunchBridge Services
        </a>
      </section>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <LaunchBridgeWebsite />
);
