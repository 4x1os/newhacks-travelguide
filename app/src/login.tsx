
function LoginPage(){
    return( 
    <>
        <div className="text-grey-900 dark:text-white">
            <h1>Login to your account</h1>
            <div>
                <form action="#" method="POST" className="space-y-6">
                    <input id="email" type="email" name="email" className="border-2 border-white"></input>
                    <input id="password" type="password" name="password"  className="border-2 border-white"></input>
                </form>
            </div>
        </div>

    </>);
}

export default LoginPage 