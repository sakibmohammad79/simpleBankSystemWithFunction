document.getElementById('btn-submit').addEventListener('click', function(){
    const userName =document.getElementById('user-name');
    const nameValue = userName.value;
    
    const userPass = document.getElementById('user-pass');
    const passValue = userPass.value;

    if(nameValue === 'sakib' && passValue === '123456'){
        window.location.href = 'inner.html';
    }
    else{
        alert('Please Enter The Valid Username and Password!');
    }
})