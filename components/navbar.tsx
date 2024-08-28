import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
    return ( 
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-20 items-center">
            <p className="font-bold text-xl">PRODUCT</p>
            <div className="ml-auto flex items-center gap-x-4">
                <Button>
                    <Link href="/auth/sign-in">
                        Sign In
                    </Link>
                </Button>
            </div>
        </div>
     );
}
 
export default Navbar;