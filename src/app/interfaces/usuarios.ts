//GET, PUT, DELETE
export interface Alumno {
    id:number;
    username: string;
    password: string;
    role: string;
}

//POST
export interface NuevoAlumno {
    username: string;
    password: string;
    role: string;
}

//GET, PUT, DELETE
export interface Docente {
    id:number;
    username: string;
    password: string;
    role: string;
    asignatura: string;
    asignatura2: string;
}

//POST
export interface NuevoDocente {
    username: string;
    password: string;
    role: string;
    asignatura: string;
    asignatura2: string;
}