import { Venta } from './venta.model';
import { Cliente } from './cliente.model';
import { VentaDetalle } from './venta-detalle.model';
import { Producto } from './producto.model';
import { componentFactoryName } from '@angular/compiler';

// Datos para poder hacer las pruebas:
// Productos para los detalles de Ventas
const producto = new Producto();
// Datos del Producto
producto.setCodigo(1);
producto.setNombre('Zapatos');
producto.setDescripcion('Rojos Talla 4');
producto.setNotas('');
producto.setURL('LAURL.COM');
producto.setActivo(true);
// Precios del Producto
producto.setPrecioCompra(10000);
producto.setPrecioVenta(15000);
producto.setPorcenIVA(10);
producto.setPorcenDesc(0);
// Stock del Producto
producto.setStock(10);
producto.setEstadoStock('Normal');

const producto2 = new Producto();
// Datos del Producto
producto2.setCodigo(2);
producto2.setNombre('Pantalones');
producto2.setDescripcion('Azules Talla 32');
producto2.setNotas('');
producto2.setURL('LAURL.COM');
producto2.setActivo(true);
// Precios del Producto
producto2.setPrecioCompra(10000);
producto2.setPrecioVenta(15000);
producto2.setPorcenIVA(10);
producto2.setPorcenDesc(0);
// Stock del Producto
producto2.setStock(10);
producto2.setEstadoStock('Normal');

// Detalles de Ventas para evaluar
const ventaDetalle = new VentaDetalle();
ventaDetalle.setId(1);
ventaDetalle.setProducto(producto);
ventaDetalle.setCantidad(2);
ventaDetalle.setPrecio();
ventaDetalle.setPorcenDesc(5);
ventaDetalle.setPorcenIva(5);
ventaDetalle.setMontoDesc();
ventaDetalle.setMontoIva();

const ventaDetalle2 = new VentaDetalle();
ventaDetalle2.setId(2);
ventaDetalle2.setProducto(producto2);
ventaDetalle2.setCantidad(1);
ventaDetalle2.setPrecio();
ventaDetalle2.setPorcenDesc(10);
ventaDetalle2.setPorcenIva(5);
ventaDetalle2.setMontoDesc();
ventaDetalle2.setMontoIva();

// Clientes para las pruebas
const cliente = new Cliente(); // Este se crea en default entonces lo usaremos para todos los casos

// Ventas para las pruebas
const venta = new Venta(); // Esta tendra los datos necesarios para cumplir uno de los caminos
venta.setId(1);
venta.setCondicionVenta('Credito');
venta.setCliente(cliente);
venta.setVendedor('Pedro');
venta.setEstado('Pendiente');
venta.setTipoDocumento('Factura');
venta.setVentaDetalle(ventaDetalle);
venta.setVentaDetalle(ventaDetalle2);

const venta2 = new Venta(); // Esta tendra los datos necesarios para cumplir uno de los caminos
venta2.setId(2);
venta2.setCondicionVenta('Credito');
venta2.setCliente(cliente);
venta2.setVendedor('Vicente');
venta2.setEstado('Pendiente');
venta2.setTipoDocumento('Factura');

//Prueba por defecto
describe('Venta', () => {
  it('should create an instance', () => {
    expect(new Venta()).toBeTruthy();
  });
});

describe('Casos de Prueba para Venta con la informacion de productos', () => {
  // Tres pruebas que manejan datos para poder recorrer uno de los caminos
  /* 
    Detalle 1: 

      Valor compra producto: 10000
      Valor venta producto: 15000
      Descuento producto: 0
      IVA producto: 10
      IVA detalle: 5
      Descuento detalle: 5

    Detalle 2:

    Valor compra producto: 10000
    Valor venta producto: 15000
    Descuento producto: 0
    IVA producto: 10
    IVA detalle: 5
    Descuento detalle: 10

  */
  it('Calcular subtotal de Venta', () => {
    expect(venta.calcularSubTotal()).toBe(45000);
  });
  it('Calcular impuesto de Venta', () => {
    expect(venta.calcularImpuesto()).toBe(2250);
  });
  it('Calcular descuento de Venta', () => {
    expect(venta.calcularDescuento()).toBe(3000);
  });
});

describe('Casos de Prueba para Venta sin la informacion de productos', () => {
  // Tres pruebas que manejan datos para poder recorrer uno de los caminos
  it('Calcular subtotal de Venta2', () => {
    expect(venta2.calcularSubTotal()).toBe(0);
  });
  it('Calcular impuesto de Venta2', () => {
    expect(venta2.calcularImpuesto()).toBe(0);
  });
  it('Calcular descuento de Venta2', () => {
    expect(venta2.calcularDescuento()).toBe(0);
  });
  //Deben dar 0 ya que venta2 no posee productos con los cuales calcular los valores contemplados
});

describe('Casos de prueba para informacion de detalle de venta', function () {
  it('Casos de prueba para corroborar error cuando se envia posicion fuera de rango al pedir detalle de venta', () => {
    //variable utilizada es el array vacio ventaDetalle del objeto venta2
  [
    //cada index representa el valor que se busca dentro del array ventaDetalle
    {index: 0},
    {index:1},
    {index: 50},
  ].forEach(({ index }) => {
    expect(function () {venta2.getVentaDetalleInfo(index)}).toThrowError('Posición fuera de rango')
  })
  //El objeto venta2 no tiene ningun item en su lista de detallos, por lo tanto cualquier valor enviado debe tirar el error Posicion fuera de rango
});
});
