import { IPhonebook } from "./IPhonebook";
import { Contact } from './Contact'
class Phonebook implements IPhonebook{
    constructor(private collection:Array<Contact>=[]){}
    get size():number {
        return this.collection.length
    }
    add(contact:Contact):number {
        this.collection.push(contact)
        return contact.id//id
    }// add contact and returns its new id
    addPhone(id:number, phone:string):void{
        for(let i of this.collection){
            if(i.id == id){
                i.addNumber = phone
                break
            }
        }
    } // add new phone to existing contact
    getContactByID(id:number):Contact|undefined {
        return // get contact by id else not exsit undefined
    }// get contact by id
    getContactByName(name:string):Contact[]|undefined{
        const allWithThisName = []
        for(let i of this.collection){
            if(i.name === name){
                allWithThisName.push(i)
            }
        }
        return allWithThisName !== []?allWithThisName:undefined// array of concats by name
    } // get contacts by name
    remove(id:number):Contact|undefined {
        let deletedContact
        for(let i of this.collection){
            if(i.id === id){
                deletedContact = i
                console.log(this.collection);  
                this.collection.splice(this.collection.indexOf(i),1)
                console.log(this.collection);  
                break  
            }
        }
        return deletedContact// contact delete or undefined
    }// remove contact by id and returns it
}

export function createPhonebook():IPhonebook{
    return new Phonebook()
}