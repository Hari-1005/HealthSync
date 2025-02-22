
//--add doctor
export const addDoctor = async(req,res) => {
    const {name, email, password, speciality, degree, experience, about, available, fees, address} = req.body;

    const imageFile = req.file;

    console.log(name, email, password, speciality, degree, experience, about, available, fees, address, imageFile)
}