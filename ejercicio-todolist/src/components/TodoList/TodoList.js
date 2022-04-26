export default function todoList({ toDos, setToDos }) {
  const handleDelete = (id) => {
    return function (e) {
      e.stopPropagation();
      setToDos(toDos.filter((contacto) => contacto.id !== id));
    };
  };

  const handleComplete = (index) => {
    return function (e) {
      let newToDos = [...toDos];
      newToDos[index].completed = !newToDos[index].completed;
      setToDos(newToDos);
    };
  };

  const handleIncomplete = (index) => {
    return function (e) {
      let newToDos = [...toDos];
      newToDos[index].completed = !newToDos[index].completed;
      setToDos(newToDos);
    };
  };

  return (
    <div>
      {toDos.map((toDo, index) => (
        <div key={toDo.id}>
          {toDo.completed ? (
            <ul
              className="list-group w-50 m-auto my-5"
              onClick={handleIncomplete(index)}
            >
              <li className="list-group-item list-group-item-dark">
                <s>
                  {index} {toDo.title}
                </s>
                <button
                  className="btn btn-danger position-absolute bottom-0 end-0"
                  onClick={handleDelete(toDo.id)}
                >
                  X
                </button>
              </li>
            </ul>
          ) : (
            <ul
              key={toDo.id}
              className="list-group w-50 m-auto my-5"
              onClick={handleComplete(index)}
            >
              <li className="list-group-item">
                {index} {toDo.title}
                <button
                  className="btn btn-danger position-absolute bottom-0 end-0"
                  onClick={handleDelete(toDo.id)}
                >
                  X
                </button>
              </li>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
