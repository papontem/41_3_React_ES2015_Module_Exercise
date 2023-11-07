/**
 *
 * This file should export two array helper functions:
 * choice(items): returns a randomly selected item from array of items
 * remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
 *
 * */

// choice(items): returns a randomly selected item from array of items

function choice(items) {
	const randomIndex = Math.floor(Math.random() * items.length);
	return items[randomIndex];
}

// remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
function remove(items, item) {
	const itemIndex = items.indexOf(item);
	if (itemIndex !== -1) {
		return items.splice(itemIndex, 1)[0];
	}
	return undefined;
}

export { choice, remove };
