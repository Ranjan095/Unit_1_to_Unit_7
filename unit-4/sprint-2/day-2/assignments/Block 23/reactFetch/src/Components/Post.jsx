import React from "react";
const Post = ({title,body}) => {
  return (
    <div className="post">
      <h1>{title}
        {/* Here show the title of the post  */}
      </h1>
      <h3>
        {body}
        {/* Here show the body of the post  */}
      </h3>
    </div>
  );
};

export default Post;
