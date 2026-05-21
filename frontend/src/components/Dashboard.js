import "./../styles/Dashboard.css";

function Dashboard({ data }) {

    if (!data) {

        return <h3 className="empty">No Dataset Uploaded</h3>;
    }

    return (

        <div className="dashboard">

            <div className="card">

                <h3>Total Rows</h3>

                <p>{data.total_rows}</p>

            </div>

            <div className="card">

                <h3>Total Columns</h3>

                <p>{data.total_columns}</p>

            </div>

            <div className="card">

                <h3>Columns</h3>

                {
                    data.columns.map((col, index) => (

                        <p key={index}>{col}</p>
                    ))
                }

            </div>

        </div>
    );
}

export default Dashboard;