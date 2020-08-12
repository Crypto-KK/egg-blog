module.exports = app => {
  const mongoose = app.mongoose;

  const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: { type: String },
    role: {
      type: Number,
      default: 0
    },
    salt: {
      type: String
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    last_login: { type: Date }
  });

  UserSchema.pre('save', next => {
    const now = new Date();
    // @ts-ignore
    this.updated_at = now;
    next();
  });

  return mongoose.model('User', UserSchema);
};
