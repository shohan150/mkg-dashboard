export default function SinglePresentField({status, index}) {
   const bgColor = status === "p" ? "bg-green" : status === "a" ? "bg-red" : "bg-yellow";
  return (
    <div className={`w-7 text-white capitalize ${bgColor} ${index === 0 ? "border-l-0" : ""}`}>
      {status}
    </div>
  )
}
