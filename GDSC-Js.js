let name = document.querySelectorAll('.name')
let code =document.querySelectorAll('.code')
let type = document.querySelectorAll('.type')
let price=document.querySelectorAll('.price')
let image=document.querySelectorAll('.image-right')
var products=document.querySelectorAll('.product')


const getAPI = (index) => {
    fetch('https://berequirement.herokuapp.com/products', {method:"GET"})
        .then((response) => response.json())
        .then((data) => {
            
            name.forEach(element => {
                element.textContent=data.data[index].name;
            });
            code.forEach(element => {
                element.textContent=data.data[index].code;
            });
            type.forEach(element => {
                element.textContent=data.data[index].type;
            });
            price.forEach(element => {
                element.textContent=data.data[index].price;
            })
            image.forEach(element=>{
                element.innerHTML=`<img src=${data.data[index].image} />`

            })
})
}

getAPI(0)

for(let i = 0; i < products.length; i++) {
    products[i].addEventListener("click", ()=>{
        products[i].classList.toggle('long')
        for(var j=0;j<products.length;j++){
            if (j!==i){
                if (products[j].classList.contains('long')){
                        products[j].classList.remove('long')
                }
            }
        }

        getAPI(i)
    })

}

let button=document.querySelector('.buy-btt')
button.addEventListener('click',()=>{
    var alert=document.querySelector('.alert')
    alert.classList.remove('none')
    setTimeout(()=>{
            alert.classList.add('none')
    },3000)
    var ping1=document.querySelector('.ping')
    ping1.classList.toggle('display')
})

var numberOne=document.querySelector('.ping')
var cartEmpty=document.querySelector('.cart-empty')
let bag=document.querySelector('.ti-bag')
bag.addEventListener('click',()=>{
   
    if(numberOne.classList.contains('display'))
    {
        cartEmpty.classList.toggle('active-empty')
    }
    else{
        var cart=document.querySelector('.cart')
        cart.classList.toggle("active")
    }
})

let continueShoping=document.getElementById('buy-btt')
continueShoping.addEventListener('click',()=>{
    var form=document.querySelector('#shipping')
    form.classList.toggle('active')
    var cart=document.querySelector('.cart')
    cart.classList.toggle("active")
})

let backToCard=document.querySelector('.back-btt')
backToCard.addEventListener('click',()=>{
    var form=document.querySelector('#shipping')
    form.classList.toggle('active')

})

let finish=document.querySelector('.finish-btt')
console.log(finish);
finish.addEventListener('click',()=>{
    var bodyWrapper=document.querySelector('.success-contain')
    bodyWrapper.classList.toggle('active-success')
    var form=document.querySelector('#shipping')
    form.classList.toggle('active')
    var ping1=document.querySelector('.ping')
    ping1.classList.toggle('display')
})
var back=document.querySelector('.back-btt')
back.addEventListener('click',()=>{
    var failContain=document.querySelector('fail-contain')
    failContain.classList.toggle('active-fail')
    console.log('1');
})

var shipingPrice=document.querySelector('.shipingPrice');
var shipingMoney1=document.querySelector('#op_1')
shipingMoney1.addEventListener('click',()=>{
    shipingPrice.textContent='0'
})
var shipingMoney2=document.querySelector('#op_2')
shipingMoney2.addEventListener('click',()=>{
    shipingPrice.textContent='10'
})
var shipingMoney3=document.querySelector('#op_3')
shipingMoney3.addEventListener('click',()=>{
    console.log('1');
    shipingPrice.textContent='20'
})
const minusBtn = document.querySelector(".minus");
const addBtn = document.querySelector(".add");
var number = document.querySelector(".number");
var totalPrice1 =document.querySelector('.totalPrice');
let priceAfter=document.querySelector('.price')
minusBtn.addEventListener("click", () => {
    if(number.innerText>0)
    {
        number.innerText --;
        totalPrice1.textContent=number.innerText*priceAfter.innerText;
    }
    
}
)
addBtn.addEventListener("click", () => {
    if(number.innerText===0)
    {
        totalPrice1.textContent='0'
    }
    else{
    number.innerText ++;
    totalPrice1.textContent=number.innerText*priceAfter.innerText;
    }
})
var quantity=document.querySelector('.quantity')
    quantity.addEventListener('click',()=>{
        var totalPrice=document.querySelector('.totalPrice')
        var priceOfProduct=document.querySelector('.priceOfProduct');
            priceOfProduct.textContent=totalPrice.innerText;
    })

var shippingOptions = document.querySelectorAll(".shiping_option");
var total=document.querySelector('.totalPriceProduct')
shippingOptions.forEach((option, index) => {
    option.addEventListener("click", ()=>{
      total.textContent=Number(totalPrice1.innerText)+Number(shipingPrice.innerText);
    })
})


