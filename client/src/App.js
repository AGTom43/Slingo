import React from "react";

// We use Route in order to define the different routes of our application 
import { Route, Routes } from "react-router-dom";

// Import all the components needed into the app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import InHome from "./components/inHome"; 
import Quiz from "./components/quiz";
import Translate from "./components/translate";
import NavbarNew from "./components/navbarNew";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<RecordList />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/create" element={<Create />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/inhome" element={<InHome />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/translate" element={<Translate />} />
            </Routes>
        </div>
    );
};

export default App;