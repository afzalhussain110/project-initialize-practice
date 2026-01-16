import Contact from "../Models/contactScheme.js";

const CreateContact = async(req, resp) => {

    try {

        const {name, email, phone, city, subject, message} = req.body

        const contact = await Contact.create({
            "name": name,
            "email": email,
            "phone": phone,
            "city": city,
            "subject": subject,
            "message": message
        })

        return resp.status(200).json({
            status: "success",
            data: contact
        })

        
    } catch (error) {

        console.log(error)

        return resp.status(500).json({
            status: "failed",
            message: "Not Found"
        })
        
    }

}

export {CreateContact}