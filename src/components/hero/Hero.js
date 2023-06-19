import {useEffect} from "react";
import style from './hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import {ReactComponent as Left} from './left.svg';
const Hero = ({reverse, img, title, text, animText, animImg}) => {
    useEffect(() => {
        AOS.init();
      }, [])
    console.log(window.innerWidth)
    return(
    <div className={style.hero} style={{flexDirection: window.innerWidth > 768 ? reverse: "column" }}>

    <img alt="gg" src={img} data-aos={animImg} className={style.hero_img}></img>
    
    <div data-aos={animText}>
    <h1><span><Left></Left></span>{title}</h1>
        <p>{text}</p>
    </div>
    </div>);
}

export default Hero;