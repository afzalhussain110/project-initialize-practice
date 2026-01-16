import mongoose from "mongoose";

const contactScheme = mongoose.Schema({

    name:{
        type: String,
        require:[true, "name is required"],
    }, 

    email: {
        type: String,
        require:[true, "email is required"],
    },

    phone:{
        type: String,
        require:[true, "phone is required"],
    },

    city:{
        type: String,
        require:[true, "city is required"],
    },

    subject:{
        type: String,
        require:[true, "subject is required"],
    },

    message:{
        type: String,
        require:[true, "message is required"],
    },
})

const Contact = mongoose.model("Contact", contactScheme);

export default Contact;
