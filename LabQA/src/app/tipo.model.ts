export class Tipo {
    private id: number;
    private nombre: string;
    private createdOn: string;

    constructor(){
        this.id = null;
        this.nombre = '';
        this.createdOn = '';
    }

   setId(id: number){
    this.id = id;
   }

   setNombre(nombre: string){
    this.nombre = nombre;
   }

   setCreatedOn(createdOn: string){
    this.createdOn = createdOn;
   }

   getId(): number{
       return this.id;
   }

   getNombre(): string{
    return this.nombre;
   }

   getCreatedOn(): string{
    return this.createdOn;
   }
}
