import React from 'react';
import './App.css';
import CodewarsTask01 from "./components/CodewarsTask01";
import CodewarsTask02 from "./components/CodewarsTask02";
import CodewarsTask03 from "./components/CodewarsTask03";
import CodewarsTask04 from "./components/CodewarsTask04";

const App = () => {
    return (
        <div className="App">
            <CodewarsTask01 />
            <CodewarsTask02 />
            <CodewarsTask03 />
            <CodewarsTask04 />
        </div>
    );
};

export default App;
