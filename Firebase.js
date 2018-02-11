var firebase = require('firebase')

var config =
    {
        apiKey: "AIzaSyAb6cc2u1bRnxv-VC8zgdHLTsI2sno1Wps",
        authDomain: "frontend-c0f4b.firebaseapp.com",
        databaseURL: "https://frontend-c0f4b.firebaseio.com",
        projectId: "frontend-c0f4b",
        storageBucket: "frontend-c0f4b.appspot.com",
        messagingSenderId: "294451562211"
    };

firebase.initializeApp(config);
var v = firebase.database();

var users = firebase.database().ref("users");

exports.getData = function (data, res) {
    var array = [];
    users.on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            var content = '<tbody><tr>';
            content += '<td>' + childData.Förnamn + '<td>';
            content += '<td>' + childData.Efternamn + '<td>';
            content += '<td>' + childData.Personnummer + '<td>';
            content += '<td>' + childData.Adress + '<td>';
            content += '<td>' + childData.Postnummer + '<td>';
            content += '<td>' + childData.Ort + '<td>';
            content += '<td>' + childData.Telefon + '<td>';
            content += '<td>' + childData.Mail + '<td>';
            content += '<td>' + childData.Vecka + '<td>';
            content += '<td>' + childData.Kostnad + '<td>';
            content += '</tr></tbody>';
            array.push(content)
        });
        res.send(array);
    });
}

exports.sendpost = function (data, res)
{
    var vecka = data.Vecka;
    var svar = "x";
    var customer = [];

    users.on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            customer.push(childData);
        });    
    })
    var result = customer.find(x => x.Vecka == vecka);
    if (result == undefined) {
        v.ref("users").push(data);
        svar = 'Sparad'
    }
    else {
        svar = 'Upptagen vecka'
    }  
    res.send(svar)
};