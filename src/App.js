import { ThemeProvider } from "@mui/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme } from "@mui/material";
import Todo from "./components/Todo/Todo";

const theme = createTheme({});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
