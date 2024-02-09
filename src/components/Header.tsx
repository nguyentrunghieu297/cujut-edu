import { Bell, ChevronDown } from "lucide-react";
import img1 from "../assets/img/user-img.jpg";

export default function Header() {
    return (
        <div className="flex justify-between items-center py-3 px-4">
            <div className="logo flex gap-2 items-center bg-[#FFFFFF] rounded-full pr-5">
                <img
                    width="56"
                    height="56"
                    src="https://img.icons8.com/color-glass/48/education.png"
                    alt="education"
                />
                <div className="logo-name flex flex-col items-center">
                    <p className="text-base font-bold">Cujut</p>
                    <p className="text-base font-bold">Education</p>
                </div>
            </div>
            <div className="right-block flex gap-5 items-center">
                <div className="notify w-12 h-12 flex justify-center items-center bg-[#FFFFFF] rounded-full">
                    <Bell size={20} />
                </div>
                <div className="user flex items-center bg-[#FFFFFF] rounded-full px-1 py-1 text-xs">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src={img1} alt="" className="user-img" />
                    </div>
                    <div className="user-content mx-1">
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
