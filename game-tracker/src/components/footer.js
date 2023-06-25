import "./style/footer.css"
import Pipe from "../assets/img/pipe.svg"
import GitIcon from "../assets/img/git.png"
import Linkedin from "../assets/img/linkedin.png"
import imgFooter from "../assets/img/logo.svg"

function Footer(params) {
    return(
        <div className="container_footer">
            <div className="container_imgs">
                <img className="pipe1" src={Pipe} alt="pipe footer"/> 
                <img className="imgFoter" src={imgFooter} alt="icone github"/><br/>
                <img className="pipe2" src={Pipe} alt="pipe footer"/> 
            </div>
                <div  >
                    <a href="https://github.com/RafaelMarquesFull">
                        <img className="icon" src={GitIcon} alt="icone github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/rafaeldeveloperfullstack/">
                        <img className="icon" src={Linkedin} alt="icone github"/>
                    </a>
                    <p className="Developer">
                        Developer by <br/>
                        Rafael Da Silva Marques
                    </p>

                </div>
        </div>
    )   
}

export default Footer;