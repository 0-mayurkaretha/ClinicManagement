import React, { useEffect, useState } from 'react';
import CustomBreadcrumbs from '../../Components/CommonComponents/CustomBreadcrumbs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { UploadFiles, getJwtToken } from '../../Redux/AdminReducer/action';
import { useNavigate, useParams } from 'react-router-dom';
import { UploadFile, END_POINT, RemoveFile, UploadImages, DeleteImages } from '../../Redux/AdminReducer/action';
import axios from 'axios';

const fetchSingleItem = async (username) => {
  try {
    const result = await axios.get(`${END_POINT}/configAccess/${username}`, {
      headers: {
        Authorization: getJwtToken(),
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong while fetching data');
  }

};


export default function EditPermissions() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({})
  const [temp, setTemp] = useState(false)
  const { username } = useParams();

  useEffect(() => {
      fetchSingleItem(username).then((result) => {
        setUserData(result.data);
        setTemp(true);
      });
  },[]);

  const savedPerms = userData.permissions ? Object.values(userData.permissions) : [];
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  useEffect(() => {
      setSelectedPermissions(savedPerms)
  }, [temp])

  const handleCheckboxChange = (permission) => {
    const isSelected = selectedPermissions.includes(permission);

    if (isSelected) {
      // If permission is already selected, remove it
      setSelectedPermissions(selectedPermissions.filter(p => p !== permission));
    } else {
      // If permission is not selected, add it
      setSelectedPermissions([...selectedPermissions, permission]);
    }
  };

  const editPermissions = async (data) => {
    try {
      const result = await axios.put(`${END_POINT}/configAccess/${username}`, { "permissions" : data}, {
        headers: {
          Authorization: getJwtToken(),
        },
      });
      toast.success('Details Updated');
      navigate(`/permissions `);
    } catch (error) {
      toast.error('Failed To Updated');
    }
  };
 
  return (
    <div className="m-3 rounded-md bg-slate-100 h-fit min-h-[100vh] w-full p-10  bg-white">
      <CustomBreadcrumbs data={[{ title: 'Dashboard', url: '/dashboard' }, { title: 'User ' }, { title: 'Update permissions' }]}  />


      <div className="flex justify-between items-center w-[280px] shadow-md bg-white rounded-lg py-2 px-2 mt-10">
        <p><strong>{userData.username}</strong></p>
        <img src={userData.pic ? userData.pic : "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"} className="bg-primary-500 w-16 h-16 rounded-full" />
      </div>

      <div className="flex justify-center flex-col  ">
          <div className="overflow-x-auto">
            <table className="w-1/2 divide-y divide-gray-200 border border-gray-300">
              <thead>
                <tr className="text-left text-xs bg-primary-400 font-medium text-primary-50 uppercase tracking-wider">
                  <th className="px-4 py-3 border border-gray-300 w-5/6">Permissions</th>
                  <th className="px-4 py-3 border border-gray-300 w-1/6">Select</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {permissionsArray.map(permission => (
                  <tr key={permission}>
                    <td className="px-4 py-3 border border-gray-300 whitespace-nowrap">
                      <span>
                        {permission || 'NA'}
                      </span>
                    </td>
                    <td className="px-4 py-3 border border-gray-300 whitespace-nowrap">
                      <span>
                        <input 
                          type="checkbox" 
                          className="border-gray-300 rounded h-5 w-5" 
                          value={permission}
                          checked={selectedPermissions.includes(permission)}
                          onChange={() => handleCheckboxChange(permission)}
                          />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex w-full justify-around">
          <button 
            className="w-2/5 mt-6 font-bold bg-primary-200 hover:bg-primary-300 focus:ring-primary-300 text-white py-2.5 rounded-lg transition duration-300 ease-in-out"
            onClick={() => editPermissions(selectedPermissions)}
            >
              Submit</button>

          <button 
            className="w-2/5 mt-6 font-bold bg-red-600  hover:bg-red-700 focus:ring-red-300 text-white py-2.5 rounded-lg transition duration-300 ease-in-out"
            onClick={() => navigate("/permissions")}
            >
              EXIT</button>
        </div>
    </div>
  );
};

const permissionsArray = [
"History Taking & Follow Up",
"Appointments Schedules",
"Medicine Prescription",
"Patient Reports Upload",
"Appointment Reminder",
"Payment Details",
"Patient Registration",
"Medicine Dispensation",
"Coordinate with Doctor, Patient, Consultants",
"Treatment Planned",
"Refer Test / Consultant",
"Upload / Download Documents",
"History of Patients",
"Enquiry Update",
"Record of Treatment Given to Patients",
"Create Appointment with Consultant",
"Collect Feedback / Review from Patients",
"Highlight Staff to take Patient Review",
"Check Reference Tests / Doctor",
"Fees Collection",
"Enquiry Management",
"Consultants Management",
"Income and Expense Record Management",
"Medicine Inventory & Order Management",
"Manage Roles / Access",
"Reports & Graphs",
"Nutrition Plan",
"Courier Management",
"Case Study"
]

