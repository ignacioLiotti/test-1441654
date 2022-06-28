import { Schema, model, models } from 'mongoose';

const SocialsSchema = new Schema({
  social:{
    type: String,
    required: true,
  },
  post:{
    type: String,
    required: false,
    default: '',
  },
  amount:{
    type: Number,
    required: true,
    default: 0,
  },
});

SocialsSchema.index({ social: 1, post: 1 }, { unique: true });

const Socials = models.Socials || model('Socials', SocialsSchema);

export default Socials;