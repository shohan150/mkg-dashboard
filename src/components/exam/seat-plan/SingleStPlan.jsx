export default function SingleStPLan({student}) {
   return (
       <div className="mt-4 border border-primary rounded p-4">
        <h2 className="text-primary text-center text-2xl font-bold">Urban School and College</h2>
        <h2 className="text-center text-xl">Seat Plan</h2>

        <div className="flex justify-between mt-2">
           <div className="flex-1">
               <h3 className=""><span className="text-bold">Exam : </span>1st Term Exam</h3>
               <h3 className=""><span className="text-bold">Name : </span>{student.name}</h3>
               <h3 className=""><span className="text-bold">Class : </span>{student.class}</h3>
               <h3 className=""><span className="text-bold">Section : </span>{student.section}</h3>

           </div>
           <div className="min-w-32 flex items-center">
               <div className="w-full border border-primary text-center p-2 leading-8 mb-2">
                  <h3 className="text-lg">ID No</h3>
                  <h3 className="text-2xl my-2">{student.id}</h3>
               </div>
           </div>
        </div>
       </div>
   ); 
}