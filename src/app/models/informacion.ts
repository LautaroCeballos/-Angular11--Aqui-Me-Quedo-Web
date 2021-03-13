export class Informacion{
    constructor(
        public nombre: {
            nombre: string,
            apellido: string
        },
        public contacto: {
            telefono: number,
            email: string,
        },
        public direccion: {
            numero: string,
            calle: string,
            localidad: string,
            ciudad: string,
        },
        public redes: {
            urlInstagram: string,
            urlFacebook: string
        },
        public ubicacion: {
            lat: number,
            lgn: number,
            zoom: number,
        }

    ){}
}