var p = "<p>";
var pend = "</p>";
var hr = "<hr/>";
var h1 = "<h1 id='gray'>";
var h1end = "</h1>";
var h2 = "<h2>";
var h2end = "<h2/>";
var h3 = "<h3>";
var h3end = "</h3>";
var h4 = "<h4 id='large'>";
var h4end = "</h4>";
var h4r = "<h4 style='font-size: 20px; color: white;'>";
var h4rend = "</h4>";
var div = "<div>";
var divend = "</div>";
var tr = "<tr>";
var trend = "</tr";
var th ="<th>";
var thend ="</th>";

$(document).ready(function () {
    $("#login").click(function () {
        h1text = "Inloggning:";
        var inputUsername = "<label>Användarnamn </label><input id='User' placeholder='Ditt användarnamn' style='margin-bottom:7px; margin-left: 10px;'/>";
        var inputPassword = "<br/><label>Lösenord </label><input id='Pass' type='password' placeholder='Ditt lösenord' style='margin-bottom:7px; margin-left: 10px;'/>";
        var submit = "<br/><label></label><input type='submit' id='loginSubmit' value='Logga in'/>";
        var forgot = "<br/><label></label><span class='psw' style='font-size: 17px;'>Glömt ditt <a href='#'style='font-size: 17px;' >lösenord?</a></span>";

        var c = document.querySelector("#update")
      
        $(document).click(function () {
            $("#loginSubmit").click(function () {

                var user = document.getElementById("User").value;
                var password = document.getElementById("Pass").value;
                 
                if (user == 'user' && password == 'password') {//ska vidare till firebase visning av bokningar
                    var createTable = "<table id='valuesFromDatabase'><tbody>";
                    var trtagsvalue="<tr><th>Namn</th><th></th><th>Efternamn</th><th></th><th>Personnr</th><th></th><th>Adress</th><th></th><th>Postnr</th>" + 
                        "<th></th><th>Postort</th><th></th><th>Telefonnummer</th><th></th><th>Email</th><th></th><th>Bokad vecka</th><th></th><th>Kostnad</th></tr><br/>";                  
                    var endHead = "</tbody></table>";     

                    $.get("/route", function (response) {
                    console.log(response)
                    $('#valuesFromDatabase').append(response);
                    c.innerHTML = createTable + trtagsvalue + response + endHead;
                    })                 
                }

                else {
                    alert("Fel användarnamn och/eller lösenord");
                    c.innerHTML = h1 + h1text + h1end + inputUsername + inputPassword + submit + forgot;
                }
            });
        });
            c.innerHTML = h1 + h1text + h1end + inputUsername + inputPassword + submit;
    });
});

$(document).ready(function () {
    $("#hem").click(function () {

        h1text = "<b>Hyr Sundre gamla skola från 3 500:-/v 2018</b>";
        var img = "<img id='large' class='img-rounded' src='./images/Huvudbild.jpg' style='height: 500px; width: 1500px;'/>";
        var img2 = "<img id='smaller' class='img-rounded' onclick='bigPic(this)' onmouseout='smallPic(this)' style='float:left; height:130px; width:100px;' src='./images/sovrum.jpg'/>";
        var img3 = "<img id='smaller' class='img-rounded' onclick='bigPic(this)' onmouseout='smallPic(this)' style='float:left; height:130px; width:100px;' src='./images/sovrumOkök.jpg'/>";
        var img4 = "<img id='smaller' class='img-rounded' onclick='bigPic(this)' onmouseout='smallPic(this)' style='float:left; height:130px; width:100px;' src='./images/kök.jpg'/>";
        var img5 = "<img id='smaller' class='img-rounded' onclick='bigPic(this)' onmouseout='smallPic(this)' style='float:left; height:130px; width:100px;' src='./images/kök2.jpg'/>";
        var img6 = "<img id='smaller' class='img-rounded' onclick='bigPic(this)' onmouseout='smallPic(this)' style='float:left; height:130px; width:100px;' src='./images/trädgård.jpg'/>";
        var img7 = "<img id='smaller' class='img-rounded' onclick='bigPic(this)' onmouseout='smallPic(this)' style='float:left; height:130px; width:100px;' src='./images/flygfoto.jpg'/>";
        var h3text = "&nbsp Klicka på bilderna för att förstora och ta bort muspekaren för att minimera tillbaka";

        var c = document.querySelector("#update")
        c.innerHTML = h1 + h1text + h1end + div + img + divend + img2 + img3 + img4 + img5 + img6 + img7 + h3 + h3text + h3end;
    });
});

