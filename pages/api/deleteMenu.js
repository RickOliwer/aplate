import {table, getMinifiedRecord} from './utils/Airtable'
export default async (req, res) => {
    const { id, fields } = req.body;
    
    try {

        const deletedRecords = await table.destroy([id]);

        res.status(200).json(getMinifiedRecord(deletedRecords[0]));
    }catch(err){
        res.status(500).json({ msg: 'Something went wrong'});
    }
}
  