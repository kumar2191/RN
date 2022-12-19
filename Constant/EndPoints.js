const Port= 'http://192.168.43.106:4578'

export default {
    // Student
    Student_Register:`${Port}/api/student/register`,
    Student_Login: `${Port}/api/student/login`,
    UserProfile: `${Port}/api/student/profile`,
    EditProfile: `${Port}/api/student/update`,
    ChangePassword: `${Port}/api/student/changePassword`,
    GetFine: `${Port}/api/fine/ger`
}