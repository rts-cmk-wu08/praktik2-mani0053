const Register = () => {
    return ( 
        <Form>
            <div>
                <label htmlFor="name">Fulde navn</label>
                <input placeholder="Fulde navn" type="text" name="name" /> 
            </div>
            <div>
                <label htmlFor="email">Email adresse</label>
                <input placeholder="Password" type="email" name="email"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input placeholder="Password" type="password" name="password"/>
            </div>
            <div>
                <label htmlFor="confirmPassword">Bekræft password</label>
                <input placeholder="Bekræft password"  type="password" name="confirmPassword"/>
            </div>
            <button type="submit"></button>
        </Form>
     );
}
 
export default Register;