import { maquinaria } from "../models/maquinaria.model";


export interface ResMaquinarias{
    ok:boolean,
    maquinarias:maquinaria[]
}
export interface ResMaquinaria{
    ok:boolean,
    maquinaria:maquinaria
}
