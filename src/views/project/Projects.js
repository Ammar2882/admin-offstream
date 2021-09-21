import React, { useState, useEffect } from "react"
import { Card, Container, Row, Col, Table } from "react-bootstrap"
import { useHistory, withRouter } from "react-router-dom"
import axiosInstance from "api/axios"
import { GETALLPROJECTS } from "api/Endpoints"

function Projects() {
  const history = useHistory()
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const url = GETALLPROJECTS
    axiosInstance
      .get(url)
      .then((res) => setProjects(res.data.data.projects))
      .catch((error) => console.log("error ", error))
  }, [])

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">All Songs</Card.Title>
                <p className="card-category">All Songs table</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">No.</th>
                      <th className="border-0">Song Title</th>
                      <th className="border-0">Album Title</th>
                      <th className="border-0">Revenue Share</th>
                      <th className="border-0">PRO</th>
                      <th className="border-0">Release Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((item, index) => (
                      <tr
                        onClick={() =>
                          history.push("/admin/editPlacements", {
                            id: item._id,
                          })
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <td>{index + 1}</td>
                        <td>{item.songTitle}</td>
                        <td>{item.albumTitle}</td>
                        <td>{item.revShare}</td>
                        <td>{item.PRO}</td>
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

export default withRouter(Projects)
