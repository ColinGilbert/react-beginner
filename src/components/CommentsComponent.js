const Comments = (props) => {
  let listItems = "";
  if (props.comments !== undefined) {
    listItems = props.comments.map((item) => {
      return (
        <li key={item.id} align="left">
          <p>{item.comment}</p>
          <p>
            -- {item.author},{" "}
            {new Date(item.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </li>
      );
    });
  }

  return (
    <>
      <h4 align="left">Comments</h4>
      <ul className="list-unstyled">{listItems}</ul>
    </>
  );
};

export default Comments;
