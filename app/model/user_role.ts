module.exports = app => {
  const mongoose = app.mongoose;

  const UserRoleSchema = new mongoose.Schema({
    user_id: {
      type: mongoose.Types.ObjectId,
      required: true
    },
    role_id: {
      type: mongoose.Types.ObjectId,
      required: true
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  });

  UserRoleSchema.pre('save', next => {
    const now = new Date();
    // @ts-ignore
    this.updated_at = now;
    next();
  });

  return mongoose.model('UserRole', UserRoleSchema, 'user_role');
};
