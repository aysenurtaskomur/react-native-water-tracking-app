import {observable,action} from 'mobx';


class InformationStore{
  @observable weight = ''
  @observable username = ''
  @observable time='00:00'
  

  @action _setWeight(newData){
    this.weight=newData; 
  }

  @action _setUsername(username){
    this.username= username;
  }

  @action _setTime(newTime){
    this.time= newTime;
  }
}

export default new InformationStore();