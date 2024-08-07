import "./style/register.css";
import RegisterForm from "../../../components/auth/register/RegisterForm";
import { RegisterContainer } from "./style/register.style";
import Maps from "../../../components/main/Map";

const Register = () => {
    return (
        <>
            <RegisterContainer>
                <RegisterForm />
            </RegisterContainer>
            <Maps setLat={null} setLng={null} />
        </>
    )
}

export default Register;