class ListaCompras {
  constructor() {
    this.productos = [];
  }

  agregar(producto) {
    this.productos.push(producto);
  };

  mostrar() {
    console.log("\nLista de Compras:");
    for (let i = 0; i < this.productos.length; i++) {
      console.log(`${i + 1}. ${this.productos[i]}`);
    }
  };
}

const miLista = new ListaCompras();
miLista.agregar("Manzanas");
miLista.agregar("Leche");
miLista.agregar("Pan");
miLista.mostrar();


