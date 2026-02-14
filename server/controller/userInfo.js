const mongoose = require('mongoose');


 const UserInfoSchema = new mongoose.Schema({
                fullname: String,
                email: String,
                phone_no: String,
                education_bg: String,
                emp_status: String,
                portifolio_link: String,
                github_link: String,
                skills: [String],
                experience: String,
            });

const UserInfo = mongoose.model('UserInfo', UserInfoSchema);


module.exports = UserInfo;