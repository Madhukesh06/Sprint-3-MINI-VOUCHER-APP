let purchaseData = JSON.parse(localStorage.getItem("purchase")) || [];

let ob = JSON.parse(localStorage.getItem("user")) || {};
let bal = (+ob.wallet);
document.getElementById("wallet_balance").innerHTML = bal;

display(purchaseData)

function display(data){
    data.forEach(el => {
        // console.log(el)
        let CARD = document.createElement("div")

        let Im = document.createElement("img")
        let H1 = document.createElement("h4")
        let Price = document.createElement("h2")

        CARD.setAttribute("class","voucher");

        Im.src = el.image;
        H1.innerText = el.name;
        Price.innerText = el.price;
    

        CARD.append(Im,H1,Price)

        document.getElementById("purchased_vouchers").append(CARD);

    });
}