import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import PageNotFound from './PageNotFound';
import MainDoctorSignup from './MainDoctorSignup';
import PrivateRoute from '../Components/PrivateRoute';
import AdminDashboard from './AdminRoutes/AdminDashboard';
import DoctorsList from './AdminRoutes/DoctorsList';
import AddNewPatient from './AdminRoutes/AddNewPatient';
import AppointmentList from './AdminRoutes/AppointmentList';
import Transaction from './AdminRoutes/Transaction';
import AddEnquiry from './AdminRoutes/AddEnquiry';
import AddAppointment from './AdminRoutes/AddAppointment';
import AddExternalAppointment from './publicRoutes/AddExternalAppointment';
import AddNewPatientExternal from './publicRoutes/AddPatientExternal';
import Prescription from './AdminRoutes/Prescription';
import AddPrescription from './AdminRoutes/AddPrescription';
import VisualizeBoard from './Visualization/DataVisulization';
import DoctorForm from './AdminRoutes/DoctorForm';
import Table from './AdminRoutes/Table';
import ReceptionistForm from './AdminRoutes/ReceptionistForm';
import ConsultantForm from './AdminRoutes/ConsultantForm';
import CustomerForm from './AdminRoutes/PatientForm';
import EnquiryForm from './AdminRoutes/EnquiryForm';
import MainPage from '../coverPage/MainPage';
import AssistantDoctorForm from './AdminRoutes/AssistantDoctorForm';
import IncomeExpense from './AdminRoutes/IncomeExpensesForm';
import InventoryPanel from './Inventory/mainInventory';
import DistributorForm from './Inventory/DistributorForm';
import DistributorCompaniesList from './Inventory/companiesFormList';
import OrderForm from './Inventory/OrderForm';
import ReturnForm from './Inventory/ReturnForm';
import UsersPermissions from './AdminRoutes/UserPermissions'
import EditPermissions from './AdminRoutes/EditPermissions'

export default function AllRoutes() {
  return (
    <Routes>
      {!window.location.pathname.startsWith('/public') && (
        <>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<MainDoctorSignup />} />
          <Route path="login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                {' '}
                <AdminDashboard />{' '}
              </PrivateRoute>
            }
          />
          <Route
            path="/enquiry/:Enquiry_Id"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <EnquiryForm />{' '}
              </PrivateRoute>
            }
          />
          <Route
            path="/permissions"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                {' '}
                <UsersPermissions />{' '}
              </PrivateRoute>
            }
          />
          <Route
            path="/permissions/:username"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <EditPermissions />{' '}
              </PrivateRoute>
            }
          />
          <Route
            path="/appointment"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <AddAppointment />{' '}
              </PrivateRoute>
            }
          />
          <Route
            path="/prescription"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin', 'Doctor']}>
                <Prescription />{' '}
              </PrivateRoute>
            }
          />

          <Route
            path="/prescription/add/:patientId"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <AddPrescription />{' '}
              </PrivateRoute>
            }
          />

          <Route
            path="/doctors/:Doctor_Id"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <DoctorForm />{' '}
              </PrivateRoute>
            }
          />

          <Route
            path="/assistantDoctor/:AssistantDoctor_Id"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <AssistantDoctorForm />{' '}
              </PrivateRoute>
            }
          />

          <Route
            path="/patients/:patientId"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <CustomerForm />{' '}
              </PrivateRoute>
            }
          />
          <Route
            path="/:listType"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <Table />{' '}
              </PrivateRoute>
            }
          />

          <Route
            path="/receptionist/:receptionist_Id"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <ReceptionistForm />{' '}
              </PrivateRoute>
            }
          />
          <Route
            path="/appointment/list/:listType"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <AppointmentList />{' '}
              </PrivateRoute>
            }
          />
          <Route
            path="/transaction"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <Transaction />{' '}
              </PrivateRoute>
            }
          />
          <Route
            path="/consultant/:consultant_id"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <ConsultantForm />{' '}
              </PrivateRoute>
            }
          />

          <Route
            path="/graphs"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <VisualizeBoard />{' '}
              </PrivateRoute>
            }
          />

          <Route
            path="/income_expenses"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <IncomeExpense />{' '}
              </PrivateRoute>
            }
          />

          <Route
            path="main/inventory/:section/:inventory_item_id"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <InventoryPanel />{' '}
              </PrivateRoute>
            }
          />

          <Route
            path="main/inventory/:section"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <InventoryPanel />{' '}
              </PrivateRoute>
            }
          />

          <Route
            path="main/inventory/:section/Order/:inventory_item_id"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <OrderForm />{' '}
              </PrivateRoute>
            }
          />

          <Route
            path="main/inventory/:section/Returns/:inventory_item_id"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <ReturnForm />{' '}
              </PrivateRoute>
            }
          />

          <Route
            path="main/inventory/:section/Distributors/:inventory_item_id"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <DistributorForm />{' '}
              </PrivateRoute>
            }
          />

          <Route
            path="main/inventory/:section/Distributors/companies/:company_name/:company_id"
            element={
              <PrivateRoute allowedRoles={['SuperAdmin']}>
                <DistributorCompaniesList />{' '}
              </PrivateRoute>
            }
          />
        </>
      )}

      {/* External Public Routes */}
      <Route path="public/patients/addNew" element={<AddNewPatientExternal />} />
      <Route path="public/appointment" element={<AddExternalAppointment />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
