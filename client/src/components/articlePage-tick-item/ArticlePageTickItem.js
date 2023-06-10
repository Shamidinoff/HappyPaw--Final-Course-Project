import React, { useEffect, useState } from 'react'
import cl from './ArticlePageTickItem.module.scss'
import axios from 'axios'


const ArticlePageTickItem = () => {
        
    return (
      <div class="tick1">
        <img src="../../images-blog/tick.svg" alt="tick" />
        <p>
          Для здоровья пищеварительного тракта, ведь кошки постоянно
          вылизываются, и чем пушистее питомец, тем ему сложнее избавиться от
          шерстяного комка в желудке, а  это может привести к серьезным
          последствиям.{" "}
        </p>
      </div>
    );
}

export default ArticlePageTickItem