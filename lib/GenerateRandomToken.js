//@ts-check

const CHARS = "23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz";
const CHARS_LENGTH = CHARS.length;
const TOKEN_LENGTH = 8;

function gen() {
	let token = "";
	let i = TOKEN_LENGTH;
	while (i--)
		token += CHARS[Math.floor(Math.random() * CHARS_LENGTH)];
	return token;
}

module.exports = { gen, TOKEN_LENGTH };
