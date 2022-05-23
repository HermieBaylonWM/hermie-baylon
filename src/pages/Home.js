import React from 'react';
import './Home.css';

import Card from '../components/Card';
import DataIndustries from '../Data/DataIndustries';

import { MdWorkOutline } from "react-icons/md";
import { RiStackLine } from "react-icons/ri";
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { BsEmojiSmile } from "react-icons/bs";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DataSkills from '../Data/DataSkillAll';

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";

export default function Home() {

    const industriesServed = DataIndustries.map(skill => {
        return <Card
            key={skill.id}
            skill={skill} />
    })

    const skills = DataSkills.map(skill => {
        return <Card
            key={skill.id}
            skill={skill} />
    })

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <div className='home'>
                <div className='home--summary'>
                    <img className='home--summary-image' src='../images/hermieProfile2.jpg'></img>
                    <div className='home--summary-description'>
                        <h3 className='home--summary-description-header'>My name is Hermie Baylon.</h3>
                        <p className='home--summary-description-para'>I graduated from the University of Washington-Tacoma
                            with a bachelor's degree in computer science. I am currently a Software Engineer Consultant
                            at West Monroe, where I have worked with both front-end and back-end development. As a consultant,
                            I collaborate with clients to understand their business needs and develop software application
                            solutions.
                        </p>
                    </div>
                </div>
                <div className='home--facts'>
                    <div className='home--fun-facts'>
                        <div className='home--fun-fact'>
                            <MdWorkOutline className='icon'></MdWorkOutline>
                            <h1>1</h1>
                            <h4>Years of</h4>
                            <h4>Experience</h4>
                        </div>

                        <div className='home--fun-fact'>
                            <RiStackLine className='icon'></RiStackLine>
                            <h1>10+</h1>
                            <h4>Courses</h4>
                            <h4>Completed</h4>
                        </div>

                        <div className='home--fun-fact'>
                            <AiOutlineFundProjectionScreen className='icon'></AiOutlineFundProjectionScreen>
                            <h1>5+</h1>
                            <h4>Projects</h4>
                            <h4>Completed</h4>
                        </div>

                        <div className='home--fun-fact'>
                            <BsEmojiSmile className='icon'></BsEmojiSmile>
                            <h1>1</h1>
                            <h4>Satisfied</h4>
                            <h4>Clients</h4>
                        </div>
                    </div>
                </div>
                <div className='home--industries'>
                    <h1 className='home--industries-heading'>Industries Served</h1>
                    <section className='home--industries-served'>
                        {industriesServed}
                    </section>
                </div>
                <div className='home--skills'>
                    <div className='home--skills-container'>
                        <h1 className='home--skills-heading'>Skills</h1>
                        <Carousel responsive={responsive} className='home--skills-list'>
                            {skills}
                        </Carousel>
                    </div>
                </div>
                <div className='home--contacts'>
                    <h1 className='home--contacts-header'>
                        Contact me
                    </h1>
                    <div className='home--contacts-card'>
                        <h4 className='home--contacts-name'>Hermie Baylon</h4>
                        <h4>Software Engineer Consultant</h4>
                        <img className='home--contacts-logo' src='../images/BlueAndYellow.png'></img>
                    </div>
                    <div className='home--contacts-container'>
                        <a className='home--contacts-linkedin' href='https://www.linkedin.com/in/hermie-baylon/'>
                            <FaLinkedinIn></FaLinkedinIn>
                        </a>
                        <a className='home--contacts-email'>
                            <HiOutlineMail></HiOutlineMail>
                        </a>
                        <a className='home--contacts-phone'>
                            <AiOutlinePhone></AiOutlinePhone>
                        </a>
                        <a className='home--contacts-github' href='https://github.com/HermieBaylon'>
                            <FaGithub></FaGithub>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}