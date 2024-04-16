import { useEffect, useState } from "react";
import AlertModal from "../AlertModal";
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import { FormProp } from "@/types/form.type";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const DUMMY_DATA = [
  {
    id: "#test123",
    companyName: "test",
    contactPerson: "test",
    phone: "test",
    zipCode: "560016",
    city: "test city",
  },
  {
    id: "#test456",
    companyName: "test",
    contactPerson: "test",
    phone: "test",
    zipCode: "560016",
    city: "test city",
  },
  {
    id: "#test789",
    companyName: "test",
    contactPerson: "test",
    phone: "test",
    zipCode: "560016",
    city: "test city",
  },
];

interface ListCardProps {
  storage: FormProp[];
}

const ListCard = ({ storage }: ListCardProps) => {
	const navigate = useNavigate();
//   console.log(storage);
  const [storageId, setStorageId] = useState<string | null>();
  const selectedId = storage?.filter(({id}) => storageId === id)


  return (
    <AlertDialog>
      <div className="max-w-screen-lg mx-auto">
        <div className="p-4 mb-4 bg-gray-500 text-white flex items-center justify-between">
          <div>#ID</div>

          <div>NAME</div>

          <div>ZIP CODE</div>

          <div>CONTACT PERSON</div>

          <div>CITY</div>
          <div>PHONE</div>
        </div>

        {storage?.map(
          ({ id, companyName, contactPerson, phone, zipCode, city }) => (
            <div key={id}>
              <AlertDialogTrigger asChild>
                <div className="shadow-lg p-4 mb-4 bg-slate-50 flex items-center justify-between cursor-pointer" onClick={() => {setStorageId(id)}}>
                  <div>#{id}</div>
                  <div>{companyName}</div>
                  <div>{zipCode}</div>
                  <div>{contactPerson}</div>
                  <div>{city}</div>
                  <div>{phone}</div>
                </div>
              </AlertDialogTrigger>
            </div>
          )
        )}
      </div>
	  <Button onClick={()=> navigate(-1)}>Back</Button>
		<AlertModal  selectedId={selectedId[0]}/>
    </AlertDialog>
  );
};

export default ListCard;
