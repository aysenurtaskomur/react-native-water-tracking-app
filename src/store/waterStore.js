import {observable,action,autorun} from 'mobx';

class WaterStore{
    @observable goalWater= 1
    @observable water= 1
    @observable percente= 1

   
    constructor(){
       autorun(()=>{
          this.water;
          this._percentage();
       })
    }
   @action _waterAmount(weight){
      this.goalWater = weight * 35;
   }
   

   @action _addWater(addwater){
     this.water = this.water + addwater;
   }

   @action _percentage(){
      this.percente = Math.ceil((this.water/this.goalWater)*100);
   }

  
}

export default new WaterStore();