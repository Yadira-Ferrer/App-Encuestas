export interface Encuesta {
    nombre: string,
    preguntas: Pregunta[]
}

export interface Pregunta {
    pregunta: string
    directa: boolean
    respuesta: string
    opciones: Opcion[]
}

export interface Opcion {
    opcion: string,
    estado: boolean,
}

export interface Usuario {
    nombre: string
    correo: string
}