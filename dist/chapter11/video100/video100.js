"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = "USER";
const admin = "ADMIN";
const superAdmin = "SUPERADMIN";
const otherUser = "ADMIN";
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["USER"] = "USER";
    RoleEnum["SUPERADMIN"] = "SUPERADMIN";
    RoleEnum["ADMIN"] = "ADMIN"; //2
})(RoleEnum || (RoleEnum = {}));
const myRole = RoleEnum.ADMIN;
