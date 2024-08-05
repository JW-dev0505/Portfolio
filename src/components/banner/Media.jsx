import React from 'react'
import { FaGithub, FaPhone, FaLinkedinIn, FaEye, FaDownload } from "react-icons/fa";
import { SiGmail, } from "react-icons/si";
import Resume from '../../assets/photos/James-Wong.pdf'

function Media() {
    return (
        <div className="flex flex-col gap-6 justify-between">
            <div>
                <h2 className="text-designColor uppercase font-titleFont mb-4">
                    Find me in
                </h2>
                <div className="flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/james-wong-a7baab320/"
                        target='_blank'
                    >
                        <span className="bannerIcon">
                            <FaLinkedinIn
                            />
                        </span>
                    </a>
                    <a
                        href="https://github.com/JW-dev0505"
                        target='_blank'
                    >
                        <span className="bannerIcon">
                            <FaGithub />
                        </span>
                    </a>
                    <a
                        href="https://wa.me/8217453942"
                    >
                        <span className="bannerIcon">
                            <FaPhone />
                        </span>
                    </a>
                    <a
                        href="mailto:shcherbakarina6@gmail.com"
                        target='_blank'
                    >
                        <span className="bannerIcon">
                            <SiGmail />
                        </span>
                    </a>
                </div>
            </div>
            <div className='flex gap-4'>
                <a
                    href={Resume}
                    target='_blank'
                >
                    <span className='bannerIcon w-56'>
                        <p className='mr-2'>Resume</p>
                        <FaEye />
                    </span>
                </a>
                <a
                    href={Resume} download="James_Wong_Resume"
                    target='_blank'
                >
                    <span className='bannerIcon'>
                        <FaDownload />
                    </span>
                </a>
            </div>
        </div >
    )
}

export default Media