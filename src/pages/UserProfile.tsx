import avatar from "../assets/img/user-img.jpg";

export default function UserProfile() {
    return (
        <div>
            <div className="user-background relative">
                <img
                    className="w-full h-56 object-cover rounded-3xl"
                    src="https://images.unsplash.com/photo-1495080600440-47b003ed9521?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="background"
                />
                <div className="user-img  flex justify-center">
                    <img
                        src={avatar}
                        alt="user-img"
                        className="user-img absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-48 border-8 border-solid border-[#F2EAE5]"
                    />
                </div>
                <div className="user-info flex flex-col items-center gap-3 mt-20">
                    <h1 className="user-name text-3xl font-bold text-center">Nguyen Trung Hieu</h1>
                    <div className="user-date">Member since Aug 23, 2023</div>
                </div>
            </div>
            <div className="separate border-b border-gray-300 border-solid my-3"></div>
            <div className="edit-info"></div>
        </div>
    );
}
