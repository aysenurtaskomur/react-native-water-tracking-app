import {observable,action,autorun,reaction} from 'mobx';
import {Alert} from 'react-native'

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();

class WaterStore{
    @observable goalWater= ''
    @observable water= 0
    @observable percente= 1

   
    constructor(){
         autorun(()=>{
           this.water;
           this._percentage();
         
       })
        reaction(
                  ()=>this.percente,
               percente=>{
            if(percente>99){
               Alert.alert("Tebrikler!","Hedefinizi tamamladınız");
            }
           })
    }
   @action _waterAmount(weight){
      this.goalWater = weight * 35;
   }
   
   @action _setWaterAmount(newWater)
   {
      this.goalWater=newWater;
   }

   @action _addWater(addwater){
     this.water = this.water + addwater;
   }

   @action _percentage(){
      this.percente = Math.ceil((this.water/this.goalWater)*100);
      if(this.percente>100){
         this.percente=100;
      }
   }

  
}


export default new WaterStore();