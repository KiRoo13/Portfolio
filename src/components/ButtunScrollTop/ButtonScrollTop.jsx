import './ButtonScrollTop.css'

function ButtonScrollTop() {

   function scrollTop () {
      window.scrollTo({top: 0, behavior: 'smooth'})
   }

   return ( 
      <button onClick={scrollTop} className='button-top'>&#11014;</button>
    );
}

export default ButtonScrollTop;