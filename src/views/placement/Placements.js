import React, { useState, useEffect } from "react"
import { Card, Container, Row, Col, Table } from "react-bootstrap"
import { useHistory, withRouter } from "react-router-dom"
import axiosInstance from "api/axios"
import { GETALLPLACEMENT } from "api/Endpoints"
function Placements() {
  const history = useHistory()
  const [placements, setPlacements] = useState([])

  useEffect(() => {
    const url = GETALLPLACEMENT
    axiosInstance
      .get(url)
      .then((res) => setPlacements(res.data.data.placements))
      .catch((error) => console.log("error ", error))
  }, [])
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">All Placements</Card.Title>
                <p className="card-category">All Placements table</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">No.</th>
                      <th className="border-0">Project Name</th>
                      <th className="border-0">Song Title</th>
                      <th className="border-0">Gross Amount</th>
                      <th className="border-0">Payout Due</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placements.map((item, index) => (
                      <tr
                        onClick={() =>
                          history.push("/admin/editPlacements", {
                            id: item._id,
                          })
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <td>{index + 1}</td>
                        <td>{item.projectName}</td>
                        <td>{item.songTitle}</td>
                        <td>{item.totalGrossAmount}</td>
                        <td>{item.payoutAmountDue}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default withRouter(Placements)
