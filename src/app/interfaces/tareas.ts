//GET, PUT, DELETE
export interface Tarea {
    id: number;
    titulo: string;
    descripcion: string;
    estudianteAsignado: string;
    obligatoria: boolean;
  }

//POST
export interface NuevaTarea {
  titulo: string;
  descripcion: string;
  estudianteAsignado: string;
  obligatoria: boolean;
}
  