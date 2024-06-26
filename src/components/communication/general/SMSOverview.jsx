export default function SMSOverview({characterCount}) {
    return (
        <div className="flex justify-between pt-4">
         <h5>Character Count: {characterCount}</h5>
         <h5>Number of SMS: 0</h5>
        </div>
    );
}