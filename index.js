class Circle {
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
       return (this.radius * 2)
    }
   get circumference(){
        return (this.radius * 2) * Math.PI
    }
    get area(){
        return (this.radius * this.radius) * Math.PI
    }
    set diameter(newRadius){
         this.radius = newRadius / 2
     }
    set circumference(newRadius){
          this.radius = newRadius / Math.PI / 2
     }
     set area(radius){
          this.radius = Math.sqrt(radius) / 2
     }
}