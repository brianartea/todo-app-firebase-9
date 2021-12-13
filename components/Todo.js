import { IconButton, ListItem, ListItemText } from "@mui/material";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useContext } from "react";
import { useRouter } from "next/router";
import { TodoContext } from "./TodoContext";

const Todo = ({ id, timestamp, title, detail }) => {
  const { showAlert, setTodo } = useContext(TodoContext);
  const router = useRouter();
  const deleteTodo = async (id, e) => {
    e.stopPropagation();
    const docRef = doc(db, "todos", id);
    await deleteDoc(docRef);
    showAlert("error", `Todo "${title}" has been deleted!`);
  };

  const seeMore = (id, e) => {
    e.stopPropagation();
    router.push(`/todo/${id}`);
  };
  return (
    <ListItem
      onClick={() => setTodo({ id, title, detail, timestamp })}
      sx={{ mt: 3, boxShadow: 3 }}
      style={{ backgroundColor: "#FAFAFA" }}
      secondaryAction={
        <>
          <IconButton onClick={(e) => deleteTodo(id, e)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={(e) => seeMore(id, e)}>
            <MoreVertIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText
        primary={title}
        secondary={moment(timestamp).format("MMMM Do, YYYY")}
      ></ListItemText>
    </ListItem>
  );
};

export default Todo;
