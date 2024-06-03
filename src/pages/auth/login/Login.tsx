import "./style/login.css";
import LoginForm from "../../../components/auth/login/LoginForm";
import { LoginContainer } from "./style/login.style"
import Maps from "../../../components/main/Map";

const Login = () => {
    return (
        <>
            <LoginContainer>
                <LoginForm />
            </LoginContainer>
            <Maps />
        </>
    )
}

export default Login;