import ListItem from "../ListItem/ListItem";
import ListHeader from "../ListHeader/ListHeader";
import styles from "./ContactList.module.scss";

const contacts = [
    {
        firstName: "Bob",
        lastName: "Dilan",
        phoneNumber: "88005553535",
        email: "BoBDilan@gmail.com",
        fullName: 'Bob Dilan'
    },
    {
        firstName: "John",
        lastName: "Kirby",
        phoneNumber: "88005553536",
        email: "JohnKirby@gmail.com",
        fullName: 'John Kirby'
    },
    {
        firstName: "May",
        lastName: "Parker",
        phoneNumber: "88005553537",
        email: "MayParker@gmail.com",
        fullName: 'May Parker'
    }
];

const ContactList = () => {
    return (
        <>
            <div className={ styles.header }>Contact List</div>
            <div className={ styles.contactListWrapper }>
                <ListHeader />
                <ListItem data={contacts}/>
            </div>
        </>
    );
}

export default ContactList;
