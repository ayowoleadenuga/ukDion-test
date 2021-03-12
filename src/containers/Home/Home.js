import React from 'react';
import { Col, Row } from 'reactstrap';
import Homebg from '../../shared/img/homebg.svg';
import Course1 from '../../shared/img/course1.png';
import Course2 from '../../shared/img/course2.png';
import Course3 from '../../shared/img/course3.png';
import Course4 from '../../shared/img/course4.png';
import Course5 from '../../shared/img/course5.png';
import Course6 from '../../shared/img/course6.png';
import Course7 from '../../shared/img/course7.png';
import Course8 from '../../shared/img/course8.png';
import CourseCard from './components/CourseCard';
import RecomImage from '../../shared/img/recom.png'
import RecommendedCourse from './components/RecommendedCourse';
import FooterImage from '../../shared/img/homefooter.png'

export default function Home() {
    const courses = [
		{
			img: Course1,
			title: 'Advanced Neurobiology',
			author: 'ProfessorYan Zhang',
		},
		{
			img: Course2,
			title: 'Advanced Neurobiology',
			author: 'ProfessorYan Zhang',
		},
		{
			img: Course3,
			title: 'Advanced Neurobiology',
			author: 'ProfessorYan Zhang',
		},
		{
			img: Course4,
			title: 'Advanced Neurobiology',
			author: 'ProfessorYan Zhang',
		},
	];

    const otherCourses = [
		{
			img: Course5,
			title: 'Advanced Neurobiology',
			author: 'ProfessorYan Zhang',
		},
		{
			img: Course6,
			title: 'Advanced Neurobiology',
			author: 'ProfessorYan Zhang',
		},
		{
			img: Course7,
			title: 'Advanced Neurobiology',
			author: 'ProfessorYan Zhang',
		},
		{
			img: Course8,
			title: 'Advanced Neurobiology',
			author: 'ProfessorYan Zhang',
		},
	];
    return (
        <Col lg={11} className="home">
            <Row>
                <Col lg={6} md={6} className="firstHalf">
                    <h2>
						More than
						<br /> <span>100 courses</span>
						<br /> to choose from.
					</h2>
					<div className="belowHeader">
                        <div className="search">
                            <div className="InputWrapper">
                                <input
                                    type="text"
                                />  
                            </div>
                            <button>Search</button>
                            
                        </div>
                        <p>
                            Build skills with courses, certificates, and degrees
                            <br />
                            online from world-class universities and companies.
                        </p>
                    </div>
                </Col>
                <Col lg={6} md={6} className="secondHalf">
                    <img src={Homebg} alt='homebg' />
                </Col>
            </Row>
            <Row>
                <Col lg={12} className="gallery">
                    <h4 className="topic">
                        HUMAN RESOURSES
                    </h4>
                    <div className="hr">
                        {
                            courses.map(course => (
                                <CourseCard key={course.title} course={course} />
                            ))
                        }
                    </div> 
                    
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col lg={12} className="gallery">
                    <h4 className="topic">
                        HUMAN RESOURSES
                    </h4>
                    <div className="hr">
                        {
                            otherCourses.map(course => (
                                <CourseCard key={course.title} course={course} />
                            ))
                        }
                    </div> 
                    
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col lg={12} className="gallery">
                    <h4 className="topic">
                        Recommended
                    </h4>
                    <div className="hr">
                        <RecommendedCourse image={RecomImage} />
                        <RecommendedCourse image={RecomImage} />
                        <RecommendedCourse image={RecomImage} />
                    </div>
                </Col>
            </Row>
            <br />
            <br />
            <br />
            <Row>
                <Col lg={12} md={12} className="footer">
                    <div>
                      <img src={FooterImage} alt='FooterImage' />  
                    </div>
                </Col>
            </Row>
        </Col>
    )
}
