import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import AccountList from "./pages/AccountList";
import Dashboard from "./pages/Dashboard";
import LessonList from "./pages/LessonList";
import News from "./pages/News";
import StudentList from "./pages/StudentList";
import Setting from "./pages/Setting";
import ClassList from "./pages/ClassList";
import PageLayout from "./layouts/PageLayout";
import ClassHeader from "./components/ClassHeader";
import "./App.css";
import UserProfile from "./pages/UserProfile";

function App() {
    return (
        <div className="main">
            <DefaultLayout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route
                        path="/class"
                        element={<PageLayout header={<ClassHeader />} content={<ClassList />} />}
                    />
                    <Route path="/lesson" element={<LessonList />} />
                    <Route path="/account" element={<AccountList />} />
                    <Route path="/student" element={<StudentList />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="/profile" element={<UserProfile />} />
                </Routes>
            </DefaultLayout>
        </div>
    );
}

export default App;
