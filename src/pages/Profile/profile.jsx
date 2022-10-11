import { Icon, Card, DateSelect } from "../../components"


export function Profile () {
    return (
        <>
            <header className="bg-red-500 text-white p-4 h-24">
                <div className="container max-w-3xl flex justify-between">
                    <img src="/src/assets/logo/logo-fundo-vermelho.svg" className="w-32 md:w-40" />
                </div>
            </header>

            <main className="space-y-6">
                <section id="header" className=" bg-red-500 text-white ">
                    <div className="container max-w-3xl space-y-3 p-4">
                        <a href="/dashboard">
                        <Icon name="backImg"/>
                        </a>
                        <h3 className="text-2xl font-bold">Ederson Paixão</h3>
                    </div>
                </section>

                <section id="content" className="container max-w-3xl p-4 space-y-4">

                    <h2 className="text-red-500 text-xl font-bold">Seus palpites</h2>

                    <DateSelect />

                    <div className="space-y-4">
                        <Card
                            timeA={{ slug: 'sui' }}
                            timeB={{ slug: 'cam' }}
                            match={{ time:'7:00' }} 
                        />

                        <Card
                            timeA={{ slug: 'uru' }}
                            timeB={{ slug: 'cor' }}
                            match={{ time:'10:00' }} 
                        />

                        <Card
                            timeA={{ slug: 'por' }}
                            timeB={{ slug: 'gan' }}
                            match={{ time:'13:00' }} 
                        />
                    </div>
                </section>
            </main>
        </>
    )
}