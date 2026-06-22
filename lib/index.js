"use strict";
const chalk = require("chalk");

console.log(chalk.hex('#00D4FF').bold("┌───────────────────────────────────────┐"));
console.log(chalk.hex('#00D4FF').bold("│ ") + chalk.hex('#FF0033')("☠ ") + chalk.whiteBright.bold("CONDEMNED FORCE BOT") + chalk.hex('#FF0033')(" WA ") + chalk.hex('#00D4FF').bold(" │"));
console.log(chalk.hex('#00D4FF').bold("├───────────────────────────────────────┤"));
console.log(chalk.hex('#00D4FF').bold("│ ") + chalk.hex('#00FFAA')("📌 Owner     ") + chalk.white("➜ ") + chalk.bold("jojo_xyz") + " ".repeat(13) + chalk.hex('#00D4FF').bold("│"));
console.log(chalk.hex('#00D4FF').bold("│ ") + chalk.hex('#00FFAA')("🔧 Developer ") + chalk.white("➜ ") + chalk.greenBright.underline("jojo_xyz") + " ".repeat(13) + chalk.hex('#00D4FF').bold("│"));
console.log(chalk.hex('#00D4FF').bold("│ ") + chalk.hex('#00FFAA')("⚡ Version   ") + chalk.white("➜ ") + chalk.yellow.bold("V1.0") + " ".repeat(15) + chalk.hex('#00D4FF').bold("│"));
console.log(chalk.hex('#00D4FF').bold("└───────────────────────────────────────┘\n"));

// Animasi ASCII Condemned Force
console.log(chalk.hex('#FF0033')("╭━╮╭━╮╱╱╭╮"));
console.log(chalk.hex('#FF0033')("┃┃╰╯┃┃╱╱┃┃") + chalk.hex('#00D4FF')("   Condemned Force"));
console.log(chalk.hex('#FF0033')("┃╭╮╭╮┣━━┫┃╭━━╮") + chalk.hex('#FFCC00')(" ✦ jojo_xyz"));
console.log(chalk.hex('#FF0033')("┃┃┃┃┃┃┃━┫┃┃╭╮┃") + chalk.cyan("  WhatsApp Bot"));
console.log(chalk.hex('#FF0033')("┃┃┃┃┃┃┃━┫╰┫╰╯┃") + chalk.greenBright("   @jojo_xyz"));
console.log(chalk.hex('#FF0033')("╰╯╰╯╰┻━━┻━┻━━╯\n"));

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;