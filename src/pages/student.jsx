import { useEffect, useState } from 'react';
import '../styles/pages/student.css';

const Student = () => {
    const [resumeValue, setResumeValue] = useState('');
    const [jobDescValue, setJobDescValue] = useState('');

    function handleChangeResume(e) {
        setResumeValue(e.target.files[0].name);
    }
    function handleChangeJobDesc(e) {
        setJobDescValue(e.target.files[0].name);
    }
    
    const handleSubmit = (e) => {
        if(resumeValue === '' || jobDescValue === '') {
            alert('Please upload both files');
        } else {
            alert('Files uploaded successfully');
        }
    }

    return ( 
        <form className='student-container'  onSubmit={handleSubmit}>
            <div className='student-container'>
                <div className='file-uploads'>
                    <div className='resume-upload'>
                        <label className='label-resume-btn file-upload-btn' htmlFor="resume-upload-btn">
                            {resumeValue ? 'Add another file': 'Add Resume file'}
                        </label>
                        <input id="resume-upload-btn" name="resume-upload-btn" className='input-file' type='file' accept='.pdf' onChange={handleChangeResume} />
                        <div className='preview-resume'>
                            {resumeValue ? resumeValue : 'No Resume uploaded yet'}
                        </div>
                    </div>
                    <div className='job-description-upload'>
                        <label className="job-desc-btn file-upload-btn" htmlFor="job-desc-upload-btn">
                            {jobDescValue ? 'Add another file': 'Add Job Description file'}
                        </label>
                        <input id="job-desc-upload-btn" name="job-desc-upload-btn" className='input-file' type='file' accept='.pdf' onChange={handleChangeJobDesc}/>
                        <div className='preview-job-desc'>
                            {jobDescValue ? jobDescValue : 'No Job Description uploaded yet'}
                        </div>
                    </div>
                </div>
                <div className='check-button-wrapper'>
                    <button type='submit' value='submit' className='check-button'>Check</button>
                </div>
            </div>
        </form>
     );
}
 
export default Student;