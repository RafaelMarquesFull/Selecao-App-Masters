import errorImg from "../../assets/img/gifError.gif"
import "../style/serverError.css"

function Error(params) {
    return(
        <div className="Container_Error" >
            <img className="error_img" src={errorImg} alt="icone github"/>
            <p className="Text_Error" > O servidor não conseguirá responder por agora,<br/> 
                tente voltar novamente mais tarde!
            </p>
        </div>
    )
}
export default Error;