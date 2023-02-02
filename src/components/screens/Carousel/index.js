import React from 'react';
import banner1 from './../../images/banners/1.png';


function Carousel(){
return(

<div className='carousel-container'>
<div className='carousel-left'>


</div>
   
   <div className='carousel-right'>
<div className='carousel-right-back'>

</div>
<div className='carousel-right-front'>
<img src={banner1} className='rotate-image'/>
</div>
   </div>
</div>


);
}
export default Carousel;