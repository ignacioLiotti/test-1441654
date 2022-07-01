import { Schema, model, models } from 'mongoose';

const SocialsSchema = new Schema({
  src:{
    type: String,
    required: false,
    default: '',
  },
  post:{
    type: String,
    required: false,
    default: '',
  },
  date:{
    type: Date,
    required: false,
    default: Date.now,
  },
});

SocialsSchema.index({ post: 1 , date:1 }, { unique: true });

const Socials = models.Socials || model('Socials', SocialsSchema);

export default Socials;