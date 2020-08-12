// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportResource from '../../../app/controller/resource';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    resource: ExportResource;
    user: ExportUser;
  }
}
