import axios from "axios";
import * as types from "./actionTypes";
import ExternalMessageWindow from "../../Components/CommonComponents/ExternalWIndow";
import { toast } from 'react-toastify'
import { useLocation } from "react-router-dom";

let END_POINT
if (process.env.NODE_ENV === 'development') {
    END_POINT = "http://127.0.0.1:5000"
}
else if (process.env.NODE_ENV === 'production') {
    if (process.env.TWO_ENV == 'VERCEL') {
        END_POINT = "https://clinic-management-1nq8-sam890s-projects.vercel.app"

    }
    else {
        END_POINT = "https://api.adityahomoeopathicclinic.com"
    }

}

// END_POINT = "http://127.0.0.1:5000"
// END_POINT = "https://api.adityahomoeopathicclinic.com"
// END_POINT = "https://clinic-management-1nq8-sam890s-projects.vercel.app"


// jwtToken
const getJwtToken = () => {
    const userData = JSON.parse(sessionStorage.getItem("clinic-application-jwt"));
    return "Bearer " + String(userData.token);
};


// add new doctor
const addNewDoctor = (data) => async (dispatch) => {

    dispatch({ type: types.ADD_NEW_DOCTOR_PROCESSING });

    try {
        const result = await axios.post(`${END_POINT}/doctor`, data, {
            headers: {
                Authorization: getJwtToken()
            }
        });

        // successfully added
        dispatch({ type: types.ADD_NEW_DOCTOR_SUCCESS, payload: result.data });

    } catch (error) {

        // fail to add doctor
        dispatch({ type: types.ADD_NEW_DOCTOR_FAIL, payload: error.response.data.msg });
    }

    // reset add doctor state
    setTimeout(() => {
        dispatch({ type: types.ADD_NEW_DOCTOR_STATE_RESET });
    }, 2000)
}


// add new Patient
const addNewPatient = (data) => async (dispatch) => {

    let customerPath = window.location.pathname.startsWith('/public') ? 'public/customer' : 'customer'

    dispatch({ type: types.ADD_NEW_PATIENT_PROCESSING });

    try {
        const result = await axios.post(`${END_POINT}/${customerPath}`, data, {
            headers: {
                Authorization: window.location.pathname.startsWith('/public') ? '' : getJwtToken()
            }
        });

        // successfully added
        dispatch({ type: types.ADD_NEW_PATIENT_SUCCESS, payload: result?.data });

    } catch (error) {
        // fail to add Patient
        dispatch({ type: types.ADD_NEW_PATIENT_FAIL, payload: error.response?.data?.msg });
    }

    // reset add Receptionist state
    setTimeout(() => {
        dispatch({ type: types.ADD_NEW_PATIENT_STATE_RESET });
    }, 2000)
}




// get all doctors
const getAllDoctor = (data) => async (dispatch) => {
    dispatch({ type: types.GET_ALL_DOCTOR_PROCESSING });

    try {
        const result = await axios.get(`${END_POINT}/doctor?search=${data.search}&page=${data.page}&limit=${data.limit}`, {
            headers: {
                Authorization: getJwtToken()
            }
        });
        // successfully added
        dispatch({ type: types.GET_ALL_DOCTOR_SUCCESS, payload: result.data });

    } catch (error) {
        // fail to add Patient
        dispatch({ type: types.GET_ALL_DOCTOR_FAIL, payload: "Somthing Went Wrong!" });
    }
}

const getAllDoctor_External = (data) => async (dispatch) => {

    dispatch({ type: types.GET_ALL_DOCTOR_PROCESSING });

    try {
        const result = await axios.get(`${END_POINT}/doctor/external/doctor/?search=${data.search}&page=${data.page}&limit=${data.limit}`, {
        });
        // successfully added
        dispatch({ type: types.GET_ALL_DOCTOR_SUCCESS, payload: result.data });

    } catch (error) {
        // fail to add Patient
        dispatch({ type: types.GET_ALL_DOCTOR_FAIL, payload: "Somthing Went Wrong!" });
    }
}


