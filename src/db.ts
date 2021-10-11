import {Pool} from 'pg';

const connectionString ="postgres://cpgbubwc:8u0XSMXoJKacZp8gRLMEyi0-pdFpJIJN@kesavan.db.elephantsql.com/cpgbubwc";
const db = new Pool({connectionString});

export default db;