import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {useState} from "react";

const Filters = ({filterPets}) => {
    const [raceFilter, setRaceFilter] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");

    return(
        <InputGroup style={{display: 'flex', gap: '2rem'}}>
            <Form.Control
                placeholder="Race"
                value={raceFilter}
                onChange={(e) => {setRaceFilter(e.target.value)}}
            />
            <Form.Control
                placeholder="Type"
                value={typeFilter}
                onChange={(e) => {setTypeFilter(e.target.value)}}
            />
            <Form.Control
                placeholder="Location"
                value={locationFilter}
                onChange={(e) => {setLocationFilter(e.target.value)}}
            />
            <Button variant="primary" onClick={
                () => {
                    filterPets(raceFilter, typeFilter, locationFilter)
                }
            }>Submit</Button>
        </InputGroup>
    )
}

export default Filters;