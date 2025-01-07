import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../css/animations.css"; // Archivo CSS para las animaciones

const Extensiones = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [extensions, setExtensions] = useState([]);
  const [search, setSearch] = useState("");
  const [hiddenLetters, setHiddenLetters] = useState({});

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleLetterVisibility = (letter) => {
    setHiddenLetters((prev) => ({
      ...prev,
      [letter]: !prev[letter],
    }));
  };

  useEffect(() => {
    const fetchExtensions = async () => {
      try {
        const response = await fetch("http://localhost:5000/extensiones");
        const data = await response.json();
        setExtensions(data);
      } catch (error) {
        console.error("Error fetching extensiones:", error);
      }
    };

    fetchExtensions();
  }, []);

  const filteredExtensions = extensions
    .filter((extension) => {
      const searchLower = search.toLowerCase();
      return (
        (extension.nombre?.toLowerCase() || "").includes(searchLower) ||
        (extension.extension?.toString() || "").includes(searchLower) ||
        (extension.correo?.toLowerCase() || "").includes(searchLower) ||
        (extension.dependencia?.toLowerCase() || "").includes(searchLower) ||
        (extension.departamento?.toLowerCase() || "").includes(searchLower)
      );
    })
    .map((extension) => ({
      ...extension,
      nombre: extension.nombre?.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "") || "",
    }))
    .sort((a, b) => a.nombre.localeCompare(b.nombre));

  const groupedExtensions = filteredExtensions.reduce((groups, extension) => {
    const firstLetter = extension.nombre[0]?.toUpperCase() || "#";
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(extension);
    return groups;
  }, {});

  const styles = {
    button: {
      position: "fixed",
      top: "10px",
      left: "10px",
      zIndex: 1000,
      backgroundColor: "green",
      color: "white",
      border: "none",
      padding: "10px 20px",
      cursor: "pointer",
      borderRadius: "5px",
      fontSize: "16px",
    },
    sidebar: {
      position: "fixed",
      top: 0,
      left: 0,
      height: "100%",
      width: "350px",
      backgroundColor: "#fefefe",
      zIndex: 999,
      overflowY: "auto",
      padding: "20px",
      transition: "transform 0.3s ease-in-out",
      transform: showSidebar ? "translateX(0)" : "translateX(-100%)",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: "#ccc",
      border: "none",
      padding: "5px 10px",
      cursor: "pointer",
      borderRadius: "4px",
    },
    input: {
      marginBottom: "20px",
      padding: "10px",
      width: "100%",
      borderRadius: "5px",
      border: "1px solid #ddd",
      fontSize: "14px",
    },
    letterContainer: {
      display: "flex",
      alignItems: "center",
      marginTop: "20px",
      marginBottom: "10px",
      cursor: "pointer",
    },
    letter: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
      marginRight: "10px",
    },
    divider: {
      flex: 1,
      height: "1px",
      backgroundColor: "#ddd",
    },
    card: {
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      padding: "15px",
      marginBottom: "15px",
      backgroundColor: "#ffffff",
      display: "flex",
      flexDirection: "column",
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px",
    },
    cardTitle: {
      color: "red",
      fontSize: "18px",
      fontWeight: "bold",
    },
    extension: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "black",
    },
    cardText: {
      margin: "5px 0",
      fontSize: "14px",
      color: "#333",
    },
    label: {
      color: "black",
      fontWeight: "bold",
      marginRight: "5px",
    },
  };

  return (
    <div>
      {!showSidebar && (
        <button style={styles.button} onClick={toggleSidebar}>
          Extensiones
        </button>
      )}

      <div style={styles.sidebar}>
        {showSidebar && (
          <button style={styles.closeButton} onClick={toggleSidebar}>
            Cerrar
          </button>
        )}

        <input
          type="text"
          style={styles.input}
          placeholder="Buscar extensiones"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div>
          {Object.keys(groupedExtensions).length > 0 ? (
            Object.keys(groupedExtensions).map((letter) => (
              <div key={letter}>
                <div
                  style={styles.letterContainer}
                  onClick={() => toggleLetterVisibility(letter)}
                >
                  <span style={styles.letter}>{letter}</span>
                  <div style={styles.divider}></div>
                </div>
                <TransitionGroup>
                  {!hiddenLetters[letter] &&
                    groupedExtensions[letter].map((extension) => (
                      <CSSTransition
                        key={extension.id_extension}
                        timeout={300}
                        classNames="slide"
                      >
                        <div style={styles.card}>
                          <div style={styles.cardHeader}>
                            <h5 style={styles.cardTitle}>{extension.nombre}</h5>
                            <span style={styles.extension}>EXT: {extension.extension}</span>
                          </div>
                          <p style={styles.cardText}>
                            <span style={styles.label}>Correo:</span> {extension.correo}
                          </p>
                          {/* <p style={styles.cardText}>
                            <span style={styles.label}>Dependencia:</span> {extension.dependencia}
                          </p> */}
                          <p style={styles.cardText}>
                            <span style={styles.label}>Departamento:</span> {extension.departamento || "Sin asignar"}
                          </p>
                        </div>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </div>
            ))
          ) : (
            <p>No se encontraron extensiones</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Extensiones;
