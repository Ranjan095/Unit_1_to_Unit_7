import { Link,NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
function Navbar() {

    // let {isAuth}=useContext(AuthContext)

    return(
        <div className = "navbar" >
            <Link to='/login'>Login</Link>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/products'>Products</Link>
        </div>
    )
}

export { Navbar }

// . Create a navbar which has the following links (strcitly should have the same order as below)
//    - Login
//    - Home
//    - About
//    - Contact
//    - Products

// - Login (should be rendered on route "/login")
// - Home (should be rendedered on default route "/")
// - About (should be rendered on route "/about")
// - Contact (should be rendered on route "/contact")
// - Products (should be rendered on route "/products")

