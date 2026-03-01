import SignupHero from "../components/signup/SignupHero";
import SignupForm from "../components/signup/SignupForm";

export default function SignupScreen() {
    return (
        <>
            <main>
                <div className="p-10 px-16 grid lg:grid-cols-2 lg:gap-4">
                    <SignupHero />
                    <SignupForm />
                </div>
            </main>
        </>
    );
}
