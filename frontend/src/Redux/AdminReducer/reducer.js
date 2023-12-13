import * as types from "./actionTypes";

const initialState = {

    addNewDoctorProcessing: false,
    addNewDoctorSuccess: false,
    addNewDoctorFail: false,
    addNewDoctorMessage: "",

    addNewReceptionistProcessing: false,
    addNewReceptionistSuccess: false,
    addNewReceptionistFail: false,
    addNewReceptionistMessage: "",

    addNewPatientProcessing: false,
    addNewPatientSuccess: false,
    addNewPatientFail: false,
    addNewPatientMessage: "",

    getAllDoctorProcessing: false,
    getAllDoctorSuccess: false,
    getAllDoctorFail: false,
    getAllDoctorMessage: "",
    getAllDoctorData: {},

    getAllUsersProcessing: false,
    getAllUsersSuccess: false,
    getAllUsersFail: false,
    getAllUsersMessage: "",
    getAllUsersData: {},

    deleteDoctorProcessing: false,
    deleteDoctorSuccess: false,
    deleteDoctorFail: false,
    deleteDoctorMessage: "",
    deleteDoctorData: {},

    updateDoctorProcessing: false,
    updateDoctorSuccess: false,
    updateDoctorFail: false,
    updateDoctorMessage: "",
    updateDoctorData: {},

    singleDoctorData: null,

    getAllReceptionistProcessing: false,
    getAllReceptionistSuccess: false,
    getAllReceptionistFail: false,
    getAllReceptionistMessage: "",
    getAllReceptionistData: {},

    updateReceptionistProcessing: false,
    updateReceptionistSuccess: false,
    updateReceptionistFail: false,
    updateReceptionistMessage: "",

    singleReceptionistData: {},

    deleteReceptionistProcessing: false,
    deleteReceptionistSuccess: false,
    deleteReceptionistFail: false,
    deleteReceptionistMessage: "",

    getAllPatientProcessing: false,
    getAllPatientSuccess: false,
    getAllPatientFail: false,
    getAllPatientMessage: "",
    getAllPatientData: null,

    deletePatientProcessing: false,
    deletePatientSuccess: false,
    deletePatientFail: false,
    deletePatientMessage: "",

    updatePatientProcessing: false,
    updatePatientSuccess: false,
    updatePatientFail: false,
    updatePatientMessage: "",

    singlePatientData: null,

    addNewConsultantProcessing: false,
    addNewConsultantSuccess: false,
    addNewConsultantFail: false,
    addNewConsultantMessage: "",

    getAllConsultantProcessing: false,
    getAllConsultantSuccess: false,
    getAllConsultantFail: false,
    getAllConsultantMessage: "",
    getAllConsultantData: {},

    deleteConsultantProcessing: false,
    deleteConsultantSuccess: false,
    deleteConsultantFail: false,
    deleteConsultantMessage: "",

    singleConsultantData: {},

    updateConsultantProcessing: false,
    updateConsultantSuccess: false,
    updateConsultantFail: false,
    updateConsultantMessage: "",

    addAppointmentProcessing: false,
    addAppointmentSuccess: false,
    addAppointmentFail: false,
    addAppointmentMessage: "",

    getAllAppointmentProcessing: false,
    getAllAppointmentSuccess: false,
    getAllAppointmentFail: false,
    getAllAppointmentMessage: "",
    getAllAppointmentData: null,

    addEnquiryProcessing: false,
    addEnquirySuccess: false,
    addEnquiryFail: false,
    addEnquiryMessage: "",

    updatePrescriptionProcessing: false,
    updatePrescriptionSuccess: false,
    updatePrescriptionFail: false,
    updatePrescriptionMessage: "",

    deletePrescriptionProcessing: false,
    deletePrescriptionSuccess: false,
    deletePrescriptionFail: false,
    deletePrescriptionMessage: "",


    getAllPrescriptionData: null,

    fileUpload: '',
    fileDelete: '',

    onineAppointments: null,
    offlineAppointments: null,
    consultantAppointments: null,

    patientStatus: null,
    CaseTypes: null
};

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.ADD_NEW_DOCTOR_PROCESSING:
            return {
                ...state,
                addNewDoctorProcessing: true,
                addNewDoctorSuccess: false,
                addNewDoctorFail: false,
                addNewDoctorMessage: "",
            };
        case types.ADD_NEW_DOCTOR_SUCCESS:
            return {
                ...state,
                addNewDoctorProcessing: false,
                addNewDoctorSuccess: true,
                addNewDoctorFail: false,
                addNewDoctorMessage: payload.msg,
            };
        case types.ADD_NEW_DOCTOR_FAIL:
            return {
                ...state,
                addNewDoctorProcessing: false,
                addNewDoctorSuccess: false,
                addNewDoctorFail: true,
                addNewDoctorMessage: payload,
            };
        case types.ADD_NEW_DOCTOR_STATE_RESET:
            return {
                ...state,
                addNewDoctorProcessing: false,
                addNewDoctorSuccess: false,
                addNewDoctorFail: false,
                addNewDoctorMessage: "",
            };

        case types.ADD_NEW_RECEPTIONIST_PROCESSING:
            return {
                ...state,
                addNewReceptionistProcessing: true,
                addNewReceptionistSuccess: false,
                addNewReceptionistFail: false,
                addNewReceptionistMessage: "",
            };
        case types.ADD_NEW_RECEPTIONIST_SUCCESS:
            return {
                ...state,
                addNewReceptionistProcessing: false,
                addNewReceptionistSuccess: true,
                addNewReceptionistFail: false,
                addNewReceptionistMessage: payload.msg,
            };
        case types.ADD_NEW_RECEPTIONIST_FAIL:
            return {
                ...state,
                addNewReceptionistProcessing: false,
                addNewReceptionistSuccess: false,
                addNewReceptionistFail: true,
                addNewReceptionistMessage: payload,
            };
        case types.ADD_NEW_RECEPTIONIST_STATE_RESET:
            return {
                ...state,
                addNewReceptionistProcessing: false,
                addNewReceptionistSuccess: false,
                addNewReceptionistFail: false,
                addNewReceptionistMessage: "",
            };

        case types.ADD_NEW_PATIENT_PROCESSING:
            return {
                ...state,
                addNewPatientProcessing: true,
                addNewPatientSuccess: false,
                addNewPatientFail: false,
                addNewPatientMessage: "",
            };
        case types.ADD_NEW_PATIENT_SUCCESS:
            return {
                ...state,
                addNewPatientProcessing: false,
                addNewPatientSuccess: true,
                addNewPatientFail: false,
                addNewPatientMessage: payload.msg,
            };
        case types.ADD_NEW_PATIENT_FAIL:
            return {
                ...state,
                addNewPatientProcessing: false,
                addNewPatientSuccess: false,
                addNewPatientFail: true,
                addNewPatientMessage: payload,
            };
        case types.ADD_NEW_PATIENT_STATE_RESET:
            return {
                ...state,
                addNewPatientProcessing: false,
                addNewPatientSuccess: false,
                addNewPatientFail: false,
                addNewPatientMessage: "",
            };

        case types.GET_ALL_DOCTOR_PROCESSING:
            return {
                ...state,
                getAllDoctorProcessing: true,
                getAllDoctorSuccess: false,
                getAllDoctorFail: false,
                getAllDoctorMessage: "",
                getAllDoctorData: {},
            };
        case types.GET_ALL_DOCTOR_SUCCESS:
            return {
                ...state,
                getAllDoctorProcessing: false,
                getAllDoctorSuccess: true,
                getAllDoctorFail: false,
                getAllDoctorMessage: "",
                getAllDoctorData: payload,
            };
        case types.GET_ALL_DOCTOR_FAIL:
            return {
                ...state,
                getAllDoctorProcessing: false,
                getAllDoctorSuccess: false,
                getAllDoctorFail: true,
                getAllDoctorMessage: "",
                getAllDoctorData: payload,
            };
        
        case types.GET_ALL_USERS_PROCESSING:
            return {
                ...state,
                getAllUsersProcessing: true,
                getAllUsersSuccess: false,
                getAllUsersFail: false,
                getAllUsersMessage: "",
                getAllUsersData: {},
            };
        case types.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                getAllUsersProcessing: false,
                getAllUsersSuccess: true,
                getAllUsersFail: false,
                getAllUsersMessage: "",
                getAllUsersData: payload,
            };
        case types.GET_ALL_USERS_FAIL:
            return {
                ...state,
                getAllUsersProcessing: false,
                getAllUsersSuccess: false,
                getAllUsersFail: true,
                getAllUsersMessage: "",
                getAllUsersData: payload,
            };

        case types.UPDATE_DOCTOR_PROCESSING:
            return {
                ...state,
                updateDoctorProcessing: true,
                updateDoctorSuccess: false,
                updateDoctorFail: false,
                updateDoctorMessage: "",
                updateDoctorData: {},
            };
        case types.UPDATE_DOCTOR_SUCCESS:
            return {
                ...state,
                updateDoctorProcessing: false,
                updateDoctorSuccess: true,
                updateDoctorFail: false,
                updateDoctorMessage: "User Data Updated Successfully!",
                updateDoctorData: payload,
            };
        case types.UPDATE_DOCTOR_FAIL:
            return {
                ...state,
                updateDoctorProcessing: false,
                updateDoctorSuccess: false,
                updateDoctorFail: true,
                updateDoctorMessage: payload,
                updateDoctorData: {},
            };
        case types.UPDATE_DOCTOR_STATE_RESET:
            return {
                ...state,
                updateDoctorProcessing: false,
                updateDoctorSuccess: false,
                updateDoctorFail: false,
                updateDoctorMessage: "",
                updateDoctorData: {},
            };

        case types.DELETE_DOCTOR_PROCESSING:
            return {
                ...state,
                deleteDoctorProcessing: true,
                deleteDoctorSuccess: false,
                deleteDoctorFail: false,
                deleteDoctorMessage: "",
                deleteDoctorData: {},
            };
        case types.DELETE_DOCTOR_SUCCESS:
            return {
                ...state,
                deleteDoctorProcessing: false,
                deleteDoctorSuccess: true,
                deleteDoctorFail: false,
                deleteDoctorMessage: payload,
                deleteDoctorData: {},
            };
        case types.DELETE_DOCTOR_FAIL:
            return {
                ...state,
                deleteDoctorProcessing: false,
                deleteDoctorSuccess: false,
                deleteDoctorFail: true,
                deleteDoctorMessage: payload,
                deleteDoctorData: {},
            };
        case types.DELETE_DOCTOR_STATE_RESET:
            return {
                ...state,
                deleteDoctorProcessing: false,
                deleteDoctorSuccess: false,
                deleteDoctorFail: false,
                deleteDoctorMessage: "",
                deleteDoctorData: {},
            };

        case types.GET_SINGLE_DOCTOR_SUCCESS:
            return {
                ...state,
                singleDoctorData: payload
            };

        case types.GET_ALL_RECEPTIONIST_PROCESSING:
            return {
                ...state,
                getAllReceptionistProcessing: true,
                getAllReceptionistSuccess: false,
                getAllReceptionistFail: false,
                getAllReceptionistMessage: "",
                getAllReceptionistData: {},
            };
        case types.GET_ALL_RECEPTIONIST_SUCCESS:
            return {
                ...state,
                getAllReceptionistProcessing: false,
                getAllReceptionistSuccess: true,
                getAllReceptionistFail: false,
                getAllReceptionistMessage: "",
                getAllReceptionistData: payload,
            };
        case types.GET_ALL_RECEPTIONIST_FAIL:
            return {
                ...state,
                getAllReceptionistProcessing: false,
                getAllReceptionistSuccess: false,
                getAllReceptionistFail: true,
                getAllReceptionistMessage: payload,
                getAllReceptionistData: {},
            };


        case types.GET_SINGLE_RECEPTIONIST_SUCCESS:
            return {
                ...state,
                singleReceptionistData: payload
            };

        case types.UPDATE_RECEPTIONIST_PROCESSING:
            return {
                ...state,
                updateReceptionistProcessing: true,
                updateReceptionistSuccess: false,
                updateReceptionistFail: false,
                updateReceptionistMessage: "",
            };
        case types.UPDATE_RECEPTIONIST_SUCCESS:
            return {
                ...state,
                updateReceptionistProcessing: false,
                updateReceptionistSuccess: true,
                updateReceptionistFail: false,
                updateReceptionistMessage: payload,
            };
        case types.UPDATE_RECEPTIONIST_FAIL:
            return {
                ...state,
                updateReceptionistProcessing: false,
                updateReceptionistSuccess: false,
                updateReceptionistFail: true,
                updateReceptionistMessage: payload,
            };
        case types.UPDATE_RECEPTIONIST_STATE_RESET:
            return {
                ...state,
                updateReceptionistProcessing: false,
                updateReceptionistSuccess: false,
                updateReceptionistFail: false,
                updateReceptionistMessage: "",
            };

        case types.DELETE_RECEPTIONIST_PROCESSING:
            return {
                ...state,
                deleteReceptionistProcessing: true,
                deleteReceptionistSuccess: false,
                deleteReceptionistFail: false,
                deleteReceptionistMessage: "",
            };
        case types.DELETE_RECEPTIONIST_SUCCESS:
            return {
                ...state,
                deleteReceptionistProcessing: false,
                deleteReceptionistSuccess: true,
                deleteReceptionistFail: false,
                deleteReceptionistMessage: payload,
            };
        case types.DELETE_RECEPTIONIST_FAIL:
            return {
                ...state,
                deleteReceptionistProcessing: false,
                deleteReceptionistSuccess: false,
                deleteReceptionistFail: true,
                deleteReceptionistMessage: payload,
            };
        case types.DELETE_RECEPTIONIST_STATE_RESET:
            return {
                ...state,
                deleteReceptionistProcessing: false,
                deleteReceptionistSuccess: false,
                deleteReceptionistFail: false,
                deleteReceptionistMessage: "",
            };

        case types.GET_ALL_PATIENT_PROCESSING:
            return {
                ...state,
                getAllPatientProcessing: true,
                getAllPatientSuccess: false,
                getAllPatientFail: false,
                getAllPatientMessage: "",
                getAllPatientData: null,
            };
        case types.GET_ALL_PATIENT_SUCCESS:
            return {
                ...state,
                getAllPatientProcessing: false,
                getAllPatientSuccess: true,
                getAllPatientFail: false,
                getAllPatientMessage: "",
                getAllPatientData: payload,
            };
        case types.GET_ALL_PATIENT_FAIL:
            return {
                ...state,
                getAllPatientProcessing: false,
                getAllPatientSuccess: false,
                getAllPatientFail: true,
                getAllPatientMessage: payload,
                getAllPatientData: {},
            };

        case types.DELETE_PATIENT_PROCESSING:
            return {
                ...state,
                deletePatientProcessing: true,
                deletePatientSuccess: false,
                deletePatientFail: false,
                deletePatientMessage: "",
            };
        case types.DELETE_PATIENT_SUCCESS:
            return {
                ...state,
                deletePatientProcessing: false,
                deletePatientSuccess: true,
                deletePatientFail: false,
                deletePatientMessage: payload,
            };
        case types.DELETE_PATIENT_FAIL:
            return {
                ...state,
                deletePatientProcessing: false,
                deletePatientSuccess: false,
                deletePatientFail: true,
                deletePatientMessage: payload,
            };
        case types.DELETE_PATIENT_STATE_RESET:
            return {
                ...state,
                deletePatientProcessing: false,
                deletePatientSuccess: false,
                deletePatientFail: false,
                deletePatientMessage: "",
            };

        case types.GET_SINGLE_PATIENT_SUCCESS:
            return {
                ...state,
                singlePatientData: payload,
            };

        case types.UPDATE_PATIENT_PROCESSING:
            return {
                ...state,
                updatePatientProcessing: true,
                updatePatientSuccess: false,
                updatePatientFail: false,
                updatePatientMessage: "",
            };
        case types.UPDATE_PATIENT_SUCCESS:
            return {
                ...state,
                updatePatientProcessing: false,
                updatePatientSuccess: true,
                updatePatientFail: false,
                updatePatientMessage: payload,
            };
        case types.UPDATE_PATIENT_FAIL:
            return {
                ...state,
                updatePatientProcessing: false,
                updatePatientSuccess: false,
                updatePatientFail: true,
                updatePatientMessage: payload,
            };
        case types.UPDATE_PATIENT_STATE_RESET:
            return {
                ...state,
                updatePatientProcessing: false,
                updatePatientSuccess: false,
                updatePatientFail: false,
                updatePatientMessage: "",
            };

        case types.ADD_NEW_CONSULTANT_PROCESSING:
            return {
                ...state,
                addNewConsultantProcessing: true,
                addNewConsultantSuccess: false,
                addNewConsultantFail: false,
                addNewConsultantMessage: "",
            };
        case types.ADD_NEW_CONSULTANT_SUCCESS:
            return {
                ...state,
                addNewConsultantProcessing: false,
                addNewConsultantSuccess: true,
                addNewConsultantFail: false,
                addNewConsultantMessage: payload,
            };
        case types.ADD_NEW_CONSULTANT_FAIL:
            return {
                ...state,
                addNewConsultantProcessing: false,
                addNewConsultantSuccess: false,
                addNewConsultantFail: true,
                addNewConsultantMessage: payload,
            };
        case types.ADD_NEW_CONSULTANT_STATE_RESET:
            return {
                ...state,
                addNewConsultantProcessing: false,
                addNewConsultantSuccess: false,
                addNewConsultantFail: false,
                addNewConsultantMessage: "",
            };

        case types.GET_ALL_CONSULTANT_PROCESSING:
            return {
                ...state,
                getAllConsultantProcessing: true,
                getAllConsultantSuccess: false,
                getAllConsultantFail: false,
                getAllConsultantMessage: "",
                getAllConsultantData: {},
            };
        case types.GET_ALL_CONSULTANT_SUCCESS:
            return {
                ...state,
                getAllConsultantProcessing: false,
                getAllConsultantSuccess: true,
                getAllConsultantFail: false,
                getAllConsultantMessage: "",
                getAllConsultantData: payload,
            };
        case types.GET_ALL_CONSULTANT_FAIL:
            return {
                ...state,
                getAllConsultantProcessing: false,
                getAllConsultantSuccess: false,
                getAllConsultantFail: true,
                getAllConsultantMessage: payload,
                getAllConsultantData: {},
            };

        case types.DELETE_CONSULTANT_PROCESSING:
            return {
                ...state,
                deleteConsultantProcessing: true,
                deleteConsultantSuccess: false,
                deleteConsultantFail: false,
                deleteConsultantMessage: "",
            };
        case types.DELETE_CONSULTANT_SUCCESS:
            return {
                ...state,
                deleteConsultantProcessing: false,
                deleteConsultantSuccess: true,
                deleteConsultantFail: false,
                deleteConsultantMessage: payload,
            };
        case types.DELETE_CONSULTANT_FAIL:
            return {
                ...state,
                deleteConsultantProcessing: false,
                deleteConsultantSuccess: false,
                deleteConsultantFail: true,
                deleteConsultantMessage: payload,
            };
        case types.DELETE_CONSULTANT_STATE_RESET:
            return {
                ...state,
                deleteConsultantProcessing: false,
                deleteConsultantSuccess: false,
                deleteConsultantFail: false,
                deleteConsultantMessage: "",
            };

        case types.GET_SINGLE_CONSULTANT_SUCCESS:
            return {
                ...state,
                singleConsultantData: payload,
            };

        case types.UPDATE_CONSULTANT_PROCESSING:
            return {
                ...state,
                updateConsultantProcessing: true,
                updateConsultantSuccess: false,
                updateConsultantFail: false,
                updateConsultantMessage: "",
            };
        case types.UPDATE_CONSULTANT_SUCCESS:
            return {
                ...state,
                updateConsultantProcessing: false,
                updateConsultantSuccess: true,
                updateConsultantFail: false,
                updateConsultantMessage: payload,
            };
        case types.UPDATE_CONSULTANT_FAIL:
            return {
                ...state,
                updateConsultantProcessing: false,
                updateConsultantSuccess: false,
                updateConsultantFail: true,
                updateConsultantMessage: payload,
            };
        case types.UPDATE_CONSULTANT_STATE_RESET:
            return {
                ...state,
                updateConsultantProcessing: false,
                updateConsultantSuccess: false,
                updateConsultantFail: false,
                updateConsultantMessage: "",
            };

        case types.ADD_APPOINTMENT_PROCESSING:
            return {
                ...state,
                addAppointmentProcessing: true,
                addAppointmentSuccess: false,
                addAppointmentFail: false,
                addAppointmentMessage: "",
            };
        case types.ADD_APPOINTMENT_SUCCESS:
            return {
                ...state,
                addAppointmentProcessing: false,
                addAppointmentSuccess: true,
                addAppointmentFail: false,
                addAppointmentMessage: payload,
            };
        case types.ADD_APPOINTMENT_FAIL:
            return {
                ...state,
                addAppointmentProcessing: false,
                addAppointmentSuccess: false,
                addAppointmentFail: true,
                addAppointmentMessage: payload,
            };
        case types.ADD_APPOINTMENT_STATE_RESET:
            return {
                ...state,
                addAppointmentProcessing: false,
                addAppointmentSuccess: false,
                addAppointmentFail: false,
                addAppointmentMessage: "",
            };

        case types.ADD_ENQUIRY_PROCESSING:
            return {
                ...state,
                addEnquiryProcessing: true,
                addEnquirySuccess: false,
                addEnquiryFail: false,
                addEnquiryMessage: "",
            };
        case types.ADD_ENQUIRY_SUCCESS:
            return {
                ...state,
                addEnquiryProcessing: false,
                addEnquirySuccess: true,
                addEnquiryFail: false,
                addEnquiryMessage: payload,
            };
        case types.ADD_ENQUIRY_FAIL:
            return {
                ...state,
                addEnquiryProcessing: false,
                addEnquirySuccess: false,
                addEnquiryFail: true,
                addEnquiryMessage: payload,
            };
        case types.ADD_ENQUIRY_STATE_RESET:
            return {
                ...state,
                addEnquiryProcessing: false,
                addEnquirySuccess: false,
                addEnquiryFail: false,
                addEnquiryMessage: "",
            };

        case types.GET_ALL_APPOINTMENT_PROCESSING:
            return {
                ...state,
                getAllAppointmentProcessing: true,
                getAllAppointmentSuccess: false,
                getAllAppointmentFail: false,
                getAllAppointmentMessage: "",
                getAllAppointmentData: null,
            };
        case types.GET_ALL_APPOINTMENT_SUCCESS:
            return {
                ...state,
                getAllAppointmentProcessing: false,
                getAllAppointmentSuccess: true,
                getAllAppointmentFail: false,
                getAllAppointmentMessage: "",
                getAllAppointmentData: payload,
            };
        case types.GET_ALL_APPOINTMENT_FAIL:
            return {
                ...state,
                getAllAppointmentProcessing: false,
                getAllAppointmentSuccess: false,
                getAllAppointmentFail: true,
                getAllAppointmentMessage: "",
                getAllAppointmentData: payload,
            };


        // Prescription Processing

        case types.ADD_PRESCRIPTION_PROCESSING:
            return {
                ...state,
                updatePrescriptionProcessing: true,
                updatePrescriptionSuccess: false,
                updatePrescriptionFail: false,
                updatePrescriptionMessage: "",
            };
        case types.ADD_PRESCRIPTION_SUCCESS:
            return {
                ...state,
                updatePrescriptionProcessing: false,
                updatePrescriptionSuccess: true,
                updatePrescriptionFail: false,
                updatePrescriptionMessage: payload,
            };
        case types.ADD_PRESCRIPTION_FAIL:
            return {
                ...state,
                updatePrescriptionProcessing: false,
                updatePrescriptionSuccess: false,
                updatePrescriptionFail: true,
                updatePrescriptionMessage: payload,
            };
        case types.ADD_PRESCRIPTION_STATE_RESET:
            return {
                ...state,
                updatePrescriptionProcessing: false,
                updatePrescriptionSuccess: false,
                updatePrescriptionFail: false,
                updatePrescriptionMessage: "",
            };


        case types.GET_ALL_PATIENT_PRESCRIPTION_DATA:
            return {
                ...state,

                getAllPrescriptionData: payload
            };

        // case 'FILE_UPLOAD':
        //     return {
        //         ...state
        //     }


        // onineAppointments: null,
        // offlineAppointments: null,
        // consultantAppointments: null,

        // patientStatus: null,
        // CaseTypes: null

        case 'GET_ONLINE_APPOINTMENTS':
            return {
                ...state, onineAppointments: payload
            }

        case 'GET_OFFLINE_APPOINTMENTS':
            return {
                ...state, offlineAppointments: payload
            }

        case 'GET_CONSULTANT_APPOINTMENTS':
            return {
                ...state, consultantAppointments: payload
            }

        // case GET_ONLINE_APPOINTMENTS:
        //     return {
        //         ...state, onineAppointments: payload
        //     }

        // case GET_ONLINE_APPOINTMENTS:
        //     return {
        //         ...state, onineAppointments: payload
        //     }

        // case GET_ONLINE_APPOINTMENTS:
        //     return {
        //         ...state, onineAppointments: payload
        //     }
        default:
            return state;
    }
};
