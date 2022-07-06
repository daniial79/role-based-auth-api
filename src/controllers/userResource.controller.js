//logic section
const userFirstResource = async (req, res, next) => {
    res.status(200).json({
        message: 'here you go. (you dont need to be admin to access this resource)'
    })
}

const userSecondResource = async (req, res, next) => {
    res.status(200).json({
        message: 'here you go. (you dont need to be admin to access this resource)'
    })
}


//exporting section
export default {
    userFirstResource,
    userSecondResource
}