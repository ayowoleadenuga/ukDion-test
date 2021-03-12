import React from 'react'

export default function CourseCard({ course }) {
    return (
        <div className="CourseCard">
            <img src={course.img} alt={course.title} />
            <div>
                <h4>{course.title}</h4>
                <p>{course.author}</p>
            </div>
        </div>
    )
}
