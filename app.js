function calculateButtonPrice(){
    const foodPrice = document.getElementById('food-price-input');
    const rentPrice = document.getElementById('rent-price-input');
    const clothesPrice = document.getElementById('clothes-price-input');
    const foodExpense =  parseFloat(foodPrice.value);
    const rentExpense = parseFloat(rentPrice.value);
    const clothesExpense = parseFloat(clothesPrice.value);
    const foodExpensePrice = isNaN(foodExpense) ? 0 : foodExpense;
    const rentExpensePrice = isNaN(rentExpense) ? 0 : rentExpense;
    const clothesExpensePrice = isNaN(clothesExpense) ? 0 : clothesExpense;
    const totalExpense = (foodExpensePrice + rentExpensePrice + clothesExpensePrice);
    // total expense
    const totalExpenseText = document.getElementById('total-expense');
    totalExpenseText.innerText = totalExpense;
    
    // income input
    const incomeInput = document.getElementById('income-input');
    const totalIncomeInput = parseFloat(incomeInput.value);
    const totalIncome = isNaN(totalIncomeInput) ? 0 : totalIncomeInput;
    // balance total
    balance = totalIncome - totalExpense;
    if(totalIncome < totalExpense){
        alert('Expense Amount is more than income amount');
        const saveAmount = document.getElementById('save-amount');
        saveAmount.innerText = '00';
        const totalBalanceText = document.getElementById('total-balance');
        totalBalanceText.innerText = '00';
        
    }
    const totalBalance = document.getElementById('balance-total');
    totalBalance.innerText = balance;
   
}
calculateButtonPrice();
function saveAmount(){
    const saveInput = document.getElementById('save');
    const totalSaveInput = saveInput.value;
    const totalSave = (balance*totalSaveInput) / 100;
    const saveAmount = document.getElementById('save-amount');
    if(balance < 0){
        alert('You have not positive amount');
        saveAmount.innerText = '00';
        totalBalance.innerText = '00';
    }
    else{
        saveAmount.innerText = totalSave;
        const totalBalance = document.getElementById('total-balance');
        const totalBalanceAmount = balance-totalSave;
        totalBalance.innerText = totalBalanceAmount;
    }
}

