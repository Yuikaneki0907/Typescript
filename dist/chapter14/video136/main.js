"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
const animal_1 = __importDefault(require("./animal"));
console.log("minus: 10-1 = ", (0, math_1.minus)(10, 1));
const a = new animal_1.default("lee");
