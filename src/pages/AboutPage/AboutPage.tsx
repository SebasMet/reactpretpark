import TextGrid from "../../components/TextGrid/TextGrid";
import Bannerimage1 from "../../assets/images/VerkleedeZombiesInAchtbaan.png"
import Banner from "../../components/Banner/Banner";
import "./AboutPage.css";



export default function AboutPage() {
    return (
        <>
        <div id="about-title-container">
            <h1 id="about-title">Over ons</h1>
        </div>
        <TextGrid/>
        <Banner 
            head="Hier komt een banner"
            text =" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nulla tincidunt, ultricies turpis ut, ultrices massa. Phasellus suscipit leo sit amet lorem accumsan scelerisque. Sed mollis tellus in efficitur laoreet. Ut at urna eros. Aenean pulvinar lobortis metus. Curabitur ultricies at dolor sed pretium. Pellentesque ullamcorper lorem et. "
            img = {Bannerimage1}
            flip = {false}
            />
        
        
       
        </>
    )

}