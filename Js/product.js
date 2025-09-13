//data
let products = {
    data: [
      {
        productName: "Gear box",
        category: "Excavator",
        number: "0015",
        image: "./assets/products/Excavator/Boom Gear Box.jpg",
      },
      {
        productName: "Wheel axle",
        category: "Truck",
        number: "0001",
        image: "./assets/products/truck/Alloy Front Steering Rod Link Pole Wheel Axle.jpg",
      },
      {
        productName: "Power steering pump",
        category: "Truck",
        number: "0002",
        image: "./assets/products/truck/Cardone 20-7920 Remanufactured Power Steering Pump with reservoir.jpg",
      },
      {
        productName: "Disc brake pad",
        category: "Truck",
        number: "0003",
        image: "./assets/products/Truck/Disc Brake Pad.jpg",
      },
      {
        productName: "Drag Link",
        category: "Truck",
        number: "0004",
        image: "./assets/products/Truck/MOOG ES3624 Drag Link.jpg",
      },
      {
        productName: "Leaf spring shackle bushing",
        category: "Truck",
        number: "0005",
        image: "./assets/products/Truck/MOOG leaf spring shackle Bushing.jpg",
      },
      {
        productName: "Steering & Suspension leaf spring bushing",
        category: "Truck",
        number: "0006",
        image: "./assets/products/Truck/MOOG Steering & Suspension Leaf Spring Bushing.jpg",
      },
      {
        productName: "Tie Rod",
        category: "Truck",
        number: "0007",
        image: "./assets/products/Truck/MOOG Tie Rod End.jpg",
      },
      {
        productName: "Leaf spring bushign",
        category: "Truck",
        number: "0008",
        image: "./assets/products/Truck/Omix-Ada Leaf Spring Bushing.jpg",
      },
      {
        productName: "Power steering pump",
        category: "Truck",
        number: "0009",
        image: "./assets/products/Truck/Power Steering pump power assist pump.jpg",
      },
      {
        productName: "Power steering bracket kit",
        category: "Truck",
        number: "0010",
        image: "./assets/products/Truck/Truck Power steering Bracket Kit Swap.jpg",
      },
      {
        productName: "Hub bearing seal kit",
        category: "Truck",
        number: "0011",
        image: "./assets/products/Truck/Ultra Tow High Performance Hub Bearing Seal Kit.jpg",
      },
      {
        productName: "Alloy disc brake rotor",
        category: "Truck",
        number: "0012",
        image: "./assets/products/Truck/uxcell Aluminium Alloy Disc Brake Rotor Cover Silver Tone.jpg",
      },
      {
        productName: "Axle real wheel bearing",
        category: "Truck",
        number: "0013",
        image: "./assets/products/Truck/Yukon Gear & Axle (AK 6410) Rear Wheel Bearing.jpg",
      },
      {
        productName: "Cylinder seal kit",
        category: "Excavator",
        number: "0014",
        image: "./assets/products/Excavator/Boom Cylinder Seal Kit.jpg",
      },
      {
        productName: "Crankshaft",
        category: "Excavator",
        number: "0016",
        image: "./assets/products/Excavator/Crankshaft.jpg",
      },
      {
        productName: "Cylinder head gasket",
        category: "Excavator",
        number: "0017",
        image: "./assets/products/Excavator/Cylinder  head gasket.jpg",
      },
      {
        productName: "Electronic solenoid valve coil",
        category: "Excavator",
        number: "0018",
        image: "./assets/products/Excavator/Electronic Solenoid Valve coil (For volvo).jpg",
      },
      {
        productName: "Cylinder head bolts",
        category: "Excavator",
        number: "0019",
        image: "./assets/products/Excavator/Cylinder Head Bolts (compatible for mitsubishi engine).jpg",
      },
      {
        productName: "Final Drive",
        category: "Excavator",
        number: "0020",
        image: "./assets/products/Excavator/Final Drive.jpg",
      },
      {
        productName: "Fuel oil pressure",
        category: "Excavator",
        number: "0021",
        image: "./assets/products/Excavator/Fuel oil pressure for Volvo.jpg",
      },
      {
        productName: "Hydraulic motor",
        category: "Excavator",
        number: "0022",
        image: "./assets/products/Excavator/Hydraulic motor.jpg",
      },
      {
        productName: "Oil seal crankshaft rear",
        category: "Excavator",
        number: "0023",
        image: "./assets/products/Excavator/Oil Seal Crankshaft Rear (Volvo Truck).jpg",
      },
      {
        productName: "Piston",
        category: "Excavator",
        number: "0024",
        image: "./assets/products/Excavator/PANGOLIN D902 Piston STD.jpg",
      },
      {
        productName: "Tire track",
        category: "Excavator",
        number: "0025",
        image: "./assets/products/Excavator/Replacement tire track.jpg",
      },
      {
        productName: "Top roller",
        category: "Excavator",
        number: "0026",
        image: "./assets/products/Excavator/Top Roller.jpg",
      },
      {
        productName: "Vane pump",
        category: "Excavator",
        number: "0027",
        image: "./assets/products/Excavator/Vane pump.jpg",
      },
    ],
  };
  
//Start function

  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //product number
    let number = document.createElement("h6");
    number.innerText = "No. " + i.number;
    container.appendChild(number);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };