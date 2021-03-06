// function darkMode(){
//     element = document.body;
//     element.classList.toggle("darkMode");
// }

// function toggleTheme(){
//     var lt = document.getElementById("lightCSS"),
//     dt = document.getElementById("darkkCSS");

//     if(lt.disabled == "disabled"){
//         lt.disabled = undefined;
//         dt.disabled = "disabled";
//     }
//     else{
//         lt.disabled = "disabled";
//         dt.disabled = undefined;
//     }
// }

function toggle(){
    var a = document.getElementById("theme");
    a.x = 'darkTheme' == a.x ? 'lightTheme' : 'darkTheme';
    a.href = a.x + '.css';
}