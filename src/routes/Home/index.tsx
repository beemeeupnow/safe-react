import { ReactElement } from 'react'
import styled from 'styled-components'
import { Breadcrumb, BreadcrumbElement, Menu } from '@gnosis.pm/safe-react-components'

import Page from 'src/components/layout/Page'
import Col from 'src/components/layout/Col'

import SafeApps from 'src/components/Dashboard/SafeApps/Grid'

const Card = styled.div`
  background: #fff;
  padding: 0 20px 30px;
  border-radius: 8px;
  flex: 1;
  max-width: 500px;
`

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

function Home(): ReactElement {
  return (
    <Page>
      <Menu>
        <Col start="sm" sm={6} xs={12}>
          <Breadcrumb>
            <BreadcrumbElement iconType="assets" text="Dashboard" color="primary" />
          </Breadcrumb>
        </Col>

        <Col end="sm" sm={6} xs={12} />
      </Menu>

      <StyledRow>
        <Card>
          <h2>Owned Safes</h2>
        </Card>

        <Card>
          <h2>Transactions to Sign</h2>
        </Card>

        <Card>
          <h2>Gas Fees</h2>
        </Card>
      </StyledRow>

      <SafeApps />
    </Page>
  )
}

export default Home
