function Insights({ data }) {

    if (!data || !data.insights) {

        return null;
    }

    return (

        <div
            style={{
                width: "92%",
                margin: "auto",
                marginBottom: "40px"
            }}
        >

            <div
                style={{

                    background: "rgba(255,255,255,0.08)",

                    backdropFilter: "blur(15px)",

                    padding: "30px",

                    borderRadius: "24px",

                    boxShadow: "0px 8px 30px rgba(0,0,0,0.25)",

                    border: "1px solid rgba(255,255,255,0.1)"
                }}
            >

                <h2
                    style={{
                        color: "white",
                        marginBottom: "20px"
                    }}
                >
                    🤖 AI Business Insights
                </h2>

                {
                    data.insights.map(
                        (insight, index) => (

                            <div
                                key={index}

                                style={{

                                    background: "rgba(255,255,255,0.05)",

                                    padding: "15px",

                                    borderRadius: "14px",

                                    marginBottom: "15px",

                                    color: "#e2e8f0",

                                    fontSize: "15px"
                                }}
                            >

                                🚀 {insight}

                            </div>
                        )
                    )
                }

            </div>

        </div>
    );
}

export default Insights;