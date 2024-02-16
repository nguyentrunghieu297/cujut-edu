import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import AccountList from "./pages/AccountList";
import Dashboard from "./pages/Dashboard";
import LessonList from "./pages/LessonList";
import { Routes, Route } from "react-router-dom";
import News from "./pages/News";
import StudentList from "./pages/StudentList";
import Setting from "./pages/Setting";
import ClassList from "./pages/ClassList";
import PageLayout from "./layouts/PageLayout";
import ClassHeader from "./components/ClassHeader";

function App() {
    return (
        <div className="main">
            <DefaultLayout>
                <PageLayout
                    header={<ClassHeader />}
                    content={
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/class" element={<ClassList />} />
                            <Route path="/lesson" element={<LessonList />} />
                            <Route path="/account" element={<AccountList />} />
                            <Route path="/student" element={<StudentList />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/setting" element={<Setting />} />
                        </Routes>
                    }
                />
            </DefaultLayout>
        </div>
    );
}

export default App;
