import PetsList from "../components/PetsList";
import Filters from "../components/Filters";
import {useState} from "react";

const pets = [
    {
        id: 1,
        name: "Bella",
        race: "Poodle",
        type: "dog",
        location: "Seattle",
        photo: 'https://via.placeholder.com/500'
    },
    {
        id: 2,
        name: "Charlie",
        race: "Siamese",
        type: "cat",
        location: "London",
        photo: 'https://via.placeholder.com/500'
    },
    {
        id: 3,
        name: "Max",
        race: "Bulldog",
        type: "dog",
        location: "New York",
        photo: 'https://via.placeholder.com/500'
    },
    {
        id: 4,
        name: "Luna",
        race: "Maine Coon",
        type: "cat",
        location: "Los Angeles",
        photo: 'https://via.placeholder.com/500'
    },
    {
        id: 5,
        name: "Rocky",
        race: "Labrador Retriever",
        type: "dog",
        location: "Sydney",
        photo: 'https://via.placeholder.com/500'
    }
];


const Home = () => {
    const [filteredPets, setFilteredPets] = useState(pets)

    const handleFilterPets = (race, type, location) => {
        setFilteredPets(
            pets
                .filter((pet) => pet.race.toLowerCase().includes(race.toLowerCase()))
                .filter((pet) => pet.type.toLowerCase().includes(type.toLowerCase()))
                .filter((pet) => pet.location.toLowerCase().includes(location.toLowerCase()))
        )
    }

    return(
        <div style={{display:'flex', flexDirection: "column", gap: "2rem"}}>
            <Filters filterPets={handleFilterPets} />
            <PetsList pets={filteredPets} />
        </div>
    )
}

export default Home