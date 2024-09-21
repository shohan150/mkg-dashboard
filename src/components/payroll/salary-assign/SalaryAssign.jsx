import { useState } from "react";
import "../../../styles/salary-assign.css";
const SalaryAssign = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedState, setCheckedState] = useState({});
  //console.log(checkedState);
  const students = [
    {
      id: "001",
      name: "Zabbar Shah",
      designation: "Manager",
      basic_salary: 10000,
      addition: 20000,
      deduction: 0,
    },
    {
      id: "002",
      name: "Gabbar Shah",
      designation: "Officer",
      basic_salary: 100000,
      addition: 20000,
      deduction: 10000,
    },
  ];

  const [employeeData, setEmployeeData] = useState(students);

  function updateEmployeeData(index, property, value) {
    const newData = [...employeeData];
    newData[index][property] = Number(value);

    setEmployeeData(newData);
  }

  //when clicked on the allCheckedbox, take the whole students array and update each one of them with the opposite value of the current allChacked state.
  const handleAllCheckboxChange = () => {
    const newCheckedState = {};
    students.forEach((student) => {
      //sob state er jonno allChecked er current value er opposite ta assign koro.
      newCheckedState[student.id] = !allChecked;
    });
    //update the checkedState object
    setCheckedState(newCheckedState);
    console.log(newCheckedState);
    //update the allChecked with opposite value
    setAllChecked(!allChecked);
  };

  //handle single checkbox and check+update whether all checkboxes have been checked or not. So that the ui automatically updated the allCheckbox state even if user manually selects all students. This much code in this function, for this simple feature.
  const handleCheckboxChange = (id) => {
    //spread the current checkedState object. inside the object [id] will create a new entry or modify the existing entry.
    //means for example, 002:!checkedState.002;
    const newCheckedState = { ...checkedState, [id]: !checkedState[id] };
    //console.log([id], !checkedState[id]);
    //update the checkedState object.
    setCheckedState(newCheckedState);

    // If any checkbox is unchecked, uncheck the "allCheckbox"
    //render hobe puro eventListener complete hle. tai, apatoto current state tai dekhte pabo sudhu. so, current state ta jodi true thake, tarmane, amra setake false banacchi ekhn, jeta render hobar por update hobe.
    //tai, checkedState.002 (for example) = true hle, take amra false banacchi, sejonno allChecked k false kori.
    if (checkedState[id]) {
      setAllChecked(false);
    } else {
      //Check if all checkboxes are checked.
      //if, already false, then check, if each one of the rest of the students have true value in the newCheckedState state that we are assigning to the checkedState state.
      const allCheckedNow = students.every(
        (student) => newCheckedState[student.id]
      );
      //if every value is true, that means, all the students have been checked. so, we can update the setAllChecked to true. if the result is false, keep allChecked to false.
      setAllChecked(allCheckedNow);
    }
  };

  return (
    <div className="bg-white rounded-md p-4 md:p-6  my-4">
      <div className="flex justify-between items-center">
      <h3 className="text-2xl font-medium">Create Fee</h3>
      <button
        type="submit"
        className="rounded w-20 p-2 bg-secondary hover:bg-buttonHover text-white shadow-md  hover:-translate-y-[2px] duration-200 flex items-center justify-center gap-2"
      >
        List Fee
      </button>
    </div>
      <div className="border rounded shadow-md bg-white">
        <table className="w-full text-textGray text-sm leading-8">
          <thead className="border-b-2 bg-bgBlue">
            <tr>
              <th className="w-1/12 pt-2">
                <input
                  type="checkbox"
                  checked={allChecked}
                  onChange={handleAllCheckboxChange}
                />
              </th>
              <th className="px-1 whitespace-nowrap w-1/12 pt-1">ID</th>
              <th className="px-1 whitespace-nowrap w-2/12 pt-1">Name</th>
              <th className="px-1 whitespace-nowrap w-2/12 pt-1">
                Designation
              </th>
              <th className="px-1 whitespace-nowrap w-2/12 pt-1">Net Salary</th>
              <th className="px-1 whitespace-nowrap w-2/12 pt-1">
                Basic Salary
              </th>
              <th className="px-1 whitespace-nowrap w-1/12 pt-1">+ Addition</th>
              <th className="px-1 whitespace-nowrap w-1/12 pt-1">
                - Deduction
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-2 font-medium">
            {employeeData.map((row, i) => (
              <tr key={row.id} className="text-center">
                <td className="px-1 whitespace-nowrap w-1/12">
                  {/* if this id does not exist in the checkedState object then give a value of false.*/}
                  <input
                    type="checkbox"
                    checked={checkedState[row.id] || false}
                    onChange={() => handleCheckboxChange(row.id)}
                  />
                </td>
                <td className="px-1 whitespace-nowrap w-1/12">{row.id}</td>
                <td className="px-1 whitespace-nowrap w-2/12">{row.name}</td>
                <td className="px-1 whitespace-nowrap w-2/12">
                  {row.designation}
                </td>
                <td className="px-1 whitespace-nowrap w-2/12">
                  {row.basic_salary + row.addition - row.deduction}
                </td>
                <td className="px-1 whitespace-nowrap w-2/12">
                  <input
                    onChange={(e) =>
                      updateEmployeeData(i, "basic_salary", e.target.value)
                    }
                    className="px-1 whitespace-nowrap w-16 disabled:bg-transparent disabled:border-none border pl-1 my-1"
                    disabled={!checkedState[row.id]}
                    type="number"
                    defaultValue={row.basic_salary}
                  />
                </td>
                <td className="px-1 whitespace-nowrap w-1/12">
                  <input
                    onChange={(e) =>
                      updateEmployeeData(i, "addition", e.target.value)
                    }
                    className="px-1 whitespace-nowrap w-16 disabled:bg-transparent disabled:border-none border pl-1 my-1"
                    disabled={!checkedState[row.id]}
                    type="number"
                    defaultValue={row.addition}
                  />
                </td>
                <td className="px-1 whitespace-nowrap w-1/12">
                  <input
                    onChange={(e) =>
                      updateEmployeeData(i, "deduction", e.target.value)
                    }
                    className="w-16 disabled:bg-transparent disabled:border-none border pl-1 my-1"
                    disabled={!checkedState[row.id]}
                    type="number"
                    defaultValue={row.deduction}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryAssign;
