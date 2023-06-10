export default function currencyFormat(num) {
	return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}
