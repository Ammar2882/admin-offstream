import React, { useState } from "react"
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap"
import ProfileAvatar from "../assets/img/default-avatar.png"
import axiosInstance from "api/axios"
import { ADMINCREATEUSER, GETARTISTS } from "api/Endpoints"
import { useHistory } from "react-router-dom"

function AddUser() {
  const history = useHistory()
  const [selectedImage, setSelectedImage] = useState(null)
  const [artistName, setArtistName] = useState()
  const [fullName, setFullName] = useState()
  const [userName, setUserName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [pro, setPro] = useState()

  const onSavePress = () => {
    if (
      selectedImage === null ||
      fullName === "" ||
      artistName === "" ||
      userName === "" ||
      email === "" ||
      password === "" ||
      pro === ""
    ) {
      alert("Fields Cannot be empty")
      return
    }
    const newData = new FormData()
    newData.append("profileImage", {
      uri: selectedImage,
      name: "image.jpg",
      type: "image/jpeg",
    })
    newData.append("fullName", fullName)
    newData.append("artistName", artistName)
    newData.append("userName", userName)
    newData.append("email", email)
    newData.append("password", password)
    newData.append("PRO", pro)

    const url = ADMINCREATEUSER
    axiosInstance
      .post(url, newData)
      .then((res) => {
        console.log("res.data.data", res.data)
        history.push("/dashboard")
        alert("User added Successfully")
      })
      .catch((error) => alert(error))
  }

  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as="h4">Add User</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row className="d-flex">
                {selectedImage ? (
                  <div>
                    <img
                      alt="not fount"
                      width={"150px"}
                      height={"150px"}
                      style={{ borderRadius: "150px" }}
                      src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>
                      Remove
                    </button>
                  </div>
                ) : (
                  <div>
                    <img
                      alt="Profile Image"
                      width={"150px"}
                      height={"150px"}
                      src={ProfileAvatar}
                    />
                    <br />
                    <input
                      type="file"
                      name="myImage"
                      onChange={(event) => {
                        console.log(event.target.files[0])
                        setSelectedImage(event.target.files[0])
                      }}
                    />
                  </div>
                )}
              </Row>
              <Row>
                <Col className="pr-1" md="5">
                  <Form.Group>
                    <label>Full Name</label>
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="px-1" md="3">
                  <Form.Group>
                    <label>Artist Name</label>
                    <Form.Control
                      placeholder="Artist Name"
                      type="text"
                      value={artistName}
                      onChange={(e) => setArtistName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="pl-1" md="4">
                  <Form.Group>
                    <label>User Name</label>
                    <Form.Control
                      placeholder="User Name"
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="6">
                  <Form.Group>
                    <label>Email</label>
                    <Form.Control
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="pl-1" md="6">
                  <Form.Group>
                    <label>Password</label>
                    <Form.Control
                      placeholder="Password"
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Form.Group>
                    <label>PRO</label>
                    <Form.Control
                      placeholder="PRO"
                      type="text"
                      value={pro}
                      onChange={(e) => setPro(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Button
                className="btn-fill pull-right"
                variant="info"
                onClick={() => onSavePress()}
              >
                Add New User
              </Button>
              <div className="clearfix"></div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default AddUser