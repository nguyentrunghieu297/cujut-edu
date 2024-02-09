import { ClipboardList, BookCheck, Settings, Users, DoorOpen, Contact } from "lucide-react";

export default function Navbar() {
    return (
        <div className="flex flex-col min-w-52 h-full bg-sidebarBg text-white  rounded-2xl">
            {/* Sidebar content */}
            <div className="flex flex-col p-4">
                <li className="py-5 pl-2">
                    <a href="#" className="text-gray-300 hover:text-white flex gap-5 items-center">
                        <ClipboardList />
                        Dashboard
                    </a>
                </li>
                <li className="py-5 pl-2">
                    <a href="#" className="text-gray-300 hover:text-white flex gap-5 items-center">
                        <DoorOpen />
                        Class
                    </a>
                </li>
                <li className="py-5 pl-2">
                    <a href="#" className="text-gray-300 hover:text-white flex gap-5 items-center">
                        <BookCheck />
                        Lesson
                    </a>
                </li>
                <li className="py-5 pl-2">
                    <a href="#" className="text-gray-300 hover:text-white flex gap-5 items-center">
                        <Contact />
                        Account
                    </a>
                </li>
                <li className="py-5 pl-2">
                    <a href="#" className="text-gray-300 hover:text-white flex gap-5 items-center">
                        <Users />
                        Student
                    </a>
                </li>
                <li className="py-5 pl-2">
                    <a href="#" className="text-gray-300 hover:text-white flex gap-5 items-center">
                        <Settings />
                        Setting
                    </a>
                </li>
            </div>
        </div>
    );
}
