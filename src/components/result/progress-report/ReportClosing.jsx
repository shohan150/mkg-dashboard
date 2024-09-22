export default function ReportClosing() {
    return (
      <>
         <div className="flex justify-between gap-4">
            <table className="w-1/3 border-collapse border border-black text-center">
               <tr className="divide-x divide-black border-b border-black">
                  <td>Result Status</td>
                  <td>Failed</td>
               </tr>
               <tr className="divide-x divide-black">
                  <td>Position: 10th</td>
                  <td>2</td>
               </tr>
            </table>

            <div className="w-2/3 border border-black p-1">
               Comments :
            </div>
         </div>

         <h3 className="mt-10 mb-2 text-center italic">Progress Report was created on a computer and is valid without the signature and seal.</h3>
      </>
    );
}