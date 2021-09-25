import React, { useState, useEffect } from "react"
import { Card, Container, Row, Col, Table } from "react-bootstrap"
import { useHistory, withRouter } from "react-router-dom"
import axiosInstance from "api/axios"
import { GETALLPAYOUTS } from "api/Endpoints"

function Payouts() {
  const history = useHistory()
  const [payouts, setPayouts] = useState([])

  useEffect(() => {
    const url = GETALLPAYOUTS
    axiosInstance
      .get(url)
      .then((res) => setPayouts(res.data.data.payouts))
      .catch((error) => console.log(error))
  }, [])
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">All Payouts</Card.Title>
                <p className="card-category">All Payouts table</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">No.</th>
                      <th className="border-0">Song Title</th>
                      <th className="border-0">Paid</th>
                      <th className="border-0">status</th>
                      <th className="border-0">Gross Amount</th>
                      <th className="border-0">Release Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payouts.map((item, index) => (
                      <tr
                        onClick={() =>
                          history.push("/admin/edit-payout", {
                            id: item._id,
                          })
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <td>{index + 1}</td>
                        <td>{item.songTitle}</td>
                        <td>{item.paid ? "yes" : "No"}</td>
                        <td>{item.status}</td>
                        <td>{item.totalAmount}</td>
                        <td>{item.releaseDate.slice(0, 10)}</td>
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

export default withRouter(Payouts)
