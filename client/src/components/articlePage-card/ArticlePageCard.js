import React, { useEffect, useState } from 'react'
import cl from './ArticlePageCard.module.scss'
import axios from 'axios'


const ArticlePageCard = () => {
        
    return (
        <div class="container">
            <div class="main_cat">
                <img class="cat_blog1" src="../../images-blog/cat_blog1.png" alt="cat_blog1"/>

                <div class="date">
                    <img src="../../images-blog/calendar.svg" alt="calendar"/>
                    <p>24 Марта, 2022</p>
                </div>
                {textItems}
                <h1></h1>
                <h2></h2>
                <h3>Для чего же нужна гигиеническая стрижка?</h3>

                {tickItems}

                <button>Было полезно?</button>

            </div>

        </div>
    );
}

export default ArticlePageCard