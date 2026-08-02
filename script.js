function login(){

let u=document.getElementById("user").value.toLowerCase();
let p=document.getElementById("pass").value.toLowerCase();

let text="";

if(u=="babai" && p=="raj babai"){
text="Hii Babai ❤️<br><br>Nii gurinchi ikkada em rayalem ley gani... Happy Friendship Day 💖";
}

else if(u=="thadi" && p=="rajee"){
text="Hii Bava ❤️<br><br>Nii gurinchi em cheppali ani ledhu... Chala kopam gaa undhi 😒 Sare Deepika tho happy gaa undu 😄 Happy Friendship Day 💖";
}

else if(u=="puli" && p=="komma bava"){
text="Hii Puli ❤️<br><br>Yekkuva matladniki em ledhu kani nii pillatho happy gaa undu 😄 Happy Friendship Day 💖";
}

else if(u=="sattigaa" && p=="rajugaa"){
text="Hii Bangaram ❤️<br><br>Nii gurinchi chalaa cheppali... Mana parichayam chala short gaa modhalu ayyi assalu end kani bond laa thayyaru ayyindhi. Bayam gaa undhi emo ela vellidho telidhu kani koncham bayam loose avthanu emo ani. Any way Happy Friendship Day 💖";
}

else if(u=="bindu" && p=="raj"){
text="Hii Bindu ❤️<br><br>Nevu Sattigadila letters rayalenu kaani direct gaa naa comforts nii miss avvakunda nithoney matladagalanu. Inka nii gurinchi ikkada em rayalem ley gani Happy Friendship Day 💖";
}

else if(u=="tissue" && p=="raj"){
text="Hii Prashanthi ❤️<br><br>You are a care taker of our whole batch ani cheppagalanu. Kopam, Alaka, Badha, Bayam anni nilo chusanu... Navarasalu 😄😂 Inka nii gurinchi ikkada em rayalem ley gani Happy Friendship Day 💖";
}

else if(u=="siri" && p=="raj"){
text="Hii Siri ❤️<br><br>Niku naku communication set avvanatha sepu assalu kalavalehu manaki. Once nuv maa vibe match cheyyagalav ani telisina tharavatha you are one of my best friends. Happy Friendship Day 💖";
}

else if(u=="sai" && p=="raj"){
text="Hii Sai ❤️<br><br>Manaki yekkada gap vachindho telidhu kani vachintha naku istam ani cheppanu. Love anukuni nuv duram gaa undadam naku nachaledhu. Naa pakkana unnatha sepu ninnu odiponivvaledhu. Adey pakkana Bindu Satya unna alaney chestha. That's my way of thinking. You are one of my best friends. Happy Friendship Day 💖";
}

else{
document.getElementById("msg").innerHTML="❌ Invalid Username or Password";
return;
}

document.body.innerHTML=
`
<div class="message">
<div>
<h1>💝 Happy Friendship Day 💝</h1>
<p>${text}</p>
<br>
<h2>❤️ Forever Friends ❤️</h2>
</div>
</div>
`;

}