// delete doctor
const deleteDoctor = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_DOCTOR_PROCESSING });

    try {
        const result = await axios.delete(`${END_POINT}/doctor/${id}`, {
            headers: {
                Authorization: getJwtToken()
            }
        });
        // successfully added
        dispatch({ type: types.DELETE_DOCTOR_SUCCESS, payload: result.data });

    } catch (error) {
        // fail to add Patient
        dispatch({ type: types.DELETE_DOCTOR_FAIL, payload: "Somthing Went Wrong!" });
    }

    // reset delete doctor state
    setTimeout(() => {
        dispatch({ type: types.DELETE_DOCTOR_STATE_RESET });
    }, 2000)
}


// get single doctor
const getSingleDoctor = (doctorId) => async (dispatch) => {

    try {
        const result = await axios.get(`${END_POINT}/doctor/${doctorId}`, {
            headers: {
                Authorization: getJwtToken()
            }
        });
        dispatch({ type: types.GET_SINGLE_DOCTOR_SUCCESS, payload: result.data })
        // successfully added
    } catch (error) {
        console.log('errro while retriveing doctor', error)
    }
}


// update doctor
const updateDoctor = (data) => async (dispatch) => {
    dispatch({ type: types.UPDATE_DOCTOR_PROCESSING });

    try {
        const result = await axios.put(`${END_POINT}/doctor/profile/${data._id}`, data, {
            headers: {
                Authorization: getJwtToken()
            }
        });
        // successfully added
        dispatch({ type: types.UPDATE_DOCTOR_SUCCESS, payload: result.data });

    } catch (error) {
        // fail to add Patient
        dispatch({ type: types.UPDATE_DOCTOR_FAIL, payload: "Somthing Went Wrong!" });
    }

    // reset delete doctor state
    setTimeout(() => {
        dispatch({ type: types.UPDATE_DOCTOR_STATE_RESET });
    }, 2000)
}


// get all Receptionist
const getAllReceptionist = (data) => async (dispatch) => {
    dispatch({ type: types.GET_ALL_RECEPTIONIST_PROCESSING });

    try {
        const result = await axios.get(`${END_POINT}/receptionist?search=${data.search}&page=${data.page}&limit=${data.limit}`, {
            headers: {
                Authorization: getJwtToken()
            }
        });
        // successfully added
        dispatch({ type: types.GET_ALL_RECEPTIONIST_SUCCESS, payload: result.data });

    } catch (error) {
        // fail to add Patient
        dispatch({ type: types.GET_ALL_RECEPTIONIST_FAIL, payload: "Somthing Went Wrong!" });
    }
}


// get single receptionist
const getSingleReceptionist = (data) => async (dispatch) => {

    // successfully added
    dispatch({ type: types.GET_SINGLE_RECEPTIONIST_SUCCESS, payload: data });
}




// delete receptionist
const deleteReceptionist = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_RECEPTIONIST_PROCESSING });

    try {
        const result = await axios.delete(`${END_POINT}/receptionist/${id}`, {
            headers: {
                Authorization: getJwtToken()
            }
        });
        // successfully added
        dispatch({ type: types.DELETE_RECEPTIONIST_SUCCESS, payload: result.data.message });

    } catch (error) {
        // fail to add Patient
        dispatch({ type: types.DELETE_RECEPTIONIST_FAIL, payload: "Somthing Went Wrong!" });
    }

    // reset delete doctor state
    setTimeout(() => {
        dispatch({ type: types.DELETE_RECEPTIONIST_STATE_RESET });
    }, 2000)
}


// get all Patient
const getAllPatient = (data) => async (dispatch) => {
    dispatch({ type: types.GET_ALL_PATIENT_PROCESSING });


    try {
        const result = await axios.get(`${END_POINT}/customer?search=${data.search}&page=${data.page}&limit=${data.limit}`, {
            headers: {
                Authorization: getJwtToken()
            }
        });

        // successfully added
        dispatch({ type: types.GET_ALL_PATIENT_SUCCESS, payload: result.data });

    } catch (error) {
        console.log(error)
        // fail to add Patient
        dispatch({ type: types.GET_ALL_PATIENT_FAIL, payload: "Somthing Went Wrong!" });
    }
}


