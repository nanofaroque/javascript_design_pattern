class Singleton{
    
    constructor(){
        this._data = [];
    }
    static getInstance(){
        if(this.instance==null){
            this.instance = new Singleton();
        }
        return this.instance;
    }

    add(item){
        this._data.push(item)
    }
    getItems(){
        return this._data;
    }
}
Object.freeze(this.instance)
module.exports=  Singleton;