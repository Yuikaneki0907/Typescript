"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const laptrinhvien_1 = __importDefault(require("./laptrinhvien"));
console.log("Protected");
const dev = new laptrinhvien_1.default("lee", 1, 100, 21);
dev.printInfo();
