import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import { FaBriefcase, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
    try {
        setLoading(true);
        const response = await axios.get("http://localhost:4000/api/v1/job/getall", {
          withCredentials: true,
        });
        setJobs(response.data);
    } catch (error) {
      console.log(error);
      } finally {
        setLoading(false);
    }
    };

    fetchJobs();
  }, []);

  if (!isAuthorized) {
    navigateTo("/");
  }

  if (loading) {
    return (
      <section className="jobs page">
        <div className="container">
          <div className="loading-section">
            <div className="loading-spinner">
              <div className="spinner"></div>
              <p>Loading jobs...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="jobs page">
      <div className="container">
        <div className="jobs-header">
          <h1>Discover Your Next Opportunity</h1>
          <p>Explore thousands of job opportunities with all the information you need</p>
        </div>
        
        <div className="jobs-stats">
          <div className="stat-item">
            <span className="stat-number">{jobs.jobs ? jobs.jobs.length : 0}</span>
            <span className="stat-label">Available Jobs</span>
          </div>
        </div>

        <div className="jobs-grid">
          {jobs.jobs && jobs.jobs.length > 0 ? (
            jobs.jobs.map((job) => (
              <div className="job-card" key={job._id}>
                <div className="job-header">
                  <div className="job-icon">
                    <FaBriefcase />
                  </div>
                  <div className="job-title">
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-category">
                        <FaBuilding /> {job.category}
                      </span>
                      <span className="job-location">
                        <FaMapMarkerAlt /> {job.country}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="job-actions">
                  <Link to={`/job/${job._id}`} className="view-job-btn">
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="no-jobs">
              <div className="no-jobs-icon">
                <FaBriefcase />
              </div>
              <h3>No Jobs Available</h3>
              <p>Check back later for new opportunities</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
