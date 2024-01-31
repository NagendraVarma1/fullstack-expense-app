function addExpense (event) {
    event.preventDefault() 

    let amount = document.getElementById('amount').value;
    let description = document.getElementById('desc').value;
    let category = document.getElementById('category').value;

    let expenseDetails = {
        amount,
        description,
        category
    }
    axios.post('http://localhost:3000/expense/add-expense', expenseDetails)
    .then((res) => {
        showExpenses(res.data.newExpenseDetail)
    })
    .catch((err) => {
        console.log(err);
    })
}

function showExpenses(expense){
    let ul = document.getElementById('all-expenses');
    let li = document.createElement('li');
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'

    li.textContent = `Amount: ${expense.amount}, Description: ${expense.description}, Category: ${expense.category}`
    li.appendChild(deleteBtn);
    ul.append(li)
}

const getAllExpenses = () => {
    axios.get('http://localhost:3000/expense/get-expense')
    .then((res) => {
        for(let i=0; i<res.data.allExpenseDetails.length; i++){
            showExpenses(res.data.allExpenseDetails[i])
        }
    })
    .catch((err) => {
        console.log(err)
    })
}
getAllExpenses();