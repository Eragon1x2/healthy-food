import React from "react";
import Hero from '../components/hero/Hero';
import hero_back from '../img/hero_back.avif';
import About_back from '../img/about_back.svg';
import List from '../components/list_container/list';
import Footer from '../components/footer/footer';
import { NavLink } from "react-router-dom";
const MainPage = ({filderedList, addOr}) => {
    return(
        <div>
        <Hero reverse='row' animText='fade-left' animImg='fade-right' img={hero_back} title='title' text='Dolore deserunt qui excepteur ea ut ad nulla veniam. Eiusmod laboris ex nulla duis ipsum. Amet commodo eiusmod eiusmod eu do. Exercitation ea id irure sit excepteur officia aliqua adipisicing magna pariatur veniam excepteur dolore. Ut fugiat et veniam aute amet aute officia occaecat cillum ea anim. Laborum laboris nostrud ut nisi aute. Irure deserunt cillum ullamco duis ex non aute quis mollit consectetur ut.'></Hero>
        <Hero reverse='row-reverse' animText='fade-right' animImg='fade-left' img={About_back} title='about us' text='Dolor nisi ad veniam enim nostrud dolor laborum. Laboris proident ullamco mollit smagna nulla culpa amet. Minim do fugiat commodo sint cillum nisi excepteur. Laboris nulla ullamco ea ex ea amet aute aliquip qui aliqua. Ex elit duis cupidatat duis laborum do.'></Hero>
        <List gg={true} list={filderedList} addOr={addOr} title='Our products'></List>
        <nav style={{textAlign: 'center', paddingTop: '50px'}}>
        <NavLink to='/catalog' style={{color: 'white', fontSize: '17px', backgroundColor: 'rgb(0, 181, 111)', padding: '10px 20px', borderRadius: '15px', marginTop: '20px'}}>See more our products</NavLink>
        </nav>
        <Footer></Footer>
        </div>
    )
}

export default MainPage;