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

export const crearTarea = async (tarea) => {
    try {
        const respuesta = await fetch (`${tareas_URL}`, {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(tarea)
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}