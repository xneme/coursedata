import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSurpriseGradesAction } from 'Utilities/redux/gradesReducer'

export default () => {
  const dispatch = useDispatch()
  const grades = useSelector((store) => store.grades.data)

  useEffect(() => {
    dispatch(getSurpriseGradesAction())
  }, [])

  if (!grades) return null

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <table>
        <tr>
          <th>Course</th>
          <th>Grade</th>
        </tr>
        {Object.keys(grades).map((key) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{grades[key]}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
