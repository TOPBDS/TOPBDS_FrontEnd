import "./style/login.css";
import LoginForm from "../../../components/auth/login/LoginForm";
import { LoginContainer } from "./style/login.style"

const Login = () => {
    return (
        <LoginContainer>
            <LoginForm />
        </LoginContainer>
    )
}

export default Login;