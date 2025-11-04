class Libro {
  constructor(titulo, autor, prestado = false) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = prestado;
  }

  prestar() {
    if (!this.prestado) {
      this.prestado = true;
      console.log(`Has prestado el libro "${this.titulo}" de ${this.autor}.`);
    } else {
      console.log(`El libro "${this.titulo}" ya está prestado.`);
    }
  }
}

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez");
libro1.prestar(); 
libro1.prestar(); 