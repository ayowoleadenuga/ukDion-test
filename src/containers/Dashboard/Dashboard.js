import React from 'react'
import { Row, Col } from 'reactstrap';
import Cheers from '../../shared/img/cheers.png';
import icons from '../../shared/img/icon-collections.svg';
import DashboardCourse from './components/DashboardCourse';
import ProjectImage from '../../shared/img/project.png';
import frontarrow from '../../shared/img/frontarrow.svg';
import backarrow from '../../shared/img/backarrow.svg';
import CourseCountCard from './components/CourseCountCard';
import figma from '../../shared/img/figma.svg';
import analog from '../../shared/img/analog.svg';
import instagram from '../../shared/img/instagram.svg';
import drawing from '../../shared/img/drawing.svg';
import graph from '../../shared/img/graph.png';

export default function Dashboard() {
    const courses = [
        {
            img: figma,
            title: 'Learn Figma',
            author: 'Christopher Morgan',
            time: '6h 30min',
            rate: 0,
            button: 'Start Course',
        },
    
        {
            img: analog,
            title: 'Analog photography',
            author: 'Gordon Norman',
            time: '3h 15min',
            rate: 67,
            button: 'Resume',
        },
    
        {
            img: instagram,
            title: 'Master Instagram',
            author: 'Sophie Gill',
            time: '6h 30min',
            rate: 99,
            button: 'Resume',
        },
    
        {
            img: drawing,
            title: 'Basics of drawing',
            author: 'Jean Tate',
            time: '11h 30min',
            rate: 99,
            button: 'Resume',
        },
    ];
    return (
        <Col lg={12} className="dashboard">
            <Row>
                <Col lg={7} md={7}>
                    <Row>
                        <div className="firstHalf">
                            <div>
                                <div>
                                    <h2>Hello Nimi</h2>
                                    <p>It’s good to see you again.</p>
                                </div>

                                <svg>
                                    <use xlinkHref={`${icons}#user`} />
                                </svg>
                                <img src={Cheers} alt="cheers" />
                            </div>
                        </div>   
                    </Row>
                    <Row>
                        <Col lg={8} md={8} className="lowerHalf">
                            <DashboardCourse
                                course={{
                                    img: ProjectImage,
                                    title: 'Project management ',
                                    author: 'Gloria Martins',
                                    rate: 83,
                                    button: 'Continue'
                                }}
                            />
                        </Col>
                        <Col lg={4} md={4} className="secondLowerHalf">
                            <div className="flex">
                                <img src={backarrow} alt='backfarrow' />
                                <img src={frontarrow} alt='frontarrow' />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5} md={5}>
                    <CourseCountCard />
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col lg={7} md={7} className="no_padding_left">
                    <div className="courses">
                        <p className="headText ml-15">My courses</p>   
                        <ul className="courseNav">
                            <li className='active'>All courses</li>
                            <li>Newest courses</li>
                        </ul>   
                    </div>
                    {
                        courses.map(course => (
                            <DashboardCourse course={course} key={course.title} />
                        ))
                    }
                </Col>
                <Col lg={5} md={5}>
                    <div className="imageBlock">
                        <p className="headText">Your Statistics</p>  
                        <div className="flex">
                            <h4>Learning Hours</h4>
						    <h4>Weekly</h4> 
                        </div>
                        <br />
                        <img src={graph} alt="bottom" />
                    </div> 
                </Col>
            </Row>
        </Col>
    )
}
