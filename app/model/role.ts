module.exports = app => {
  const mongoose = app.mongoose;

  const RoleSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  });

  RoleSchema.pre('save', next => {
    const now = new Date();
    // @ts-ignore
    this.updated_at = now;
    next();
  });

  return mongoose.model('Role', RoleSchema);
};
