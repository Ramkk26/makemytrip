let places = [
  "Adilabad",
  "Anantapur",
  "Chittoor",
  "Kakinada",
  "Guntur",
  "Hyderabad",
  "Karimnagar",
  "Khammam",
  "Krishna",
  "Kurnool",
  "Mahbubnagar",
  "Medak",
  "Nalgonda",
  "Nizamabad",
  "Ongole",
  "Hyderabad",
  "Srikakulam",
  "Nellore",
  "Visakhapatnam",
  "Vizianagaram",
  "Warangal",
  "Eluru",
  "Kadapa",
  "Anjaw",
  "Changlang",
  "East Siang",
  "Kurung Kumey",
  "Lohit",
  "Lower Dibang Valley",
  "Lower Subansiri",
  "Papum Pare",
  "Tawang",
  "Tirap",
  "Dibang Valley",
  "Upper Siang",
  "Upper Subansiri",
  "West Kameng",
  "West Siang",
  "Baksa",
  "Barpeta",
  "Bongaigaon",
  "Cachar",
  "Chirang",
  "Darrang",
  "Dhemaji",
  "Dima Hasao",
  "Dhubri",
  "Dibrugarh",
  "Goalpara",
  "Golaghat",
  "Hailakandi",
  "Jorhat",
  "Kamrup",
  "Kamrup Metropolitan",
  "Karbi Anglong",
  "Karimganj",
  "Kokrajhar",
  "Lakhimpur",
  "Marigaon",
  "Nagaon",
  "Nalbari",
  "Sibsagar",
  "Sonitpur",
  "Tinsukia",
  "Udalguri",
  "Araria",
  "Arwal",
  "Aurangabad",
  "Banka",
  "Begusarai",
  "Bhagalpur",
  "Bhojpur",
  "Buxar",
  "Darbhanga",
  "East Champaran",
  "Gaya",
  "Gopalganj",
  "Jamui",
  "Jehanabad",
  "Kaimur",
  "Katihar",
  "Khagaria",
  "Kishanganj",
  "Lakhisarai",
  "Madhepura",
  "Madhubani",
  "Munger",
  "Muzaffarpur",
  "Nalanda",
  "Nawada",
  "Patna",
  "Purnia",
  "Rohtas",
  "Saharsa",
  "Samastipur",
  "Saran",
  "Sheikhpura",
  "Sheohar",
  "Sitamarhi",
  "Siwan",
  "Supaul",
  "Vaishali",
  "West Champaran",
  "Chandigarh",
  "Ariyalur",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kanchipuram",
  "Kanyakumari",
  "Karur",
  "Madurai",
  "Nagapattinam",
  "Nilgiris",
  "Namakkal",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Salem",
  "Sivaganga",
  "Tirupur",
  "Tiruchirappalli",
  "Theni",
  "Tirunelveli",
  "Thanjavur",
  "Thoothukudi",
  "Tiruvallur",
  "Tiruvarur",
  "Tiruvannamalai",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
  "Alappuzha",
  "Ernakulam",
  "Idukki",
  "Kannur",
  "Kasaragod",
  "Kollam",
  "Kottayam",
  "Kozhikode",
  "Malappuram",
  "Palakkad",
  "Pathanamthitta",
  "Thrissur",
  "Thiruvananthapuram",
  "Wayanad",
];

// sorting places in ascending order
let sortplaces = places.sort();

let from = document.getElementById("from");
from.addEventListener("keyup", (el) => {
  removeElements();
  for (let i of sortplaces) {
    if (
      i.toLowerCase().startsWith(from.value.toLowerCase()) &&
      from.value != ""
    ) {
      let listitem = document.createElement("li");
      listitem.classList.add("place-items");
      listitem.style.cursor = "pointer";
      listitem.addEventListener("click", function (event) {
        displaynames(i);
        removeElements();
      });
      let word = "<b>" + i.substring(0, from.value.lenght) + "<b>";

      listitem.innerHTML = word;
      document.querySelector(".place-list").appendChild(listitem);
    }
  }
});

function displaynames(value) {
  from.value = value;
}
function removeElements() {
  let items = document.querySelectorAll(".place-items");
  items.forEach((item) => {
    item.remove();
  });
}

