import { useState, useEffect } from 'react';
import '../static/Home.css';
import { getSession } from '../api/memberApi';

function OurSession() {
    const [contact, setContact] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       async function fetchData(){
        try {
            const response = await getSession()
            setContact(response)
            setLoading(false);
        } catch (error) {
            setError('Failed to fetch trainees');
            setLoading(false);
            console.log(err)
        }
       }
       fetchData()
    }, [])

    if (loading) return <div className="text-center text-light mt-5">Loading...</div>;
    if (error) return <div className="text-center text-light mt-5">{error}</div>;

    return (
        <div className="container-fluid text-light" style={{ backgroundColor: "black" }}>
            <div className="container py-5">
                <h1 className="text-center mb-5 mt-5">Our Session</h1>
                <div className="row">
                    {contact.map((element) => (
                        <div key={element.id} className="col-md-4 mb-4">
                            <div className="card bg-dark text-light">
                                <div className="card-body">
                                    <h5 className="card-title">{element.username}</h5>
                                    <p className="card-text">
                                        <strong>Email:</strong> {element.email}<br />
                                        <strong>mobile:</strong> {element.mobile}<br />
                                        <strong>Session:</strong> {element.trainer}<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurSession; 