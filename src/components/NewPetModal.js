import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useState} from "react";

const NewPetModal = ({showModal, handleClose, handleSave}) => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petRace, setPetRace] = useState("");
    const [petLocation, setPetLocation] = useState("")

    const resetStates = () => {
        setPetName("");
        setPetType("");
        setPetRace("");
        setPetLocation("");
    }

    const handleCloseModal = () => {
        resetStates();
        handleClose()
    }

    const handleSavePet = () => {
        handleSave({name: petName, race: petRace, type: petType, location: petLocation, photo: 'https://via.placeholder.com/500'})
        resetStates();
    }

    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Pet name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="example: Alfred"
                            value={petName}
                            onChange={e => setPetName(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Pet Type</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="example: Dog"
                            value={petType}
                            onChange={e => setPetType(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Pet Race</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="example: Labrador"
                            value={petRace}
                            onChange={e => setPetRace(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Pet Location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="example: Los Angelos"
                            value={petLocation}
                            onChange={e => setPetLocation(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSavePet}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default NewPetModal