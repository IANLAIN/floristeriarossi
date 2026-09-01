import { CONTACT } from '../../constants/data'

function Footer() {
  return (
    <footer className="bg-primary text-center text-white">
      <div className="container-page flex flex-col items-center gap-3 py-10 text-sm text-white/85">
        <p className="font-serif text-lg text-white">Floristeria Rossi Todos los derechos reservados</p>
        <p>{CONTACT.address}.</p>
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-4">
          <span>3205851765</span>
          <span>3136591946</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
