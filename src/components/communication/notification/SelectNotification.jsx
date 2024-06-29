export default function SelectNotification({notificationType, setNotificationType}) {
    return (
  <>
   <div className="space-y-2">
      <label className="">Select Notification </label>
      <select
        id=""
        name=""
        defaultValue="Select Notification"
        onChange={(e)=> {setNotificationType(e.target.value)}}
        className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
      >
        <option value="Select Notification" disabled>Select Notification</option>
        <option value="Exam Result">Exam Result</option>
        <option value="Pay Slip Info">Pay Slip Info</option>
        <option value="Due Info">Due Info</option>
      </select>
   </div>

   {
    notificationType === "Exam Result" && 
    <div className="space-y-2">
    <label className="">Select Exam</label>
    <select
      id=""
      name=""
      defaultValue="1st Term"
      className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
    >
      <option value="1st Term">1st Term</option>
      <option value="2nd Term">2nd Term</option>
    </select>
 </div>
   }
  </>
    );
}