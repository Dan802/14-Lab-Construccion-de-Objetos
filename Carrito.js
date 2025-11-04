class Carrito {
  constructor() {
    this.productos = [];
    this.total = 0;
  }

  agregarProducto(nombre, precio) {
    this.productos.push(nombre);
    this.total += precio;
    console.log(`Producto agregado: ${nombre}`);
  };

  calcularDescuento() {
    if (this.total > 100) {
      const descuento = this.total * 0.1;
      console.log(`Total: $${this.total - descuento}`);
    } else if (this.total > 50 && this.total <= 100) {
      const descuento = this.total * 0.05;
      console.log(`Total: $${this.total - descuento}`);
    } else {
      console.log(`Total: $${this.total}`);
    }
  };
}

const carrito = new Carrito();
carrito.agregarProducto("Camiseta", 30);
carrito.agregarProducto("Pantalón", 40);
carrito.agregarProducto("Zapatos", 60);
carrito.calcularDescuento();