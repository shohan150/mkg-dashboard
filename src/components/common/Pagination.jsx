
export default function Pagination({show, total, index, setIndex}) {
   const boxNumber = Math.round(total/show);

   const paginationBoxs = [];

   function handleClick(i) {
      setIndex(i);
   }

   for (let i = 0; i < boxNumber; i++) {
     paginationBoxs.push(<button key={i} 
      onClick={() => handleClick(i)}
      className={`font-bold border-2 border-primary rounded px-3 py-1 hover:bg-primary hover:text-white ${index === i && "bg-primary text-white"}`}> {i + 1}</button>);
   }
   
    return (
      <div className="flex items-center justify-end gap-2 mt-6 mb-2">
         {paginationBoxs}
      </div>
    );
}