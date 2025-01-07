import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://atlas-sql-67721de73744c17d3c446955-smxms.a.query.mongodb.net/CustomPacksDB?ssl=true&authSource=admin');

export default mongoose.connection;