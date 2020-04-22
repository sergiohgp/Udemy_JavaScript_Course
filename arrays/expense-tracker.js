const account = {
    name: 'Sergio Pereira',
    expenses: [],
    income: [],
    balance: 0
}

// Challenge part 1
// Expense -> description, amount
// addExpense -> description, amount
// getAccountSumary -> total up all expenses 
const addExpense = function (account, description, amount) {
    account.expenses.push({
        description: description,
        amount: amount,
    })
}

const addIncome = function (account, description, amount) {
    account.income.push({
        description: description,
        amount: amount
    })
}

const getAccountSumary = function (account) {
    console.log(`Account for ${account.name} has the following expenses:`)
    for (let i = 0; i < account.expenses.length; i++){
        console.log(`For ${account.expenses[i].description} you spent ${account.expenses[i].amount} dollars`)
        account.balance -= account.expenses[i].amount
    }

    for (let j = 0; j < account.income.length; j++){
        console.log(`For ${account.income[j].description} you earned ${account.income[j].amount} dollars`)
        account.balance += account.income[j].amount
    }
    console.log(`The balance of the account is ${account.balance}`)
}



addExpense(account, 'Rent', 950)
addExpense(account, 'Cofee', 2)

addIncome(account, 'Job', 1000)
addIncome(account, 'Rent', 1500)

console.log(account)
getAccountSumary(account)

// Challenge part 2
// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. 