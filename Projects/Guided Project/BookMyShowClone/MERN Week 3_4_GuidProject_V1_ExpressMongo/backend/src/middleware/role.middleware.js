//Role middleware :RBAC (Role Based Access Control) : Admin, User, Moderator

exports.authorizeRoles = (...roles) =>{
    return (req,res,next) =>{
        if(!req.user  || !roles.includes(req.user.role)){
            return res.status(401).json({
            success : false,
            message :"Access denied:Insufficient permissions",
        });
        }
        next();
    };
};
