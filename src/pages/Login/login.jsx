import { Icon, Input } from "../../components"

export function Login() {
    return (
        <div>
            <header className="flex justify-center p-4 md:p-10 mb-6 md:mb-10 border-b border-red-300">
                <img src="/src/assets/logo/logo-fundo-branco.svg" className="w-32 md:w-40" />
            </header>

            <main className="container max-w-xl p-4">
                <div className="flex space-x-4 ml-4 items-center">
                    <a href="/">
                        <Icon name="backImg"/>
                    </a>
                    <h2 className="text-xl font-bold">Entre na sua Conta</h2>
                </div>

                <form className="p-4 space-y-6">
                    <Input 
                        type="text"
                        name="email"
                        label="Seu e-mail"
                        placeholder='Digite seu e-mail'
                    />
                    
                    <Input 
                        type="password"
                        name="password"
                        label="Sua senha"
                        placeholder="Digite sua senha"
                    />

                    <button className="w-full text-white bg-red-500  px-6 py-3 rounded-xl">
                        Acessar minha conta
                    </button>
                </form>
            </main>
        </div>
    )
}