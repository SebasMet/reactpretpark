import "./Banner.css";

//Banner component reused from personal project

type BannerProps = {
    head: string;
    text: string;
    img: any;
    flip: boolean;
}


export default function Banner({ head, text, img, flip }: BannerProps) {
    return (
        <div id="container">
            <div className="banner" style={{
                flexDirection: flip ? "row-reverse" : "row"

            }}>

                <div className="text-section">
                    <h1>{head}</h1>
                    <p>{text}</p>
                </div>

                <div className="image-section">
                    <img id="image" src={img}></img>
                </div>

            </div>
        </div>
    );
}