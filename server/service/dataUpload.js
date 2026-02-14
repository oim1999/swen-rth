const { Router } = require('express');
const connectDB = require('../config/db');
const mongoose = require('mongoose');
const UserInfo = require('../controller/userInfo');



connectDB();

const router = Router();


async function uploadInfo(fullname, email, phone_no, education_bg, emp_status, portifolio_link, github_link, skills, experience) {
    try {
            const userInfo = new UserInfo({
                fullname,
                email,
                phone_no,
                education_bg,
                emp_status,
                portifolio_link,
                github_link,
                skills,
                experience,
            });

            await userInfo.save().then(() => {
                return 'User information uploaded successfully!'; 
            }).catch((err) => {
                console.error('Error saving user information:', err);
                return 'Failed to upload user information.';
            } );  
        
    }catch (error) {
        console.error('Error uploading user information:', error);
        throw error;
    }   
}


// pharsed pdf uploader
router.post('/pdf', (req, res) => {
    res.json({ message: 'File uploaded successfully!' });
});


// profile picture (base64) uploader 
router.post('/profile', (req, res) => {
    res.json({ message: 'Profile picture uploaded successfully!' });
});


// user information uploader
router.post('/info', (req, res) => {
    const { fullname, email, phone_no, education_bg, emp_status, portifolio_link, github_link, skills, experience } = req.body;

    const response = uploadInfo(fullname, email, phone_no, education_bg, emp_status, portifolio_link, github_link, skills, experience);

    res.json({ message: 'User information uploaded successfully!', response: response });
});



module.exports = router;