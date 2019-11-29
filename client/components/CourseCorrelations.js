import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Select } from 'semantic-ui-react'

import { getCorrelationsAction } from 'Utilities/redux/correlationsReducer'

export default () => {
  const dispatch = useDispatch()
  const correlations = useSelector((store) => store.correlations.data)
  const [course, setCourse] = useState(null)

  useEffect(() => {
    dispatch(getCorrelationsAction())
  }, [])

  if (!correlations) return null

  return (
    <>
      <Select
        options={correlations.map((c, i) => ({
          key: i,
          value: i,
          text: c.name
        }))}
        placeholder="Pick a course."
        onChange={(e, d) => setCourse(correlations[d.value])}
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
                color: '#0091EA',
                data: course.correlations.map((corr) => corr.correlation)
              }
            ]
          }}
        />
      ) : null}
    </>
  )
}
