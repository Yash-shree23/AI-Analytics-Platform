import { useState } from "react";

import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import Dashboard from "./components/Dashboard";
import Charts from "./components/Charts";
import Insights from "./components/Insights";

function App() {

    const [data, setData] = useState(null);

    return (

        <div>

            <Navbar />

            <Upload setData={setData} />

            <Dashboard data={data} />
            <Insights data={data} />

            <Charts data={data} />

        </div>
    );
}

export default App;