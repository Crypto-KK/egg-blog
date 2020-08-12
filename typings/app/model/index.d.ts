// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportResource from '../../../app/model/resource';
import ExportRole from '../../../app/model/role';
import ExportRoleResource from '../../../app/model/role_resource';
import ExportUser from '../../../app/model/user';
import ExportUserRole from '../../../app/model/user_role';

declare module 'egg' {
  interface IModel {
    Resource: ReturnType<typeof ExportResource>;
    Role: ReturnType<typeof ExportRole>;
    RoleResource: ReturnType<typeof ExportRoleResource>;
    User: ReturnType<typeof ExportUser>;
    UserRole: ReturnType<typeof ExportUserRole>;
  }
}
