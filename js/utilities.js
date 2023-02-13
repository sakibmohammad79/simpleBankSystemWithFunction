//get input new value in the input fields...
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = parseFloat(inputField.value);
    const inputFieldValue = inputFieldValueString;
    inputField.value='';
    return inputFieldValue;
}
//get previous value int the deposite text
function getPreviousTotal(previousTotalId){
    const previousTotalField = document.getElementById(previousTotalId);
    const previousTotalValueString = parseFloat(previousTotalField.innerText);
    const previousTotalValue = previousTotalValueString;
    return previousTotalValue;
}
//get total deposite and woithdra total 
function setTotalElementValueByid(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}