import React, { useEffect, useRef, useState } from 'react';
import { END_POINT, deleteDoctor, getAllDoctor, getJwtToken, getSingleDoctor } from '../../Redux/AdminReducer/action';
import { useDispatch, useSelector } from 'react-redux';
import CustomBreadcrumbs from '../../Components/CommonComponents/CustomBreadcrumbs';
import 'react-toastify/dist/ReactToastify.css';
import CustomSpinner from '../../Components/CommonComponents/CustomSpinner';
import CustomInput from '../../Components/CommonComponents/CustomInput';
import PaginationButtons from '../../Components/CommonComponents/PaginationButtons';
import CustomSelect from '../../Components/CommonComponents/CustomSelect';
import DeleteConfirmatationModal from '../../Components/CommonComponents/DeleteConfirmatationModal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { getHeadings } from './customTableFuctions';

const fetchData = async (path, data) => {
  try {
    const result = await axios.get(`${END_POINT}/${path}page=${data.page}&&limit=${data?.limit}&&search=${data?.search}`, {
      headers: {
        Authorization: getJwtToken(),
      },
    });
    return result;
  } catch (error) {
    console.log('Check Error', error);
  }
};

const deleteData = async (path, itype) => {
  try {
    let result = await axios.delete(`${END_POINT}/${path}`, {
      headers: {
        Authorization: getJwtToken(),
      },
    });
    toast.success(`${itype} Deleted!`);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (error) {
    toast.error('Failed To Delete');
    console.log('Check Error', error);
  }
};

const getTitle = (listType) => {
  if (listType === 'Distributors') {
    return 'Distributor';
  } else if (listType == 'inventory') {
    return 'Medicine';
  } else if (listType == 'Order') {
    return 'Order';
  } else if (listType == 'Returns') {
    return 'Returns';
  } else {
    return 'Default Title';
  }
};

// assistantDoctor

export default function InventoryTable({ listType }) {
  // Redux selectors to access state
  const [tableData, setTableData] = useState(null);
  const [query, setQuery] = useState({ search: '', page: 1, limit: 10 });
  let tableHeading;
  const { inventory_item_id, section } = useParams();
  let letModifedHeading;
  const navigate = useNavigate();

  const res = getHeadings(listType);
  tableHeading = res?.main;
  letModifedHeading = res?.display;

  useEffect(() => {
    setTableData(null);
    listType === 'inventory' && fetchData(`inventory/inventory/?`, query).then((data) => setTableData(data?.data));
    listType === 'Distributors' && fetchData(`inventory/distributors/?`, query).then((data) => setTableData(data?.data));
    listType === 'Order' && fetchData(`inventory/orders/?`, query).then((data) => setTableData(data?.data));
    listType === 'Returns' && fetchData(`inventory/returns/?`, query).then((data) => setTableData(data?.data));
  }, [listType, query]);

  return (
    <div className="m-3 rounded-md bg-slate-100 px-8 w-full min-h-[100vh] h-fit py-8">
      {!inventory_item_id && (
        <button onClick={(e) => navigate(`${section}/addNew`)} className="p-2 bg-black text-white rounded fond-semibold">
          Add {getTitle(listType)}
        </button>
      )}
      <hr className="bg-black h-1 w-full my-5" />
      <div className="flex justify-between flex-wrap items-center ">
        <div className=" -mt-5 mb-2">
          <CustomInput
            label={''}
            name="search"
            type={'text'}
            value={query.search}
            onChange={(e) => {
              setQuery({ ...query, search: e.target.value, page: 1 });
            }}
            placeholder={'Search'}
          />
        </div>
      </div>

      <div className="flex justify-center flex-col  ">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
            <thead>
              <tr className="text-left text-xs bg-primary-400 font-medium text-primary-50 uppercase tracking-wider">
                {tableHeading?.map((titlehead, index) => (
                  <th key={index} className="px-4 py-3 border border-gray-300">
                    {letModifedHeading?.[index]}
                  </th>
                ))}
                <th className="px-4 py-3 border border-gray-300">More Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData ? (
                tableData?.length <= 0 ? (
                  <tr>
                    <td colSpan={tableHeading?.length + 1} className="px-4 py-3 border border-gray-300 whitespace-nowrap">
                      <h5>No Data Found</h5>
                    </td>
                  </tr>
                ) : (
                  tableData?.map((item) => (
                    <tr key={item._id}>
                      {tableHeading?.map((itemKey, index) => (
                        <td key={index} className="px-4 py-3 border border-gray-300 whitespace-nowrap">
                          {['date'].includes(itemKey) ? item?.[itemKey]?.slice(0, 10) : ['primary', 'secondary', 'third'].includes(itemKey) ? item?.diagnosis?.[itemKey] : item?.[itemKey] || 'NA'}
                        </td>
                      ))}
                      <td className="px-4 py-3 border border-gray-300 whitespace-nowrap">
                        <span
                          onClick={() => {
                            switch (listType) {
                              case 'Distributors':
                                navigate(`/main/inventory/${listType}/${listType}/${item?._id}`);
                                break;
                              case 'Order':
                                navigate(`/main/inventory/${listType}/${listType}/${item?._id}`);
                                break;
                              case 'inventory':
                                navigate(`/main/inventory/inventory/${item?._id}`);
                                break;
                              case 'Returns':
                                navigate(`/main/inventory/${listType}/${listType}/${item?._id}`);
                                break;
                            }
                          }}
                          className="bg-gray-100 cursor-pointer text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-gray-500"
                        >
                          Modify
                        </span>
                        <DeleteConfirmatationModal
                          deleteFunction={() => {
                            listType === 'inventory' && deleteData(`inventory/inventory/${item?._id}`, 'Medicine');
                            listType === 'Distributors' && deleteData(`inventory/distributors/${item?._id}`, 'Distributor');
                            listType === 'Order' && deleteData(`inventory/orders/${item?._id}`, 'Order');
                            listType === 'Returns' && deleteData(`inventory/returns/${item?._id}`, 'Return Order');
                          }}
                          text={listType}
                          heading={'Delete Item'}
                        />
                      </td>
                    </tr>
                  ))
                )
              ) : (
                <tr>
                  <td colSpan={tableHeading?.length + 1} className="px-4 py-3 border border-gray-300 whitespace-nowrap">
                    <CustomSpinner />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between ">
          <CustomSelect
            options={[10, 25, 50, 75, 100]}
            onChange={(e) => {
              setQuery({ ...query, limit: e.target.value });
            }}
            value={query.limit}
            placeholder={`limit per page.`}
          />
          <PaginationButtons
            onPreviousClick={() => {
              setQuery({ ...query, page: query.page - 1 });
            }}
            onNextClick={() => {
              setQuery({ ...query, page: query.page + 1 });
            }}
            isPreviousDisabled={query.page === 1}
            isNextDisabled={tableData?.length < query.limit}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
