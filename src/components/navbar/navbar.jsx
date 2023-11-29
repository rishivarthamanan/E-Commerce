import { IoSearchSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";


const Navbar = () => {
  return ( 
    <div className='navbar'>
<div className='left'><span>Home</span>
<span>About us</span>
<span>our product</span>
</div>

<div className='right'>
  <IoSearchSharp />
  <FaFacebook />
  <IoLogoTwitter />
  <LuInstagram />
  </div>
  </div>
   );
}
 
export default Navbar;

   