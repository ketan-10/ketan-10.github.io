import React from "react";

const ScrollDown = () => {
    return (
        <div className="scroll-down-container">
            <div className="scroll-down">
                <div className="down-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="1">
                        <path d="M15 13.5l-3 3-3-3" />
                        <path d="M12 15V7.5" />
                        <path stroke-linecap="round" d="M12 16.5V15v1.5z" />
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </div>
                <div className="scroll-text"></div>
            </div>
        </div>
    );
};
export default ScrollDown;
