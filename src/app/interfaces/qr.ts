//GET, PUT, DELETE 
export interface QR{
    id: number;
    username: string;
    asignatura: string;
    fecha: string;
    comentario: string;
}

//POST
export interface NuevoQR{
    username: string;
    asignatura: string;
    fecha: string;
    comentario: string;
}

//GET, PUT, DELETE 
export interface Asistencia{
    id: number;
    username: string;
    info: string;
}

//POST
export interface NuevaAsistencia{
    username: string;
    info: string;
}