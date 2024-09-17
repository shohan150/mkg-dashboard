export default function SubjectName({data}) {
    return (
    <th className="min-w-20 pt-1">
        {data}
        <div className="text-base -rotate-[91deg] mt-1 mb-2 leading-7">
        <h3>Written</h3>
        <h3>MCQ</h3>
        </div>
    </th>
    );
}