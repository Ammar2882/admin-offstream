import React, { useState, useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap"
import axiosInstance from "api/axios"
import DatePicker from "react-datepicker"
import { ADDPLACEMENT, GETARTISTS } from "api/Endpoints"
import Select from "react-select"

function AddPlacement() {
  const history = useHistory()
  const { state } = useLocation()
  const [projectName, setProjectName] = useState()
  const [songTitle, setSongTitle] = useState()
  const [albumTitle, setAlbumTitle] = useState()
  const [releaseDate, setReleaseDate] = useState()
  const [PRO, setPRO] = useState()
  const [percentSplits, setPercentSplits] = useState()
  const [totalGrossAmount, setTotalGrossAmount] = useState()
  const [payoutAmountDue, setPayoutAmountDue] = useState()
  const [purpose, setPurpose] = useState()
  const [selectedOwners, setSelectedOwners] = useState(null)
  const [selectedArtists, setSelectedArtists] = useState(null)
  const [selectedOwnersWriting, setSelectedOwnersWriting] = useState(null)
  const [selectedArtistNames, setSelectedArtistNames] = useState(null)
  const [options, setOption] = useState([])

  const handleArtists = (selectedArtists) => {
    setSelectedArtistNames(null)
    const temp = []
    selectedArtists.map((e) => temp.push(e.value))
    setSelectedArtistNames(temp)
    setSelectedArtists(selectedArtists)
  }

  const handleOwners = (selectedOwners) => {
    setSelectedOwnersWriting(null)
    const temp = []
    selectedOwners.map((e) => temp.push(e.value))
    setSelectedOwnersWriting(temp)
    setSelectedOwners(selectedOwners)
  }

  useEffect(() => {
    const url = GETARTISTS
    axiosInstance
      .get(url)
      .then((res) =>
        res.data.artistNames.map((e) =>
          setOption((result) => [
            ...result,
            { value: e.artistName, label: e.artistName },
          ])
        )
      )
      .catch((error) => console.log("error ", error))
  }, [])
  const onSavePress = () => {
    if (
      projectName === "" ||
      songTitle === "" ||
      albumTitle === "" ||
      releaseDate === null ||
      PRO === "" ||
      percentSplits === "" ||
      totalGrossAmount === null ||
      payoutAmountDue === null ||
      purpose === "" ||
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
      projectName,
      songTitle,
      albumTitle,
      releaseDate: new Date(releaseDate),
      PRO,
      percentSplits,
      totalGrossAmount,
      payoutAmountDue,
      purpose,
      writingOwners: selectedOwnersWriting,
      artistName: selectedArtistNames,
    }

    const url = ADDPLACEMENT
    axiosInstance
      .post(url, newData)
      .then((res) => {
        console.log("res.data.data", res.data)
        history.push("/dashboard")
        alert("placement added successfully")
      })
      .catch((error) => alert(error))
  }

  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as="h4">Add Placement</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col className="pr-1" md="5">
                  <Form.Group>
                    <label>Project Name</label>
                    <Form.Control
                      type="text"
                      placeholder="Project Name"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="px-1" md="3">
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
              </Row>
              <Row>
                <Col className="pr-1" md="6">
                  <label>Writing Owners</label>
                  <Select
                    isMulti={true}
                    value={selectedOwners}
                    onChange={handleOwners}
                    options={options}
                  />
                </Col>
                <Col className="pl-1" md="6">
                  <label>Artists</label>
                  <Select
                    isMulti={true}
                    value={selectedArtists}
                    onChange={handleArtists}
                    options={options}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <label>Release Date</label>
                  <DatePicker
                    selected={releaseDate}
                    onChange={(date) => setReleaseDate(date)}
                  />
                </Col>
                <Col md="6">
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
              <Row>
                <Col className="pl-1" md="4">
                  <Form.Group>
                    <label>Percent Splits</label>
                    <Form.Control
                      placeholder="Percent Splits"
                      type="number"
                      value={percentSplits}
                      onChange={(e) => setPercentSplits(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="pl-1" md="4">
                  <Form.Group>
                    <label>Total Amount</label>
                    <Form.Control
                      placeholder="Total Amount"
                      type="number"
                      value={totalGrossAmount}
                      onChange={(e) => setTotalGrossAmount(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="pl-1" md="4">
                  <Form.Group>
                    <label>Payout Amount Due</label>
                    <Form.Control
                      placeholder="Payout Amount Due"
                      type="number"
                      value={payoutAmountDue}
                      onChange={(e) => setPayoutAmountDue(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Form.Group>
                    <label>Purpose</label>
                    <Form.Control
                      cols="80"
                      placeholder="Here can be your purpose of placement"
                      rows="4"
                      as="textarea"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Button
                className="btn-fill pull-right"
                variant="info"
                onClick={() => onSavePress()}
              >
                Add Placement
              </Button>
              <div className="clearfix"></div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default AddPlacement
