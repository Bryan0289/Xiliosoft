import { cargo } from "./cargo.model";
import { area } from "./area.model";


export class empleado{
    constructor(
        public id:string,
        public nombre:string,
        public cedula:string,
        public cargoId:cargo,
        public areaId:area,
        public createdAt:string,
        public updatedAt:string
    ){}
}