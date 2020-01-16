import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSurpriseGradesAction } from 'Utilities/redux/gradesReducer'
import { Table, Loader } from 'semantic-ui-react'

export default () => {
  const dispatch = useDispatch()
  const grades = useSelector((store) => store.grades)

  useEffect(() => {
    dispatch(getSurpriseGradesAction())
  }, [])

  if (grades.error) return <div>Error fetching grade estimates</div>

  if (grades.pending) return <Loader content="Loading" active />

  if (!grades.data) return null

  return (
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Course</Table.HeaderCell>
          <Table.HeaderCell>Grade Estimate</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Object.keys(grades.data).map((key) => {
          return (
            <Table.Row key={key}>
              <Table.Cell>{key}</Table.Cell>
              <Table.Cell>{grades.data[key]}</Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}
