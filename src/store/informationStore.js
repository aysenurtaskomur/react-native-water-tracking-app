import {observable,action} from 'mobx';


class InformationStore{
  @observable weight = ''
  @observable gender = ''
  @observable time='00:00'

  @action _setWeight(newData){
    this.weight=newData; 
  }

  @action _setGender(newId){
      if(newId===1){
        this.gender = "Woman"
      }
      else if(newId===2){
        this.gender = "Man"
    }
  }

  @action _setTime(newTime){
    this.time= newTime;
  }
}

export default new InformationStore();