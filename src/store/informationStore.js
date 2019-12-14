import {observable,action} from 'mobx';


class InformationStore{
  @observable weight = ''
  @observable username = ''
  @observable wakeup = '00:00'
  @observable sleep = '00:00'

  @action _setWeight(newData){
    this.weight=newData; 
  }

  @action _setUsername(username){
    this.username= username;
  }

  @action _setTime(timeName, newTime){
    if(timeName === "wakeup")
      this.wakeup=newTime;
    else if ( timeName=== "sleep")
      this.sleep=newTime;
  }

  
}

export default new InformationStore();