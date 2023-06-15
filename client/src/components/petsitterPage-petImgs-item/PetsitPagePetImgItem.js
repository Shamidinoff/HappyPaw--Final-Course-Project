import cl from './PetsitPagePetImgItem.module.scss'


const PetsitPagePetImgItem = ({petImg}) => {
        
    return (
      <span className={cl.accept}>
        <img src={petImg} alt="pet" />
      </span>
    );
}

export default PetsitPagePetImgItem