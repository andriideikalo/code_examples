
function checkPassword(password) {
    password = 2;
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
       // Change code below this line
  
    // if (password === null) {
    //   message = "Canceled by user!";
    // } else if (password === ADMIN_PASSWORD) {
    //   message = "Welcome!";
    // } else {
    //   message = "Access denied, wrong password!";
    // }
  
    switch (password) {
        case null:
            message = `Canceled by user!`;
            break;
        case ADMIN_PASSWORD:
            message = `Welcome!`;
            break;
        default:
            message = `Access denied, wrong password!`;
      
    }
  
    // Change code above this line
    return message;
}