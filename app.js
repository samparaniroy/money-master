
 function calculateButtonPrice (){
    const foodPrice = document.getElementById('food-price-input');
    const rentPrice = document.getElementById('rent-price-input');
    const clothesPrice = document.getElementById('clothes-price-input');
    const foodExpense =  parseFloat(foodPrice.value);
    const rentExpense = parseFloat(rentPrice.value);
    const clothesExpense = parseFloat(clothesPrice.value);
    const totalExpense = (foodExpense + rentExpense + clothesExpense);
    const totalExpnseText = document.getElementById('total-expense');
    totalExpnseText.innerText = totalExpense;
    const incomeInput = document.getElementById('income-input');
    const totalIncome = parseFloat(incomeInput.value);
    const balance = totalIncome - totalExpense;
    const totalBalance = document.getElementById('balance-total');
    totalBalance.innerText = balance;
    foodPrice.value = '';
    rentPrice.value = '';
    clothesPrice.value = '';
}
