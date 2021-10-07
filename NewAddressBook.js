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
let AddressArray = new Array()
let addressBook = new AddressBook("Govind","Kumar","kurwan","Auranagbad","state","824122","91 9798364309","govindsingh6498@gmail.com");
AddressArray.push(new AddressBook("Avinash", "Rajak", "Devghar", "Devghar", "Jharakhand", "586497", "91 9921448624", "rajak@gmail.com"));
console.log(AddressArray)
try{
    addressBook.firstName = "keshav";
} 
catch(e){
    console.error(e)
}
try{
    addressBook.lastName = "Kumar";
} 
catch(e){
    console.error(e)
}
try{
    addressBook.address = "Kurwan";
} 
catch(e){
    console.error(e)
}
try{
    addressBook.city = "Aurangabad";
} 
catch(e){
    console.error(e)
}
try{
    addressBook.state = "Bihar";
} 
catch(e){
    console.error(e)
}
try{
    addressBook.zip = "824122";
} 
catch(e){
    console.error(e)
}
try{
    addressBook.phoneNo = "91 9798364309";
} 
catch(e){
    console.error(e)
}
try{
    addressBook.email = "govindsingh6498@gmail.com";
} 
catch(e){
    console.error(e)
}
console.log(addressBook)