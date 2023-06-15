import cl from './ArticlePageTextItem.module.scss'


const ArticlePageTextItem = ({ children }) => {
        
    return (
        <div>
            <p className ={cl.text1_cat} >{children}</p>
        </div>
    );
}

export default ArticlePageTextItem