//logic section
const adminFirstResource = async (req, res, next) => {
    if(req.userPayload.role !== 'admin'){
        return res.status(401).json({
            message: 'access denied (admins only)'
        })
    }

    res.status(200).json({
        message: 'welcome admin'
    });
}

const adminSecondResource = async (req, res, next) => {
    if(req.userPayload.role !== 'admin'){
        return res.status(401).json({
            message: 'access denied (admins only)'
        })
    }

    res.status(200).json({
        message: 'welcome admin'
    });
}


//exporting section
export default {
    adminFirstResource,
    adminSecondResource
}