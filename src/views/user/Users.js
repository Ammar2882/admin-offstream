import React, { useState, useEffect } from "react"
import { Card, Container, Row, Col, Table } from "react-bootstrap"
import { useHistory, withRouter } from "react-router-dom"
import axiosInstance from "api/axios"
import { GETARTISTS } from "api/Endpoints"

function Dashboard() {
  const history = useHistory()
  const [users, setUsers] = useState([])

  useEffect(() => {
    const url = GETARTISTS
    axiosInstance
      .get(url)
      .then((res) => setUsers(res.data.artistNames))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Container fluid>
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
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((item, index) => (
                      <tr
                        onClick={() =>
                          history.push("/admin/edit-user", { id: item._id })
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <td>{index + 1}</td>
                        <td>{item.fullName}</td>
                        <td>{item.email}</td>
                        <td>{item.artistName}</td>
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
