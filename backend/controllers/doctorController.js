import doctorModel from "../models/doctorModel.js";

export const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;
    if (!docId) {
      return res.json({ success: false, message: "Missing details" });
    }
    const docData = await doctorModel.findById(docId);
    await docData.updateOne({ available: !docData.available });
    res.json({
      success: true,
      message: `${docData.name} Availability changed`,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//--getallDoctors---//
export const allDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(["-password", "-email"]);
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
