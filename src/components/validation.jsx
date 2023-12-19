import * as Yup from 'yup';



 const UserValidation = Yup.object().shape({
    header: Yup.string().required().max(15, 'Header can contain a maximum of of 15  characters'),
    content: Yup.string().required(),
    asignee: Yup.string().required()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/,'Asignee name must be 4 - 8 characters and contain a mix of letters and digits'),
    issue: Yup.string().required().min(4, 'Issue must be at least 4 characters'),
 })
    

export default UserValidation



