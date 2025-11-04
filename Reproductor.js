class Reproductor {

  constructor() {
    this.estado = "detenido";
  }

  play () {
    if (this.estado === "detenido" || this.estado === "pausado") {
      this.estado = "reproduciendo";
      console.log("Reproduciendo música...");
    } else {
      console.log("Ya se está reproduciendo música.");
    }
  };

  pausar() {
    if (this.estado === "reproduciendo") {
      this.estado = "pausado";
      console.log("Música pausada.");
    } else {
      console.log("No hay música reproduciéndose.");
    }
  };

  detener = function() {
    this.estado = "detenido";
    console.log("Música detenida.");
  };
}

const mp3 = new Reproductor();
mp3.play();
mp3.pausar();
mp3.detener();