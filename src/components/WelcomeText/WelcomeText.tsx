import "./WelcomeText.css";

type WelcomeTextProps = {
    title: string;
    text: string
}


export default function WelcomeText({ title, text }: WelcomeTextProps) {
    return (
        <div id="container">
            <div id="textcontainer">
                <div className="bigText">
                    <h1 id="T1">
                        <b>{title}</b>
                    </h1>
                    <p>
                        {text}
                    </p>
                </div>
            </div>


        </div>
    )

}