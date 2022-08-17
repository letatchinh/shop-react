import { makeAutoObservable } from "mobx"
class Timer {
    list
    totalPrice
    constructor() {  
      makeAutoObservable(this)
    }
    setListProduct(data){
        this.list = data
    }
    total(){
        this.totalPrice = this.list.reduce((total,currenValue) => {
            return  total + (currenValue.price * currenValue.count)
         },0)
    }
     

}

const storeState = new Timer()

export default storeState