import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    ArcElement,
    PointElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    ArcElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

function Charts({ data }) {

    if (!data || !data.numerical_summary) {
        return null;
    }

    // Labels
    const labels = Object.keys(
        data.numerical_summary
    );

    // Mean Values
    const means = labels.map(
        (col) => data.numerical_summary[col].mean
    );

    // Gradient Colors
    const gradientColors = [
        "rgba(59,130,246,0.8)",
        "rgba(16,185,129,0.8)",
        "rgba(245,158,11,0.8)",
        "rgba(239,68,68,0.8)",
        "rgba(139,92,246,0.8)",
        "rgba(6,182,212,0.8)"
    ];

    // Border Colors
    const borderColors = [
        "#3b82f6",
        "#10b981",
        "#f59e0b",
        "#ef4444",
        "#8b5cf6",
        "#06b6d4"
    ];

    // BAR CHART
    const barData = {

        labels: labels,

        datasets: [
            {
                label: "Mean Values",

                data: means,

                backgroundColor: gradientColors,

                borderColor: borderColors,

                borderWidth: 2,

                borderRadius: 10
            }
        ]
    };

    // LINE CHART
    const lineData = {

        labels: labels,

        datasets: [
            {
                label: "Mean Trend",

                data: means,

                borderColor: "#8b5cf6",

                backgroundColor: "rgba(139,92,246,0.3)",

                fill: true,

                tension: 0.4,

                pointBackgroundColor: "#ffffff",

                pointBorderColor: "#8b5cf6",

                pointRadius: 6
            }
        ]
    };

    // PIE CHART
    const pieData = {

        labels: labels,

        datasets: [
            {
                label: "Distribution",

                data: means,

                backgroundColor: gradientColors,

                borderColor: "#ffffff",

                borderWidth: 2
            }
        ]
    };

    // COMMON CARD STYLE
    const chartCardStyle = {

        background: "rgba(255,255,255,0.08)",

        backdropFilter: "blur(15px)",

        padding: "25px",

        borderRadius: "24px",

        boxShadow: "0px 8px 30px rgba(0,0,0,0.25)",

        marginBottom: "40px",

        border: "1px solid rgba(255,255,255,0.1)"
    };

    return (

        <div
            style={{
                width: "92%",
                margin: "40px auto"
            }}
        >

            <h2
                style={{
                    color: "white",
                    marginBottom: "30px",
                    fontSize: "28px"
                }}
            >
                AI Visual Analytics
            </h2>

            {/* BAR CHART */}

            <div style={chartCardStyle}>

                <h3
                    style={{
                        color: "white",
                        marginBottom: "20px"
                    }}
                >
                    📊 Mean Value Comparison
                </h3>

                <Bar data={barData} />

            </div>

            {/* LINE CHART */}

            <div style={chartCardStyle}>

                <h3
                    style={{
                        color: "white",
                        marginBottom: "20px"
                    }}
                >
                    📈 Trend Analysis
                </h3>

                <Line data={lineData} />

            </div>

            {/* PIE CHART */}

            <div
                style={{
                    ...chartCardStyle,
                    width: "500px",
                    margin: "0 auto 40px auto"
                }}
            >

                <h3
                    style={{
                        color: "white",
                        marginBottom: "20px",
                        textAlign: "center"
                    }}
                >
                    🥧 Distribution Analysis
                </h3>

                <Pie data={pieData} />

            </div>

        </div>
    );
}

export default Charts;