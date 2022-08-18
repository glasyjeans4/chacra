import {HStack,Spacer,Link} from '@chacra-ui/react'
import logo from '../../assets/carrito.png'
const Navbar = () => {
  return (
    <div>
        <HStack>
            
            <HStack>
            <Link>home</Link>
            <Link>Contact</Link>
            <Link>Product</Link>
             </HStack>
             <Spacer/>
             <img SRC ={logo} alt=""  width="40px"/>
        </HStack>
    </div>



    

   
  )
}
export {Navbar}