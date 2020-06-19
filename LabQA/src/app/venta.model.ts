import { VentaDetalle } from './venta-detalle.model';
import { Cliente } from './cliente.model';

export class Venta {
    private id: number;
    private condicionVenta: string; // Credito, Contado
    private cliente: Cliente;
    private vendedor: string;
    private estado: string;
    private tipoDocumento: string; // Factura, Presupuesto, Recibo, Remision
    private fechaVenta: string;
    private ventaDetalles: Array<VentaDetalle> = new Array<VentaDetalle>();

    constructor() {

    }

    setId(id: number) {
        this.id = id;
    }

    setCondicionVenta(condicion: string) {
        this.condicionVenta = condicion;
    }

    setCliente(c: Cliente) {
        this.cliente = c;
    }

    setVendedor(v: string) {
        this.vendedor = v;
    }

    setEstado(e: string) {
        this.estado = e;
    }

    setTipoDocumento(t: string) {
        this.tipoDocumento = t;
    }

    setFechaVenta(fecha: string) {
        this.fechaVenta = fecha;
    }

    setVentaDetalle(det: VentaDetalle) {
        this.ventaDetalles.push(det);
    }

    removerVentaDetalle(det: VentaDetalle) {
        const detalles = this.ventaDetalles;
        if (detalles.includes(det)) {
            detalles.splice(detalles.indexOf(det), 1);
            this.ventaDetalles = detalles;
        }
    }

    getId(): number {
        return this.id;
    }

    getCondicionVenta(): string {
        return this.condicionVenta;
    }

    getCliente(): Cliente {
        return this.cliente;
    }

    getVendedor(): string {
        return this.vendedor;
    }

    getEstado(): string {
        return this.estado;
    }

    getTipoDocumento(): string {
        return this.tipoDocumento;
    }

    getFechaVenta(): string {
        return this.fechaVenta;
    }

    /**
     * Retorna el detalle de una posición espefica.
     * @param posicion el número de posición.
     * @return un objeto del tipo VentaDetalle.
     */
    public getVentaDetalleInfo(posicion: number): VentaDetalle {
        if (posicion < 1 || posicion > this.ventaDetalles.length) {
            throw new Error('Posición fuera de rango');
        }
        return this.ventaDetalles[posicion - 1];
    }

    getVentaDetalle(): VentaDetalle[] {
        return this.ventaDetalles;
    }

    calcularSubTotal(): number{
        let subTotal = 0.0;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.ventaDetalles.length; i++){
            subTotal = subTotal + this.ventaDetalles[i].getSubTotal();
        }
        return subTotal;
    }

    calcularImpuesto(): number{
        let monto = 0.0;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.ventaDetalles.length; i++){
            monto = monto + this.ventaDetalles[i].getMontoIva();
        }
        return monto;
    }

    calcularDescuento(): number{
        let monto = 0.0;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.ventaDetalles.length; i++){
            monto = monto + this.ventaDetalles[i].getMontoDesc();
        }
        return monto;
    }

    calcularTotal(): number{
        return this.calcularSubTotal() + this.calcularImpuesto() - this.calcularDescuento();
    }
}
