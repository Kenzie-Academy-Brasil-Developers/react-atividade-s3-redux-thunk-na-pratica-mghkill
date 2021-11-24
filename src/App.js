import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import addCommentThunk from "./store/modules/user/thunks";

function App() {
  const user = useSelector((store) => store.user);

  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const handleComents = () => {
    dispatch(addCommentThunk(comment));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {" "}
          {user.comment.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <input
          placeholder="Digite o comentário"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button onClick={handleComents}>Enviar</button>
      </header>
    </div>
  );
}

export default App;
