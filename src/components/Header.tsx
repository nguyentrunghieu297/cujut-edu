import { Bell, ChevronDown } from "lucide-react";
import img1 from "../assets/img/user-img.jpg";

export default function Header() {
    return (
        <div className="flex justify-between items-center py-3 px-4">
            <div className="logo flex gap-2 items-center bg-[#FFFFFF] rounded-full pr-5 hover:bg-secondary hover:text-primary transition-all duration-250">
                <img
                    width="56"
                    height="56"
                    src="https://img.icons8.com/color-glass/48/education.png"
                    alt="education"
                />
                <div className="logo-name flex flex-col items-center">
                    <p className="text-base font-semibold">Learning Online</p>
                    <p className="text-base font-semibold">Management System</p>
                </div>
            </div>
            <div className="right-block flex gap-5 items-center">
                <div className="notify w-12 h-12 flex justify-center items-center bg-[#FFFFFF] hover:bg-secondary hover:text-primary rounded-full transition-all duration-250 cursor-pointer">
                    <Bell size={20} />
                </div>
                <div className="user flex items-center bg-[#FFFFFF] hover:bg-secondary hover:text-primary transition-all duration-250 rounded-full px-1 py-1 text-xs cursor-pointer">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src={img1} alt="" className="user-img" />
                    </div>
                    <div className="user-content ml-2">
                        <div className="user-name font-semibold">Nguyen Trung Hieu</div>
                        <div className="user-role font-light">@FontendDeveloper</div>
                    </div>
                    <div className="icon px-2">
                        <ChevronDown strokeWidth={1} size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
}
