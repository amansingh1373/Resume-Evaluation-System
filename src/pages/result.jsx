import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import Loader from "../components/ui/loader";
import "../styles/pages/result.css";

const Result = () => {
    const location = useLocation();
    const files = location.state.files || {};
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        let fetchedScores = [];
        let temparr = Array.from(files.resume);
        if (temparr.length > 1) {
            let promises = temparr.map(file => {
                console.log(typeof(file))
                console.log(typeof(files.jobDesc))
                const formData = new FormData();
                formData.append('file1', file);
                formData.append('file2', files.jobDesc);
                return fetch("http://localhost:3000/", {
                    method: 'POST',
                    body: formData, 
                })
                .then((response) => response.text())
                .then((data) => {
                    fetchedScores.push({ file: file.name, score: data });
                })
                .catch((err) => {
                    console.log(err);
                });
            });

            Promise.all(promises).then(() => {
                fetchedScores.sort((a, b) => b.score - a.score);
                setScores(fetchedScores);
                setLoading(false);
            });
        } else {
            const formData = new FormData();
            formData.append('file1', files.resume);
            formData.append('file2', files.jobDesc);

            fetch("http://localhost:3000/", {
                method: 'POST',
                body: formData,
            })
            .then((response) => response.text())
            .then((data) => {
                setScores([{ file: files.resume.name, score: data }]);
                console.log(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
        }
    }, []);

    return (
        <div className="result-container">
            {loading ? (
                <Loader />
            ) : (
                <>
                    {scores.length === 1 ? (
                        `Resume score is: ${scores[0].score}`
                    ) : (
                        <div className="score-cards">
                            {scores.map((fileScore, index) => (
                                <div key={index} className="score-card">
                                    <h3>{fileScore.file}</h3>
                                    <p>Score: {fileScore.score}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Result;