let placeTo = [
  "Adilabad",
  "Anantapur",
  "Chittoor",
  "Kakinada",
  "Guntur",
  "Hyderabad",
  "Karimnagar",
  "Khammam",
  "Krishna",
  "Kurnool",
  "Mahbubnagar",
  "Medak",
  "Nalgonda",
  "Nizamabad",
  "Ongole",
  "Hyderabad",
  "Srikakulam",
  "Nellore",
  "Visakhapatnam",
  "Vizianagaram",
  "Warangal",
  "Eluru",
  "Kadapa",
  "Anjaw",
  "Changlang",
  "East Siang",
  "Kurung Kumey",
  "Lohit",
  "Lower Dibang Valley",
  "Lower Subansiri",
  "Papum Pare",
  "Tawang",
  "Tirap",
  "Dibang Valley",
  "Upper Siang",
  "Upper Subansiri",
  "West Kameng",
  "West Siang",
  "Baksa",
  "Barpeta",
  "Bongaigaon",
  "Cachar",
  "Chirang",
  "Darrang",
  "Dhemaji",
  "Dima Hasao",
  "Dhubri",
  "Dibrugarh",
  "Goalpara",
  "Golaghat",
  "Hailakandi",
  "Jorhat",
  "Kamrup",
  "Kamrup Metropolitan",
  "Karbi Anglong",
  "Karimganj",
  "Kokrajhar",
  "Lakhimpur",
  "Marigaon",
  "Nagaon",
  "Nalbari",
  "Sibsagar",
  "Sonitpur",
  "Tinsukia",
  "Udalguri",
  "Araria",
  "Arwal",
  "Aurangabad",
  "Banka",
  "Begusarai",
  "Bhagalpur",
  "Bhojpur",
  "Buxar",
  "Darbhanga",
  "East Champaran",
  "Gaya",
  "Gopalganj",
  "Jamui",
  "Jehanabad",
  "Kaimur",
  "Katihar",
  "Khagaria",
  "Kishanganj",
  "Lakhisarai",
  "Madhepura",
  "Madhubani",
  "Munger",
  "Muzaffarpur",
  "Nalanda",
  "Nawada",
  "Patna",
  "Purnia",
  "Rohtas",
  "Saharsa",
  "Samastipur",
  "Saran",
  "Sheikhpura",
  "Sheohar",
  "Sitamarhi",
  "Siwan",
  "Supaul",
  "Vaishali",
  "West Champaran",
  "Chandigarh",
  "Ariyalur",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kanchipuram",
  "Kanyakumari",
  "Karur",
  "Madurai",
  "Nagapattinam",
  "Nilgiris",
  "Namakkal",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Salem",
  "Sivaganga",
  "Tirupur",
  "Tiruchirappalli",
  "Theni",
  "Tirunelveli",
  "Thanjavur",
  "Thoothukudi",
  "Tiruvallur",
  "Tiruvarur",
  "Tiruvannamalai",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
  "Alappuzha",
  "Ernakulam",
  "Idukki",
  "Kannur",
  "Kasaragod",
  "Kollam",
  "Kottayam",
  "Kozhikode",
  "Malappuram",
  "Palakkad",
  "Pathanamthitta",
  "Thrissur",
  "Thiruvananthapuram",
  "Wayanad",
];

// sorting places in ascending order
let sortedplaces = placeTo.sort();

let to = document.getElementById("to");
to.addEventListener("keyup", (elem) => {
  removes();
  for (let el of sortedplaces) {
    if (el.toLowerCase().startsWith(to.value.toLowerCase()) && to.value != "") {
      let listitems = document.createElement("li");
      listitems.classList.add("to-items");
      listitems.style.cursor = "pointer";
      listitems.addEventListener("click", function (elem) {
        display(el);
        removes();
      });
      let word = "<b>" + el.substring(0, to.value.lenght) + "<b>";

      listitems.innerHTML = word;
      document.querySelector(".to-list").appendChild(listitems);
    }
  }
});

function display(value) {
  to.value = value;
}
function removes() {
  let items = document.querySelectorAll(".to-items");
  items.forEach((list) => {
    list.remove();
  });
}

// if(to.value==from.value){
//   alert(same);
// }

// <==============CLass===============>

// let className = [
//   "All Class",
//   "first AC",
//   "Second AC",
//   "Third AC",
//   "Second Seating",
//   "AC Chair Car",
//   "First Class",
//   "Third AC <br> Economy"];

// let classes = document.getElementById("Class");
// classes.addEventListener("keyup",(elements)=>{
//   for( let key of className){
//     if(key.toLowerCase().startsWith(classes.value.toLowerCase()) && classes.value!="")
//     {
//       let classItems=document.createElement("li");
//       classItems.classList.add("class-items");
//       classItems.style.cursor="pointer";
//       classItems.addEventListener("click",function (ele){
//         display(key);
//       });
//       let word = "<b>" + key.substring(0, classes.value.lenght) + "<b>";
//       word += key.substring(classes.value.lenght);

//       classItems.innerHTML = word;
//       document.querySelector(".class-list").appendChild(classItems);
//     }
//   }
// })

// function display(value){
//   classes.value=value;
// }
// function removes() {
//   let items = document.querySelectorAll(".class-items");
//   items.forEach((list) => {
//     list.remove();
//   });
// }
