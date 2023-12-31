import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./button";

function Header(){
    return (<header className="flex justify-end p-4">
        <SignedIn>
            <UserButton/>
        </SignedIn>
        <SignedOut>
            <SignInButton>
            <Button>Sign In</Button>
            </SignInButton>
        </SignedOut>
    </header>)
}

export default Header