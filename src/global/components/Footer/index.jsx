import { Outlet, Link } from "react-router-dom";
import { Container, ContainerInfo } from "./style";
import Twitter from "../../../assets/twitter.svg";
import Facebook from "../../../assets/facebook.svg";
import Instagram from "../../../assets/instagram.svg";
import Tiktok from "../../../assets/tiktok.svg";

export function Footer() {
  return (
    <>
    
    <Container>
      <ContainerInfo>
        <div>
          <h4>Redes Sociais</h4>
          <a href="https://www.instagram.com/eldritchcard/" target="_blanck">
            <img src={Twitter} alt="twitter icon" />
          </a>
          <a href="https://www.instagram.com/eldritchcard/" target="_blanck">
            <img src={Facebook} alt="facebook icon" />
          </a>
          <a href="https://www.instagram.com/eldritchcard/" target="_blanck">
            <img src={Instagram} alt="instagram icon" />
          </a>
          <a href="https://www.instagram.com/eldritchcard/" target="_blanck">
            <img src={Tiktok} alt="tiktok icon" />
          </a>
        </div>
        <div>
          <h4>Contato</h4>
          <p>(24)2222-2222</p>
          <a href="mailto:eldritchcards@gmail.com">
            <p>eldritchcards@gmail.com</p>
          </a>
        </div>
        <div>
          <h4>Marcas</h4>
          <a href="##">
            <p>Magic</p>
          </a>
          <a href="##">
            <p>Pokémon</p>
          </a>
        </div>
      </ContainerInfo>
      <p>©Serratec - Desenvolvimento Web - Grupo 4 - 2023</p>
    </Container>
    <Outlet/>
    </>
  );
}