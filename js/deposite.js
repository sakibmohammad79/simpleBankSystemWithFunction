document.getElementById('deposite-btn').addEventListener('click', function(){
    const inputFieldNewValue = getInputValue('depositeFields');
    const previousDepositeValue = getPreviousTotal('current-deposite');
    const newDepositeTotal = inputFieldNewValue + previousDepositeValue;
    setTotalElementValueByid('current-deposite', newDepositeTotal);

    const previousBalanceTotal = getPreviousTotal('current-balance');
    const newBalanceTotal = newDepositeTotal + previousBalanceTotal;
    setTotalElementValueByid('current-balance', newBalanceTotal);

})