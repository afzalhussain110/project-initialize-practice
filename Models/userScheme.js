import mongoose from "mongoose";

const UserScheme = mongoose.Scheme({

    name: {
        type: String,
        required: [true, "name required"]
    },

    email: {
        type: String,
        require:[true, "email is required"],
    },

    phone:{
        type: String,
        require:[true, "phone is required"],
    },
})

const User = mongoose.model("User", UserScheme)

export default User;