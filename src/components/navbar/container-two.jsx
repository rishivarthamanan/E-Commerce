import { FaPlayCircle } from "react-icons/fa";
  
const Containers = () => {
  return ( 
  <div className='container-two'>
  <div className='second-content'>
      <img className='img-four' src="src/assets/images/headphones.JPG" alt="" srcset="" />
    </div>
    <div className='right-content'>
    <span>About us</span>
    <p>Immerse yourself in crisp,
       clear audio with these noise-canceling headphones,
        perfect for blocking out distractions and enjoying your favorite music.</p>
        <div className='button'>
        <button btn-one>learn more</button>
        <FaPlayCircle /></div>
        </div>


</div> );
}
 
export default Containers;
 
