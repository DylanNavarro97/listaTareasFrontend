const tareas_URL = import.meta.env.VITE_API_TAREAS
const tarea_URL = import.meta.env.VITE_API_TAREA

export const obtenerTareas = async () => {
    try {
        const respuesta = await fetch(`${tareas_URL}`)
        const listarTareas = await respuesta.json()
        return listarTareas
    } catch (error) {
        console.log(error)
    }
}