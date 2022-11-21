function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('wolf') 
    img1 = document.getElementById('cat')
    img2 = document.getElementById('dog')
   

    if (results[0].label == "Clap") {
      img.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a066944-5914-46cd-b570-1f4fdaa3070a/ddr77yc-fd8febee-d709-409e-a66c-81c411443fb8.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhMDY2OTQ0LTU5MTQtNDZjZC1iNTcwLTFmNGZkYWEzMDcwYVwvZGRyNzd5Yy1mZDhmZWJlZS1kNzA5LTQwOWUtYTY2Yy04MWM0MTE0NDNmYjguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NxjvVTeNIdKSF90K1VgRYmYpf6mnOOLzJNvbMfKMwKI';
      img1.src = 'https://previews.123rf.com/images/ruangdesign19/ruangdesign192003/ruangdesign19200300078/143202303-cute-cat-cartoon-llustration.jpg';
      img2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9XZE4iZcNd_waNtFVJyUWBe7kIpGBKHdiw&usqp=CAU';
      
    } else if (results[0].label == "Bell") {
      img.src = 'https://www.shutterstock.com/image-vector/cartoon-wolf-howling-on-white-260nw-1458645395.jpg';
      img1.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8a8cf34-a9df-4030-98cd-5be43f2ad9dd/dajed3p-de0b2fea-1e7b-4f9c-9978-2ec738f942bc.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4YThjZjM0LWE5ZGYtNDAzMC05OGNkLTViZTQzZjJhZDlkZFwvZGFqZWQzcC1kZTBiMmZlYS0xZTdiLTRmOWMtOTk3OC0yZWM3MzhmOTQyYmMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.h4t2DV6u1r3T0H41mLaw4rmgXFEXesFzq3zJED_9HLQ';
      img2.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9XZE4iZcNd_waNtFVJyUWBe7kIpGBKHdiw&usqp=CAU';
     
    } else if (results[0].label == "Snapping") {
      img.src = 'https://www.shutterstock.com/image-vector/cartoon-wolf-howling-on-white-260nw-1458645395.jpg';
      img1.src = 'https://previews.123rf.com/images/ruangdesign19/ruangdesign192003/ruangdesign19200300078/143202303-cute-cat-cartoon-llustration.jpg';
      img2.src = 'https://i.pinimg.com/originals/3a/31/90/3a3190f938422feaccf554b96ea80e93.gif';
    
  }
}
}