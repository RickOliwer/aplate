const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_DATEBASE_ID);

const dateTable = base(process.env.AIRTABLE_DATETABLE_NAME);

const minifyRecords = (records) => {
    return records.map(record => getMinifiedRecord(record));
}
const getMinifiedRecord = (record) => {
    if(!record.fields.completed){
        record.fields.completed = false;
    }
    return {
        id: record.id,
        fields: record.fields,
    }
}


export {dateTable, getMinifiedRecord, minifyRecords};