
let ob = JSON.parse(localStorage.getItem("user")) || {};

function signUpData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let amount = document.getElementById("amount").value;
   
    class UserData{
        constructor(name,email,address,amount){
            this.name = name;
            this.email = email;
            this.address = address;
            this.wallet = amount;

        }
    }
    let Data = new UserData(name,email,address,amount); 
    window.location.reload();
    
    localStorage.setItem("user",JSON.stringify(Data));
}
