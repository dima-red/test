import ListItem from "./ListItem/ListItem";
import "./ContactList.css";

const ContactList = () => {
    return (
        <>
            <div className="header">Contact List</div>
            <div className="contactListWrapper">
                <ListItem />
            </div>
        </>
    );
}

export default ContactList;
