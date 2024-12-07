import React from "react";
import "./Hackathons.css";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const events = [
  {
    title: "Reclaim Opensource Hackweek",
    description: "Reclaim Your Data Ownership",
    runsFrom: "Oct 21 - Nov 1, 2024",
    happening: "Online",
    status: "Hackathon has ended",
    buttonLabel: "See projects",
    apply: false,
  },
  {
    title: "Build On",
    description: "Create real-world web3 apps and compete for $270k in prizes",
    runsFrom: "Oct 19 - Nov 2, 2024",
    happening: "Online",
    status: "Hackathon has ended",
    buttonLabel: "See projects",
    apply: false,
    rating: 4.5,
  },
  {
    title: "Unfold 2024",
    description: "Build for web3. Innovate the future.",
    runsFrom: "Dec 1 - 2, 2024",
    happening: "Bengaluru, India",
    status: "Applications close in 14d:4h:46m",
    buttonLabel: "Apply now",
    apply: true,
  },
  {
    title: "Reclaim Opensource Hackweek",
    description: "Reclaim Your Data Ownership",
    runsFrom: "Oct 21 - Nov 1, 2024",
    happening: "Online",
    status: "Hackathon has ended",
    buttonLabel: "See projects",
    apply: false,
  },
  {
    title: "Reclaim Opensource Hackweek",
    description: "Reclaim Your Data Ownership",
    runsFrom: "Oct 21 - Nov 1, 2024",
    happening: "Online",
    status: "Hackathon has ended",
    buttonLabel: "See projects",
    apply: false,
  },
  {
    title: "Reclaim Opensource Hackweek",
    description: "Reclaim Your Data Ownership",
    runsFrom: "Oct 21 - Nov 1, 2024",
    happening: "Online",
    status: "Hackathon has ended",
    buttonLabel: "See projects",
    apply: false,
  }
];

const Hackathons = () => {
  return (
    <div className="event-cards-container">
      {events.map((event, index) => (
        <div className="event-card" key={index}>
          <h2>{event.title}</h2>
          <p className="description">{event.description}</p>
          <div className="icons">
            {event.rating && <span>⭐ {event.rating}</span>}
            <span><FaTwitter size={30} /></span>
            <span><FaTelegramPlane size={30}/></span>
          </div>
          <div className="event-details">
            <p>
              <strong>Runs From:
                </strong> {event.runsFrom}
            </p>
            <p>
              <strong>Happening:
                
                </strong> {event.happening}
            </p>
            <p className={`status ${event.apply ? "open" : "closed"}`}>
              {event.status}
            </p>
          </div>
          <button className="cta-button">{event.buttonLabel}</button>
        </div>
      ))}
    </div>
  );
};

export default Hackathons;
