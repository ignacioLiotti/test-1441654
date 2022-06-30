import { Schema, model, models } from 'mongoose';

const SocialsSchema = new Schema({
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
  amount:{
    type: Number,
    required: true,
    default: 0,
  },
});

SocialsSchema.index({ post: 1 , date:1 }, { unique: true });

const Socials = models.Socials || model('Socials', SocialsSchema);

export default Socials;