// Source - https://stackoverflow.com/a
// Posted by user1767210, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-12, License - CC BY-SA 4.0
debugger;

const tables = document.querySelectorAll("table");

tables.forEach((element) => {
	let wrapper = document.createElement("div").setAttribute("class", "overflow-auto");
	element.parentNode.insertBefore(wrapper, element);
	return wrapper.appendChild(element);
});
