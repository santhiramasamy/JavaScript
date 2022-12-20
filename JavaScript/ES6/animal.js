export class Animal{
    constructor(type,legs)
    {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound="Loud Noise") //function for generic Animal Class
    {
      console.log(sound)
    }

    get metadata(){ //Property created to return only some value
      return `Type : ${this.type} Legs : ${this.legs}`
    }


    static return10(){ //create a function where no need to create an instance
        return 10;
    } 
}

export class Cat extends Animal{
  constructor(type,legs,tail)
  {
    super(type,legs);
    this.tail = tail;
  }

  makeNoise(sound = "meow")
  {
    console.log(sound);
  }
}