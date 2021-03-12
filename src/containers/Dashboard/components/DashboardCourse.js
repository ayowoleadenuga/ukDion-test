import React from 'react';
import icons from '../../../shared/img/icon-collections.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DashboardCourse({ course }) {
    return (
        <div className="dashboardCourse">
            <div className="image">
                <img src={course?.img} alt={course?.title} />
            </div>
            <div className="title">
                <h3>{course?.title}</h3>
				<p>by {course?.author}</p> 
            </div>
            {
                course?.time && (
                    <div className="time">
                        <svg>
                            <use xlinkHref={`${icons}#time`} />
                        </svg>
                        <p>{course?.time}</p>
                    </div>
                )
            }
            <div className="rate">
                <CircularProgressbar
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',

                        // Text size
                        textSize: '33px',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: course.pathColor || `rgba(0, 0, 0, ${course?.rate / 100})`,
                        textColor: '#000',
                        trailColor: 'transparent',
                        backgroundColor: '#F64C71',
                    })}
                    value={course?.rate}
                    text={`${course?.rate}%`}
                />
            </div>
            <button className="buttton">{course?.button}</button>
        </div>
    )
}
