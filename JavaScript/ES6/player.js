export class Player{
    constructor(Name, Country)
    {
      this.Name = Name
      this.Country= Country   
    }
    display()
    {
      console.log(this.Name+" was born in "+this.Country)
    }
}

export class TennisPlayer extends Player{
    constructor(Name,Country,Age)
    {
        super(Name,Country)
        this.Age = Age
    }
   
    displayplayer()
    {
        console.log(`${this.Name} is ${this.Age} years old and know how to play tennis`)
    }
}