// delete Patient
const deletePatient = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_PATIENT_PROCESSING });

    try {
        const result = await axios.delete(`${END_POINT}/customer/${id}`, {
            headers: {
                Authorization: getJwtToken()
            }
        });
        // successfully added
        dispatch({ type: types.DELETE_PATIENT_SUCCESS, payload: result.data.message });

    } catch (error) {
        // fail to add Patient
        dispatch({ type: types.DELETE_PATIENT_FAIL, payload: "Somthing Went Wrong!" });
    }

    // reset delete doctor state
    setTimeout(() => {
        dispatch({ type: types.DELETE_PATIENT_STATE_RESET });
    }, 2000)
}


// get single patient
const getSinglePatient = (data) => async (dispatch) => {

    // successfully added
    dispatch({ type: types.GET_SINGLE_PATIENT_SUCCESS, payload: data });
}


const getSinglePatientFetch = (patientId) => async (dispatch) => {
    console.log(patientId, 'what is patient Id')
    try {
        const result = await axios.get(`${END_POINT}/customer/${patientId}`, {
            headers: {
                Authorization: getJwtToken()
            }
        });

        // successfully added
        dispatch({ type: types.GET_SINGLE_PATIENT_SUCCESS, payload: result.data });

    } catch (error) {
        // fail to add Patient
        dispatch({ type: types.GET_SINGLE_PATIENT_FAIL, payload: "Somthing Went Wrong!" });
    }
}


// update Patient
const updatePatient = (data) => async (dispatch) => {
    dispatch({ type: types.UPDATE_PATIENT_PROCESSING });
    try {
        const result = await axios.put(`${END_POINT}/customer/updateProfile/${data._id}`, data, {
            headers: {
                Authorization: getJwtToken()
            }
        });

        // successfully added
        dispatch({ type: types.UPDATE_PATIENT_SUCCESS, payload: "Patient Data Updated Successfully." });

    } catch (error) {
        // fail to add Patient
        dispatch({ type: types.UPDATE_PATIENT_FAIL, payload: error.response.data.error });
    }

    // reset delete doctor state
    setTimeout(() => {
        dispatch({ type: types.UPDATE_PATIENT_STATE_RESET });
    }, 2000)
}


// add new consultant
const addNewConsultant = (data) => async (dispatch) => {

    dispatch({ type: types.ADD_NEW_CONSULTANT_PROCESSING });

    try {
        const result = await axios.post(`${END_POINT}/consultant`, data, {
            headers: {
                Authorization: getJwtToken()
            }
        });

        // successfully added
        dispatch({ type: types.ADD_NEW_CONSULTANT_SUCCESS, payload: result.data.msg });

    } catch (error) {

        // fail to add doctor
        dispatch({ type: types.ADD_NEW_CONSULTANT_FAIL, payload: error.response.data.msg });
    }

    // reset add doctor state
    setTimeout(() => {
        dispatch({ type: types.ADD_NEW_CONSULTANT_STATE_RESET });
    }, 2000)
}


// get all Consultant
const getAllConsultant = (data) => async (dispatch) => {
    dispatch({ type: types.GET_ALL_CONSULTANT_PROCESSING });

    try {
        const result = await axios.get(`${END_POINT}/consultant?search=${data.search}&page=${data.page}&limit=${data.limit}`, {
            headers: {
                Authorization: getJwtToken()
            }
        });

        dispatch({ type: types.GET_ALL_CONSULTANT_SUCCESS, payload: result.data });

    } catch (error) {

        dispatch({ type: types.GET_ALL_CONSULTANT_FAIL, payload: "Somthing Went Wrong!" });
    }
}


