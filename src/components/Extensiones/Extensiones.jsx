import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PhoneIcon from "@material-ui/icons/Phone"; // Importar ícono de teléfono
import "../../css/animations.css"; // Archivo CSS para las animaciones
import transitions from "@material-ui/core/styles/transitions";

const Extensiones = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [extensions, setExtensions] = useState([]);
  const [search, setSearch] = useState("");
  const [hiddenLetters, setHiddenLetters] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

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
      top: "50%", // Centrado verticalmente
      right: "10px", // Botón pegado al lado derecho
      transform: "translateY(-50%)", // Ajuste para centrar completamente
      zIndex: 1000,
      backgroundColor: "#0056b3", // Color azul adaptado al diseño
      color: "white",
      border: "none",
      padding: "15px",
      borderRadius: "50%", // Forma circular
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "16px",
      transition: "background-color 0.3s, transform 0.3s", // Animaciones suaves
    },
    buttonHover: {
      backgroundColor: "#003f7f", // Color al pasar el mouse
      transform: "scale(1.1)", // Escalar al pasar el mouse
    },
    icon: {
      fontSize: "24px", // Tamaño del ícono
    },
    sidebar: {
      position: "fixed",
      top: 0,
      left: showSidebar ? 0 : "-350px", // Mostrar desde el lado izquierdo
      height: "100%",
      width: "350px",
      backgroundColor: "#fefefe",
      zIndex: 999,
      overflowY: "auto",
      padding: "20px",
      transition: "left 0.3s ease-in-out", // Animación suave al abrir/cerrar
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
      color: "blue",
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
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    cardHover: {
      boxShadow: "0px 8px 16px rgba(44, 117, 255, 0.4)",  // Sombra azul
      transform: "translateY(-8px)",
      backgroundColor: "#d6ebff",  // Azul claro suave que armoniza con el estilo
      transition: "all 0.3s ease",
      cursor: "pointer",
  },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px",
    },
    cardTitle: {
      color: "black",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    extension: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#2c75ff",
      cursor: "pointer",
    },
    cardText: {
      margin: "5px 0",
      fontSize: "14px",
      color: "#3c3c3c",
      cursor: "pointer",
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
        <button
          style={styles.button}
          onClick={toggleSidebar}
        >
          <PhoneIcon style={styles.icon} />
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

                        <div 
                          style={hoveredCard === extension.id_extension ? {...styles.card, ...styles.cardHover} : styles.card
                        }
                        onMouseEnter={() => setHoveredCard(extension.id_extension)}
                        onMouseLeave={() => setHoveredCard(null)}
                        >
                          <div style={styles.cardHeader}>
                            <h5 style={styles.cardTitle}
                            // onClick={() => alert(`Seleccionaste: ${extension.nombre}`)}
                            >{extension.nombre}</h5>
                            <span style={styles.extension}>EXT: {extension.extension}</span>
                          </div>
                          <p style={styles.cardText}>
                            <span style={styles.label}>Correo:</span> {extension.correo}
                          </p>
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


