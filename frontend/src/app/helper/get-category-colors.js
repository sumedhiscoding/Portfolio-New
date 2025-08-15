const categoryColor = new Map();

categoryColor.set("Product Reviews", "orange");
categoryColor.set("Travel Guides", "green");
categoryColor.set("Opinions", "Red");
categoryColor.set("MeowCity", "purple");

const getCategoryColor = (category) => categoryColor.get(category);

export default getCategoryColor;
