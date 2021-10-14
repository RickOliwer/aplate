import {dateTable, minifyRecords} from './utils/DateAirtable'
export default async (req, res) => {
    try {

        const records = await dateTable.select({
            view: "Grid view",
        }).firstPage();
        const minifiedRecords = minifyRecords(records);
        res.status(200).json(minifiedRecords);
    }catch(err){
        res.status(500).json({ msg: 'Something went wrong'});
    }
}
  