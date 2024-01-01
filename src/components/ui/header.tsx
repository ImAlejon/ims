import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./button";
import { AxeIcon } from "lucide-react";
import { NavigationMenuDemo } from "./navigation-menu-customed";


function Header(){
    return (<header className="flex justify-between items-center p-4">
        <AxeIcon className=""/>
        <div>
            <NavigationMenuDemo/>
        </div>
        
        <div>
        <SignedIn>
            <UserButton/>
        </SignedIn>
        <SignedOut>
            <SignInButton mode='modal'>
            <Button>Iniciar Sesión</Button>
            </SignInButton>
        </SignedOut>
        </div>
    </header>)
}

export default Header