import errorImg from "../../assets/img/gifError.gif"
import "../style/serverError.css"

function ErroServer(params) {
    return(
        <div className="Container_Error" >
            <img className="error_img" src={errorImg} alt="icone github"/>
            <p className="Text_Error" > O servidor fahou em responder, <br/>
                tente recarregar a página!
            </p>
        </div>
    )
}
export default ErroServer;