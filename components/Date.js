const Date = ({date}) => {
    console.log('my date', date);
    return ( 
        <div>
            <p className="text-center"><span>{date[0].fields.date_from}</span> - <span>{date[0].fields.date_to}</span> <span>{date[0].fields.time_from}</span> - <span>{date[0].fields.time_to}</span></p>
        </div>
    );
}
 
export default Date;