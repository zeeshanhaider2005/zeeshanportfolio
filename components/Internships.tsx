"use client";

import { internships } from "@/data";
import Image from "next/image";
import { Download } from "lucide-react";

const Internships = () => {

    const handleDownload = (file: string, company: string) => {
        const link = document.createElement("a");
        link.href = file;
        link.download = `${company}_Internship`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="py-20" id="internships">
            <h2 className="heading">
                My <span className="text-purple">Internships</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center p-4 gap-16 mt-7">
                {internships.map((intern) => (
                    <div
                        key={intern.id}
                        onClick={() => handleDownload(intern.file, intern.company)}
                        className="group cursor-pointer flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-purple/50 hover:bg-white/10 transition-all duration-300"
                    >
                        {/* Company Logo */}
                        <div className="relative w-32 h-32">
                            <img
                                src={intern.image}
                                alt={intern.company}
                                className="w-32 h-32 object-contain"
                            />
                        </div>

                        {/* Company Name */}
                        <h3 className="text-white font-semibold text-lg text-center">
                            {intern.company}
                        </h3>

                        {/* Download hint */}
                        <span className="flex items-center gap-1 text-sm text-white/40 group-hover:text-purple transition-colors">
                            <Download className="w-4 h-4" />
                            Click to download certificate
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Internships;