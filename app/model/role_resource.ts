module.exports = app => {
  const mongoose = app.mongoose;

  const RoleResourceSchema = new mongoose.Schema({
    role_id: {
      type: String,
      required: true,
    },
    resource_id: {
      type: String,
      required: true,
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  });

  RoleResourceSchema.pre('save', next => {
    const now = new Date();
    // @ts-ignore
    this.updated_at = now;
    next();
  });

  return mongoose.model('RoleResource', RoleResourceSchema, 'role_resource');
};
