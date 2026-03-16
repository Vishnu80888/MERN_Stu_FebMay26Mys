const items = { item1: "Laptop", item2: "sever", item3: "cloudApi" };

for (const [key, itemname] of Object.entries(items)) {
  console.log(`${key}:${itemname}`);
}
