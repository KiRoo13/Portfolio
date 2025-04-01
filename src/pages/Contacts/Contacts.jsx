import { contactsList } from '../../helpers/contactsList';
import ContactCard from '../../components/Contact/ContactCard';
import './Contacts.css'


function Contacts() {
   return ( 
       <section className="section">
         <div className="conteiner">
            <div className="contacts-content">
               {contactsList.map((contact)=> <ContactCard key={contact.title} contact={contact}/>)}
            </div>
         </div>
       </section>
    );
}

export default Contacts;