document.getElementById('withdraw-btn').addEventListener('click', function(){
    const inputFieldNewValue = getInputValue('withdrawFields');
    const previousWithdrawValue = getPreviousTotal('current-withdraw');
    const newWithdrawTotal = inputFieldNewValue + previousWithdrawValue;
    setTotalElementValueByid('current-withdraw', newWithdrawTotal);

    const previouswithdrwaTotal = getPreviousTotal('current-balance');
    const newWithdrawTotalBalance = previouswithdrwaTotal-newWithdrawTotal;
    setTotalElementValueByid('current-balance', newWithdrawTotalBalance);
})