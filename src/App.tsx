import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import LessonList from "./pages/LessonList";

function App() {
    return (
        <div className="main">
            <DefaultLayout>
                <LessonList />
            </DefaultLayout>
        </div>
    );
}

export default App;
