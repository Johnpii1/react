function ListGroup() {
  let Items = ["New York", "USA", "Spain", "China"];
 


  return (
    <>
      <h1>List</h1>
      {Items.length === 0 && <p>Not found</p>}
      <ul className="list-group">
        {Items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
