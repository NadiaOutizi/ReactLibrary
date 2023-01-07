import {GoogleLogin} from 'react-google-login';
import { useNavigate } from 'react-router-dom';
const clientId ="181246396492-k4n6pqpta1s04usnr0pvtnqr250jdga0.apps.googleusercontent.com"
function Login(){
    const navigate = useNavigate();
    const onSuccess=(res)=>{
        console.log("LOGIN SUCCES! Current user:",res.profileObj)
        navigate("/dashboard");
    
    }
    const onFailure=(res)=>{
        console.log("LOGIN FAILED! res:",res)
    }
    return(
        <div id='signInButton'>
            <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />

        </div>
    )
}export default Login;