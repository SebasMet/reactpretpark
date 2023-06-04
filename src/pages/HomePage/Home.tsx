import "./Home.css";
import WelcomeText from "../../components/WelcomeText/WelcomeText";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import Banner from "../../components/Banner/Banner";
import Bannerimage1 from "../../assets/images/3_verkleede_mensen.jpg"
import Bannerimage2 from "../../assets/images/Vliegende_heks_schaduw.png"


export default function Home() {
    return (
        <>
            <div id="homeimage"> </div>
            <WelcomeText
                title="Hier komt informatie over de pagina"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate magna lorem, volutpat fringilla diam rhoncus eu. Vestibulum sed lacinia metus. Suspendisse a mauris elit. Donec eget risus luctus tortor fringilla fermentum sed sit amet neque. Ut volutpat velit velit, eget efficitur massa tempus vestibulum. Curabitur arcu lacus, pharetra quis erat ut, aliquet pharetra massa. Fusce eu risus quis nulla elementum vulputate eu vel metus. Praesent sollicitudin, purus nec dictum vulputate, lectus ex iaculis sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate magna lorem, volutpat fringilla diam rhoncus eu. Ve Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate magna lorem, volutpat fringilla diam rhoncus eu. Ve"
            />
            <ImageGrid />
            <Banner 
            head="Hier komt een banner"
            text =" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nulla tincidunt, ultricies turpis ut, ultrices massa. Phasellus suscipit leo sit amet lorem accumsan scelerisque. Sed mollis tellus in efficitur laoreet. Ut at urna eros. Aenean pulvinar lobortis metus. Curabitur ultricies at dolor sed pretium. Pellentesque ullamcorper lorem et. "
            img = {Bannerimage1}
            flip = {false}
            />
              <Banner 
            head="Hier komt een banner"
            text =" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet nulla tincidunt, ultricies turpis ut, ultrices massa. Phasellus suscipit leo sit amet lorem accumsan scelerisque. Sed mollis tellus in efficitur laoreet. Ut at urna eros. Aenean pulvinar lobortis metus. Curabitur ultricies at dolor sed pretium. Pellentesque ullamcorper lorem et. "
            img = {Bannerimage2}
            flip = {true}
            />

        </>
    )

}