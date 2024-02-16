import { ClipboardList, BookCheck, Settings, Users, DoorOpen, Contact } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex flex-col min-w-52 h-full bg-sidebarBg text-white  rounded-2xl">
            {/* Sidebar content */}
            <div className="flex flex-col p-4">
                <li className="py-5 pl-2">
                    <Link
                        to={`/`}
                        className="text-gray-300 hover:text-white flex gap-5 items-center"
                    >
                        <ClipboardList />
                        Dashboard
                    </Link>
                </li>
                <li className="py-5 pl-2">
                    <Link
                        to={`class`}
                        className="text-gray-300 hover:text-white flex gap-5 items-center"
                    >
                        <DoorOpen />
                        Class
                    </Link>
                </li>
                <li className="py-5 pl-2">
                    <Link
                        to={`lesson`}
                        className="text-gray-300 hover:text-white flex gap-5 items-center"
                    >
                        <BookCheck />
                        Lesson
                    </Link>
                </li>
                <li className="py-5 pl-2">
                    <Link
                        to={`account`}
                        className="text-gray-300 hover:text-white flex gap-5 items-center"
                    >
                        <Contact />
                        Account
                    </Link>
                </li>
                <li className="py-5 pl-2">
                    <Link
                        to={`student`}
                        className="text-gray-300 hover:text-white flex gap-5 items-center"
                    >
                        <Users />
                        Student
                    </Link>
                </li>
                <li className="py-5 pl-2">
                    <Link
                        to={`setting`}
                        className="text-gray-300 hover:text-white flex gap-5 items-center"
                    >
                        <Settings />
                        Setting
                    </Link>
                </li>
            </div>
        </div>
    );
}
