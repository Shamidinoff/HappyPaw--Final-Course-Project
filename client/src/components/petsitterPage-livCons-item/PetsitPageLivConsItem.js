import cl from './PetsitPageLivConsItem.module.scss'


const PetsitPageLivConsItem = ({children}) => {
        
    return (
      <span className={cl.accept}>
        <p>{children}</p>
      </span>
    );
}

export default PetsitPageLivConsItem