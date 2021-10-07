class AddressBook{
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.city = params[2];
        this.state = params[3];
        this.zip = params[4];
        this.phoneNo = params[5];
        this.email = params[6];
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(firstname){
        this._firstName = firstName;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lstname){
        this._lastName = lastName;
    }
    get city(){
        return this._city;
    }
    set city(city){
        this._city = city;
    }
    get state(){
        return this._state;
    }
    set state(state){
        this._state = state;
    }
    get zip(){
        return this._zip;
    }
    set zip(zip){
        this._zip = zip;
    }
    get phoneNo(){
        return this._phoneNo;
    }
    set phoneNo(phoneNo){
        this._phoneNo = phoneNo;
    }
    get email(){
        return this._email;
    }
    set email(email){
        this._email = email;
    }
    toString(){
        return "\n FirstName:"+this.firstName+", LastName: "+this.lastName+" CityName: "+this.city+" StateName:"+this.state+" Zip: "+this.zip+" PhoneNumber: "+this.phone+" Email:"+this.email;
    }
}
let addressBook = new AddressBook("Govind","Kumar","Aurangabad","Bihar","824122","91 9798364309","govindsingh6498@gmail.com")
console.log(addressBook.toString());
