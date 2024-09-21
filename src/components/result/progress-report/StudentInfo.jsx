export default function StudentInfo({result}) {
    return (
      <div>
        <h3><span className="text-textGray">Name : </span>{result.name} </h3>
        <h3><span className="text-textGray">Roll : </span>{result.roll} </h3>
        <h3><span className="text-textGray">Class : </span>{result.class} </h3>
        <h3><span className="text-textGray">Section : </span>{result.section} </h3>
        <h3><span className="text-textGray">Session : </span>{result.session} </h3>
        <h3><span className="text-textGray">Gurdian : </span>{result.gurdian} </h3>
      </div>
    );
}