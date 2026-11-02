
import "./style/Menu.css"
import Link from "next/link";

const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/movies'>Movies</Link></li>
            </ul>
        </div>
    );
};

export default Menu;