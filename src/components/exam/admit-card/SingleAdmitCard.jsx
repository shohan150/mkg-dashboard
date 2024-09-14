export default function SingleAdmitCard({student}) {
    return (
        <div className="my-4 border border-primary rounded p-4">
         <h2 className="text-primary text-center text-2xl font-bold">Urban School and College</h2>
         <h2 className="text-center text-xl">Admit Card</h2>

         <div className="flex justify-between">
            <div className="flex-1 mt-4">
               <h3 className="text-lg"><span className="text-bold">Name : </span>{student.name}</h3>
               <h3 className="text-lg"><span className="text-bold">Exam : </span>1st Term Exam</h3>

               <div className="flex w-full my-2">
                  <div className="w-1/2">
                     <h3><span className="text-bold">ID : </span>{student.id}</h3>
                     <h3><span className="text-bold">Roll : </span>{student.id}</h3>
                     <h3><span className="text-bold">Class : </span>{student.class}</h3>
                  </div>
                  <div className="w-1/2">
                     <h3><span className="text-bold">Section : </span>{student.section}</h3>
                     <h3><span className="text-bold">Shift : </span>{student.shift}</h3>
                     <h3><span className="text-bold">Session : </span>2024</h3>
                  </div>
               </div>
            </div>
            <div>
               <img src="https://randomuser.me/api/portraits/men/77.jpg" alt="" className="w-28" />
            </div>
         </div>
        </div>
    ); 
}