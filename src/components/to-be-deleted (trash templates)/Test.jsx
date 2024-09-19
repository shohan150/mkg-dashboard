import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";

 const Test = () => {

   const students = [
      {
        id: 1,
        name: "John Doe",
        age: 18,
        grade: "A",
        email: "john.doe@example.com",
        address: "123 Main St, Cityville",
      },
      {
        id: 2,
        name: "Jane Smith",
        age: 19,
        grade: "B",
        email: "jane.smith@example.com",
        address: "456 Oak Ave, Townsville",
      },
      {
        id: 3,
        name: "Michael Johnson",
        age: 20,
        grade: "C",
        email: "michael.j@example.com",
        address: "789 Pine Rd, Villagetown",
      },
      {
        id: 4,
        name: "Emily Davis",
        age: 18,
        grade: "A",
        email: "emily.davis@example.com",
        address: "101 Maple St, Smalltown",
      },
      {
        id: 5,
        name: "Daniel Brown",
        age: 21,
        grade: "B",
        email: "daniel.brown@example.com",
        address: "202 Cedar Dr, Bigcity",
      },
    ];

    
  const generatePDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["ID", "Name", "Age", "Grade"];
    const tableRows = [];

    students.forEach((student) => {
      const studentData = [student.id, student.name, student.age, student.grade];
      tableRows.push(studentData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("students.pdf");
  };

  const generateExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, "students.xlsx");
  };

  const generatePrint = () => {
   const doc = new jsPDF();
 
   // Title
   doc.text("Student Data", 20, 10);
 
   // Generate table
   doc.autoTable({
     head: [["ID", "Name", "Age", "Grade", "Email", "Address"]],
     body: students.map(student => [
       student.id,
       student.name,
       student.age,
       student.grade,
       student.email,
       student.address
     ]),
   });
 
   // Create a blob from the PDF
   const pdfBlob = doc.output("blob");
 
   // Create an iframe element
   const iframe = document.createElement('iframe');
   iframe.style.display = 'none'; // Hide the iframe
   document.body.appendChild(iframe);
 
   // Create a Blob URL for the PDF and set it as iframe's src
   const blobUrl = URL.createObjectURL(pdfBlob);
   iframe.src = blobUrl;
 
   // Wait for iframe to load and trigger print
   iframe.onload = function () {
     iframe.contentWindow.focus();
     iframe.contentWindow.print();
   };
 };
 
 function testing(){
  const doc = new jsPDF();

  doc.text("Hello world!", 10, 10);
  doc.save("a4.pdf");
 }

  return (
    <div className="p-4">
      <button onClick={generatePDF} className="bg-blue-500 text-white px-4 py-2 rounded">
        Download PDF
      </button>
      <button onClick={generateExcel} className="bg-green-500 text-white px-4 py-2 rounded ml-2">
        Download Excel
      </button>
      <button
        onClick={generatePrint}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Print PDF
      </button>
      <button
        onClick={testing}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Print Test
      </button>
    </div>
  );
};

export default Test;
