const Date = ({date}) => {
    console.log('my date', date);
    return ( 
        <div className="text-center">
            <h3 className="text-lg"><span>{date[0].fields.date_from}</span> - <span>{date[0].fields.date_to}</span> <span>{date[0].fields.time_from}</span> - <span>{date[0].fields.time_to}</span></h3>
            <p className="text-sm">Sallad / Bröd / Smör / Kaffe / Te / Vatten (ingår i alla maträtter)</p>
        </div>
    );
}
 
export default Date;