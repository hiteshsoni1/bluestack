import moment from 'moment';
import firebase from './firebase'
const tabs = ['upcomming', 'live', 'past'];
let _data = [];

export const fetchData = () => {
    let items = [];
    return firebase
        .firestore()
        .collection("bluestack")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                items.push({ id: doc.id, ...doc.data() });
            });
            _data = items;
            return items;
        });
}

export const getTabData = (tab) => {
    const currentDate = moment();
    let filteredcampaigns = _data.filter((event) => {
        switch (tab) {
            case tabs[0]:
                return moment(event.created_on).diff(currentDate, 'days') > 0;
            case tabs[1]:
                return moment(event.created_on).diff(currentDate, 'days') === 0;
            case tabs[2]:
                return moment(event.created_on).diff(currentDate, 'days') < 0;;
            default:
                return false;
        }
    });
    return filteredcampaigns;
}

export const updateData = (id, time, tab) => {
    _data = _data.map((event) => {
        if (id === event.id) {
            event.created_on = time;
            return event;
        }
        return event;
    })
    firebase
        .firestore()
        .collection("bluestack")
        .doc(id)
        .update('created_on', time)
    return getTabData(tab)
}