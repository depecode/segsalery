"use client";

import { ReactNode } from "react";

interface QuoteWithCornersProps {
    children?: ReactNode;
    html?: string;
}

export default function QuoteWithCorners({ children, html }: QuoteWithCornersProps) {
    return (
        <div className="relative w-full max-w-12xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="relative p-4 sm:p-6 md:p-8 border-3 border-green-600 overflow-hidden rounded-lg bg-white">
                <div className="relative z-10 text-center">
                    <div
                        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl text-gray-900 leading-relaxed"
                        dangerouslySetInnerHTML={html ? { __html: html } : undefined}
                    >
                        {!html && (children || `"No quote available"`)}
                    </div>
                </div>
            </div>

            <div className="absolute inset-6 sm:inset-6 md:inset-8 pointer-events-none">
                <div className="absolute -top-10 -left-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-3 border-green-600 bg-white"></div>
                <div className="absolute -top-10 -right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-3 border-green-600 bg-white"></div>
                <div className="absolute -bottom-10 -left-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-3 border-green-600 bg-white"></div>
                <div className="absolute -bottom-10 -right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-3 border-green-600 bg-white"></div>
            </div>
        </div>
    );
}
