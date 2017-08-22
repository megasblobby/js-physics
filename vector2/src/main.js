window.onload = function () {
	let vectorA = new Vector2(4, 3);
	let vectorB = new Vector2(7, 2);
	let vectorC = new Vector2(2, 4);

	vectorLog("Vector2 A", vectorA);
	vectorLog("Vector2 B", vectorB);
	vectorLog("Vector2 C", vectorC);

	let vectorAplusB = vectorA.add(vectorB);
	let vectorAminusC = vectorA.subctract(vectorC);

	vectorLog("A + B", vectorAplusB);
	vectorLog("A - C", vectorAminusC);

	vectorLog("A normalized", vectorA.normalized());
	let vectorAMinus = vectorA.clone();
	vectorAMinus.negate();
	vectorLog("-A", vectorAMinus);
	console.log("A lenght squared: ", vectorA.lengthSquared());

	let AdotB = vectorA.dot(vectorB);
	console.log("A dot B: ", AdotB);
}

function vectorLog(label, vector2) {
	console.log(label);
	vector2.toString();
	console.log("\n");
}
