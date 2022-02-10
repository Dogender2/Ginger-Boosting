var SettingsLanguage = localStorage.getItem("SettingsLanguage");











//Load Vue

if(localStorage.getItem("SettingsLanguage") == "PL")
{
    Vue.createApp({
        data() {
            return {
                //Tytuł naszego projektu
                Title: 'Ginger Boosting',
                
                //Tekst w containerze
                MessageInContainer: 'Masz niski poziom? Brakuje Ci nie duzo stopni karnetu a za chwile nowy sezon a grasz jak syf i tego nie wbijesz? Jesli posiadasz taki problem lub inny zwiazany z wbiciem rangi lub poziomu to ta oferta jest dla ciebie!',
                
                //Napis do gier
                GamesTitle : 'Gry, ktore obslugujemy:',
            }
        }
    }).mount('#app')
}

if(localStorage.getItem("SettingsLanguage") == "EN")
{
    Vue.createApp({
        data() {
            return {
                //Tytuł naszego projektu
                Title: 'Ginger Boosting',
                
                //Tekst w containerze
                MessageInContainer: 'Do you have a low level? You are missing many stages of the subscription and in a moment a new season and you play like a crap and you will not punch it? If you have such a problem or another related to increasing the rank or level, this offer is for you!',
                
                //Napis do gier
                GamesTitle : 'The games we support:',
            }
        }
    }).mount('#app')
}














if(localStorage.getItem("SettingsLanguage") == null){
    localStorage.removeItem("SettingsLanguage");
    localStorage.setItem("SettingsLanguage", "PL");
    location.reload();
}