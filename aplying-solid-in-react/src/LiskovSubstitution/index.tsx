/* este primer ejemplo no sigue el principio de sustitución ya que Cat y Animal no son intercambiables */
/* export class Animal {
  swim(distance: number){
    console.log(`${distance} made swimming`);
  }
}

export class Dog extends Animal {
  swim(distance: number){
    console.log(`${distance} made swimming`);
  }
}

export class Cat extends Animal {
  swim(){
    throw new Error('Cats don\'t like water')
  }  
} */

/* La solución es crear interfaces en base a comportamiento */
export class SwimmingAnimal {
  swim(distance: number){
    console.log(`${distance} made swimming`);
  }
}
export class WalkingAnimal {
  walk(distance: number){
    console.log(`${distance} made walking`);
  }
}

export class Dog extends SwimmingAnimal {
  swim(distance: number){
    console.log(`${distance} made swimming`);
  }
}

export class Cat extends WalkingAnimal {
  walk(distance: number){
    console.log(`${distance} made walking`);
  }
} 