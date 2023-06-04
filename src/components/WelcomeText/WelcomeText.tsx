import "./WelcomeText.css";

type WelcomeTextProps = {
    title: string;
    text: string;
}


export default function WelcomeText(props: WelcomeTextProps) {
    return (
        <div id="container">
            <div id="textcontainer">
                <div className="bigText">
                    <h1 id="T1">
                        <b>{props.title}</b>
                    </h1>
                    <p>
                        {props.text}
                    </p>
                </div>
            </div>


        </div>
    )

}