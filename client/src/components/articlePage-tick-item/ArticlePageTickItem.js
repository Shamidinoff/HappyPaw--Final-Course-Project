import cl from './ArticlePageTickItem.module.scss'


const ArticlePageTickItem = ({children}) => {
        
    return (
      <div className={cl.tick1}>
        <img src="../../images-blog/tick.svg" alt="tick" />
        <p>
          { children }{" "}
        </p>
      </div>
    );
}

export default ArticlePageTickItem