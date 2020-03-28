/** Search input */
const searchUser =  document.getElementById('searchUser');

/** Search input event */
searchUser.addEventListener('keyup', (event) => {
    /** get input text */ 
    const userText = event.target.value;
    if(userText !== ''){
        console.log(userText);
    }
})