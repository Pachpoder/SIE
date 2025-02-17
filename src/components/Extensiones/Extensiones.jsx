import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PhoneIcon from "@material-ui/icons/Phone"; // Importar ícono de teléfono
import "../../css/animations.css"; // Archivo CSS para las animaciones
import transitions from "@material-ui/core/styles/transitions";

const CACHE_KEY = "extensions_cache";
const CACHE_TTL = 60 * 60 * 1000; // 1 hora en milisegundos

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
        // Comprobar si hay datos en caché
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          if (Date.now() - timestamp < CACHE_TTL) {
            setExtensions(data);
            return;
          }
        }

        // Si no hay caché válida, realizar la solicitud a la API
        // const response = await fetch("http://192.168.1.161:8000/api/extensiones");
        // extensiones test
        const response = await fetch("http://sie.test/api/extensiones");
        const data = await response.json();

        // Almacenar los datos en la caché con un timestamp
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
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
      top: "65%",
      right: "10px",
      transform: "translateY(-50%)",
      zIndex: 1000,
      backgroundColor: "#00ADB5",
      color: "white",
      border: "none",
      padding: "clamp(10px, 2vw, 15px)", // Adaptable en diferentes tamaños de pantall
      borderRadius: "50%",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "clamp(14px, 1.5vw, 16px)", // Tamaño de fuente adaptable
      transition: "background-color 0.3s, transform 0.3s",
      width: "clamp(40px, 4vw, 50px)", // Tamaño del botón adaptable
      height: "clamp(40px, 4vw, 50px)",
    },
    buttonHover: {
      backgroundColor: "#007a86", // Azul más oscuro al pasar el mouse
      transform: "scale(1.1)",
    },
    icon: {
      fontSize: "clamp(18px, 2vw, 24px)", // Tamaño del icono adaptable
    },
    sidebar: {
      position: "fixed",
      top: 0,
      left: showSidebar ? 0 : "-350px",
      height: "100%",
      width: "350px",
      backgroundColor: "#222831", // Gris oscuro elegante
      zIndex: 999,
      overflowY: "auto",
      padding: "20px",
      transition: "left 0.3s ease-in-out",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: "#555", // Gris neutro para botón de cierre
      border: "none",
      padding: "5px 10px",
      cursor: "pointer",
      borderRadius: "4px",
      color: "#EEE",
    },
    input: {
      marginBottom: "20px",
      padding: "10px",
      width: "100%",
      borderRadius: "5px",
      border: "1px solid #555",
      fontSize: "14px",
      backgroundColor: "#333", // Fondo oscuro para el input
      color: "#EEE",
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
      color: "#00FFF5", // Azul brillante para resaltar
      marginRight: "10px",
    },
    divider: {
      flex: 1,
      height: "1px",
      backgroundColor: "#444", // Gris medio para suavizar el contraste
    },
    card: {
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      padding: "15px",
      marginBottom: "15px",
      backgroundColor: "#393E46", // Gris oscuro pero diferenciado del fondo
      display: "flex",
      flexDirection: "column",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    cardHover: {
      boxShadow: "0px 8px 16px rgba(0, 173, 181, 0.4)", // Sombra azul turquesa
      transform: "translateY(-8px)",
      backgroundColor: "#00ADB5", // Azul oscuro en hover
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
      color: "#EEE", // Blanco suave para títulos
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    extension: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#00FFF5", // Azul turquesa brillante para destacar
      cursor: "pointer",
    },
    cardText: {
      margin: "5px 0",
      fontSize: "14px",
      color: "#EEEEEE", // Gris claro para texto secundario
      cursor: "pointer",
    },
    label: {
      color: "#EEE",
      fontWeight: "bold",
      marginRight: "5px",
    },
  };
  

  return (
    <div>
      {!showSidebar && (
        <button style={styles.button} onClick={toggleSidebar}>
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
                      <CSSTransition key={extension.id_extension} timeout={300} classNames="slide">
                        <div
                          style={
                            hoveredCard === extension.id_extension
                              ? { ...styles.card, ...styles.cardHover }
                              : styles.card
                          }
                          onMouseEnter={() => setHoveredCard(extension.id_extension)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <div style={styles.cardHeader}>
                            <h5 style={styles.cardTitle}>{extension.nombre}</h5>
                            <span style={styles.extension}>EXT: {extension.extension}</span>
                          </div>
                          <p style={styles.cardText}>
                            <span style={styles.label}>Correo:</span> {extension.correo}
                          </p>
                          <p style={styles.cardText}>
                            <span style={styles.label}>Departamento:</span>{" "}
                            {extension.departamento || "Sin asignar"}
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
