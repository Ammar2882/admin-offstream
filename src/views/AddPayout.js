import React, { useState, useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap"
import Select from "react-select"
import DatePicker from "react-datepicker"
import axiosInstance from "api/axios"
import { ADDPAYMENT, GETARTISTS } from "api/Endpoints"
import "react-datepicker/dist/react-datepicker.css"

const statusOptions = [
  { value: "Pending", label: "Pending" },
  { value: "Received", label: "Received" },
]

const paidOptions = [
  { value: "true", label: "true" },
  { value: "false", label: "false" },
]

function AddPayout() {
  const history = useHistory()
  const { state } = useLocation()
  const [projectName, setProjectName] = useState()
  const [songTitle, setSongTitle] = useState()
  const [percentSplits, setPercentSplits] = useState()
  const [totalAmount, setTotalAmount] = useState()
  const [amountDue, setAmoutDue] = useState()
  const [purpose, setPurpose] = useState()
  const [status, setStatus] = useState(null)
  const [paid, setPaid] = useState(null)
  const [selectedArtistNames, setSelectedArtistNames] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)
  const [releaseDate, setReleaseDate] = useState(new Date())
  const [datePaid, setDatePaid] = useState(new Date())
  const [options, setOption] = useState([])

  const handlePaidChange = (selectedOption) => setPaid(selectedOption.value)
  const handleStatusChange = (selectedOption) => setStatus(selectedOption.value)

  const handleChange = (selectedOption) => {
    setSelectedArtistNames(null)
    const temp = []
    selectedOption.map((e) => temp.push(e.value))
    setSelectedArtistNames(temp)
    setSelectedOption(selectedOption)
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
      releaseDate === null ||
      datePaid === "" ||
      percentSplits === "" ||
      totalAmount === null ||
      paid === null ||
      amountDue === null ||
      purpose === "" ||
      selectedArtistNames === ""
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
      releaseDate,
      datePaid,
      percentSplits,
      totalAmount,
      paid,
      amountDue,
      purpose,
      artistName: selectedArtistNames,
    }
    const url = ADDPAYMENT
    axiosInstance
      .post(url, newData)
      .then((res) => {
        console.log("res.data.data", res.data)
        history.push("/dashboard")
        alert("payout added successfully")
      })
      .catch((error) => alert(error))
  }
  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as="h4">Add Payout</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col className="pr-1" md="6">
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
                <Col className="px-1" md="6">
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
              </Row>
              <Row>
                <Col className="px-1" md="6">
                  <label>Artists</label>
                  <Select
                    isMulti={true}
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                  />
                </Col>
                <Col md="6">
                  <label>Release Date</label>
                  <DatePicker
                    selected={releaseDate}
                    onChange={(date) => setReleaseDate(date)}
                  />
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
                      value={totalAmount}
                      onChange={(e) => setTotalAmount(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col className="pl-1" md="4">
                  <Form.Group>
                    <label>Amount Due</label>
                    <Form.Control
                      placeholder="Amount Due"
                      type="number"
                      value={amountDue}
                      onChange={(e) => setAmoutDue(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="pl-1" md="4">
                  <Form.Group>
                    <label>Status</label>
                    <Select
                      value={status}
                      onChange={handleStatusChange}
                      options={statusOptions}
                    />
                  </Form.Group>
                </Col>
                <Col className="pl-1" md="4">
                  <label>Paid</label>
                  <Select
                    value={paid}
                    onChange={handlePaidChange}
                    options={paidOptions}
                  />
                </Col>
                <Col className="pl-1" md="4">
                  <label>Date Paid</label>
                  <DatePicker
                    selected={datePaid}
                    onChange={(date) => setDatePaid(date)}
                  />
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
                Add New Payout
              </Button>
              <div className="clearfix"></div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default AddPayout
