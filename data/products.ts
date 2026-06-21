export type Category = "Sourdough" | "Cookies" | "Pastries" | "Seasonal Boxes" | "Catering" | "Drinks";
export type Product = { id:string; name:string; slug:string; category:Category; description:string; price:number; tags:string[]; featured:boolean; available:boolean };
const p = (id:string,name:string,category:Category,price:number,description:string,tags:string[],featured=false):Product => ({id,name,slug:name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),category,price,description,tags,featured,available:true});
export const products: Product[] = [
 p("sd-1","Classic Country Sourdough","Sourdough",11,"Naturally leavened country loaf with a burnished crust and open, tender crumb.",["naturally leavened","signature"],true),
 p("sd-2","Rosemary Sea Salt Sourdough","Sourdough",13,"Fragrant rosemary folded through our slow-fermented dough and finished with flaky salt.",["savory","weekend"],true),
 p("sd-3","Jalapeño Cheddar Sourdough","Sourdough",14,"A golden, gently spicy loaf with pockets of aged cheddar.",["savory","bold"]),
 p("sd-4","Cinnamon Raisin Sourdough","Sourdough",13,"Soft swirls of cinnamon, plump raisins, and a lightly caramelized crust.",["breakfast","sweet"]),
 p("sd-5","Olive Herb Sourdough","Sourdough",14,"Kalamata olives and garden herbs for an elegant table loaf.",["savory","dinner"]),
 p("sd-6","Seeded Heritage Sourdough","Sourdough",13,"A nourishing mix of sesame, sunflower, flax, and heritage grains.",["seeded","hearty"]),
 p("ck-1","Brown Butter Chocolate Chip Cookie","Cookies",4.5,"Crisp at the edge, plush at the center, with pools of dark chocolate.",["best seller","brown butter"],true),
 p("ck-2","Dark Chocolate Sea Salt Cookie","Cookies",4.5,"Deep cocoa dough, dark chocolate shards, and a bright pinch of sea salt.",["dark chocolate","sea salt"],true),
 p("ck-3","Espresso Toffee Cookie","Cookies",4.75,"Intense espresso, buttery toffee, and a crackled coffee-sugar finish.",["coffee","toffee"]),
 p("ck-4","Lemon Sugar Cookie","Cookies",4,"A soft, bright citrus cookie with lemon zest and fine sugar.",["citrus","classic"]),
 p("ck-5","Oatmeal Cream Cookie","Cookies",4.5,"Chewy oat cookies joined with vanilla bean cream.",["nostalgic","vanilla"]),
 p("ck-6","Seasonal Jam Thumbprint Cookie","Cookies",4.25,"Buttery almond cookie filled with a rotating small-batch preserve.",["seasonal","almond"]),
 p("pa-1","Almond Croissant","Pastries",5.75,"A twice-baked croissant layered with almond cream and toasted almonds.",["morning","almond"],true),
 p("pa-2","Morning Bun","Pastries",5.5,"Laminated pastry, orange sugar, and warm cinnamon.",["citrus","morning"]),
 p("pa-3","Butter Croissant","Pastries",4.5,"A shatteringly crisp all-butter croissant, baked fresh each morning.",["classic","laminated"],true),
 p("pa-4","Seasonal Danish","Pastries",5.5,"Laminated pastry with the season’s best fruit and vanilla cream.",["seasonal","fruit"]),
 p("pa-5","Chocolate Babka Slice","Pastries",5,"A rich slice of braided brioche with dark chocolate and cocoa crumb.",["chocolate","brioche"]),
 p("pa-6","Cinnamon Sugar Kouign-Amann","Pastries",5.5,"A caramelized Breton pastry with a tender, buttery center.",["caramelized","limited"]),
 p("bx-1","Signature Bakery Box","Seasonal Boxes",34,"A considered assortment of bread, cookies, and pastry for the table.",["giftable","assortment"],true),
 p("bx-2","Cookie Gift Box","Seasonal Boxes",28,"A ribbon-ready box of six gourmet cookies in our signature flavors.",["giftable","six cookies"],true),
 p("bx-3","Weekend Breakfast Box","Seasonal Boxes",38,"Two pastries, a country loaf, cookies, and house jam for a slow morning.",["weekend","brunch"]),
 p("bx-4","Sweet & Sour Sampler","Seasonal Boxes",42,"Our signature sourdough and sweet selection, tailored for sharing.",["signature","giftable"]),
 p("ca-1","Office Breakfast Box","Catering",72,"Pastries, fruit, butter, jam, and coffee service for 8–10 guests.",["serves 8–10","office"]),
 p("ca-2","Artisan Bread Board","Catering",85,"Three signature loaves with cultured butter, dips, and seasonal accompaniments.",["serves 10–12","sharing"]),
 p("ca-3","Celebration Dessert Table","Catering",180,"A polished dessert arrangement of cookies, pastries, and seasonal sweets.",["serves 20","celebration"]),
 p("ca-4","Corporate Cookie Tray","Catering",64,"An abundant presentation of our gourmet cookie lineup.",["serves 12–16","office"]),
 p("dr-1","House Cold Brew","Drinks",4.5,"Slow-steeped coffee, served black or with oat milk.",["coffee","cold"]),
 p("dr-2","Seasonal Sparkling Tea","Drinks",5,"Botanical sparkling tea with a rotating seasonal note.",["non-alcoholic","seasonal"])
];
export const categories: Category[] = ["Sourdough","Cookies","Pastries","Seasonal Boxes","Catering","Drinks"];
