export { };

type TRole = string | number;
type TSuperRole = "USER" | "ADMIN" | "SUPERADMIN";

const user: TSuperRole = "USER";
const admin: TSuperRole = "ADMIN";
const superAdmin: TSuperRole = "SUPERADMIN";

const otherUser: TSuperRole = "ADMIN"


enum RoleEnum {
    USER = "USER", //no "=" => 0
    SUPERADMIN = "SUPERADMIN", //1
    ADMIN = "ADMIN" //2
}

const myRole: RoleEnum = RoleEnum.ADMIN;