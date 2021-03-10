function toggle(){
    var a = document.getElementById("theme");
    a.x = 'darkTheme' == a.x ? 'lightTheme' : 'darkTheme';
    a.href = a.x + '.css';
}

