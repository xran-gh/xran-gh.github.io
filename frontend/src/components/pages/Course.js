import React from 'react'
import CourseList from '../../assets/courses.json'

const Course = () =>
{
  const courses = CourseList;

  return (
    <div className='Course'>
      {
        courses.courses.map(course =>
        (
          <p key={course.path}>
            {course.title}
          </p>
        ))
      }
    </div>
  )
}

export default Course