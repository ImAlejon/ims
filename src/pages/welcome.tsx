import { SignInButton, UserButton, auth } from "@clerk/nextjs";

export default function welcome(){
    return (
        <header className="flex justify-end p-4">{!auth.name ? <SignInButton/> : <UserButton/>}</header>
        )
}