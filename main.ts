import { createPhonebook } from "./Phonebook";
import { Contact } from "./Contact";
const phonebook = createPhonebook()
phonebook.add(new Contact(1,'Shahar', 'mikve isreal, Netanya', ['039-43433']))
phonebook.add(new Contact(2,'Shahar', 'ema=ek  hefer 25, ashkelon', ['09-2443433']))
phonebook.add(new Contact(3,'Shahar', 'zerahya', ['09-3243433']))
phonebook.add(new Contact(4,'noam', 'ein zurim', ['09-4243433']))
phonebook.add(new Contact(5,'erez', 'mizra', ['09-434433']))
phonebook.add(new Contact(6,'erez', 'agoshrim', ['09-5243433']))
phonebook.add(new Contact(7,'shmuel', 'ramalla', ['09-43433']))
phonebook.add(new Contact(8,'neria', 'bet berl', ['032429-43433']))
phonebook.add(new Contact(9,'maayan', 'efrat', ['09-4343423']))
phonebook.add(new Contact(10,'shiraz', 'very rahok', ['09-43324245433']))
phonebook.add(new Contact(11,'Shoval', 'Ben-Gurion 14, Netanya', ['09-5543433']))
console.log(phonebook.size);
phonebook.add(new Contact(12,'eliyau', 'vedadry rahok', ['09-4332321245433']))
phonebook.add(new Contact(13,'Shoval', 'Ben-Gurion 14, Netanya', ['09-5543433']))
console.log(phonebook.size);
phonebook.addPhone(1,'052538321')
const names = phonebook.get('Shahar')
if (names){
    let phoneNumber = '055555'
    for(let contact of names){
        phonebook.addPhone(contact.id,phoneNumber)
    }
}
names? phonebook.remove(names[names.length-1].id): console.log('no delete can be');
console.log(phonebook.size);


for(const contact of phonebook){
    console.log(contact);    
}
for(const contact of phonebook.nameContains('Sh')){
    console.log(contact)
}





