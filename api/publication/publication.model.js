import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const publicationSchema = new Schema(
  {
    idReport: Number,
    idSubject: Number,
    reportState: String,
    termType: String,
    publicationType: String,
    reportGroup: String,
    outputNumber: String,
    outputDate: Object,
    bSentToNSSMC: Boolean,
    bDisclosure: Boolean,
    dateFill: Object,
    reportFormat: String,
  },
  {
    versionKey: false,
  },
);

const publicationModel = mongoose.model('publications', publicationSchema);

export default publicationModel;
