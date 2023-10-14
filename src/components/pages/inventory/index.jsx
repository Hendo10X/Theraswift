import { useState, useEffect } from "react";
import usePageTitle from "../../hooks/pageTitle";
import axios from "axios";

import { getData, handleApiError } from "../../utils/api";

import Navigation from "./navigation";
import Medications from "./medications";
import PrescriptionForm from "./prescriptionForm";
import EssentialForm from "./essentialForm";
import { Toaster, toast } from "react-hot-toast";

const Inventory = () => {
  usePageTitle("TheraswiftRX — Admin Inventory");

  const [tab, setTab] = useState("prescription");
  const [list, setList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const [editEssential, setEditEssential] = useState(null);
  const [editPrescription, setEditPrescription] = useState(null);

  useEffect(() => {
    setIsFetching(true);

    const fetchData = async () => {
      try {
        const response = await getData("/get_all_medication");
        console.log("data", response.medications);
        setList(response.medications);
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
        handleApiError(error);
      }
    };

    fetchData();
  }, []);

  const updateInventory = (item) => {
    setList([item, ...list]);
  };

  const updateEdit = (obj) => {
    if (obj.type === "essential") setEditEssential(obj);
    if (obj.type === "prescription") setEditPrescription(obj);
  };

  const editInventory = (id, obj) => {
    const newList = [...list];
    const index = newList.findIndex((item) => item.id === id);
    newList[index] = { ...newList[index], ...obj };
    setList(newList);
    toast.success("Medication updated");

    if (obj.type === "prescription") setEditPrescription(null);
    if (obj.type === "essential") setEditEssential(null);
  };

  const deleteInventory = (id) => {
    const newList = [...list];
    const index = newList.findIndex((item) => item.id === id);
    newList.splice(index, 1);
    setList(newList);
    toast.success("Medication deleted");
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      <main className="h-screen bg-primary-50 grid col-2">
        <div className="bg-primary-50">
          <Navigation tab={tab} setTab={setTab} />

          {tab === "prescription" && (
            <PrescriptionForm
              editObj={editPrescription}
              updateInventory={updateInventory}
              editInventory={editInventory}
            />
          )}

          {tab === "essential" && (
            <EssentialForm
              editObj={editEssential}
              updateInventory={updateInventory}
              editInventory={editInventory}
            />
          )}
        </div>

        <Medications
          onEdit={updateEdit}
          onDelete={deleteInventory}
          list={list}
          isLoading={isFetching}
        />
      </main>
    </>
  );
};

export default Inventory;
