import { area } from "../models/area.model";
import { cargo } from "../models/cargo.model";
import { empleado } from "../models/empleado.model";

export interface ResAreas{
    ok:boolean,
    areas:area[]
}
export interface ResCargos{
    ok:boolean,
    cargos:cargo[]
}
export interface ResEmpleados{
    ok:boolean,
    empleados:empleado[]
}
export interface ResEmpleado{
    ok:boolean,
    empleado:empleado
}
