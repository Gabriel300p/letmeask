// Import Images
import IllustrationImg from '../assets/images/Illustration.svg'
import LogoImg from '../assets/images/Logo.svg'
import GoogleIconImg from '../assets/images/Google-icon.svg'

// Import Styles
import '../styles/auth.scss'

//Import Components
import { Button } from '../components/Button'

export function NewRoom() {

  return (
    <div id="page-auth">
      <aside>
        <img src={IllustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salada de Q&amp;A ao-vivo</strong>
        <p>Tire dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={LogoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <a href="#">Clique aqui</a></p>
        </div>
      </main>
    </div>
  )
}