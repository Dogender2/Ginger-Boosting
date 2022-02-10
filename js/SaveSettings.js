function setPL() {
    localStorage.removeItem("SettingsLanguage");
    localStorage.setItem("SettingsLanguage", "PL");
    
    console.log("PL");
    
    location.reload();
}





function setEN() {
    localStorage.removeItem("SettingsLanguage");
    localStorage.setItem("SettingsLanguage", "EN");

    console.log("EN");

    location.reload();
}