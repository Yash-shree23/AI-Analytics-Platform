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

                <h3>Duplicate Rows</h3>

                <p>{data.duplicate_rows}</p>

            </div>

            <div className="card">

                <h3>Columns</h3>

                {
                    data.columns.map((col, index) => (

                        <p key={index}>{col}</p>
                    ))
                }

            </div>

            <div className="card">

                <h3>Missing Values</h3>

                {
                    Object.entries(data.missing_values).map(
                        ([key, value], index) => (

                            <p key={index}>
                                {key}: {value}
                            </p>
                        )
                    )
                }

            </div>

            <div className="card">

                <h3>Data Types</h3>

                {
                    Object.entries(data.data_types).map(
                        ([key, value], index) => (

                            <p key={index}>
                                {key}: {value}
                            </p>
                        )
                    )
                }

            </div>
            <div className="card">

    <h3>Numerical Summary</h3>

    {
        Object.entries(data.numerical_summary).map(
            ([column, stats], index) => (

                <div key={index}>

                    <h4>{column}</h4>

                    <p>Mean: {stats.mean}</p>

                    <p>Median: {stats.median}</p>

                    <p>Min: {stats.min}</p>

                    <p>Max: {stats.max}</p>

                    <p>Std: {stats.std}</p>

                    <hr />

                </div>
            )
        )
    }

</div>

        </div>
    );
}

export default Dashboard;