class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
  display(){
   var rand = Math.round(0,255); 
   fill(rand)
   super.display();

  }
  };