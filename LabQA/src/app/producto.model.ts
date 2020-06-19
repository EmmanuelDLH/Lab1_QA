export class Producto {
    private codigo: number;
    private nombre: string;
    private descripcion: string;
    private notas: string;
    private url: string;
    private activo: boolean;
    // precios
    private precioCompra: number;
    private precioVenta: number;
    private porcenIva: number;
    private porcenDesc: number;
    // Stock
    private stock: number;
    private estadoStock: string;
    // calculados
    // private totalIngreso:number   = 0.0;
    // private totalSalida:number    = 0.0;
    // private totalStock:number     = 0.0;

    constructor(){
        this.codigo = null;
        this.nombre = '';
        this.descripcion = '';
        this.notas = '';
        this.url = '';
        this.activo = false;
        this.precioCompra = 0.0;
        this.precioVenta = 0.0;
        this.porcenIva = 0.0;
        this.porcenDesc = 0.0;
        this.stock = 0.0;
        this.estadoStock = 'Normal';
    }

    setCodigo(c: number){
        this.codigo = c;
    }
    setNombre(n: string){
        this.nombre = n;
    }

    setDescripcion(n: string){
        this.descripcion = n;
    }

    setNotas(n: string){
        this.notas = n;
    }

    setURL(n: string){
        this.url = n;
    }

    setActivo(a: boolean){
        this.activo = a;
    }

    setPrecioCompra(c: number){
        this.precioCompra = c;
    }

    setPorcenIVA(c: number){
        this.porcenIva = c;
    }

    setPorcenDesc(c: number){
        this.porcenDesc = c;
    }

    setPrecioVenta(c: number){
        this.precioVenta = c;
    }

    setStock(c: number){
        this.stock = c;
    }

    setEstadoStock(estado: string){
        this.estadoStock = estado;
    }

    getCodigo(): number{
        return this.codigo;
    }

    getNombre(): string{
        return this.nombre;
    }

    getDescripcion(): string{
        return this.descripcion;
    }

    getNotas(): string{
        return this.notas;
    }

    getURL(): string{
        return this.url;
    }

    getActivo(): boolean{
        return this.activo;
    }

    getPrecioCompra(): number{
        return this.precioCompra;
    }

    getPrecioVenta(): number{
        return this.precioVenta;
    }

    getPorcenDesc(): number{
        return this.porcenDesc;
    }

    getPorcenIVA(): number{
        return this.porcenIva;
    }

    getStock(): number{
        return this.stock;
    }

    getEstadoStock(): string{
        return this.estadoStock;
    }
}
