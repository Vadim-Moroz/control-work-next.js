import "./style/UserInfo.css"

const UserInfo = () => {
    const userName = 'Alex Morgan';
    const userInitials = 'AM';

    return (
        <div className="userInfo">
            <div className="userAvatar">
                {userInitials}
            </div>

            <span className="userName">
                {userName}
            </span>
        </div>
    );
};

export default UserInfo;