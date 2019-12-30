export class User{
    constructor(
        public apellidoPaterno: string,
        public apellidoMaterno: string,
        public nombres?: string,
        public departamento?: string,
        public provincia?: string,
        public distrito?: string,
        public direccion?: string,
        public tipoDocumento?: string,
        public numDocumento?: string,
        public fechaNacimiento?: string,
        public correo?: string,
        public contrasenia?: string,
        public genero?: string,
        public telefono?: string,
        public ocupacion?: string,
        public centroLaboral?: string,
        public foto?: string,
        public typeUser?: string,
        public mobile_token?: string,
        public lastLogin?: string,
    ){}
}
  