// delete Consultant
const deleteConsultant = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_CONSULTANT_PROCESSING });

    try {
        const result = await axios.delete(`${END_POINT}/consultant/${id}`, {
            headers: {
                Authorization: getJwtToken()
            }
        });
        // successfully added
        dispatch({ type: types.DELETE_CONSULTANT_SUCCESS, payload: result.data.message });

    } catch (error) {
        // fail to add Patient
        dispatch({ type: types.DELETE_CONSULTANT_FAIL, payload: "Somthing Went Wrong!" });
    }

    // reset delete doctor state
    setTimeout(() => {
        dispatch({ type: types.DELETE_CONSULTANT_STATE_RESET });
    }, 2000)
}


// get single consultant
const getSingleConsultant = (data) => async (dispatch) => {
    dispatch({ type: types.GET_SINGLE_CONSULTANT_SUCCESS, payload: data });
}


// update consultant
const updateConsultant = (data) => async (dispatch) => {
    dispatch({ type: types.UPDATE_CONSULTANT_PROCESSING });
    try {
        const result = await axios.put(`${END_POINT}/consultant/profile/${data._id}`, data, {
            headers: {
                Authorization: getJwtToken()
            }
        });

        // successfully added
        dispatch({ type: types.UPDATE_CONSULTANT_SUCCESS, payload: "Consultant Data Updated Successfully." });

    } catch (error) {

        // fail to add Patient
        dispatch({ type: types.UPDATE_CONSULTANT_FAIL, payload: error.response.data.error || "Consultant Updation Failed." });
    }

    // reset delete doctor state
    setTimeout(() => {
        dispatch({ type: types.UPDATE_CONSULTANT_STATE_RESET });
    }, 2000)
}


// add new Appointment
const addNewAppointment = (data) => async (dispatch) => {

    let appointmentPath = window.location.pathname.startsWith('/public') ? 'public/appointment' : 'appointment'


    dispatch({ type: types.ADD_APPOINTMENT_PROCESSING });

    try {
        const result = await axios.post(`${END_POINT}/${appointmentPath}`, data, {
            headers: {
                Authorization: window.location.pathname.startsWith('/public') ? '' : getJwtToken()
            }
        });
        // successfully added
        dispatch({ type: types.ADD_APPOINTMENT_SUCCESS, payload: "Appointment Addedd Successfully." });
    } catch (error) {

        // fail to add doctor
        dispatch({ type: types.ADD_APPOINTMENT_FAIL, payload: error.response.data.error || "Somthing Went Wrong." });
    }

    // reset add doctor state
    setTimeout(() => {
        dispatch({ type: types.ADD_APPOINTMENT_STATE_RESET });
    }, 2000)
}





// add new enquiry
const addNewEnquiry = (data) => async (dispatch) => {

    dispatch({ type: types.ADD_ENQUIRY_PROCESSING });

    try {
        const result = await axios.post(`${END_POINT}/enquiry`, data, {
            headers: {
                Authorization: getJwtToken()
            }
        });

        // successfully added
        dispatch({ type: types.ADD_ENQUIRY_SUCCESS, payload: "Enquiry Addedd Successfully." });

    } catch (error) {

        // fail to add doctor
        dispatch({ type: types.ADD_ENQUIRY_FAIL, payload: error.message || "Somthing Went Wrong." });
    }

    // reset add doctor state
    setTimeout(() => {
        dispatch({ type: types.ADD_ENQUIRY_STATE_RESET });
    }, 2000)
}


// get singel Appointment
const getAllAppointment = (data, listType) => async (dispatch) => {
    dispatch({ type: types.GET_ALL_APPOINTMENT_PROCESSING });

    try {
        const result = await axios.get(`${END_POINT}/appointment?doctorName=${data.search}&page=${data.page}&limit=${data.limit}&displayType=${listType}&patient=${data?.patient}`, {
            headers: {
                Authorization: getJwtToken()
            }
        });
        // successfully added
        dispatch({ type: types.GET_ALL_APPOINTMENT_SUCCESS, payload: result.data });

    } catch (error) {
        // fail to add Patient
        dispatch({ type: types.GET_ALL_APPOINTMENT_FAIL, payload: "Somthing Went Wrong!" });
    }
}

