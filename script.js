// Fixed header
window.onscroll = function() {myFunc()};

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;
console.log(sticky)
function myFunc() {
  if (window.scrollY > sticky ) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Mobile -menu
        function myFunction() {
            let x = document.getElementById("myLinks");
            let openimg = document.getElementById("open-img");
            let closeimg = document.getElementById("close-img");
            if (x.style.display === "block" || openimg.style.display === "none" || closeimg.style.display === "block") {
                x.style.display = "none";
                openimg.style.display = "block";
                closeimg.style.display = "none";

            } else {
                x.style.display = "block";
                openimg.style.display = "none";
                closeimg.style.display = "block";
            }
        }
    