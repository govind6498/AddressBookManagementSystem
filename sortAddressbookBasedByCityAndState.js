class Contact {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        const nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "**** FIRST NAME is Incorrect ****";
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        const nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "**** LAST NAME is Incorrect ****";
    }
    get address() {
        return this._address;
    }
    set address(address) {
        const addressRegex = RegExp('^[a-zA-z0-9#,]{4,}$');
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "**** ADDRESS is Incorrect ****";
    }
    
    get city() {
        return this._city;
    }
    set city(city) {
        const cityStateRegex = RegExp('^[a-zA-z]{4,}$');
        if (cityStateRegex.test(city))
            this._city = city;
        else
            throw "**** CITY is Incorrect ****";
    }
    get state() {
        return this._state;
    }
    set state(state) {
        const cityStateRegex = RegExp('^[a-zA-z]{4,}$');
        if (cityStateRegex.test(state))
            this._state = state;
        else
            throw "**** STATE is Incorrect ****";
    }
    get zip() {
        return this._zip;
    }
    set zip(zip) {
        const zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "**** ZIP is Incorrect ****";
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        const phoneNumberRegex = RegExp("^[0-9]{2}\\s{1}[0-9]{10}$");
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "**** PHONE NUMBER is Incorrect ****";
    }
    get email() {
        return this._email;
    }
    set email(email) {
        const emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "**** EMAIL ADDRESS is Incorrect ****";
    }

    toString() {
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", Address : " + this.address + ", City : " + this.city + ", State : " + this.state + ", Zip : " + this.zip + ", Phone Number : " + this.phoneNumber + ", Email : " + this.email;
    }
}
let addressBookArray = new Array();
let contactsCityMap = new Map();
let contactsStateMap = new Map();
function contactExists(firstName, lastName) {
    return addressBookArray.some(contact => contact.firstName == firstName && contact.lastName == lastName);
}
function addContact(contact) {
    if (!contactExists(contact.firstName, contact.lastName)) 
        addressBookArray.push(contact);
    else 
        throw "Contact is Present in the Address Book";
}
function editContact(firstName, lastName, property, newValue) {
    if (contactExists(firstName, lastName)) {
        switch (property) {
            case "address":
                addressBookArray.find((contact) => contact.firstName == firstName).address = newValue;
                break;
            case "city":
                addressBookArray.find((contact) => contact.firstName == firstName).city = newValue;
                break;
            case "state":
                addressBookArray.find((contact) => contact.firstName == firstName).state = newValue;
                break;
            case "zip":
                addressBookArray.find((contact) => contact.firstName == firstName).zip = newValue;
                break;
            case "phoneNumber":
                addressBookArray.find((contact) => contact.firstName == firstName).phoneNumber = newValue;
                break;
            case "email":
                addressBookArray.find((contact) => contact.firstName == firstName).email = newValue;
                break;
            default:
                console.log("Enter valid property");
        }
    }
    else {
        console.log("Contact Does Not Exist");
    }
}
function deleteContact(firstName, lastName) {
    if (contactExists(firstName, lastName)) {
        addressBookArray = addressBookArray.filter((contact) => contact.firstName != firstName && contact.lastName != lastName);
    } else {
        console.log("Contact Does Not Exist");
    }
}
function getCountOfContacts(count) {
    count += 1;
    return count;
}
function searchContactByCity(firstName, city) {
    return addressBookArray.filter((contact) => contact.city == city && contact.firstName == firstName);
}
  
function searchContactByState(firstName, state) {
    return addressBookArray.filter((contact) => contact.state == state && contact.firstName == firstName);
}
function viewContactsByCity(city){
    return addressBookArray.filter((contact) => contact.city == city);
}
function viewContactsByState(state){
    return addressBookArray.filter((contact) => contact.state == state);
}
function getCountOfContactsByCity(city){
    return addressBookArray.filter((contact) => contact.city == city).length;
}
function getCountOfContactsByState(state){
    return addressBookArray.filter((contact) => contact.state == state).length;
}

function sortAddressBookByName(){
    addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.firstName).localeCompare(secondPerson.firstName));
    console.log(addressBookArray);
}
function sortAddressBookByCity(){
    addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.city).localeCompare(secondPerson.city));
    console.log(addressBookArray);
}

function sortAddressBookByState(){
    addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.state).localeCompare(secondPerson.state));
    console.log(addressBookArray);
}
function sortAddressBookByZip(){
    addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.zip).localeCompare(secondPerson.zip));
    console.log(addressBookArray);
}

let firstContact = new Contact("Govind", "Kumar", "#3ac910", "Aurangabad", "Bihar", "824122", "91 9798364309", "govindsingh6498@gmail.com");
let secondContact = new Contact("Avinash", "Rajak", "#6ac810", "Devghar", "Delhi", "110092", "91 9815507190", "avinashrajak@gmail.com");
let thirdContact = new Contact("Alexis", "Rose", "#8105bc", "SchittsCreek", "Canada", "550 864", "91 9485768574", "alexis@gmail.com");
let fourthContact = new Contact("David", "Rose", "#8105bc", "SchittsCreek", "Canada", "550 864", "91 9465837465", "david@gmail.com");
try {
    addressBookArray.push(firstContact);
    addressBookArray.push(secondContact);
    addressBookArray.push(thirdContact);
    addressBookArray.push(fourthContact);
} catch (e) {
    console.error(e);
}
console.log(addressBookArray);
console.log("\nAfter Editing Contact");
editContact("Govind", "Kumar", "city", "Delhi");
console.log(addressBookArray);
console.log("\nCount of Contacts : " + addressBookArray.reduce(getCountOfContacts, 0));
console.log("\nAfter Deleting Contact");
deleteContact("Govind", "Kumar");
console.log(addressBookArray);
console.log("\nCount of Contacts : " + addressBookArray.reduce(getCountOfContacts, 0));
console.log("\nAdding Duplicate Contact");
try {
    addContact(secondContact);
} catch (e) {
    console.error(e);
}
console.log(addressBookArray);
console.log("\nSearch Avinash In City - DevGhar");
console.log(searchContactByCity("Avinash", "DavGhar"));
console.log("\nSearch Killua In State - Delhi");
console.log(searchContactByState("Avinash", "Delhi"));
console.log("\nView Contacts By City : Schitt's Creek \n" );
console.log(viewContactsByCity("SchittsCreek"));
console.log("\nView Contacts By State : Canada \n" );
console.log(viewContactsByState("Canada"));
console.log("\nNumber of Contacts residing in City : Schitt's Creek = " + getCountOfContactsByCity("SchittsCreek"));
console.log("\nNumber of Contacts residing in State : Canada = " + getCountOfContactsByState("Canada"));

console.log("\nContacts In Alphabetical Order");
sortAddressBookByName(); 
sortAddressBookByName();

console.log("\nContacts Sorted Using City");
sortAddressBookByCity();

console.log("\nContacts Sorted Using State");
sortAddressBookByState();

console.log("\nContacts Sorted Using Zip");
sortAddressBookByZip();