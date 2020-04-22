const account = {
    name: 'Sergio Pereira',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },

    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSumary: function () {
        let balance = 0, totalIncome = 0, totalExpenses = 0

        this.expenses.forEach(function (i) {
            balance -= i.amount
            totalExpenses += i.amount
        })

        this.income.forEach(function (j) {
            balance += j.amount
            totalIncome += j.amount
        })

        return `${this.name} has a balance of $${balance}. $${totalExpenses} in expenses and $${totalIncome} as income.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Cofee', 2)

account.addIncome('Job', 1000)

// console.log(account)
console.log(account.getAccountSumary())