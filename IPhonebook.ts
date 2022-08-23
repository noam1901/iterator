import { Contact } from './Contact'
export interface IPhonebook{
    size:number // gets the amount of contacts
    add(contact:Contact):number // add contact and returns its new id
    addPhone(id:number, phone:string):void // add new phone to existing contact
    getContactByID(id:number):Contact|undefined // get contact by id
    getContactByName(name:string):Contact[]|undefined // get contacts by name
    remove(id:number):Contact|undefined // remove contact by id and returns it
}


