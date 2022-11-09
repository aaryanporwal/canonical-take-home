import { useState, useEffect } from "react";
import BlogPost from "./components/BlogPost";
import "./style.scss";

const App = () => {
  const [blogPost, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
    )
      .then((res) => res.json())
      .then((res) => setBlogPosts(res));
  }, []);

  return (
    <div className="row u-equal-height u-clearfix">
      <div className="row">
        <h1>Canonical Blog</h1>
      </div>
      <div className="row u-equal-height u-clearfix">
        {blogPost.map((item, index) => {
          return (
            <BlogPost
              title={item.title.rendered}
              image={item.featured_media}
              author={item._embedded.author[0].name}
              date={item.date}
              link={item.link}
              authorLink={item._embedded.author[0].link}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
