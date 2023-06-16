import Link from "next/link";

const Login = () => {
    return ( 
        <div>
        <div className="logtitle">
            <h1 className="font-bold text-2xl mb-5">Account Login</h1>
            <h2 className="text-lg" >Home | Login</h2>
        </div>
        <div className="wrapper logform" >
            <h3 className="font-medium text-3xl my-20 pl-36" >Log ind på din konto</h3>
            <form className="logformdiv" >
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                    className="loginput"
                    placeholder="Email"

                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                    className="loginput"
                    placeholder="Password"
                    />
                </div>
                <button type="submit" className="loginbtn" >Log ind</button>
            </form>
            <div className="pt-10">
            <p className="mb-3" >Log ind med</p>
            <button className="bg-red-500 text-white py-2 px-6 rounded-sm w-40 h-14 mr-7" >Google</button>
            <button className="bg-sky-800 text-white py-2 px-6 rounded-sm w-40 h-14 mr-7">Facebook</button>
            <button className="bg-main-color text-white py-2 px-6 rounded-sm w-40 h-14 mr-7">Twitter</button>
            </div>
            <div className="logkonto">
            <p>Har du ikke en konto?</p>
            <Link href="/register"
            className="decoration-sky-600"
            >
            Opret bruger.
            </Link>
            </div>
        </div>
        </div>
     );
}
 
export default Login;