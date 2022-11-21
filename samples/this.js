class Toto {
  name = "Toto";

  getName() {
    return this.name;
  }

  sayHi() {
    console.log(this.getName());
  }

  sayHiLater() {
    // fonction 1
    // Ici, this sera (a priori) = object
    setTimeout(() => {
      // fonction 2
      // Mais là, c'est le this de la fonction 2, qui est défini…
      // … en fonction de la façon dont la fonction est appelée
      // c'est-à-dire loin, très loin, dans le code de setTimeout !
      console.log("Hi", this.getName()); // Plantera probablement
    });
  }
}

const object = new Toto();

object.sayHiLater();
