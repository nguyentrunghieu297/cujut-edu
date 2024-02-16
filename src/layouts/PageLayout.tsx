import React from "react";

export default function PageLayout({
    header,
    content,
}: {
    header: React.ReactNode;
    content: React.ReactNode;
}) {
    return (
        <div className="flex flex-col">
            <header className="h-16 w-auto">{header}</header>
            <main className="">{content}</main>
        </div>
    );
}
