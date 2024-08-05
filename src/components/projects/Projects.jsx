import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import project1 from '../../assets/photos/project/1.jpg'
import project2 from '../../assets/photos/project/2.png'
import project3 from '../../assets/photos/project/3.jpg'
import project4 from '../../assets/photos/project/4.png'
import project5 from '../../assets/photos/project/5.png'
import project6 from '../../assets/photos/project/6.png'
import project7 from '../../assets/photos/project/8.png'
import project8 from '../../assets/photos/project/10.jpg'
import project9 from '../../assets/photos/project/11.jpg'
import project10 from '../../assets/photos/project/12.png'
import project11 from '../../assets/photos/project/13.png'
import project12 from '../../assets/photos/project/15.png'
import project13 from '../../assets/photos/project/16.png'
import project14 from '../../assets/photos/project/19.png'
import project15 from '../../assets/photos/project/20.png'
import "./Project.css"

function Projects() {
    return (
        <section
            id='projects' className='w-full py-10 border-b-[1px] border-b-black'>
            <div className="flex justify-center items-center text-center">
                <Title
                    des={
                        <span>
                            My <span className='text-designColor'>Projects</span>
                        </span>
                    }
                />
            </div>
            
            <div class="mh-project-gallery col-sm-12 wow fadeInUp" id="project-gallery" data-wow-duration="0.8s" data-wow-delay="0.5s">
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
                    
                    <figure>
                        <img className="object-contain group-hover:scale-110 duration-300 cursor-pointer" src={project7} alt="project" />
                        <figcaption className="fig-caption">
                            <i className="fa fa-search"></i>
                            <h5 className="title">React + ChatGPT + Google Search</h5>
                            <span className="sub-title">chatbot-ui-xi.vercel.app</span>
                        </figcaption>
                    </figure>
                
                    <figure>
                        <img className="object-contain group-hover:scale-110 duration-300 cursor-pointer" src={project14} alt="project" />
                        <figcaption className="fig-caption">
                            <i className="fa fa-search"></i>
                            <h5 className="title">Python + Deep Learning + Android</h5>
                            <span className="sub-title">com.satyukt.myfarmapp</span>
                        </figcaption>
                    </figure>
                
                    <figure>
                        <img className="object-contain group-hover:scale-110 duration-300 cursor-pointer" src={project15} alt="project" />
                        <figcaption className="fig-caption">
                            <i className="fa fa-search"></i>
                            <h5 className="title">Next + ChatGPT + Google Bard</h5>
                            <span className="sub-title">chat.dogai.com</span>
                        </figcaption>
                    </figure>
                
                    <figure>
                        <img className="object-contain group-hover:scale-110 duration-300 cursor-pointer" src={project1} alt="project" />
                        <figcaption className="fig-caption">
                            <i className="fa fa-search"></i>
                            <h5 className="title">React + Redux</h5>
                            <span className="sub-title">www.vitasave.ca</span>
                        </figcaption>
                    </figure>
                
                    <figure>
                        <img className="object-contain group-hover:scale-110 duration-300 cursor-pointer" src={project2} alt="project" />
                        <figcaption className="fig-caption">
                            <i className="fa fa-search"></i>
                            <h5 className="title">HTML + CSS + Laravel</h5>
                            <span className="sub-title">sporthitters.com</span>
                        </figcaption>
                    </figure>
                
                    <figure>
                        <img className="object-contain group-hover:scale-110 duration-300 cursor-pointer" src={project3} alt="project" />
                        <figcaption className="fig-caption">
                            <i className="fa fa-search"></i>
                            <h5 className="title">Laravel + Firebase</h5>
                            <span className="sub-title">www.pole-emploi.fr</span>
                        </figcaption>
                    </figure>
                
                    <figure>
                        <img className="object-contain group-hover:scale-110 duration-300 cursor-pointer" src={project6} alt="project" />
                        <figcaption className="fig-caption">
                            <i className="fa fa-search"></i>
                            <h5 className="title">VueKS + Laravel</h5>
                            <span className="sub-title">www.telluride.com</span>
                        </figcaption>
                    </figure>
                
                    <figure>
                        <img className="object-contain group-hover:scale-110 duration-300 cursor-pointer" src={project10} alt="project" />
                        <figcaption className="fig-caption">
                            <i className="fa fa-search"></i>
                            <h5 className="title">Crystl Finance</h5>
                            <span className="sub-title">https://crystl.finance/</span>
                        </figcaption>
                    </figure>
                
                    <figure>
                        <img className="object-contain group-hover:scale-110 duration-300 cursor-pointer" src={project11} alt="project" />
                        <figcaption className="fig-caption">
                            <i className="fa fa-search"></i>
                            <h5 className="title">METALANDS</h5>
                            <span className="sub-title">https://www.metalands.gg/</span>
                        </figcaption>
                    </figure>
                
                    <figure>
                        <img className="object-contain group-hover:scale-110 duration-300 cursor-pointer" src={project12} alt="project" />
                        <figcaption className="fig-caption">
                            <i className="fa fa-search"></i>
                            <h5 className="title">AGS NFT</h5>
                            <span className="sub-title">https://altergrimace.com/</span>
                        </figcaption>
                    </figure>
                
                    
                    <figure>
                        <img className="object-contain group-hover:scale-110 duration-300 cursor-pointer" src={project4} alt="project" />
                        <figcaption className="fig-caption">
                            <i className="fa fa-search"></i>
                            <h5 className="title">MultiChain Dex Aggregator</h5>
                            <span className="sub-title">https://app.rango.exchange/</span>
                        </figcaption>
                    </figure>
                
                    <figure>
                        <img className="object-contain group-hover:scale-110 duration-300 cursor-pointer" src={project9} alt="project" />
                        <figcaption className="fig-caption">
                            <i className="fa fa-search"></i>
                            <h5 className="title">Potluck Labs</h5>
                            <span className="sub-title">https://www.potluck-labs.com/</span>
                        </figcaption>
                    </figure>
                
                    <figure>
                        <img className="object-contain group-hover:scale-110 duration-300 cursor-pointer" src={project8} alt="project" />
                        <figcaption className="fig-caption">
                            <i className="fa fa-search"></i>
                            <h5 className="title">Consulting Platform</h5>
                            <span className="sub-title">https://cloud-coach.jp/</span>
                        </figcaption>
                    </figure>
                
                    <figure>
                        <img className="object-contain group-hover:scale-110 duration-300 cursor-pointer" src={project5} alt="project" />
                        <figcaption className="fig-caption">
                            <i className="fa fa-search"></i>
                            <h5 className="title">Online Hotel Platform</h5>
                            <span className="sub-title">https://www.24northhotel.com/</span>
                        </figcaption>
                    </figure>
                
                    <figure>
                        <img className="object-contain group-hover:scale-110 duration-300 cursor-pointer" src={project13} alt="project" />
                        <figcaption className="fig-caption">
                            <i className="fa fa-search"></i>
                            <h5 className="title">Advertising Platform</h5>
                            <span className="sub-title">https://chefmade.dk/</span>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Projects