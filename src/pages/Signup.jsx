import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Get Well Soon"
      description1="Sign up or Sign in to access your orders, special offers, health tips and more!"
      // description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
