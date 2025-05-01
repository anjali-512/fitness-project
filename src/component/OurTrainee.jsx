import { useState, useEffect } from 'react';
import { getTrainees } from '../api/memberApi';
import '../static/Home.css';

function OurTrainee() {
    const [trainees, setTrainees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrainees = async () => {
            try {
                const data = await getTrainees();
                setTrainees(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch trainees');
                setLoading(false);
                console.log(err)
            }
        };

        fetchTrainees();
    }, []);

    if (loading) return <div className="text-center text-light mt-5">Loading...</div>;
    if (error) return <div className="text-center text-light mt-5">{error}</div>;

    return (
        <div className="container-fluid text-light" style={{ backgroundColor: "black" }}>
            <div className="container py-5">
                <h1 className="text-center mb-5 mt-5">Our Trainees</h1>
                <div className="row">
                    {trainees.map((trainee) => (
                        <div key={trainee.id} className="col-md-4 mb-4">
                            <div className="card bg-dark text-light">
                                <div className="card-body">
                                    <h5 className="card-title">{trainee.username}</h5>
                                    <p className="card-text">
                                        <strong>Email:</strong> {trainee.email}<br />
                                        <strong>Mobile:</strong> {trainee.mobile}<br />
                                        <strong>Join Date:</strong> {trainee.date}<br />
                                        <strong>Trainer:</strong> {trainee.trainer}
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

export default OurTrainee; 