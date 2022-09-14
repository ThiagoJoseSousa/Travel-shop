// I really have wrapped my head around getting images to display, webpack has a problem with require which is a synchronous function.
// my modules weren't being loaded, and async require wouldnt work as expected as said in their documentation. If u want to make dinamyc images appear,
// Put it on your public folder. The webpack doesnt know that the img must be loaded as last, so require with a variable inside wont find a module. 
// Files to get dinamycally - public folder, files to get by typing: src folder. 
// public folder is not processed by webpack, so doesnt need require. Require only works with static urls. 

export let itemList = [
{id:1, name:'Reeinder', price:100, image:"../assets/reindeer.webp", description:"Travel like Santa Claus!"},
{id:2, name:'Buffalo', price:170, image:"../assets/buffalo.jpg", description:"This one carries a lot of baggage!"},
{id:3, name:'Camel', price:240, image:"../assets/camel-1-340x200.jpg", description:"Go on a beach with this!"},
{id:4, name:'Elephant', price:310, image:"../assets/elephant.jpg", description:"Make some noise!"},
{id:5, name:'Cow', price:380, image:"../assets/cow.jpg",description:"Better for vegetarian"},
{id:6, name:'Yak', price:450, image:"../assets/yak.webp", description:"Soft ride"},
{id:7, name:'Llama', price:520, image:"../assets/lhama.jpg", description:"A funny trip!"},
{id:8, name:'Turtle', price:590, image:"../assets/turtle.webp", description:"Recommended for short distances"},
{id:9, name:'Ostrich', price:660, image:"../assets/ostrich.webp", description:"This one is pure fun!"},
{id:10, name:'Fast Horse', price:730, image:"../assets/fastest horse.jpg", description:"If u disliked the turtle one"},
{id:11, name:'Donkey', price:800, image:"../assets/donkeys.webp", description:"Do u like Shrek?"},
{id:12, name:'Beautiful Horse', price:870, image:"../assets/horse vannor ciganno.webp", description:"Limousine as a horse"},
{id:13, name:'Bull', price:940, image:"../assets/bull.webp", description:"If u like fights"}
]