// get singel Appointment
const updateAppointmentStatus = (appointmentId, Status) => async (dispatch) => {

    try {
        const result = await axios.put(`${END_POINT}/appointment/${appointmentId}`, { status: Status }, {
            headers: {
                Authorization: getJwtToken()
            }
        });
        // successfully added
        toast.success(Status === 'Cancelled' ? 'Appointment Cancelled Successfully' : 'Appointment Changed Successfully')
        window.location.reload()

    } catch (error) {
        // fail to add Patient
        toast.error("Could'nt change status")
    }
}

// get singel Appointment
const getAllAppointment_External = (data) => async (dispatch) => {
    dispatch({ type: types.GET_ALL_APPOINTMENT_PROCESSING });

    try {
        const result = await axios.get(`${END_POINT}/appointment/external?doctorName=${data.search}&page=${data.page}&limit=${data.limit}`, {
        });
        // successfully added
        dispatch({ type: types.GET_ALL_APPOINTMENT_SUCCESS, payload: result.data });

    } catch (error) {
        // fail to add Patient
        dispatch({ type: types.GET_ALL_APPOINTMENT_FAIL, payload: "Somthing Went Wrong!" });
    }
}

const addNewPrescription = (data) => async (dispatch) => {

    dispatch({ type: types?.ADD_PRESCRIPTION_PROCESSING });

    try {
        const result = await axios.post(`${END_POINT}/prescription`, data, {
            headers: {
                Authorization: getJwtToken()
            }
        });

        // successfully added
        dispatch({ type: types.ADD_PRESCRIPTION_SUCCESS, payload: "Prescription Saved Successfully." });
        window.location.reload()

    } catch (error) {

        // fail to add doctor
        dispatch({ type: types.ADD_PRESCRIPTION_FAIL, payload: error.message || "Somthing Went Wrong." });
    }

    // reset add doctor state
    setTimeout(() => {
        dispatch({ type: types.ADD_PRESCRIPTION_STATE_RESET });
    }, 2000)
}


const getAllPatientPrescription = (data) => async (dispatch) => {
    try {
        const result = await axios.get(`${END_POINT}/prescription?patientId=${data?.patient}&doctorId=${data?.doctor}&&page=${data?.page}&&pageSize=${data.pageSize}`, {
            headers: {
                Authorization: getJwtToken()
            }
        });

        dispatch({ type: types.GET_ALL_PATIENT_PRESCRIPTION_DATA, payload: result?.data })
    } catch (error) {
        dispatch({ type: types.GET_ALL_PATIENT_PRESCRIPTION_DATA, payload: undefined })
        console.log('Check Error', error)

    }
}

const UploadFile = (data, prescriptionId, uploadType, uploadSection) => async (dispatch) => {
    const formData = new FormData();
    formData.append('document', data, data.name);


    try {
        const result = await axios.post(`${END_POINT}/${uploadSection}/upload/${prescriptionId}/${uploadType}`, formData, {
            headers: {
                Authorization: getJwtToken()
            }
        });
        toast.success('File Uploaded')
        // window.location.reload(true)
    } catch (error) {
        // dispatch({ type: types.GET_ALL_PATIENT_PRESCRIPTION_DATA, payload: undefined })
        toast.error('File Upload Failed')
        console.log('Check Error', error)

    }
}


const UploadFiles = (files, prescriptionId, uploadType, uploadSection) => async (dispatch) => {
    const formData = new FormData();

    files.forEach((file, index) => {
        formData.append('multipleDocs', file);  // Use 'files' as the field name
    });

    try {
        const result = await axios.post(`${END_POINT}/${uploadSection}/upload_files/${prescriptionId}/${uploadType}`, formData, {
            headers: {
                Authorization: getJwtToken(),
            },
        });

        toast.success('Files Uploaded');
        // window.location.reload(true)
    } catch (error) {
        // Handle error
        toast.error('Files Upload Failed');
        console.log('Check Error', error);
    }
};


