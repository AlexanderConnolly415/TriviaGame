


    
var questions=[{question: "What is your favorite class?",
choices: ["mathematics", "english", "chemistry", "coding"],
answer:"coding"
}

,{question: "Where do you live?",
choices: ["Los-Angeles", "Austin", "Bay-Area","New-York"],
answer:"Bay-Area"
}
,{question: "What should you do when you don't understand something in class",
choices: ["dance","cry","laugh", "tutoring"],
answer:"tutoring"
}

,{question: "What is the name of our class building?",
choices: ["church", "jail", "airport", "UCBExtension"],
answer:"UCBExtension"

}

]

questions.forEach((question ,index)=> {

    $("#questions").append(question.question )
    question.choices.forEach(answer =>{
         $("#questions").append("<div><input type='radio' name=q"+index+">"+answer+"<div>")
        })
});


$("input[name='q0']:checked")[0]
$("#start").click((e)=>{
    $("#start").hide()
    
    $("#quiz").show()
    
})

var count = 60;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);