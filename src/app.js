window.onload = function(){
  
    let emailButton = document.getElementsByClassName('email-button')[0];
    let emailInput = document.getElementsByClassName('email-input')[0];
    let removeErr = ()=>{
        document.getElementsByClassName("email-error")[0].classList.add("hidden")
        document.getElementsByClassName("email-error")[0].classList.remove("block")
    }
    let addErr = ()=>{
        document.getElementsByClassName("email-error")[0].classList.remove("hidden")
        document.getElementsByClassName("email-error")[0].classList.add("block")
    }
    let showSuccess = ()=>{
        document.getElementsByClassName("email-success")[0].classList.remove('hidden');
        document.getElementsByClassName("email-success")[0].classList.add('block');
        setTimeout(()=>{
            document.getElementsByClassName("email-success")[0].classList.remove('block');
            document.getElementsByClassName("email-success")[0].classList.add('hidden');
        },3000);
    }
function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        showSuccess();
        return (true)
    }
    else{
        console.log('hello')
        addErr();
        return (false)
    }
    
   
}
emailButton.addEventListener('click', ()=>{
    ValidateEmail(emailInput.value);
})

emailInput.addEventListener('click', ()=>{
    removeErr();
})

}