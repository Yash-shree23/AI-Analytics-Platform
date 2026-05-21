import { useState } from "react";
import axios from "axios";

import "./../styles/Upload.css";

function Upload({ setData }) {

    const [file, setFile] = useState(null);

    const handleUpload = async () => {

        if (!file) {

            alert("Please select file");

            return;
        }

        const formData = new FormData();

        formData.append("file", file);

        try {

            const response = await axios.post(
                "http://127.0.0.1:8000/upload",
                formData
            );

            setData(response.data);

        } catch (error) {

            console.log(error);

            alert("Upload Failed");
        }
    };

    return (

        <div className="upload-container">

            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <button onClick={handleUpload}>
                Upload Dataset
            </button>

        </div>
    );
}

export default Upload;