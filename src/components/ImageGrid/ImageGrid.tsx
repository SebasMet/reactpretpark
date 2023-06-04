import "./ImageGrid.css"
import Image1 from "../../assets/images/Mickeymouseheks.png"
import Image2 from "../../assets/images/Jack_O_lantern.png"
import Image3 from "../../assets/images/Groep_Heksen.png"


export default function ImageGrid() {
    return (
        <div id="container">
            <div id="homeimagescontainer">
                <div className="homeimage"> <img src={Image1}></img></div>
                <div className="homeimage"> <img src={Image2}></img></div>
                <div className="homeimage">< img src={Image3}></img></div>
                

            </div>
    

        </div>
    )

}