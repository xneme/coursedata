import React, { useState } from 'react'
import SurpriseGrades from 'Components/SurpriseGrades'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'

export default () => {
  const [confirm, setConfirm] = useState(false)

  const ConfirmView = () => {
    return (
      <Segment placeholder>
        <Header icon>
          <Icon name="search" />
          Your grades will be fetched from oodi and grade estimates generated
          with Surprise library.
        </Header>
        <Segment.Inline>
          <Button primary onClick={() => setConfirm(true)}>
            Fetch Grades
          </Button>
        </Segment.Inline>
      </Segment>
    )
  }

  return confirm ? <SurpriseGrades /> : <ConfirmView />
}
