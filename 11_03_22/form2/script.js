let button = document.querySelector('#button');

button.onclick = (event) =>{
    event.preventDefault()
    let company = document.querySelector('#company').value;
    let position = document.querySelector('#position').value;
    let earn = document.querySelector('#earn').value;
    let earn3Month = document.querySelector('#earn3Month').value;
    let thing = document.querySelector('#thing').value;
    let price = document.querySelector('#price').value;
    let amount = document.querySelector('#amount').value;
    let total = document.querySelector('#total').value;
    let credit = document.querySelector('#credit').value;
    let credit3m = document.querySelector('#credit3m').value;
    let address = document.querySelector('#address').value;

    let object2 = {
        name:company,
        position:position,
        earn:earn,
        earn3Month:earn3Month,
        thing:thing,
        price:price,
        amount:amount,
        total:total,
        credit:credit,
        credit3m:credit3m,
        address:address
    }
    console.log(object2);


}