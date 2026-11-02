import "./style/Header.css"
import Menu from "@/src/components/Menu";
import UserInfo from "@/src/components/UserInfo";

const Header = () => {
    return (
        <>
            <Menu/>
            <UserInfo/>
        </>
    );
};

export default Header;