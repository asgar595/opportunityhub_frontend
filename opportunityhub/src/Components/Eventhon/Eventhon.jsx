import React from "react";
import "./Eventhon.css";
import { BsPeopleFill } from "react-icons/bs";

const hackathonsData = {
  open: [
    {
      title: "PEC Hacks 2.0",
      type: "Hackathon",
      theme: "No Restrictions",
      participants: "+5000 participating",
      participantsImages: [
        "participant1.jpg",
        "participant2.jpg",
        "participant3.jpg",
      ],
      status: "Applications closed",
      offline: "Offline",
      startDate: "Starts 28/12/24",
      buttonLabel: "Applications closed",
    },
    {
      title: "HackOff v4.0",
      type: "Hackathon",
      theme: "No Restrictions",
      participants: "+500 participating",
      participantsImages: [
        "participant4.jpg",
        "participant5.jpg",
        "participant6.jpg",
      ],
      status: "Live",
      offline: "Offline",
      buttonLabel: "See projects",
    },
  ],
  closed: [
    {
      title: "CodeClash'24",
      type: "Hackathon",
      theme: "No Restrictions",
      participants: "+1000 participated",
      participantsImages: [
        "participant7.jpg",
        "participant8.jpg",
        "participant9.jpg",
      ],
      status: "Ended",
      offline: "Offline",
      buttonLabel: "See projects",
    },
    {
      title: "Technovate 2.0",
      type: "Hackathon",
      theme: "No Restrictions",
      participants: "+500 participated",
      participantsImages: [
        "participant10.jpg",
        "participant11.jpg",
        "participant12.jpg",
      ],
      status: "Ended",
      offline: "Offline",
      buttonLabel: "See projects",
    },
  ],
};

const HackathonCard = ({ event }) => (
  <div className="hackathon-card">
    <h2 className="title">{event.title}</h2>
    <p className="type">{event.type}</p>
    <div className="theme">
      <strong>Theme: </strong>
      {event.theme}
    </div>
    <div className="participants">
      <div className="avatars">
        {event.participantsImages.map((src, index) => (
          <BsPeopleFill size={30}/>
        ))}
      </div>
      <p>{event.participants}</p>
    </div>
    <div className="status-bar">
      <span>{event.offline}</span>
      <span>{event.startDate || event.status}</span>
    </div>
    <button className="cta-button">{event.buttonLabel}</button>
  </div>
);

const Eventhon = () => {
  return (
    <div className="hackathons-container">
      <div className="section">
        <h1>Open</h1>
        <div className="cards-container">
          {hackathonsData.open.map((event, index) => (
            <HackathonCard key={index} event={event} />
          ))}
        </div>
      </div>

      <div className="section">
        <h1>Closed</h1>
        <div className="cards-container">
          {hackathonsData.closed.map((event, index) => (
            <HackathonCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eventhon;
