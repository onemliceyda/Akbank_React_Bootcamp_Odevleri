const userBtn = document.getElementById("addUser")
const productBtn = document.getElementById("addProduct")
const tradeBtn = document.getElementById("trade")
const productTradeBtn = document.getElementById("productTrade")

const userNameInput = document.getElementById("userName")
const balanceInput = document.getElementById("balance")
const productNameInput = document.getElementById("productName")
const priceInput = document.getElementById("price")
const productAmountInput = document.getElementById("productAmount")
const userListDOM = document.getElementById("userList")
const productListDOM = document.getElementById("productList")

const userSelect1DOM = document.getElementById("userSelect1")
const userSelect2DOM = document.getElementById("userSelect2")
// const ownersProductDOM = document.getElementById("ownersProduct")

const amountDOM = document.getElementById("amount")

const users = []
const products = []
let getUsers
let getProducts
// const example={fullName:"ceyda",balance:7000}

function addUser() {
  const userName = userNameInput.value
  const balance = Number(balanceInput.value)
  users.push({ userName, balance })
  localStorage.setItem("users", JSON.stringify(users))
  renderUsers()
  renderUsersForSelect1()
  renderUsersForSelect2()
  // renderPage();
}
const renderUsersForSelect1 = function () {
  const userList = document.createElement("option")
  getUsers = JSON.parse(localStorage.getItem("users"))
  getUsers.forEach((user) => {
    userList.innerHTML = `${user.userName}`
    userList.setAttribute("value", user.userName)
    userSelect1DOM.appendChild(userList)
  })
  return userSelect1DOM
}
const renderUsersForSelect2 = function () {
  const userList = document.createElement("option")
  getUsers = JSON.parse(localStorage.getItem("users"))
  getUsers.forEach((user) => {
    userList.innerHTML = `${user.userName}`
    userList.setAttribute("value", user.userName)
    userSelect2DOM.appendChild(userList)
  })
  return userSelect2DOM
}
const renderUsers = function () {
  const userList = document.createElement("li")
  userList.classList.add("list-group-item")
  getUsers = JSON.parse(localStorage.getItem("users"))
  getUsers.forEach((user) => {
    userList.innerHTML = `<div class="title">
    <span class="name">${user.userName}</span>
    <span class="balance">${user.balance}</span> </div>`
    userListDOM.appendChild(userList)
  })
  return userListDOM
}
const userMoneyTransfer=function(){
  const senderValue=userSelect1DOM.value;
  const getterValue=userSelect2DOM.value;
  const amount=+amountDOM.value;
  let getUsers;
  getUsers = JSON.parse(localStorage.getItem("users"))
  console.log(getUsers);

  getUsers=getUsers.map((user)=>{
    if(user.userName===senderValue){
      user.balance-=amount
    }
    if(user.userName===getterValue){
      user.balance+=amount}
    
  });
  console.log(getUsers);
  localStorage.setItem("users", JSON.stringify(getUsers))
  }
  


const addProduct = function () {
  const productName = productNameInput.value
  const price = +priceInput.value
  const productAmount = +productAmountInput.value
  products.push({ productName, price, productAmount })
  localStorage.setItem("products", JSON.stringify(products))
  renderProducts()
}

const renderProducts = function () {
  const productsList = document.createElement("li")
  productsList.classList.add("list-group-item")
  getProducts = JSON.parse(localStorage.getItem("products"))
  getProducts.forEach((product) => {
    productsList.innerHTML = `<div class="title"><span class="name">${product.productName}</span> <span class="balance">${product.price}</span> <span class="amount"> ${product.productAmount}</span></div>`
    productListDOM.appendChild(productsList)
  })
  return productsList
}

const renderProductPage = function (id) {
  productListDOM.innerHTML = renderProducts().innerHTML
}
const renderPage = function (id) {
  userListDOM.innerHTML = renderUsers().innerHTML
}



