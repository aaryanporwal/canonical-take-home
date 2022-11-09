const BlogPost = ({ image, link, title, authorLink, author, date }) => {
  const publishedDate = new Date(date);
  const fullMonth = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    publishedDate.getMonth()
  );
  const fullYear = publishedDate.getFullYear();

  return (
    <>
      <div className="col-4">
        <div className="p-card shadowed">
          <h5 className="p-muted-heading">cloud and server</h5>
          <hr className="u-sv1" />
          <img src={image} alt="" className="p-card__image" />
          <div className="p-card__content">
            <h3 className="p-heading--7">
              <a href={link}>{title}</a>
            </h3>
          </div>
          <p>
            <em>
              By <a href={authorLink}>{author}</a> on {fullMonth} {fullYear}
            </em>
          </p>
          <hr className="u-sv1" />
          <div className="p-card__footer">
            <p>Article</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogPost;
