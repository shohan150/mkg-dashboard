export default function TemplateAndBody({setCharacterCount}) {
    return (
        <>
         <div className="space-y-2">
            <label className="w-28 md:max-lg:w-32">Select Template</label>
            <select
            id=""
            name=""
            defaultValue="First Template"
            className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none"
            >
                <option value="First Template">First Template</option>
                <option value="Second Template">Second Template</option>
                <option value="Third Template">Third Template</option>
            </select>
         </div>

         <div className="space-y-2">
            <label className="w-28 md:max-lg:w-32">SMS Body</label>
            <textarea className="bg-bgGray w-full rounded px-1 py-2 border-2 border-transparent focus:border-primary focus:outline-none" onChange={(e)=> setCharacterCount(e.target.value.length)}></textarea>
         </div>
        </>
    );
}