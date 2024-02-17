import { ReactNode } from "react";
import { XCircle } from "lucide-react";

interface InfoModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function InfoModal({ isOpen, onClose, children }: InfoModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className={`modal-overlay fixed inset-0 z-10 w-full h-full bg-black bg-opacity-50 flex justify-center items-center`}
            onClick={onClose}
        >
            <div
                className="modal bg-white rounded-lg shadow-md relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="cta-close bg-slate-700 w-full h-9">
                    <button
                        className="modal-close-btn absolute top-1 right-1 hover:opacity-50"
                        onClick={onClose}
                    >
                        <XCircle size={28} color="white" />
                    </button>
                </div>
                <div className="modal-header border-b-2 border-solid border-gray-700 px-5 pt-5">
                    {children}
                    <h1 className="tracking-[.25em] text-3xl">FRESHER DEVELOP OPERATION</h1>
                    <p className="modal-classname mt-2 font-medium">HCM22_FR_DevOps_01</p>
                </div>
                {/* Components point */}
                <div className="point mt-5 px-5">
                    <div className="point-top flex gap-5 items-center">
                        <h2 className="point__name font-semibold text-xl">FEE</h2>
                        <span className="point__pass bg-green-600 px-3 py-1 rounded-full text-white">
                            Passed
                        </span>
                    </div>

                    <div className="point-bottom flex gap-5 mt-5">
                        {/* QUIZ */}
                        <div className="point__block shadow-lg rounded-lg overflow-hidden">
                            <div className="point__block-heading bg-gray-700 text-white flex justify-center items-center py-2">
                                Quiz
                            </div>
                            <div className="point__block-components flex">
                                <div className="point__subject flex flex-col p-4 items-center justify-center font-semibold text-lg border-r border-solid border-gray-300 bg-slate-200">
                                    <div className="point__subject-name">HTML</div>
                                    <div className="point__subject-number">9</div>
                                </div>
                                <div className="point__subject flex flex-col p-4 items-center justify-center font-semibold text-lg border-r border-solid border-gray-300 bg-slate-200">
                                    <div className="point__subject-name">CSS</div>
                                    <div className="point__subject-number">9</div>
                                </div>
                                <div className="point__subject flex flex-col p-4 items-center justify-center font-semibold text-lg border-r border-solid border-gray-300 bg-slate-200">
                                    <div className="point__subject-name">Quiz 3</div>
                                    <div className="point__subject-number">9</div>
                                </div>
                                <div className="point__subject flex flex-col p-4 items-center justify-center font-semibold text-lg border-r border-solid border-gray-300 bg-slate-200">
                                    <div className="point__subject-name">Quiz 4</div>
                                    <div className="point__subject-number">9</div>
                                </div>
                                <div className="point__subject flex flex-col p-4 items-center justify-center font-semibold text-lg border-r border-solid border-gray-300 bg-slate-200">
                                    <div className="point__subject-name">Quiz 5</div>
                                    <div className="point__subject-number">9</div>
                                </div>
                                <div className="point__subject flex flex-col p-4 items-center justify-center font-semibold text-lg border-r border-solid border-gray-300 bg-slate-200">
                                    <div className="point__subject-name">Quiz 6</div>
                                    <div className="point__subject-number">9</div>
                                </div>
                                <div className="point__subject flex flex-col p-4 items-center justify-center font-semibold text-lg border-r border-solid border-gray-300 bg-stone-300">
                                    <div className="point__subject-name">Ave.</div>
                                    <div className="point__subject-number">9</div>
                                </div>
                            </div>
                        </div>

                        {/* ASM */}
                        <div className="point__block shadow-lg rounded-lg overflow-hidden">
                            <div className="point__block-heading point__block-heading bg-gray-700 text-white flex justify-center items-center py-2">
                                Assignment
                            </div>
                            <div className="point__block-components flex">
                                <div className="point__subject flex flex-col p-4 items-center justify-center font-semibold text-lg border-r border-solid border-gray-300 bg-slate-200">
                                    <div className="point__subject-name">Practice 1</div>
                                    <div className="point__subject-number">9</div>
                                </div>
                                <div className="point__subject flex flex-col p-4 items-center justify-center font-semibold text-lg border-r border-solid border-gray-300 bg-slate-200">
                                    <div className="point__subject-name">Practice 2</div>
                                    <div className="point__subject-number">9</div>
                                </div>
                                <div className="point__subject flex flex-col p-4 items-center justify-center font-semibold text-lg border-r border-solid border-gray-300 bg-slate-200">
                                    <div className="point__subject-name">Practice 3</div>
                                    <div className="point__subject-number">9</div>
                                </div>
                                <div className="point__subject flex flex-col p-4 items-center justify-center font-semibold text-lg border-r border-solid border-gray-300 bg-stone-300">
                                    <div className="point__subject-name">Ave.</div>
                                    <div className="point__subject-number">9</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* MOCK point*/}
                <div className="point mt-14 mb-5 px-5">
                    <div className="point-top flex gap-5 items-center">
                        <h2 className="point__name font-semibold text-xl">MOCK</h2>
                        <span className="point__pass bg-orange-600 px-3 py-1 rounded-full text-white">
                            Failed
                        </span>
                    </div>

                    <div className="point-bottom flex gap-5 mt-5">
                        {/* MOCK */}
                        <div className="point__block shadow-lg rounded-lg overflow-hidden">
                            <div className="point__block-heading bg-orange-600 text-white flex justify-center items-center py-2">
                                MOCK
                            </div>
                            <div className="point__block-components flex">
                                <div className="point__subject flex flex-col p-4 items-center justify-center font-semibold text-lg border-r border-solid border-gray-300 bg-slate-200">
                                    <div className="point__subject-name px-5">MOCK</div>
                                    <div className="point__subject-number">9</div>
                                </div>
                                <div className="point__subject flex flex-col p-4 items-center justify-center font-semibold text-lg border-r border-solid border-gray-300 bg-slate-200">
                                    <div className="point__subject-name px-5">Final</div>
                                    <div className="point__subject-number">9</div>
                                </div>
                                <div className="point__subject flex flex-col p-4 items-center justify-center font-semibold text-lg border-r border-solid border-gray-300 bg-slate-200">
                                    <div className="point__subject-name px-5">GPA</div>
                                    <div className="point__subject-number">9</div>
                                </div>
                                <div className="point__subject flex flex-col p-4 items-center justify-center font-semibold text-lg border-r border-solid border-gray-300 bg-slate-200">
                                    <div className="point__subject-name px-5">Level</div>
                                    <div className="point__subject-number">9</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
