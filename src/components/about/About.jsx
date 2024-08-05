import React from 'react'
import Title from '../layouts/Title';

function About() {
    return (
        <div id='about' className='py-10 lgl:py-14 border-b-[1px] border-black'>
            <div className="flex justify-center items-center text-center">
            <Title
                des={
                    <span>
                        Let Me <span className='text-designColor'>Introduce</span> Myself
                    </span>
                }
            />
            </div>
            {/* <h1 className='text-5xl text-center font-bold'>LET ME <span className='text-designColor'>INTRODUCE </span>MYSELF</h1> */}
            <div className='lgl:flex justify-center items-center text-base font-bodyFont leading-6 tracking-wide'>
                <div data-aos="zoom-in" className=' w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col'>
                    <img
                        className=' rounded-3xl h-[300px] lgl:h-[250px]'
                        src="https://cdn.dribbble.com/users/2726/screenshots/2362705/angulardribbble.gif"
                        alt="Image"
                    />
                </div>
                <div data-aos="zoom-in" className='w-full lgl:w-[65%] lgl:px-20 pt-10 lgl:pt-0'>
                    <p>
                    Working as a professional software developer for over the last 6 years I gained a lot of experience and have wide knowledge in software development including all stage of development cycle from frontend to deployment and various stacks like Javascript frameworks, other backend libraries, moblie, blockchain frameworks.
                    </p>
                    <br />
                    <p>
                    I'm a passionate team player who approaches problem-solving with creativity and persistence. 💪✨ I believe in the power of collaboration and always support my team members, fostering a positive and motivating environment. No challenge is too big—I'm dedicated to finding solutions and never backing down until we succeed together! 🤝🌟
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;