$(document).ready(function () {
    $("#bokning").click(function () {
        var img = "<img style='width: 500px; background-position: top center; height: 400px; float:left;' class='img-rounded' src='./images/bokning2.jpg'/>";
        var ph = ["Ditt förnamn", "Ditt efternamn", "ååmmdd-xxxx", "Adress", "Postnr", "Ort",
            "Telefon/Mobil", "Din mailadress", "Ex.28,29", "tex 3500:-"]

        var array = ["Förnamn", "Efternamn", "Personnummer", "Adress", "Postnummer", "Ort",
            "Telefon", "Mail", "Vecka", "Kostnad"]
        var frm = "<form onsubmit='return false' id=myform>"

        array.forEach((x, i) => {
            frm += `<label>${x}</label> <input name=${x} required placeholder='${ph[i]}' style='margin-bottom:7px; margin-left: 10px;'/> <br/>`
        })

        frm += `<br/><label></label><input type='submit' class='btn btn-info' value='Skicka'/>`
        frm += '</form>';

        var h3text = "Priser och tider:</br></br> Högsäsong v25- 32 kostar: 4500 <br/> Övriga tider kostar: 3500:- <br/>" +
            "Avresa: Lördag kl 12:00 </br> Ankomst: Lördag kl 12:00 <br/>" +
            "<br/>Om bokning av flera veckor så ange priset på sista veckan vid köp av städ. Se kostnad i menyn: 'Detta ingår'<br/>" +
            "<br/>Boka i formuläret ovan eller ring 070-7956777";

        var c = document.querySelector("#update")
        c.innerHTML = img + frm + h3 + h3text + h3end;
        $('#myform').submit(function () {
            $.post("/form", $("#myform").serialize(), function (response) {
                //console.log(response)
                if ("response=='OK") {
                    alert(response)
                }
                else {
                    alert(response)
                }
            })
        })
    });
});

$(document).ready(function () {
    $("#villkor").click(function () {

        var img = "<img id='medium' class='img-rounded' src='./images/uthyrning skola.jpg'/>";
        var img2 = "<img id='medium' class='img-rounded' src='./images/uthyrning skola2.jpg'/>";

        var h2text = "Uthyrning av Sundre gamla skola";

        var h4text = "Sundre skola erbjuder ett enkelt boende på Gotlands vackra sydspets. Skolan är omgiven av en härlig trädgård med naturen och havet inpå knuten.</br> " +
            "Skolbyggnaden består av två sovrum, en stor skolsal, dusch(varmvatten) och tvättrum(ej toa)" +
            " ett kök med spis, kyl, kyl och frys, rinnande varmt och kallt vatten samt diskho. <br/> Skolan har dock bara utedass.";

        var h4mid = "Priser högsäsong (v25-32) 4 500:-/vecka , Övriga tider 3 500:-/vecka , Ankomstdag: Lördag klockan 12 Avresedag: Lördag klockan 12";

        var h4last = "Hyresgästen städar själv eller kan i samband med bokningen köpa en städning för 1200 kr";

        var h3text = "Detta ingår i hyran";

        var list = "<ul id = 'texts'>";

        var inlist = ["2 Sovrum", "Max 6 bäddar", "En skolsal", "Kök, spis, kyl & frys", "Rinnande vatten med diskho", "Tvättrum med dusch(ej toalett)", "Hurdjur får medtas", "<b>Skolan har endast utedass!!</b>"];

        inlist.forEach((x, i) => {
            list += `<li>${x}</li>`;
        });

        list += "</ul>";

        var c = document.querySelector("#update")
        c.innerHTML = img + img2 + h2 + h2text + h2end + h4 + h4text + h4end + hr + h4 + h4mid + h4end + hr + h4 + h4last + h4end + hr + list;
    });
});

$(document).ready(function () {
    $("#historia").click(function () {

        var img = "<img id='picture' class='img-rounded' src='./images/flygfoto.jpg'/>";
        var h1text = "Sundre Skola - idag ett byggnadsminne<br/>";
        var ptext = " - Ägs av Sundre Sockenförening";
        var h4text = "&nbspSundre skola uppfördes 1854. I skolan inrymdes även en lärarbostad. " +
            "<br/><br/>&nbspSkolan är uppförd i 1 1/2 plan i kalksten under tegeltak och har ett lägre tillbygge åt väster." +
            "<br/><br/>&nbspSkolan är delsvis byggd i den lokala byggnadstraditionen med vitkalkad och slätputsad fasad, taket slutar i liv med gavlarna. " +
            "<br/><br/>&nbspDe höga spröjsade fönstren av trä är målade i ockragult och grönt vilket var de färger som dominerade på Storsudret under 1800-talets mitt." +
            "<br/><br/>&nbspHuvudentreén samt trappan är av sandsten. Byggnaden renoverades 1953 och har sedan dess använts som hembygdsgård.";

        var c = document.querySelector("#update");
        c.innerHTML = img + h1 + h1text + h1end + p + ptext + pend + h4r + h4text + h4rend;
    });
});

$(document).ready(function () {
    $("#kommunikation").click(function () {

        var img = "<img id='picture' class='img-rounded' src='./images/flygkarta.jpg'/>";
        var img2 = "<img id='picture' class='img-rounded' src='./images/karta.jpg'/><br/>";

        var text = "Sundre skola ligger i Gotlands sydligaste socken, Sundre. Det är ca 90km från Visby." +
            "<br/><br/>Om du kör bil: antingen kör du via Klintehamn(141) eller via Hemse(142) till Burgsvik. <br/> Därifrån är det ytterligare ca 12km söderut." +
            "<br/>Strax innan Sundre kastal och kyrka går det en väg till vänster upp mot skolan (och kyrkan).<br/> Du är framme." +
            "<br/><br/><b>Om<b> du åker buss: Kliv av i Burgsvik (utom på vissa linjer sommartid som går till Vamlingbo). Men det är fortfarande ca 4km till skolan från Vamlingbo";

        var c = document.querySelector("#update")
        c.innerHTML = img + img2 + h3 + text + h3end;
    });
});

function bigPic(x) {
    x.style.height = "500px";
    x.style.width = "500px";
}

function smallPic(x) {
    x.style.height = "130px";
    x.style.width = "100px";
}