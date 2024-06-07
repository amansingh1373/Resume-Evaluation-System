import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import Loader from "../components/ui/loader";
import "../styles/pages/result.css";

const Result = () => {
    const location = useLocation();
    const files = location.state.files;
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect( () => {
        const formData = new FormData();
        formData.append('file1', files.resume);
        formData.append('file2', files.jobDesc);
        setLoading(true);
        fetch("http://localhost:3000/",{
            method: 'POST',
            body: formData,
        })
        .then((response) => response.text())
        .then((data) => {
            setScore(data)
            setLoading(false);
        })
        .catch((err) => {
            console.log(err)
            setLoading(false);
        })
    },[]);
    return ( 
        <div className="result-container">
            {
                loading 
                ? <Loader /> 
                : `resume score is : ${score}`
            }

        </div>
     );
}
 
export default Result;