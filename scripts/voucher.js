let ob = JSON.parse(localStorage.getItem("user")) || {};
let bal = (+ob.wallet);
// let data
document.getElementById("wallet_balance").innerHTML = bal;


let purchaseData = JSON.parse(localStorage.getItem("purchase")) || [];

async function data_fetch(){
    let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";
    
    try {
        let res = await fetch(url)
        let data = await res.json();
        display(data[0].vouchers);
    } catch (error) {
        console.log("Error : ",error)
    }
}
data_fetch()


function display(data){
    data.forEach(el => {
        // console.log(el)
        let CARD = document.createElement("div")

        let Im = document.createElement("img")
        let H1 = document.createElement("h4")
        let Price = document.createElement("h2")
        let btn = document.createElement("button")

        CARD.setAttribute("class","voucher");
        btn.setAttribute("class","buy_voucher");

        Im.src = el.image;
        H1.innerText = el.name;
        Price.innerText = el.price;
        btn.innerText = "BUY";

        CARD.append(Im,H1,Price,btn)

        document.getElementById("voucher_list").append(CARD);

        btn.addEventListener("click",function(){
            addToPurchase(el,ob);
        })

    });

    function addToPurchase(el,ob){
        console.log(el,+ob.wallet)

        if(+ob.wallet>=el.price){
            alert( "Hurray! purchase successful");
            bal=bal-el.price;
            document.getElementById("wallet_balance").innerHTML = bal;
            ob.wallet = bal;
            let data = ob;
            localStorage.setItem("user",JSON.stringify(data));
            
            purchaseData.push(el)
            localStorage.setItem("purchase",JSON.stringify(purchaseData))
        }
        else{
            alert("Sorry! insufficient balance");
        }
    }
}