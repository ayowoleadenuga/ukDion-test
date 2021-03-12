import React from 'react';
import figma from '../../shared/img/figma.svg';
import { Col } from 'reactstrap';
import analog from '../../shared/img/analog.svg';
import instagram from '../../shared/img/instagram.svg';
import drawing from '../../shared/img/drawing.svg';
import DashboardCourse from '../Dashboard/components/DashboardCourse';

export default function MyCourses() {
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
        <Col lg={8} className="dashboard">
            <div className="courses"> 
                <ul className="courseNav">
                    <li className='active'>All courses</li>
                    <li>Completed</li>
                </ul>   
            </div>
            {
                courses.map(course => (
                    <DashboardCourse course={course} key={course.title} />
                ))
            }
        </Col>
    )
}
