import { Route, Routes } from "react-router-dom";
import Main from "./Main/Main.tsx";
import SingleNews from "./SingleNews/SingleNews.tsx";
import { Container, CssBaseline } from "@mui/material";
import AppToolbar from "../components/UI/AppToolbar/AppToolbar.tsx";

const App = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <AppToolbar />
      </header>
      <Container maxWidth="xl" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<SingleNews />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
