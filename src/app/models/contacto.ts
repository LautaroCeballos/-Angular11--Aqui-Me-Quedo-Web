export class Contacto{
    constructor(
        public nombre: string,
        public telefono: string,
        public desde: Date,
        public hasta: Date,
        public cantMayores: number,
        public cantMenores: number,
        public detalles: string
    ){}
}