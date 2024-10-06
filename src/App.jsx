// src/App.jsx
import React from "react";
import ButtonLink from "./components/ButtonLink";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "black",
        width: "100vw", // Mengisi seluruh lebar viewport
        height: "100vh", // Mengisi seluruh tinggi viewport
        margin: 0, // Menghapus margin default
      }}
    >
      {/* Tambahkan logo */}
      <img
        src="/rrr.png" // Menghilangkan 'public' dari path
        alt="Abadi Charcoal Logo"
        style={{ width: "150px", marginBottom: "20px" }}
      />

      <h1 style={{ color: "#D32F2F" }}>Welcome to Abadi Charcoal Catalog</h1>
      <p style={{ color: "#fff" }}>Access our catalogs below:</p>

      {/* Terapkan skema warna merah dan hitam untuk tombol */}
      <ButtonLink
        label="View Abadi Charcoal Catalog (English)"
        link="/pdfs/Abadi_Charcoal_Catalog_English.pdf"
      />

      <ButtonLink
        label="View Abadi Charcoal Catalog (Arabic)"
        link="/pdfs/Abadi_Charcoal_Catalog_Arabic.pdf"
      />
    </div>
  );
}

export default App;
