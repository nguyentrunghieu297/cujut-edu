import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen bg-[#EBDFD7] font-poppins">
            <header className="header fixed top-0 w-full bg-[#EBDFD7]">
                <Header />
            </header>
            <div className="content flex grow mt-20">
                <aside className="sidebar ml-3 fixed left-1 bottom-16 top-20">
                    <Navbar />
                </aside>
                <main className="main-content ml-60 mb-16 flex flex-col h-auto overflow-auto grow bg-[#F2EAE5] mx-4 rounded-2xl hidescroll">
                    <div className="m-6 grow">{children}</div>
                </main>
            </div>
            <footer className="footer fixed bottom-0 bg-[#EBDFD7] w-full mt-auto py-4 px-10">
                <Footer />
            </footer>
        </div>
    );
}
