"use strict";

console.log("add.jsx is running");

const { Button, Modal, Form, Col, Row } = ReactBootstrap;


// START ADD A PET FEATURE MODAL
function AddPetModal(props) {
  //START nested functions for pet inputs
  const [species, setSpecies] = React.useState("");

  function handleSpecies(evt) {
    setSpecies(evt.target.value);
  }

  const [petFName, setPetFName] = React.useState("");

  function handlePetFName(evt) {
    setPetFName(evt.target.value);
  }

  const [petLName, setPetLName] = React.useState("");

  function handlePetLName(evt) {
    setPetLName(evt.target.value);
  }

  const [birthday, setBirthday] = React.useState("");

  function handleBirthday(evt) {
    setBirthday(evt.target.value);
  }

  const [age, setAge] = React.useState("");

  function handleAge(evt) {
    setAge(evt.target.value);
  }

  //already declared near line 180
  function handleBreed(evt) {
    setBreed(evt.target.value);
  }

  const [weight, setWeight] = React.useState("");

  function handleWeight(evt) {
    setWeight(evt.target.value);
  }

  const [energyLevel, setEnergyLevel] = React.useState("");

  function handleEnergyLevel(evt) {
    setEnergyLevel(evt.target.value);
  }

  const [coat, setCoat] = React.useState("");

  function handleCoat(evt) {
    setCoat(evt.target.value);
  }

  const [emerContactFName, setEmerContactFName] = React.useState("");

  function handleEmerContactFName(evt) {
    setEmerContactFName(evt.target.value);
  }

  const [emerContactLName, setEmerContactLName] = React.useState("");

  function handleEmerContactLName(evt) {
    setEmerContactLName(evt.target.value);
  }

  const [emerContactPhone, setEmerContactPhone] = React.useState("");

  function handleEmerContactPhone(evt) {
    setEmerContactPhone(evt.target.value);
  }

  const [emerContactEmail, setEmerContactEmail] = React.useState("");

  function handleEmerContactEmail(evt) {
    setEmerContactEmail(evt.target.value);
  }

  const [insuranceCompany, setInsuranceCompany] = React.useState("");

  function handleInsuranceCompany(evt) {
    setInsuranceCompany(evt.target.value);
  }

  const [insurancePolicyNum, setInsurancePolicyNum] = React.useState("");

  function handleInsurancePolicyNum(evt) {
    setInsurancePolicyNum(evt.target.value);
  }

  const [petComment, setPetComment] = React.useState("");

  function handlePetComment(evt) {
    setPetComment(evt.target.value);
  }

  //submit form, save to db
  function handleAddAPetFormSubmit(evt) {
    evt.preventDefault();

    // Validation
    if (species === "" || petFName === "") {
      alert('Please enter the species type and first name')
      console.log("input error on species and first name");
      return;
    }

    let inputBirthday

    if (birthday === "") {
      inputBirthday = null;
    } else {
      inputBirthday = Number(birthday)
    }
    
    let inputAge

    if (age === "") {
      inputAge = null;
    } else {
      inputAge = Number(age)
    }
    
    let inputWeight

    if (weight === "") {
      inputWeight = null;
    } else {
      inputWeight = Number(weight)
    }

    //append each one individually rather than an object, append to formData (you'd send )
    const addAPetFormInputs = {
      pet: {
        petphoto: 
        species: species,
        pet_fname: petFName,
        pet_lname: petLName,
        birthday: inputBirthday,
        age: inputAge,
        breed: breed,
        weight: inputWeight,
        energy_level: energyLevel,
        coat: coat,
        emer_contact_fname: emerContactFName,
        emer_contact_lname: emerContactLName,
        emer_contact_phone: emerContactPhone,
        emer_contact_email: emerContactEmail,
        insurance_company: insuranceCompany,
        insurance_policy_num: insurancePolicyNum,
        pet_comment: petComment,
      },
    };

    fetch("/add-a-pet", {
      method: "PUT",
      body: JSON.stringify(addAPetFormInputs),
    })
      .then((response) => response.json())
      .then((responseData) => {
        location.reload()
        // props.onHide() 
        // console.log(responseData);
      });
  }

  const [breed, setBreed] = React.useState([]); // State to store none selected, then if selected, start at None

  React.useEffect(() => {
    // Fetch cat and dog breed data 
    fetch(`/breeds`)
      .then((response) => response.json())
      .then((breedData) => setBreed(breedData));
  }, []); // Empty dependency array, runs once only when component mounts

  return (
    <>
      <Modal {...props} size="lg" backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add My Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddAPetFormSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>*Species</Form.Label>
                <Form.Select
                  value={species}
                  onChange={handleSpecies}
                  aria-label="Species"
                >
                  <option>Select</option>
                  <option value="bird">Bird</option>
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                  <option value="fish">Fish</option>
                  <option value="guinea_pig">Guinea Pig</option>
                  <option value="horse">Horse</option>
                  <option value="turtle">Turtle</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>*First Name</Form.Label>
                <Form.Control
                  value={petFName}
                  onChange={handlePetFName}
                  type="text"
                  placeholder=""
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  value={petLName}
                  onChange={handlePetLName}
                  type="text"
                  placeholder=""
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                  value={birthday}
                  onChange={handleBirthday}
                  type="date"
                  placeholder="mm/dd/yyyy"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Age</Form.Label>
                <Form.Select value={age} onChange={handleAge} aria-label="Age" type="number">
                  <option>Select</option>
                  {Array.from({ length: 110 }, (_, index) => (
                      <option key={index} value={index}>
                        {index === 0 ? 'Baby' : index}
                      </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Breed</Form.Label>
                <Form.Select value={breed} onChange={handleBreed} aria-label="Breed" type="text">
                  <option>Select</option>
                  {species === "dog" && dog_breeds.map((dogBreed, index) => (
                    <option key={index} value={dogBreed}>{dogBreed}</option>
                  ))}
                  {species === "cat" && cat_breeds.map((catBreed, index) => (
                    <option key={index} value={catBreed}>{catBreed}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Weight (lbs.)</Form.Label>
                <Form.Select value={weight} onChange={handleWeight} aria-label="Weight (lbs.)" type="number">
                  <option>Select</option>
                  {Array.from({ length: 200 }, (_, index) => (
                      <option key={index} value={index + 1}>
                        {index + 1}
                      </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Energy Level</Form.Label>
                <Form.Select
                  value={energyLevel}
                  onChange={handleEnergyLevel}
                  aria-label="Energy Level"
                  type="text"
                >
                  <option>Select</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Coat</Form.Label>
                <Form.Select
                  value={coat}
                  onChange={handleCoat}
                  aria-label="Coat"
                  type="text"
                >
                  <option>Coat</option>
                  <option value="hairless">Hairless</option>
                  <option value="short">Short</option>
                  <option value="long">Long</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Emergency Contact First Name</Form.Label>
                <Form.Control
                  value={emerContactFName}
                  onChange={handleEmerContactFName}
                  type="text"
                  placeholder=""
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Emergency Contact Last Name</Form.Label>
                <Form.Control
                  value={emerContactLName}
                  onChange={handleEmerContactLName}
                  type="text"
                  placeholder=""
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Emergency Contact Phone</Form.Label>
                <Form.Control
                  value={emerContactPhone}
                  onChange={handleEmerContactPhone}
                  ype="number"
                  placeholder="(xxx) xxx-xxxx"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Emergency Contact Email</Form.Label>
                <Form.Control
                  value={emerContactEmail}
                  onChange={handleEmerContactEmail}
                  type="email"
                  placeholder="email@email.com"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Insurance Company</Form.Label>
                <Form.Control
                  value={insuranceCompany}
                  onChange={handleInsuranceCompany}
                  type="text"
                  placeholder=""
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Policy Number</Form.Label>
                <Form.Control
                  value={insurancePolicyNum}
                  onChange={handleInsurancePolicyNum}
                  type="text"
                  placeholder=""
                />
              </Form.Group>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Notes</Form.Label>
              <Form.Control
                value={petComment}
                onChange={handlePetComment}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={props.onHide}>
                Cancel
              </Button>

              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

function AddAPet() {
  console.log("Add pet");

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Pet
      </Button>

      <AddPetModal show={modalShow} onHide={() => setModalShow(false)} />
    </React.Fragment>
  );
}

ReactDOM.render(<AddAPet />, document.querySelector("#add_pet"));
// END add a pet feature modal









// START ADD A SPECIALIST FEATURE MODAL
function AddSpecialistModal(props) {
  console.log("in the AddSpecialistModal function")

  //START nested functions for specialist inputs
  const [role, setRole] = React.useState("");

  function handleRole(evt) {
    setRole(evt.target.value);
  }

  const [specialistCompany, setSpecialistCompany] = React.useState("");

  function handleSpecialistCompany(evt) {
    setSpecialistCompany(evt.target.value);
  }

  const [specialistFName, setSpecialistFName] = React.useState("");

  function handleSpecialistFName(evt) {
    setSpecialistFName(evt.target.value);
  }

  const [specialistLName, setSpecialistLName] = React.useState("");

  function handleSpecialistLName(evt) {
    setSpecialistLName(evt.target.value);
  }

  // START Selecting a pet or all pets 
  const [petSelected, setPetSelected] = React.useState("");
  const [allPetsSelected, setAllPetsSelected] = React.useState("");
  
  function handlePetSelected(evt) { 
    setPetSelected(evt.target.value); //pull value from dropdown menu
    
    if (setAllPetsSelected !== "") {
      setAllPetsSelected(""); //but if the toggle for all pets is selected, then regardless of what's selected set this to None
    }}

  function handleAllPetsSelected(evt) { 
    setAllPetsSelected(evt.target.value);
    setPetSelected(""); // if this is selected, then void the handlePetSelected option
  }

  const [specialistEmail, setSpecialistEmail] = React.useState("");

  function handleSpecialistEmail(evt) {
    setSpecialistEmail(evt.target.value);
  }

  const [specialistPhone, setSpecialistPhone] = React.useState("");

  function handleSpecialistPhone(evt) {
    setSpecialistPhone(evt.target.value);
  }

  const [street, setStreet] = React.useState("");

  function handleStreet(evt) {
    setStreet(evt.target.value);
  }

  const [street2, setStreet2] = React.useState("");

  function handleStreet2(evt) {
    setStreet2(evt.target.value);
  }

  const [city, setCity] = React.useState("");

  function handleCity(evt) {
    setCity(evt.target.value);
  }

  const [state, setState] = React.useState("");

  function handleState(evt) {
    setState(evt.target.value);
  }

  const [zipCode, setZipCode] = React.useState("");

  function handleZipCode(evt) {
    setZipCode(evt.target.value);
  }

  const [specialistComment, setSpecialistComment] = React.useState("");

  function handleSpecialistComment(evt) {
    setSpecialistComment(evt.target.value);
  }

  //submit form, save to db
  function handleAddASpecialistFormSubmit(evt) {
    evt.preventDefault();

    console.log("in the handleAddASpecialistFormSubmit function")
    
    const addASpecialistFormInputs = {
      specialist: {
        role: role,
        specialist_company: specialistCompany,
        specialist_fname: specialistFName,
        specialist_lname: specialistLName,
        specialist_email: specialistEmail,
        specialist_phone: specialistPhone,
        street: street,
        street2: street2,
        city: city,
        state: state,
        zip_code: zipCode,
        specialist_comment: specialistComment,
      },
    };

    fetch("/add-a-specialist", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addASpecialistFormInputs),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      });
  }

  const [pets, setPets] = React.useState([]); // State to store pets associated with owner_id

  React.useEffect(() => {
    // Fetch pets associated with the owner_id
    fetch(`/get-pets-for-owner`)
      .then((response) => response.json())
      .then((petsInfoData) => setPets(petsInfoData));
  }, []); // Empty dependency array, runs once only when component mounts

  return (
    <>
      <Modal {...props} size="lg" backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add a Specialist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddASpecialistFormSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>*Role</Form.Label>
                <Form.Select
                  value={role}
                  onChange={handleRole}
                  aria-label="Default select example"
                  type="text"
                >
                  <option>Select</option>
                  <option value="vet">Vet</option>
                  <option value="groomer">Groomer</option>
                  <option value="nail_trimmer">Nail Trimmer</option>
                  <option value="emergency_vet">Emergency Vet</option>
                  <option value="emergency_vet">Pharmacy</option>
                  <option value="doctor">Doctor</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  value={specialistCompany}
                  onChange={handleSpecialistCompany}
                  type="text"
                  placeholder=""
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  value={specialistFName}
                  onChange={handleSpecialistFName}
                  type="text"
                  placeholder=""
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>*Last Name</Form.Label>
                <Form.Control
                  value={specialistLName}
                  onChange={handleSpecialistLName}
                  type="text"
                  placeholder=""
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>
                  *What pet or pets would you like to assign this specialist to?
              </Form.Label>
              <Form.Select value={petSelected} onChange={handlePetSelected}     aria-label="Select the pet this specialist helps care for:" type="text">
                <option>Or, select one of your pets</option>
                {pets.map((pet) => (
                  <option key={pet.pet_id} value={pet.pet_id}>
                  {capitalizeTitle(pet.species)}: {pet.pet_fname} {pet.pet_lname}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
              
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Check value={allPetsSelected} onChange={handleAllPetsSelected}
                  type="switch"
                  id="custom-switch"
                  label="Apply this specialist to all my pets (on is yes)"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={specialistEmail}
                  onChange={handleSpecialistEmail}
                  type="email"
                  placeholder="email@email.com"
                  aria-label="Email"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  value={specialistPhone}
                  onChange={handleSpecialistPhone}
                  type="number"
                  placeholder="(xxx) xxx-xxxx"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={street}
                onChange={handleStreet}
                type="text"
                placeholder="1234 Main Street"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control
                value={street2}
                onChange={handleStreet2}
                type="text"
                placeholder="Apartment, studio, or floor"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control value={city} onChange={handleCity} type="text" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  value={state}
                  onChange={handleState}
                  type="text"
                  placeholder="CA"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  value={zipCode}
                  onChange={handleZipCode}
                  type="number"
                  placeholder="66049"
                />
              </Form.Group>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Notes</Form.Label>
              <Form.Control
                value={specialistComment}
                onChange={handleSpecialistComment}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={props.onHide}>
                Cancel
              </Button>

              <Button variant="primary" onClick={props.onHide} type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

function AddASpecialist() {
  console.log("In the AddASpecialist function");

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Specialist
      </Button>

      <AddSpecialistModal show={modalShow} onHide={() => setModalShow(false)} />
    </React.Fragment>
  );
}

ReactDOM.render(<AddASpecialist />, document.querySelector("#add_specialist"));
// END add a specialist feature modal








// START ADD AN EVENT FEATURE MODAL
function AddEventModal(props) {
  console.log("in the AddEventModal function")

  //START nested functions for specialist inputs
  const [eventTitle, setEventTitle] = React.useState("");

  function handleEventTitle(evt) {
    setEventTitle(evt.target.value);
  }

  const [eventDescription, setEventDescription] = React.useState("");

  function handleEventDescription(evt) {
    setEventDescription(evt.target.value);
  }

  const [location, setLocation] = React.useState("");

  function handleLocation(evt) {
    setLocation(evt.target.value);
  }

  const [startDate, setStartDate] = React.useState("");

  function handleStartDate(evt) {
    setStartDate(evt.target.value);
  }

  const [allDay, setAllDay] = React.useState("");

  function handleAllDay(evt) {
    setAllDay(evt.target.value);
  }

  const [startTime, setStartTime] = React.useState("");

  function handleStartTime(evt) {
    setStartTime(evt.target.value);
  }

  const [endDate, setEndDate] = React.useState("");

  function handleEndDate(evt) {
    setEndDate(evt.target.value);
  }

  const [endTime, setEndTime] = React.useState("");

  function handleEndTime(evt) {
    setEndTime(evt.target.value);
  }

  //submit form, save to db
  function handleAddEventModal(evt) {
    evt.preventDefault();

    console.log("in the handleAddASpecialistFormSubmit function")
    
    const addEventFormInputs = {
      specialist: {
        title: eventTitle,
        description: eventDescription,
        start_date: startDate,
        start_time: startTime,
        end_date: endDate,
        end_time: endTime,
        allDay: boolTF,
        extendedProps: {
          location: location,
        } 
      },
    };

    fetch("/create-event", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addEventFormInputs),
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);

      if (responseData && responseData.events) {
        const eventsData = data.events.map(event => ({
          title: event.title,
          description: event.description,
          start: event.start_date + (event.start_time ? 'T' + event.start_time : ''),
          end: event.end_date + (event.end_time ? 'T' + event.end_time : ''),
          allDay: false,
          extendedProps: {
            location: location,
          }
        }))
      } 
    });
  }

  return (
    <>
      <Modal {...props} size="lg" backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add An Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddEventModal}>
            <Row className="mb-3">
              <Form.Group controlId="formGridPassword">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  value={eventTitle} onChange={handleEventTitle}
                  type="text"
                  placeholder=""
                  aria-label="Title"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                value={location}
                onChange={handleLocation}
                type="text"
                placeholder="1234 Main Street"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  value={startDate}
                  onChange={handleStartDate}
                  type="date"
                  placeholder="mm/dd/yyyy"
                  aria-label="Start Date"
                />
              </Form.Group>


              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  value={startTime}
                  onChange={handleStartTime}
                  type="time"
                  placeholder="Hr:Mm AM/PM"
                  aria-label="Start Time"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  value={endDate}
                  onChange={handleEndDate}
                  type="date"
                  placeholder="mm/dd/yyyy"
                  aria-label="End Date"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  value={endTime}
                  onChange={handleEndTime}
                  type="time"
                  placeholder="Hr:Mm AM/PM"
                  aria-label="End Time"
                />
              </Form.Group>
            </Row>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Check value={allDay} onChange={handleAllDay}
                type="switch"
                id="all-day-rose"
                label="All Day (on is all day)"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group controlId="formGridPassword">
                <Form.Label>Notes</Form.Label>
                <Form.Control value={eventDescription} onChange={handleEventDescription}
                  placeholder=""
                  aria-label="Description"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
            </Row>
            
            <Modal.Footer>
              <Button variant="secondary" onClick={props.onHide}>
                Cancel
              </Button>

              <Button variant="primary" onClick={props.onHide} type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

function AddAnEvent() {
  console.log("Add an event");

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Event
      </Button>

      <AddEventModal show={modalShow} onHide={() => setModalShow(false)} />
    </React.Fragment>
  );
}

ReactDOM.render(<AddAnEvent />, document.querySelector("#add_event"));
// END add an event feature modal