import { Producto } from './producto.model';

export class VentaDetalle {
    private id: number;
    private producto: Producto;
    private cantidad: number;
    private precio: number;
    private porcenDesc: number;
    private porcenIva: number;
    private montoDesc: number;
    private montoIva: number;
    private subTotal: number;

    constructor(){
        this.id = null;
        this.producto = new Producto();
        this.cantidad = 0;
        this.precio = 0.0;
        this.porcenDesc = 0.0;
        this.porcenIva = 0.0;
        this.montoDesc = 0.0;
        this.montoIva = 0.0;
        this.subTotal = 0.0;
    }

    setId(id: number){
        this.id = id;
    }

    setProducto(producto: Producto){
        this.producto = producto;
    }

    setCantidad(cantidad: number){
        this.cantidad = cantidad;
    }

    setPrecio(){
        if (this.producto !== null ){
            this.precio = this.producto.getPrecioVenta();
        }
    }

    setPorcenDesc(porcenDesc: number){
        this.porcenDesc = porcenDesc;
        this.setMontoDesc();
    }

    setPorcenIva(porcenIva: number){
        this.porcenIva = porcenIva;
        this.setMontoIva();
    }

    setMontoIva(){
        this.montoIva = this.cantidad * this.precio * (this.porcenIva / 100);
    }

    setMontoDesc(){
        this.montoDesc = this.cantidad * this.precio *  (this.porcenDesc / 100);
    }

    getId(): number{
        return this.id;
    }

    getProducto(): Producto{
        return this.producto;
    }

    getCantidad(): number{
        return this.cantidad;
    }

    getPrecio(): number{
        return this.precio;
    }

    getPorcenDesc(): number{
        return this.porcenDesc;
    }

    getPorcenIva(): number{
        return this.porcenIva;
    }

    getMontoDesc(): number{
        return this.montoDesc;
    }

    getMontoIva(): number{
        return this.montoIva;
    }

    public getSubTotal(): number{
        if (this.porcenDesc > 0) {
            this.setMontoDesc();
        }
        else {
            this.montoDesc = 0;
        }
        this.subTotal = this.cantidad * this.precio;

        this.setMontoIva();

        return this.subTotal;
    }
}
