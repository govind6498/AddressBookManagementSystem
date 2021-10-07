class AddressBook{
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw "------FirstName is InCorrect-----------";
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(lastNameRegex.test(lastName))
            this._lastName = this.lastName;
        else throw "------LastName is InCorrect-------------";
    }
    get address(){
        return this._address;
    }
    set address(address){
        let addressRegex = RegExp('^[A-Za-z]{4,}$');
        if(addressRegex.test(address))
            this._address = address;
        else throw "------Address is InCorrect-------------";
    }
    get city(){
        return this._city;
    }
    set city(city){
        let cityRegex = RegExp('^[A-Za-z]{4,}$');
        if(cityRegex.test(city))
            this._city = city;
        else throw "------city is InCorrect-------------";
    }
    get state(){
        return this._state;
    }
    set state(state){
        let stateRegex = RegExp('^[A-Za-z]{4,}$');
        if(stateRegex.test(state))
            this._state = state;
        else throw "------State is InCorrect-------------";
    }
    get zip(){
        return this._zip;
    }
    set zip(zip){
        let zipRegex = RegExp("[0-9]{6}$");
        if(zipRegex.test(zip))
            this._zip = zip;
        else throw "------zip is InCorrect-------------";
    }
    get phoneNo(){
        return this._phoneNo;
    }
    set phoneNo(phoneNo){
        let phoneNumberRegex = RegExp("^[0-9]{1,2}\\s{1}[0-9]{10}$");
        if(phoneNumberRegex.test(phoneNo))
            this._phoneNo = phoneNo;
        else throw "------PhoneNumber  is InCorrect-------------";
    }
    get email(){
        return this._email;
    }
    set email(email){
        let emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[. + - *]?[a-zA-Z0-9]*[@]{1}[a-zA-Z]+[[.]{1}[a-zA-Z0-9]*[.]?[a-zA-Z]{2}$");
        if(emailRegex.test(email))
            this._email = email;
        else throw "------Address is InCorrect-------------";
    }
    toString(){
        return "\n FirstName:"+this.firstName+", LastName: "+this.lastName+" Address:"+this.address+" CityName:"+this.city+" StateName:"+this.state+" Zip: "+this.zip+" Email:"+this.email;
    }
}
let addressBookArray = new Array()
let addressBook = new AddressBook("Govind","Kumar","kurwan","Auranagbad","state","824122","91 9798364309","govindsingh6498@gmail.com");
addressBookArray.push(new AddressBook("Avinash", "Rajak", "Devghar", "Devghar", "Jharakhand", "586497", "91 9921448624", "rajak@gmail.com"));
console.log(AddressBook)

function contactExists(firstName, lastName) {
    return addressBookArray.some(addressBookArray => addressBookArray.firstName == firstName && addressBookArray.lastName == lastName);
}
function editContact(firstName, lastName, property, newValue) {
    if (contactExists(firstName, lastName)) {
        switch (property) {
            case "address":
                addressBookArray.find((AddressBook) => AddressBook.firstName == firstName).address = newValue;
                break;
            case "city":
                addressBookArray.find((AddressBook) => AddressBook.firstName == firstName).city = newValue;
                break;
            case "state":
                addressBookArray.find((AddressBook) => AddressBook.firstName == firstName).state = newValue;
                break;
            case "zip":
                addressBookArray.find((AddressBook) => AddressBook.firstName == firstName).zip = newValue;
                break;
            case "phoneNo":
                addressBookArray.find((AddressBook) => AddressBook.firstName == firstName).phoneNo = newValue;
                break;
            case "email":
                addressBookArray.find((AddressBook) => AddressBook.firstName == firstName).email = newValue;
                break;
            default:
                console.log("Enter valid property");
        }
    }
    else {
        console.log("Contact Does Not Exist");
    }
}
console.log(addressBook)
console.log(addressBookArray);
contactExists("Avinash", "Rajak");
editContact("Avinay","Sharma","patna","patna","Bihar","857496","9658742019","ayush.@gmail.com");
console.log(addressBookArray);