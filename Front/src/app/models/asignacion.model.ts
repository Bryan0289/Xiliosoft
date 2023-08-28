import {empleado} from './empleado.model';
import {maquinaria} from './maquinaria.model';


export class asignacion{
    constructor(
        public empleado:empleado,
        public maquinaria:maquinaria,
        public estado:boolean,
        public id?:string,
        public createdAt?:string,
        public updatedAt?:string

    ){}
}