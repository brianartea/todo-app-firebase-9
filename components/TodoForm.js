import { Button, TextField } from "@mui/material";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useContext, useEffect, useRef } from "react";
import { useAuth } from "../Auth";
import { db } from "../firebase";
import { TodoContext } from "../pages/TodoContext";

const TodoForm = () => {
  const inputAreaRef = useRef();
  const { currentUser } = useAuth();
  const { showAlert, todo, setTodo } = useContext(TodoContext);
  const onSubmit = async () => {
    if (todo?.hasOwnProperty("timestamp")) {
      // update todo
      const docRef = doc(db, "todos", todo.id);
      const todoUpdated = { ...todo, timestamp: serverTimestamp() };
      updateDoc(docRef, todoUpdated);
      setTodo({ title: "", detail: "" });
      showAlert("info", `Todo "${todo.title}" has been added`);
    } else {
      const collectionRef = collection(db, "todos");
      const docRef = await addDoc(collectionRef, {
        ...todo,
        email: currentUser.email,
        timestamp: serverTimestamp(),
      });
      setTodo({ title: "", detail: "" });
      showAlert("success", `Todo "${todo.title}" has been added`);
    }
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (!inputAreaRef.current.contains(e.target)) {
        console.log("Outside input area");
        setTodo({ title: "", detail: "" });
      } else {
        console.log("Inside input area");
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (!inputAreaRef.current.contains(e.target)) {
        console.log("Outside input area");
        setTodo({ title: "", detail: "" });
      } else {
        console.log("Inside input area");
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);

  return (
    <div ref={inputAreaRef}>
      <TextField
        fullWidth
        label="title"
        margin="normal"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <TextField
        fullWidth
        label="detail"
        multiline
        maxRows={4}
        value={todo.detail}
        onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
      />
      <Button onClick={onSubmit} variant="contained" sx={{ mt: 3 }}>
        {todo.hasOwnProperty("timestamp") ? "Update todo" : "Add a new todo"}
      </Button>
    </div>
  );
};

export default TodoForm;
