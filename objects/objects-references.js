let myAccount = {
    name: 'Sergio',
    expenses: 0,
    income: 0,
    balance: function() {
       let balance = this.income - this.expenses
       return balance
    }
}


let addExpense = function (account, expense) {
    account.expenses += expense
    console.log(`$${expense} was added as expense to your account.`)
}

// addIncome
let addIncome = function (account, income) {
    account.income += income
    console.log(`$${income} was added as income to your account.`)
}

// resetAccount
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
    console.log(`Your account was reseted.`)
}

let resetIncome = function (account) {
    account.income = 0
    console.log(`Your income was reseted.`)
}

let resetExpenses = function (account) {
    account.expenses = 0
    console.log(`Your expenses were reseted.`)
}

// getAccountSummary
let getAccountSummary = function (account) {
    // account.balance = account.income - account.expenses
    let balance = account.balance()
    console.log(`Account for ${account.name} has $${balance}. $${account.expenses} in expenses and $${account.income} in income.`)
}

addIncome(myAccount, 1000)
addExpense(myAccount, 320)
addExpense(myAccount, 410)
getAccountSummary(myAccount)
resetExpenses(myAccount)
getAccountSummary(myAccount)
addIncome(myAccount, 300)
addExpense(myAccount, 200)
resetAccount(myAccount)
getAccountSummary(myAccount)