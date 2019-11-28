import React, { useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Select } from 'semantic-ui-react'

const mockData = [
  {
    name: 'Tietorakenteet ja algoritmit',
    correlations: [
      {
        course: 'Tietorakenteet ja algoritmit',
        correlation: 1.0
      },
      {
        course: 'Ohjelmoinnin perusteet',
        correlation: 0.45
      },
      {
        course: 'Ohjelmoinnin jatkokurssi',
        correlation: 0.1
      }
    ]
  },
  {
    name: 'Tietokoneen toiminta',
    correlations: [
      {
        course: 'Programming in C',
        correlation: 0.6
      },
      {
        course: 'Ohjelmoinnin perusteet',
        correlation: 0.45
      },
      {
        course: 'Ohjelmoinnin jatkokurssi',
        correlation: 0.1
      }
    ]
  }
]

export default () => {
  const [courses, setCourses] = useState(mockData)
  const [course, setCourse] = useState(null)

  if (!courses) return null

  return (
    <>
      <Select
        options={courses.map((c, i) => ({ key: i, value: i, text: c.name }))}
        placeholder="Pick a course."
        onChange={(e, d) => setCourse(courses[d.value])}
      />
      {course ? (
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: {
              type: 'column'
            },
            title: { text: course.name },
            xAxis: {
              categories: course.correlations.map((corr) => corr.course)
            },
            yAxis: {
              title: {
                text: 'Correlation'
              }
            },
            series: [
              {
                name: 'Relevant courses',
                color: '#FFD700',
                data: course.correlations.map((corr) => corr.correlation)
              }
            ]
          }}
        />
      ) : null}
    </>
  )
}
