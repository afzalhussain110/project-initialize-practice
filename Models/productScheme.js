import mongoose from "mongoose"

const ProductScheme = mongoose.Scheme({

    p_name: {
        type: String,
        required: [true, "p_name required"]
    },

    p_image: {
        type: String
    }

})

const Product = mongoose.model("Product", ProductScheme)

export default Product