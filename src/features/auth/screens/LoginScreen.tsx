import LoginForm from "../components/login/LoginForm"
import LoginHero from "../components/login/LoginHero"

export default function loginScreen() {
    return (
        <>
            <main>
                <div className="p-10 px-16 grid lg:grid-cols-2 lg:gap-4 gap-10">
                    <LoginHero />
                    <LoginForm />
                </div>
            </main>
        </>
    )
}

