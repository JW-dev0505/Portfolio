import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function LayoutOfLeftBanner() {
    const [text] = useTypewriter({
        words: ["Front End Developer.", "Full Stack Developer.", "Blockchain Developer", "Mobile APP Developer", "Blockchain Developer", "AI Developer"],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 20,
        delaySpeed: 2000,
    });
    return (
        <div className="flex flex-col gap-5">
            {/* <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4> */}
            <h1 className="text-3xl font-bold text-white">
                Hello, I am <span className="text-designColor capitalize block text-6xl">James Wong</span>
            </h1>
            <h2 className="text-3xl font-bold text-white">
                I am a <span className='text-designColor'>{text}</span>
                <Cursor
                    cursorBlinking="false"
                    cursorStyle="|"
                    cursorColor="#ff014f"
                />
            </h2>
            <p className="text-base font-bodyFont leading-6 tracking-wide">
            Seasoned software developer with wide knowledge in all stage of software development. Self motivated, passionated developer who always cooperate with other team members well. I thrive on creating innovative solutions that enhance user experiences and drive digital transformation. 
            </p>
        </div>
    )
};

export default LayoutOfLeftBanner