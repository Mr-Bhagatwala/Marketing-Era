const Sign = ()=>{
    return(
        <>
            <body>
<div class="container">
    <form  id="createAccount" action="signup.php" method="post">
            <h1 class="form__title">Create Account</h1>
            <div class="form__message form__message--error">
        </div>
            <div class="form__input-group">
                <input type="text" class="form__input" autofocus placeholder="Enter username" name="username" maxlength="15"/>
                <div class="form__input-error-message"></div>
            </div>
            
            <div class="form__input-group">
                <input type="password" class="form__input" autofocus placeholder="Enter password" name="password" maxlength="25" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input" autofocus placeholder="Confirm password" name="cpassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" maxlength="25" required/>
                <div class="form__input-error-message"></div>
            </div>
            <button class="form__button" name="btn" type="submit">Countinue</button>
                <p class="form__text">
                    {/* <a class="form__link" href="login.php" id = "linklogin">Already have an account? Sign in</a> */}
                </p> 
                </form>
       
</div>
<script src="main.js"></script>
</body>
        </>

    );
}

export default Sign;