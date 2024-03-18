import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Input } from "./Input";
import { ListaTareas } from "./ListaTareas";
import { crearTarea, eliminarTarea, obtenerTareas } from "./helpers/queries";

function App() {
  const [tareaIngresada, setTareaIngresada] = useState("");
  const [tareas, setTareas] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      tareaIngresada.trim().length >= 3 &&
      tareaIngresada.trim().length <= 30
    ) {
      const nuevaTarea = {
        nombre: tareaIngresada,
      };

      try {
        const respuesta = await crearTarea(nuevaTarea);
        if (respuesta.status === 201) {
          cargarTareas()
          setTareaIngresada("");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Ingresa una tarea válida");
    }
  };

  let handleChange = (e) => {
    setTareaIngresada(e.target.value);
  };

  let handleDelete = async (tarea) => {
    try {
      const respuesta = await eliminarTarea(tarea._id);
      if (respuesta.status === 200) {
        let tareasFiltradas = tareas.filter(
          (tareaAlmacenada) => tareaAlmacenada._id !== tarea._id
        );
        setTareas(tareasFiltradas);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cargarTareas = async () => {
    try {
      const respuesta = await obtenerTareas();
      setTareas(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cargarTareas();
  }, []);

  return (
    <>
      <Container className="d-flex justify-content-center py-5 text-center bg-dark text-white">
        <section className="w-75">
          <div className="mb-4">
            <h1>Bienvenido</h1>
            <p>Ingresa tus tareas</p>
            <Input
              submitHandler={submitHandler}
              handleChange={handleChange}
              value={tareaIngresada}
            />
          </div>

          <ListaTareas tareas={tareas} eliminar={handleDelete} />
        </section>
      </Container>
    </>
  );
}

export default App;
