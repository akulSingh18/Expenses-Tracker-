import "./style.css"

const StartingComponent = (props) => {

     const {text} = props;



    return (
        <div className="text-cont">
            {text}
        </div>
    )
}

export default StartingComponent;