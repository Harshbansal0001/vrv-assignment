import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title=" Get Well Soon"
      description1="Sign in to access your orders, special offers, health tips and more!"
      
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
