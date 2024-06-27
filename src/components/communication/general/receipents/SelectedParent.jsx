import { useEffect, useState } from "react";
import PersonInfoTable from "./PersonInfoTable";
import people from "./dummyDB";

export default function SelectedParent() {

  const [data, setData] = useState([]);
  const [tableData1, setTableData1] = useState([]);
  const [tableData2, setTableData2] = useState([]);
  const [tableData3, setTableData3] = useState([]);
  const [device, setDevice] = useState('small');

  const [allChecked, setAllChecked] = useState(false);
  const [checkedState, setCheckedState] = useState({});

  //check window size and populate people state.
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 1200){
        setDevice('large');
      }else if(window.innerWidth >= 768){
        setDevice('medium');
      }
    };

    window.addEventListener('resize', handleResize);

    setData(people);

    handleResize(); // Check initial screen size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //if large screen, slice the data in two arrays.
  useEffect(() => {
    if(data.length > 0){
      if(device === "medium"){
      const halfLength = Math.ceil(data.length / 2);
      setTableData1(data.slice(0, halfLength));
      setTableData2(data.slice(halfLength));
      } else if(device === "large"){
        const oneThirdLength = Math.ceil(data.length / 3);
        setTableData1(data.slice(0, oneThirdLength));
        setTableData2(data.slice(oneThirdLength, oneThirdLength*2));
        setTableData3(data.slice(oneThirdLength*2));
      }
    }
  }, [data, device]);

  function handleCheckboxChange(){
    console.log("checked");
  }
    return (
      <div className="space-y-2 border-2 rounded-md">
        {(device==="small") ?
        <PersonInfoTable persons={data} checkedState={checkedState} handleCheckboxChange={handleCheckboxChange}/>
        :
        (device==="medium") ?
        <div className="grid grid-cols-2 divide-x-2">
          <PersonInfoTable persons={tableData1} checkedState={checkedState} handleCheckboxChange={handleCheckboxChange}/>
          <PersonInfoTable persons={tableData2} checkedState={checkedState} handleCheckboxChange={handleCheckboxChange}/>
        </div>
        :
        <div className="grid grid-cols-3 divide-x-2">
        <PersonInfoTable persons={tableData1} checkedState={checkedState} handleCheckboxChange={handleCheckboxChange}/>
        <PersonInfoTable persons={tableData2} checkedState={checkedState} handleCheckboxChange={handleCheckboxChange}/>
        <PersonInfoTable persons={tableData3} checkedState={checkedState} handleCheckboxChange={handleCheckboxChange}/>
        </div>
        }
      </div>
    );
}