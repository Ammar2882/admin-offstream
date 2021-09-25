import React, { useState, useEffect } from "react"
import { Card, Container, Row, Col, Table } from "react-bootstrap"
import { useHistory, withRouter } from "react-router-dom"
import axiosInstance from "api/axios"
import {
  GETARTISTS,
  GETALLPLACEMENT,
  GETALLPAYOUTS,
  GETALLPROJECTS,
} from "api/Endpoints"

function Dashboard() {
  const history = useHistory()
  const [users, setUsers] = useState([])
  const [placementsCount, setPlacementCount] = useState(0)
  const [artistsCount, setArtistsCount] = useState(0)
  const [payoutsCount, setPayoutsCount] = useState(0)
  const [songsCount, setSongsCount] = useState(0)

  useEffect(() => {
    axiosInstance
      .get(GETARTISTS)
      .then((res) => {
        setUsers(res.data.artistNames)
        setArtistsCount(res.data.artistNames.length)
      })
      .catch((error) => console.log(error))
  }, [artistsCount, users])
  useEffect(() => {
    axiosInstance
      .get(GETALLPLACEMENT)
      .then((res) => setPlacementCount(res.data.data.placements.length))
      .catch((error) => console.log(error))
  }, [placementsCount])
  useEffect(() => {
    axiosInstance
      .get(GETALLPAYOUTS)
      .then((res) => setPayoutsCount(res.data.data.payouts.length))
      .catch((error) => console.log(error))
  }, [payoutsCount])
  useEffect(() => {
    axiosInstance
      .get(GETALLPROJECTS)
      .then((res) => setSongsCount(res.data.data.projects.length))
      .catch((error) => console.log(error))
  }, [songsCount])
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-copy-04 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Placements</p>
                      <Card.Title as="h4">{placementsCount}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => window.location.reload()}
                  className="stats"
                >
                  <i className="fas fa-redo mr-1"></i>
                  Update Now
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-circle-09 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Artists</p>
                      <Card.Title as="h4">{artistsCount}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => window.location.reload()}
                  className="stats"
                >
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-credit-card text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Payouts</p>
                      <Card.Title as="h4">{payoutsCount}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => window.location.reload()}
                  className="stats"
                >
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-note-03 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Songs</p>
                      <Card.Title as="h4">{songsCount}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => window.location.reload()}
                  className="stats"
                >
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">All Users</Card.Title>
                <p className="card-category">All Users table</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">No.</th>
                      <th className="border-0">Full Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Artist Name</th>
                      <th className="border-0">Add Placement</th>
                      <th className="border-0">Add Payout</th>
                      <th className="border-0">Add Song</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((item, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.fullName}</td>
                        <td>{item.email}</td>
                        <td>{item.artistName}</td>
                        <td>
                          <i
                            onClick={() =>
                              history.push("/admin/add-placement", {
                                id: item._id,
                              })
                            }
                            style={{
                              fontSize: 25,
                              cursor: "pointer",
                              fontWeight: "bold",
                            }}
                            className="nc-icon nc-single-copy-04 text-primary"
                          ></i>
                        </td>
                        <td>
                          <i
                            onClick={() =>
                              history.push("/admin/add-payout", {
                                id: item._id,
                              })
                            }
                            style={{
                              fontSize: 25,
                              cursor: "pointer",
                              fontWeight: "bold",
                            }}
                            className="nc-icon nc-credit-card text-warning"
                          ></i>
                        </td>
                        <td>
                          <i
                            onClick={() =>
                              history.push("/admin/add-song", {
                                id: item._id,
                              })
                            }
                            style={{
                              fontSize: 25,
                              cursor: "pointer",
                              fontWeight: "bold",
                            }}
                            className="nc-icon nc-note-03 text-danger"
                          ></i>
                        </td>
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

export default withRouter(Dashboard)
