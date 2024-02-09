import { Facebook, Github, Mail, Phone } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="flex justify-between items-center">
            <div className="social flex gap-7">
                <div className="social-icon w-7 h-7 hover:bg-secondary hover:text-primary rounded-md flex justify-center items-center transition-all duration-250">
                    <Facebook size={18} strokeWidth={1.8} />
                </div>
                <div className="social-icon w-7 h-7 hover:bg-secondary hover:text-primary rounded-md flex justify-center items-center transition-all duration-250">
                    <Github size={18} strokeWidth={1.8} />
                </div>
                <div className="social-icon w-7 h-7 hover:bg-secondary hover:text-primary rounded-md flex justify-center items-center transition-all duration-250">
                    <Mail size={18} strokeWidth={1.8} />
                </div>
                <div className="social-icon w-7 h-7 hover:bg-secondary hover:text-primary rounded-md flex justify-center items-center transition-all duration-250">
                    <Phone size={18} strokeWidth={1.8} />
                </div>
            </div>
            <div className="copyright text-sm">Copyright © {currentYear} CJ Education.</div>
        </div>
    );
}
