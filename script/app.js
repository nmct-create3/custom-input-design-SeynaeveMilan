const handlePasswordSwitcher = function () {
    console.log("handlePasswordSwitcher executed");
    const pwdToggle = document.querySelector('.js-password-toggle-checkbox');
    pwdToggle.addEventListener('change', function(){
        const passwordInput = document.querySelector('.js-password-input')
        const checkbox = document.querySelector('.js-password-toggle-checkbox').checked;
        if(checkbox == true){
            passwordInput.type = "text";
        }else{
            passwordInput.type = "password";
        }

    })
    
}

const init = function () {
    console.log('Script loaded!');

    // init password switcher
    handlePasswordSwitcher();

    // Other init functions here
}

init();