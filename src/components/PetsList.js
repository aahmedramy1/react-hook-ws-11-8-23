import PetsCard from "./PetsCard";

const PetsList = ({pets}) => {
    return (
        <div style={{display: 'flex',flexWrap: 'wrap', gap: '5rem', justifyContent: 'center'}}>
            {
                pets.map((petData) => <PetsCard pet={petData} key={petData.id} />)
            }
        </div>
    )
}

export default PetsList;