export const CARD_DATA = [{
    poster: "https://upload.wikimedia.org/wikipedia/commons/5/51/This_Gun_for_Hire_%281942%29_poster.jpg",
    title: "K.G.F: Chapter 2",
    section: "Five Live Program",
    date: "July 1, 2020",
    time: "19:30 - 19:55 IST",
    duration: "25 Minutes",
    teacher: "Vincent Gigault",
    format: "private_tutoring",
    age: "6+",
    class_size: "Unlimited",
    price: "FREE",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, tellus ut placerat eleifend, urna est pellentesque justo, vitae ultrices elit diam vel nunc. Integer eget justo malesuada, dignissim ante a, placerat elit. Nulla facilisi."
}, {
    poster: "https://upload.wikimedia.org/wikipedia/commons/5/51/This_Gun_for_Hire_%281942%29_poster.jpg",
    title: "Atkan Chatkan",
    section: "Five Live Program",
    date: "July 1, 2020",
    time: "19:30 - 19:55 IST",
    duration: "25 Minutes",
    teacher: "Vincent Gigault",
    format: "free_live_program",
    age: "6+",
    class_size: "Unlimited",
    price: "FREE",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, tellus ut placerat eleifend, urna est pellentesque justo, vitae ultrices elit diam vel nunc. Integer eget justo malesuada, dignissim ante a, placerat elit. Nulla facilisi."
}, {
    poster: "https://upload.wikimedia.org/wikipedia/commons/5/51/This_Gun_for_Hire_%281942%29_poster.jpg",
    title: "The Big Bull",
    section: "Five Live Program",
    date: "July 1, 2020",
    time: "19:30 - 19:55 IST",
    duration: "25 Minutes",
    teacher: "Vincent Gigault",
    format: "group_class",
    age: "6+",
    class_size: "Unlimited",
    price: "FREE",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, tellus ut placerat eleifend, urna est pellentesque justo, vitae ultrices elit diam vel nunc. Integer eget justo malesuada, dignissim ante a, placerat elit. Nulla facilisi."
}, {
    poster: "https://upload.wikimedia.org/wikipedia/commons/5/51/This_Gun_for_Hire_%281942%29_poster.jpg",
    title: "Bhuj: The Pride of India",
    section: "Five Live Program",
    date: "July 1, 2020",
    time: "19:30 - 19:55 IST",
    duration: "25 Minutes",
    teacher: "Vincent Gigault",
    format: "in_person",
    age: "6+",
    class_size: "Unlimited",
    price: "FREE",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, tellus ut placerat eleifend, urna est pellentesque justo, vitae ultrices elit diam vel nunc. Integer eget justo malesuada, dignissim ante a, placerat elit. Nulla facilisi."
}, {
    poster: "https://upload.wikimedia.org/wikipedia/commons/5/51/This_Gun_for_Hire_%281942%29_poster.jpg",
    title: "Maguva",
    section: "Five Live Program",
    date: "July 1, 2020",
    time: "19:30 - 19:55 IST",
    duration: "25 Minutes",
    format: "in_person",
    teacher: "Vincent Gigault",
    age: "6+",
    class_size: "Unlimited",
    price: "FREE",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, tellus ut placerat eleifend, urna est pellentesque justo, vitae ultrices elit diam vel nunc. Integer eget justo malesuada, dignissim ante a, placerat elit. Nulla facilisi."
}, {
    poster: "https://upload.wikimedia.org/wikipedia/commons/5/51/This_Gun_for_Hire_%281942%29_poster.jpg",
    title: "Rambo",
    section: "Five Live Program",
    date: "July 1, 2020",
    time: "19:30 - 19:55 IST",
    format: "in_person",
    duration: "25 Minutes",
    teacher: "Vincent Gigault",
    age: "6+",
    class_size: "Unlimited",
    price: "FREE",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie, tellus ut placerat eleifend, urna est pellentesque justo, vitae ultrices elit diam vel nunc. Integer eget justo malesuada, dignissim ante a, placerat elit. Nulla facilisi."
}]


function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export const getCardData = ({query, format}) => {
    let final = CARD_DATA;
    if (query) {
        final = final.filter(a => new RegExp(escapeRegExp(query), "ig").test(a.title));
    }
    if (format) {
        final = final.filter(a => a.format === format);
    }

    return final;

}
