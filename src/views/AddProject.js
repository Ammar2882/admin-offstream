import React, { useState, useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap"
import Select from "react-select"
import DatePicker from "react-datepicker"
import axiosInstance from "api/axios"
import { ADDPROJECT, GETARTISTS } from "api/Endpoints"
import "react-datepicker/dist/react-datepicker.css"

function AddProject() {
  const history = useHistory()
  const { state } = useLocation()
  const [songTitle, setSongTitle] = useState()
  const [albumTitle, setAlbumTitle] = useState()
  const [PRO, setPRO] = useState()
  const [revShare, setRevShare] = useState()
  const [percentSplits, setPercentSplits] = useState()
  const [writingOwners, setWritingOwners] = useState(null)
  const [artistName, setArtistsNames] = useState(null)
  const [selectedOwnersWriting, setSelectedOwnersWriting] = useState(null)
  const [selectedArtistNames, setSelectedArtistNames] = useState(null)

  const [releaseDate, setReleaseDate] = useState(new Date())
  const [options, setOption] = useState([])

  const handleWritingOwnersChange = (writingOwner) => {
    setSelectedOwnersWriting(null)
    const temp = []
    writingOwner.map((e) => temp.push(e.value))
    setSelectedOwnersWriting(temp)
    setWritingOwners(writingOwner)
  }

  const handleArtistsChange = (artist) => {
    setSelectedArtistNames(null)
    const temp = []
    artist.map((e) => {
      temp.push(e.value)
    })
    setSelectedArtistNames(temp)
    setArtistsNames(artist)
  }
  useEffect(() => {
    const url = GETARTISTS
    axiosInstance
      .get(url)
      .then((res) => {
        res.data.artistNames.map((e) => {
          setOption((result) => [
            ...result,
            { value: e.artistName, label: e.artistName },
          ])
        })
      })
      .catch((error) => {
        console.log("error ", error)
      })
  }, [])
  const onSavePress = () => {
    if (
      songTitle === "" ||
      albumTitle === "" ||
      releaseDate === null ||
      PRO === "" ||
      percentSplits === "" ||
      revShare === null ||
      selectedOwnersWriting === null ||
      selectedArtistNames === null
    ) {
      alert("Fields Cannot be empty")
      return
    }
    if (!state?.id) {
      alert("Something went Wrong, Please Refresh")
      return
    }
    const newData = {
      userId: state?.id,
      songTitle,
      albumTitle,
      releaseDate,
      PRO,
      percentSplits,
      revShare,
      writingOwners: selectedOwnersWriting,
      artistName: selectedArtistNames,
    }

    const url = ADDPROJECT
    axiosInstance
      .post(url, newData)
      .then((res) => {
        console.log("res.data.data", res.data)
        history.push("/dashboard")
        alert("Project Added Successfully")
      })
      .catch((error) => alrt("error ", error))
  }
  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as="h4">Add Project</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col className="pl-1" md="4">
                  <Form.Group>
                    <label>Album Title</label>
                    <Form.Control
                      placeholder="Album Title"
                      type="text"
                      value={albumTitle}
                      onChange={(e) => setAlbumTitle(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="px-1" md="4">
                  <Form.Group>
                    <label>Song Title</label>
                    <Form.Control
                      placeholder="Song Title"
                      type="text"
                      value={songTitle}
                      onChange={(e) => setSongTitle(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="px-1" md="4">
                  <label>Release Date</label>
                  <DatePicker
                    selected={releaseDate}
                    onChange={(date) => setReleaseDate(date)}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="pr-1" md="6">
                  <label>Writing Owners</label>
                  <Select
                    isMulti={true}
                    value={writingOwners}
                    onChange={handleWritingOwnersChange}
                    options={options}
                  />
                </Col>
                <Col className="pl-1" md="6">
                  <label>Artists</label>
                  <Select
                    isMulti={true}
                    value={artistName}
                    onChange={handleArtistsChange}
                    options={options}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col className="pl-1" md="4">
                  <Form.Group>
                    <label>Percent Splits</label>
                    <Form.Control
                      placeholder="Percent Splits"
                      type="text"
                      value={percentSplits}
                      onChange={(e) => setPercentSplits(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="px-1" md="4">
                  <Form.Group>
                    <label>Revenue Share</label>
                    <Form.Control
                      placeholder="Revenue Share"
                      type="text"
                      value={revShare}
                      onChange={(e) => setRevShare(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="px-1" md="4">
                  <Form.Group>
                    <label>PRO</label>
                    <Form.Control
                      placeholder="PRO"
                      type="text"
                      value={PRO}
                      onChange={(e) => setPRO(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Button
                className="btn-fill pull-right"
                variant="info"
                onClick={() => onSavePress()}
              >
                Add New Project
              </Button>
              <div className="clearfix"></div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default AddProject
