import React from 'react'
import './Education.css'

const Education = () => {

    return (

        <>
            <div className="" id="education">
                <div className='container'>
                    <div className='row'>
                        <div className="col">
                            <div className="title">
                                <h2>Experience</h2>
                            </div>
                            <div className="contents">
                                <div className="box">
                                    <h4>2024</h4>
                                    <h3>    HiSkyTech Company</h3>
                                    <h4>Mern Stack Developer Internship  </h4>  <span>  Punjab, pakistan </span>
                                    <p> • Completed an internship as a Full Stack Developer at SkyTech Company.
                                        <br />
                                        • Contributed to three key projects focused on real-world payment systems and authentication.
                                        <br />
                                        • Developed secure and efficient payment processing solutions.
                                        <br />
                                        •Implemented robust authentication mechanisms to ensure system security.
                                        <br />
                                        • Gained hands-on experience with both front-end and back-end technologies.
                                        <br />
                                        • Improved skills in designing user interfaces and building scalable server-side solutions.</p>
                                </div>
                                <div className="box">
                                    <h4>2018-2019</h4>
                                    <h3>Freelancer</h3>
                                    <h3>Graphic Desginer</h3>
                                    <p>As a Graphic Designer, I bring one year of experience combiningcreativity with technical proficiency.
                                        Skilled in Adobe Creative Suite, I specialize in designing visually appealing graphics for digital platforms.</p>
                                </div>

                            </div>
                        </div>

                        <div className="col">
                            <div className="title">
                                <h2>Education</h2>
                            </div>
                            <div className="contents">
                                <div className="box">
                                    <h4 className='text-yellow-500'>2018  - 2019</h4>
                                    <h3>Secondary School Degree</h3>
                                    <p>Pakistan School Salmiya, Safat Kuwait
                                    </p>
                                </div>
                                <div className="box">
                                    <h4>2019 - 2020</h4>
                                    <h3>High School Degree</h3>
                                    <p>Pakistn School Salmiya Kuwait </p>
                                </div>
                                <div className="box">
                                    <h4>2020   -     2024</h4>
                                    <h3>Bachelor Of Software Engineering</h3>
                                    <p>Virtual University Of pakistan </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default Education;