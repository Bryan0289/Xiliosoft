import { asignacion } from "../models/asignacion.model";


export interface ResAsignaciones{
    ok:boolean,
    asignaciones:asignacion[]
}
export interface ResAsignacion{
    ok:boolean,
    asignacion:asignacion
}
