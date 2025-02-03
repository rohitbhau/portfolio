import React from 'react';
import './works.css';
import { Button } from 'react-scroll';
import Mywork from '../../assets/calculator-min.png';
import Myworkone from '../../assets/whatsapplogo.png';
import Myworktwo from '../../assets/uidesign.jpg';
import Myworkthree from '../../assets/uidesign.jpg';
import Myworkfour from '../../assets/uidesign.jpg';
import Myworkfive from '../../assets/uidesign.jpg';
const Works=()=>{
    return(
        <section id="works">
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className='worksDesc'>lorem lumpsum</span>
            <div className='worksImgs'>
                <img src={Myworkfive} alt='' className='worksImg'/>
                <img src={Myworkfour} alt='' className='worksImg'/>
                <img src={Myworkthree} alt='' className='worksImg'/>
                <img src={Myworktwo} alt='' className='worksImg'/>
                <img src={Myworkone} alt="" className='worksImg'/>
                <img src={Mywork} alt="" className='worksImg'/>
            </div>
            <Button className='worksBtn'>See more</Button>
        </section>
    );
}
export default Works;