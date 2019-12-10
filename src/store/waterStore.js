import {observable,action} from 'mobx';

class WaterStore{
    @observable goalWater= 0
    @observable water= 1000
    @observable percente= 0

   
   @action _waterAmount(weight){
      this.goalWater = weight * 35;
   }
    
   @action _percentage(){
      this.percente= Math.ceil((this.water/this.goalWater)*100);
   }

}

export default new WaterStore();