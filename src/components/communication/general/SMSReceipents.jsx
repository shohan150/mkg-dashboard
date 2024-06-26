const PClass = () =>{
   return(
      <div className="space-y-2">
          <label className="w-28 md:max-lg:w-32">Select Class</label>
          <input
            type="text"
            placeholder="Enter Class"
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
      </div>
   )
}

const PSection = () =>{
   return(
      <div className="space-y-2">
          <label className="w-28 md:max-lg:w-32">Select Section</label>
          <input
            type="text"
            placeholder="Enter Section"
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
      </div>
   )
}

const SelectedParent = () =>{
   return(
      <div className="space-y-2">
          <label className="w-28 md:max-lg:w-32">Select Student</label>
          <input
            type="text"
            placeholder="Enter Student"
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
      </div>
   )
}

const SelectedEmployee = () =>{
   return(
      <div className="space-y-2">
          <label className="w-28 md:max-lg:w-32">Select Employee</label>
          <input
            type="text"
            placeholder="Enter Employee"
            className="bg-bgGray w-full rounded p-2 border-2 border-transparent focus:border-primary focus:outline-none"
          />
      </div>
   )
}


export default function SMSReceipents({selectedValue}) {
   switch(selectedValue){
      case "PClass" :
         return <PClass />
      case "PSection":
         return <PSection />
      case "Teacher":
         break;
      case "Staff":
         break;
      case "Selected Parent" :
         return <SelectedParent />
      case "Selected Employee":
         return <SelectedEmployee />
      case "Institute":
            break;
   }
}