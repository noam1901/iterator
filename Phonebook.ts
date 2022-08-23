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
    }
    get(id:number):Contact|undefined //return contacts by id
    get(name:string):Contact[]|undefined; //return contacts by name
    get(arg:number | string):Contact | Contact[] | undefined { //return contacts by name/id
        if(typeof arg === 'number') return this.collection.find(contact => contact.id === arg)
        const contacts = []
        for(let i of this.collection){
            if(i.name === arg){
                contacts.push(i)
            }
        }
        return contacts
    }// get contacts by name
    remove(id:number):Contact|undefined {
        let deletedContact
        for(let i of this.collection){
            if(i.id === id){
                deletedContact = i
                this.collection.splice(this.collection.indexOf(i),1) 
                break  
            }
        }
        return deletedContact// contact delete or undefined
    }// remove contact by id and returns it
}

export function createPhonebook():IPhonebook{
    return new Phonebook()
}