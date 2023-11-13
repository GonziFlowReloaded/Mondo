import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MesasContext = createContext();

const MesasProvider = ({ children }) => {
  const [mesas, setMesas] = useState([]);
  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    const obtenerMesas = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/mesas`,
          config
        );

        
        setMesas(data);
      } catch (error) {
        console.error("Error al obtener mesas:", error);
        
        setAlerta({ tipo: "error", mensaje: "Error al obtener mesas" });
      }
    };

    // Llama a la función para obtener mesas cuando el componente se monta
    obtenerMesas();
  }, []); // Asegúrate de pasar un array vacío como dependencia para que useEffect se ejecute solo una vez

  const submitMesa = async (mesa) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/mesas`,
        mesa,
        config
      );
      console.log(data);

      setAlerta({ msg: "Mesa creada correctamente" });

      setTimeout(() => {
        setAlerta({});
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MesasContext.Provider
      value={{
        mesas,
        setAlerta,
        alerta,
        submitMesa,
      }}
    >
      {children}
    </MesasContext.Provider>
  );
};

export { MesasProvider };

export default MesasContext;
