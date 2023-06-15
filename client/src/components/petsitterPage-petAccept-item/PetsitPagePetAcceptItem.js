import cl from './PetsitPagePetAcceptItem.module.scss'


const PetsitPagePetAcceptItem = ({children}) => {
        
    return (
      <span className={cl.accept}>
        <p>{children}</p>
      </span>
    );
}

export default PetsitPagePetAcceptItem