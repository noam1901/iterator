export class Contact{
    constructor(private _id:number,private _name:string, private address:string, private _phones:Array<string>){}
    get id():number{
        return this._id
    }
    get name():string{
        return this._name
    }
    set addNumber(num:string){
        this._phones.push(num)
    }
}