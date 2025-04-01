import "./ContactCard.css";

function ContactCard({ contact }) {
  return (
    <div className="contact-card">
      <div className="contact-icon">{contact.icon}</div>
      <div className="contact-info">
        <h3>{contact.title}</h3>
        <a href={contact.link} className="contact-link">
          {contact.text}
        </a>
      </div>
    </div>
  );
}

export default ContactCard;
