import { Tipo } from './tipo.model';

export class Cliente {
    private cedula: number;
    private nombre: string;
    private apellidos: string;
    private correo: string;
    private telefono: number;
    private direccion: string;
    private tipo: Tipo;
    private activo: boolean;
    private fechaNacimiento: string;
    private createdOn: string;

    constructor(){
        this.cedula = null;
        this.nombre = '';
        this.apellidos = '';
        this.correo = '';
        this.telefono = null;
        this.direccion = '';
        this.tipo = new Tipo();
        this.activo = false;
        this.fechaNacimiento = '';
        this.createdOn = '';
    }

    setCedula(ced: number){
        this.cedula = ced;
    }

    setNombre(nombre: string){
        this.nombre = nombre;
    }

    setApellidos(apellidos: string){
        this.apellidos = apellidos;
    }

    setCorreo(correo: string){
        this.correo = correo;
    }

    setTelefono(tel: number){
        this.telefono = tel;
    }

    setDireccion(dir: string){
        this.direccion = dir;
    }

    setTipo(tipo: Tipo){
        this.tipo = tipo;
    }

    setActivo(activo: boolean){
        this.activo = activo;
    }

    setFechaNacimiento(fecha: string){
        this.fechaNacimiento = fecha;
    }

    setCreatedOn(createdOn: string){
        this.createdOn = createdOn;
    }

    getCedula(): number{
        return this.cedula;
    }

    getNombre(): string{
        return this.nombre;
    }

    getApellidos(): string{
        return this.apellidos;
    }

    getCorreo(): string{
        return this.correo;
    }

    getTelefono(): number{
        return this.telefono;
    }

    getDireccion(): string{
        return this.direccion;
    }

    getTipo(): Tipo{
        return this.tipo;
    }

    getActivo(): boolean{
        return this.activo;
    }

    getFechaNacimiento(): string{
        return this.fechaNacimiento;
    }

    getCreatedOn(): string{
        return this.createdOn;
    }
}
