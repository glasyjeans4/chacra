import {HStack,Spacer,Link, Heading} from '@chakra-ui/react'
import logo from '../../assets/carrito.png'
import './NavBar.css'
const Navbar = () => {
  return (
    <div id= "navbar" >
        <HStack>
            
            <HStack>
            <Heading id= "links">Titulo de la tienda</Heading>
            <Spacer/>
            <Link id= "links">home</Link>
            <Link id= "links">Contact</Link>
            <Link id= "links">Product</Link>
            <Link id= "links">offers</Link>
             </HStack>
             <Spacer/>
             <img SRC ={logo} alt=""  width="30px"/>
        </HStack>
    </div>



    

   
  )
}
export {Navbar}