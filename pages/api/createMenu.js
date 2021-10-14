import {table, minifyRecords} from '../../utils/Airtable'
export default async (req, res) => {
    const {day, first_dish, second_dish} = req.body;
    
    try {

        const createdRecords = await table.create([{fields: {day, first_dish, second_dish}}]);
        const createdRecord = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields
        }
        
        res.status(200).json(createdRecord);
    }catch(err){
        res.status(500).json({ msg: 'Something went wrong'});
    }
}
  