const RemoveFile = (fileId, prescriptionID, uploadType, uploadSection) => async (dispatch) => {

    try {
        const result = await axios.delete(`${END_POINT}/${uploadSection}/remove/${fileId}/${prescriptionID}/${uploadType}`, {
            headers: {
                Authorization: getJwtToken()
            }
        });
        toast.success('File Removed')
        // window.location.reload()
    } catch (error) {
        toast.error('Failed to remove file')
        console.log('Check Error', error)

    }
}



const UploadImages = (data, itemId, uploadType, uploadSection) => async (dispatch) => {
    const formData = new FormData();

    data?.forEach((ifile) => {
        formData.append('images', ifile)
    })
    try {
        const result = await axios.post(`${END_POINT}/${uploadSection}/upload/${itemId}/${uploadType}`, formData, {
            headers: {
                Authorization: getJwtToken()
            }
        });
        return true
        // window.location.reload(true)
    } catch (error) {
        // dispatch({ type: types.GET_ALL_PATIENT_PRESCRIPTION_DATA, payload: undefined })
        toast.error('File Upload Failed')
        console.log('Check Error', error)

    }
}


const DeleteImages = (data, prescriptionId, uploadSection, uploadType = 'pictures') => async (dispatch) => {

    try {
        const result = await axios.delete(`${END_POINT}/${uploadSection}/delete/image/${prescriptionId}/${uploadType}`, { data }, {
            headers: {
                Authorization: getJwtToken()
            }
        });
        toast.success('Files Deleted')
        // return true
        // window.location.reload(true)
    } catch (error) {
        toast.error('Filed to delete images')
        console.log('Check Error', error)

    }
}


// get singel Appointment
const getAllFilteredAppointments = (data, queryParams) => async (dispatch) => {
    dispatch({ type: types.GET_ALL_APPOINTMENT_PROCESSING });

    try {
        const result = await axios.post(`${END_POINT}/appointment/getFiltered?pageSize=${queryParams?.pageSize}`, { search: data }, {
            headers: {
                Authorization: getJwtToken()
            }
        });
        // successfully added

        if (data?.IsOnline === true) {
            dispatch({ type: 'GET_ONLINE_APPOINTMENTS', payload: result.data });
        }
        else if (data?.IsOnline === false) {
            dispatch({ type: 'GET_OFFLINE_APPOINTMENTS', payload: result.data });
        }
        else if (data?.IsConsultant === true) {
            dispatch({ type: 'GET_CONSULTANT_APPOINTMENTS', payload: result.data });
        }


    } catch (error) {
        // fail to add Patient
        dispatch({ type: types.GET_ALL_APPOINTMENT_FAIL, payload: "Somthing Went Wrong!" });
    }
}


//get all users
const getAllUsers = (data) => async (dispatch) => {
    dispatch({ type: types.GET_ALL_USERS_PROCESSING });

    try {
        const result = await axios.get(`${END_POINT}/configAccess?search=${data.search}&page=${data.page}&limit=${data.limit}`, {
            headers: {
                Authorization: getJwtToken()
            }
        });
        // successfully added
        dispatch({ type: types.GET_ALL_USERS_SUCCESS, payload: result.data });

    } catch (error) {
        // fail to add Patient
        dispatch({ type: types.GET_ALL_USERS_FAIL, payload: "Somthing Went Wrong!" });
    }
}


export {
    UploadImages, DeleteImages, updateAppointmentStatus,
    END_POINT, UploadFile, RemoveFile, addNewPrescription, getAllPatientPrescription, addNewDoctor, addNewPatient, getAllDoctor, deleteDoctor, getSingleDoctor, updateDoctor, getAllReceptionist, getSingleReceptionist, deleteReceptionist, getAllPatient, deletePatient, updatePatient, getSinglePatient, addNewConsultant, getAllConsultant, deleteConsultant, getSingleConsultant, updateConsultant,
    addNewAppointment, addNewEnquiry, getAllAppointment, getAllDoctor_External, getAllAppointment_External,
    getSinglePatientFetch, UploadFiles, getAllFilteredAppointments, getJwtToken
    , getAllUsers
};