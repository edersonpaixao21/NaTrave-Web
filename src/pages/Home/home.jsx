export function Home() {
  return (
    <div className="h-max md:h-screen bg-red-700 text-white p-4 flex flex-col items-center">
      
      <header className="container flex justify-center p-4 md:p-10 mb-6 md:mb-10">
        <img src="/src/assets/logo/logo-fundo-vinho.svg" className="w-40" />
      </header>

      <div className="container max-w-5xl p-4 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">

        <div className="md:flex-1 flex justify-center">
          <img src="/src/assets/imagem/img.png" className="w-full w-80 md:w-3/4" />
        </div>

        <div className="md:flex-1 flex flex-col space-y-6">

          <h1 className="text-3xl text-center md:text-left font-bold">Dê o seu palpite na Copa do Mundo do Qatar 2022! </h1>

          <a href="/signup" className="text-red-700 bg-white text-xl text-center px-8 py-4 rounded-xl">
            Criar minha conta
          </a>

          <a href="/login" className="text-white text-center border border-white text-xl px-8 py-4 rounded-xl">
            Fazer login
          </a>
        </div>
      </div>
    </div>
  )
}
