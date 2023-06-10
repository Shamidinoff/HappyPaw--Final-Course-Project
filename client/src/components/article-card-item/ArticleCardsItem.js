function ArticleCardsItem({ img, title, content }) {
  return (
    <div class="card-item">
      <img src={img} alt="cat-our-last-posts" />

      <div class="date-content">
        <div class="date-item">
          <img src="/images-main/6.0.1-calendar-icon.svg" alt="calendar-icon" />
          <p>25 Августа, 2022</p>
        </div>
        <div class="date-item">
          <img src="/images-main/6.0.2-eye-icon.svg" alt="eye-icon" />
          <p>181</p>
        </div>
      </div>

      <h3>{title}</h3>
      <p>{content}</p>
      <button>Читать &#8594;</button>
    </div>
  );
}

export default ArticleCardsItem;
