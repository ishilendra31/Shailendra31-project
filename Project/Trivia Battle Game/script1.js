let namesubmitbtn=document.getElementById("namesubmit-btn")
let playersname=document.getElementById("playersname")
let playerone=document.getElementById("playerone")
let playertwo=document.getElementById("playertwo")
let categoryselection=document.getElementById("category-selection")
let questiondisplayselection=document.getElementById("question-display-selection")
let music=document.getElementById("music")
let filmandtv=document.getElementById("filmandtv")
let sportandleisure=document.getElementById("sportandleisure")
let artsandliterature=document.getElementById("artsandliterature")
let history=document.getElementById("history")
let societyandculture=document.getElementById("societyandculture")
let science=document.getElementById("science")
let geography=document.getElementById("geography")
let generalknowledge=document.getElementById("generalknowledge")
let foodanddrink=document.getElementById("foodanddrink")
let Nextquestionbtn=document.getElementById("Next-question-btn")
let summarysection=document.getElementById("summary-section")
let Chooseanothercategory=document.getElementById("Choose-another-category")
let endgamebtn=document.getElementById("end-game-btn")
let endinggamesection=document.getElementById("ending-game-section")
let questionno=document.getElementById("question-no")
let question=document.getElementById("question")
let questionoptionone=document.getElementById("question-option-one")
let questionoptiontwo=document.getElementById("question-option-two")
let questionoptionthree=document.getElementById("question-option-three")
let questionoptionfour=document.getElementById("question-option-four")
let questionoptiononeradio=document.getElementById("question-option-one-radio")
let questionoptiontworadio=document.getElementById("question-option-two-radio")
let questionoptionthreeradio=document.getElementById("question-option-three-radio")
let questionoptionfourradio=document.getElementById("question-option-four-radio")
let playeronescore=document.getElementById("playerone-score")
let playertwoscore=document.getElementById("playersecond-score")
let endplayeronescore=document.getElementById("endplayerone-score")
let endplayertwoscore=document.getElementById("endplayertwo-score")
let winnername=document.getElementById("winnername")
let difficultylevel=document.getElementById("difficulty-level")
let turn=document.getElementById("turn")
let plrone=0
let plrtwo=0
let questioncount=1
let playeronescoresummary=document.getElementById("playerone-score-summary")
let playersecondscoresummary=document.getElementById("playersecond-score-summary")
let click=""
let radioone=document.getElementById("radio-one")
let radiotwo=document.getElementById("radio-two")
let radiothree=document.getElementById("radio-three")
let radiofour=document.getElementById("radio-four")
let correctans=document.getElementById("correct-ans")
let arr=[]
let option=[]
let cr=""


// --------------------------------------------------------- name submit section  start------------------------------------------------------
namesubmitbtn.addEventListener("click",()=>{
    if(playerone.value!=="" && playertwo.value!==""){
        playersname.style.display = "none"
        categoryselection.style.display = "grid"
    }
    else{
        alert("Please enter both player's name to proceed")
    }
})
// --------------------------------------------------------- name submit section  end------------------------------------------------------


// --------------------------------------------------------- music start------------------------------------------------------------------
music.addEventListener("click",()=>{
    click="music"
    categoryselection.style.display = "none"
    questiondisplayselection.style.display = "block"
    async function qustionrequest(categories,difficulty){
   try{ let url=`https://the-trivia-api.com/v2/questions?categories=${categories}&region=IN&difficulty=${difficulty}&limit=1`
    let response=await fetch(url)
    let data =await response.json()
    if (response.status!==200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    else{
    question.textContent=`${data[0].question.text}`
    cr=data[0].correctAnswer
    arr = []
    arr.push(data[0].correctAnswer)
    for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
        arr.push(data[0].incorrectAnswers[i])
    }
    for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
   }
    option=[questionoptionone,questionoptiontwo,questionoptionthree,questionoptionfour]
    for (let i =0; i<option.length; i+=1){
    option[i].innerText=`${arr[i]}`
   }
  }
}
    catch (error) {
        return ("Error fetching trivia questions:")
    }
}

if (questioncount <= 2) {
    qustionrequest("music", "easy");
} else if (questioncount <= 4) {
    qustionrequest("music", "medium");
} else {
    qustionrequest("music", "hard");
    if(questioncount===6){
        categoryselection.removeChild(music)
    }
}

questionno.textContent=`Question ${questioncount}`
    turn.textContent=`${playerone.value} turn`
    playeronescore.textContent=`${playerone.value} score: ${plrone}`
    playertwoscore.textContent=`${playertwo.value} score: ${plrtwo}`
})
// --------------------------------------------------------- music end------------------------------------------------------------------
// --------------------------------------------------------- filmandtv start------------------------------------------------------------------
filmandtv.addEventListener("click",()=>{
    click="filmandtv"
    categoryselection.style.display = "none"
    questiondisplayselection.style.display = "block"
    async function qustionrequest(categories,difficulty){
   try{ let url=`https://the-trivia-api.com/v2/questions?categories=${categories}&region=IN&difficulty=${difficulty}&limit=1`
    let response=await fetch(url)
    let data =await response.json()
    if (response.status!==200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    // else{
    // question.textContent=`${data[0].question.text}`
    // questionoptionone.textContent=`${data[0].correctAnswer}`
    // for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
    //     if(i===0){
    //         questionoptiontwo.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else if(i==1){
    //         questionoptionthree.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else{
    //         questionoptionfour.textContent=data[0].incorrectAnswers[i]
    //     }
    // }
    // }
    else{
    question.textContent=`${data[0].question.text}`
    cr=data[0].correctAnswer
    arr = []
    arr.push(data[0].correctAnswer)
    for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
        arr.push(data[0].incorrectAnswers[i])
    }
    for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
   }
    option=[questionoptionone,questionoptiontwo,questionoptionthree,questionoptionfour]
    for (let i =0; i<option.length; i+=1){
    option[i].innerText=`${arr[i]}`
   }
  }
}
    catch (error) {
        return ("Error fetching trivia questions:")
    }
}

if(questioncount<=2){
    qustionrequest("film_and_tv","easy")
}
else if(questioncount>=3 && questioncount<=4){
    qustionrequest("film_and_tv","medium")        
}
else{
    qustionrequest("film_and_tv","hard")
    if(questioncount===6){
        categoryselection.removeChild(filmandtv)
    }
    
}
questionno.textContent=`Question ${questioncount}`
    turn.textContent=`${playerone.value} turn`
    playeronescore.textContent=`${playerone.value} score: ${plrone}`
    playertwoscore.textContent=`${playertwo.value} score: ${plrtwo}`
})
// --------------------------------------------------------- filmandtv end------------------------------------------------------------------

// --------------------------------------------------------- "sport_and_leisure" start------------------------------------------------------------------
sportandleisure.addEventListener("click",()=>{
    click="sportandleisure"
    categoryselection.style.display = "none"
    questiondisplayselection.style.display = "block"
    async function qustionrequest(categories,difficulty){
   try{ let url=`https://the-trivia-api.com/v2/questions?categories=${categories}&region=IN&difficulty=${difficulty}&limit=1`
    let response=await fetch(url)
    let data =await response.json()
    if (response.status!==200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    // else{
    // question.textContent=`${data[0].question.text}`
    // questionoptionone.textContent=`${data[0].correctAnswer}`
    // for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
    //     if(i===0){
    //         questionoptiontwo.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else if(i==1){
    //         questionoptionthree.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else{
    //         questionoptionfour.textContent=data[0].incorrectAnswers[i]
    //     }
    // }
    // }
    else{
    question.textContent=`${data[0].question.text}`
    cr=data[0].correctAnswer
    arr = []
    arr.push(data[0].correctAnswer)
    for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
        arr.push(data[0].incorrectAnswers[i])
    }
    for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
   }
    option=[questionoptionone,questionoptiontwo,questionoptionthree,questionoptionfour]
    for (let i =0; i<option.length; i+=1){
    option[i].innerText=`${arr[i]}`
   }
  }
}
    catch (error) {
        return ("Error fetching trivia questions:")
    }
}

if(questioncount<=2){
    qustionrequest("sport_and_leisure","easy")
}
else if(questioncount>=3 && questioncount<=4){
    qustionrequest("sport_and_leisure","medium")        
}
else{
    qustionrequest("sport_and_leisure","hard")
    if(questioncount===6){
        categoryselection.removeChild(sportandleisure)
    }
}
questionno.textContent=`Question ${questioncount}`
    turn.textContent=`${playerone.value} turn`
    playeronescore.textContent=`${playerone.value} score: ${plrone}`
    playertwoscore.textContent=`${playertwo.value} score: ${plrtwo}`
})
// --------------------------------------------------------- "sport_and_leisure" end------------------------------------------------------------------

// --------------------------------------------------------- "arts_and_literature" start------------------------------------------------------------------
artsandliterature.addEventListener("click",()=>{
    click="artsandliterature"
    categoryselection.style.display = "none"
    questiondisplayselection.style.display = "block"
    async function qustionrequest(categories,difficulty){
   try{ let url=`https://the-trivia-api.com/v2/questions?categories=${categories}&region=IN&difficulty=${difficulty}&limit=1`
    let response=await fetch(url)
    let data =await response.json()
    if (response.status!==200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    // else{
    // question.textContent=`${data[0].question.text}`
    // questionoptionone.textContent=`${data[0].correctAnswer}`
    // for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
    //     if(i===0){
    //         questionoptiontwo.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else if(i==1){
    //         questionoptionthree.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else{
    //         questionoptionfour.textContent=data[0].incorrectAnswers[i]
    //     }
    // }
    // }
    else{
    question.textContent=`${data[0].question.text}`
    cr=data[0].correctAnswer
    arr = []
    arr.push(data[0].correctAnswer)
    for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
        arr.push(data[0].incorrectAnswers[i])
    }
    for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
   }
    option=[questionoptionone,questionoptiontwo,questionoptionthree,questionoptionfour]
    for (let i =0; i<option.length; i+=1){
    option[i].innerText=`${arr[i]}`
   }
  }
}
    catch (error) {
        return ("Error fetching trivia questions:")
    }
}

if(questioncount<=2){
    qustionrequest("arts_and_literature","easy")
}
else if(questioncount>=3 && questioncount<=4){
    qustionrequest("arts_and_literature","medium")        
}
else{
    qustionrequest("arts_and_literature","hard")
    if(questioncount==6){
        categoryselection.removeChild(artsandliterature)
    }
}

questionno.textContent=`Question ${questioncount}`
    turn.textContent=`${playerone.value} turn`
    playeronescore.textContent=`${playerone.value} score: ${plrone}`
    playertwoscore.textContent=`${playertwo.value} score: ${plrtwo}`
})
// --------------------------------------------------------- "arts_and_literature" end--------------------------------------------------------------
// --------------------------------------------------------- "history" start------------------------------------------------------------------
history.addEventListener("click",()=>{
    click="history"
    categoryselection.style.display = "none"
    questiondisplayselection.style.display = "block"
    async function qustionrequest(categories,difficulty){
   try{ let url=`https://the-trivia-api.com/v2/questions?categories=${categories}&region=IN&difficulty=${difficulty}&limit=1`
    let response=await fetch(url)
    let data =await response.json()
    if (response.status!==200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    // else{
    // question.textContent=`${data[0].question.text}`
    // questionoptionone.textContent=`${data[0].correctAnswer}`
    // for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
    //     if(i===0){
    //         questionoptiontwo.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else if(i==1){
    //         questionoptionthree.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else{
    //         questionoptionfour.textContent=data[0].incorrectAnswers[i]
    //     }
    // }
    // }
    else{
    question.textContent=`${data[0].question.text}`
    cr=data[0].correctAnswer
    arr = []
    arr.push(data[0].correctAnswer)
    for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
        arr.push(data[0].incorrectAnswers[i])
    }
    for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
   }
    option=[questionoptionone,questionoptiontwo,questionoptionthree,questionoptionfour]
    for (let i =0; i<option.length; i+=1){
    option[i].innerText=`${arr[i]}`
   }
  }
}
    catch (error) {
        return ("Error fetching trivia questions:")
    }
}

if(questioncount<=2){
    qustionrequest("history","easy")
}
else if(questioncount>=3 && questioncount<=4){
    qustionrequest("history","medium")        
}
else{
    qustionrequest("history","hard")
    if(questioncount==6){
        categoryselection.removeChild(history)
    }
}
questionno.textContent=`Question ${questioncount}`
    turn.textContent=`${playerone.value} turn`
    playeronescore.textContent=`${playerone.value} score: ${plrone}`
    playertwoscore.textContent=`${playertwo.value} score: ${plrtwo}`
})
// --------------------------------------------------------- "history" end--------------------------------------------------------------

// --------------------------------------------------------- "society_and_culture" start------------------------------------------------------------------
societyandculture.addEventListener("click",()=>{
    click="societyandculture"
    categoryselection.style.display = "none"
    questiondisplayselection.style.display = "block"
    async function qustionrequest(categories,difficulty){
   try{ let url=`https://the-trivia-api.com/v2/questions?categories=${categories}&region=IN&difficulty=${difficulty}&limit=1`
    let response=await fetch(url)
    let data =await response.json()
    if (response.status!==200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    // else{
    // question.textContent=`${data[0].question.text}`
    // questionoptionone.textContent=`${data[0].correctAnswer}`
    // for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
    //     if(i===0){
    //         questionoptiontwo.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else if(i==1){
    //         questionoptionthree.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else{
    //         questionoptionfour.textContent=data[0].incorrectAnswers[i]
    //     }
    // }
    // }
    else{
    question.textContent=`${data[0].question.text}`
    cr=data[0].correctAnswer
    arr = []
    arr.push(data[0].correctAnswer)
    for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
        arr.push(data[0].incorrectAnswers[i])
    }
    for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
   }
    option=[questionoptionone,questionoptiontwo,questionoptionthree,questionoptionfour]
    for (let i =0; i<option.length; i+=1){
    option[i].innerText=`${arr[i]}`
   }
  }
}
    catch (error) {
        return ("Error fetching trivia questions:")
    }
}

if(questioncount<=2){
    qustionrequest("society_and_culture","easy")
}
else if(questioncount>=3 && questioncount<=4){
    qustionrequest("society_and_culture","medium")        
}
else{
    qustionrequest("society_and_culture","hard")
    if(questioncount==6){
        categoryselection.removeChild(societyandculture)
    }
}
questionno.textContent=`Question ${questioncount}`
    turn.textContent=`${playerone.value} turn`
    playeronescore.textContent=`${playerone.value} score: ${plrone}`
    playertwoscore.textContent=`${playertwo.value} score: ${plrtwo}`
})
// --------------------------------------------------------- "society_and_culture" end--------------------------------------------------------------

// --------------------------------------------------------- "science" start------------------------------------------------------------------
science.addEventListener("click",()=>{
    click="science"
    categoryselection.style.display = "none"
    questiondisplayselection.style.display = "block"
    async function qustionrequest(categories,difficulty){
   try{ let url=`https://the-trivia-api.com/v2/questions?categories=${categories}&region=IN&difficulty=${difficulty}&limit=1`
    let response=await fetch(url)
    let data =await response.json()
    if (response.status!==200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    // else{
    // question.textContent=`${data[0].question.text}`
    // questionoptionone.textContent=`${data[0].correctAnswer}`
    // for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
    //     if(i===0){
    //         questionoptiontwo.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else if(i==1){
    //         questionoptionthree.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else{
    //         questionoptionfour.textContent=data[0].incorrectAnswers[i]
    //     }
    // }
    // }
    else{
    question.textContent=`${data[0].question.text}`
    cr=data[0].correctAnswer
    arr = []
    arr.push(data[0].correctAnswer)
    for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
        arr.push(data[0].incorrectAnswers[i])
    }
    for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
   }
    option=[questionoptionone,questionoptiontwo,questionoptionthree,questionoptionfour]
    for (let i =0; i<option.length; i+=1){
    option[i].innerText=`${arr[i]}`
   }
  }
}
    catch (error) {
        return ("Error fetching trivia questions:")
    }
}

if(questioncount<=2){
    qustionrequest("science","easy")
}
else if(questioncount>=3 && questioncount<=4){
    qustionrequest("science","medium")        
}
else{
    qustionrequest("science","hard")
    if(questioncount==6){
        categoryselection.removeChild(science)
    }
}
questionno.textContent=`Question ${questioncount}`
    turn.textContent=`${playerone.value} turn`
    playeronescore.textContent=`${playerone.value} score: ${plrone}`
    playertwoscore.textContent=`${playertwo.value} score: ${plrtwo}`
})
// --------------------------------------------------------- "science" end--------------------------------------------------------------
// --------------------------------------------------------- "geography" start------------------------------------------------------------------
geography.addEventListener("click",()=>{
    click="geography"
    categoryselection.style.display = "none"
    questiondisplayselection.style.display = "block"
    async function qustionrequest(categories,difficulty){
   try{ let url=`https://the-trivia-api.com/v2/questions?categories=${categories}&region=IN&difficulty=${difficulty}&limit=1`
    let response=await fetch(url)
    let data =await response.json()
    if (response.status!==200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    // else{
    // question.textContent=`${data[0].question.text}`
    // questionoptionone.textContent=`${data[0].correctAnswer}`
    // for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
    //     if(i===0){
    //         questionoptiontwo.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else if(i==1){
    //         questionoptionthree.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else{
    //         questionoptionfour.textContent=data[0].incorrectAnswers[i]
    //     }
    // }
    // }
    else{
    question.textContent=`${data[0].question.text}`
    cr=data[0].correctAnswer
    arr = []
    arr.push(data[0].correctAnswer)
    for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
        arr.push(data[0].incorrectAnswers[i])
    }
    for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
   }
    option=[questionoptionone,questionoptiontwo,questionoptionthree,questionoptionfour]
    for (let i =0; i<option.length; i+=1){
    option[i].innerText=`${arr[i]}`
   }
  }
}
    catch (error) {
        return ("Error fetching trivia questions:")
    }
}

if(questioncount<=2){
    qustionrequest("geography","easy")
}
else if(questioncount>=3 && questioncount<=4){
    qustionrequest("geography","medium")        
}
else{
    qustionrequest("geography","hard")
    if(questioncount==6){
        categoryselection.removeChild(geography)
    }
}
questionno.textContent=`Question ${questioncount}`
    turn.textContent=`${playerone.value} turn`
    playeronescore.textContent=`${playerone.value} score: ${plrone}`
    playertwoscore.textContent=`${playertwo.value} score: ${plrtwo}`
})
// --------------------------------------------------------- "geography" end--------------------------------------------------------------
// --------------------------------------------------------- "general_knowledge" start------------------------------------------------------------------
generalknowledge.addEventListener("click",()=>{
    click="generalknowledge"
    categoryselection.style.display = "none"
    questiondisplayselection.style.display = "block"
    async function qustionrequest(categories,difficulty){
   try{ let url=`https://the-trivia-api.com/v2/questions?categories=${categories}&region=IN&difficulty=${difficulty}&limit=1`
    let response=await fetch(url)
    let data =await response.json()
    if (response.status!==200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    // else{
    // question.textContent=`${data[0].question.text}`
    // questionoptionone.textContent=`${data[0].correctAnswer}`
    // for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
    //     if(i===0){
    //         questionoptiontwo.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else if(i==1){
    //         questionoptionthree.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else{
    //         questionoptionfour.textContent=data[0].incorrectAnswers[i]
    //     }
    // }
    // }
    else{
    question.textContent=`${data[0].question.text}`
    cr=data[0].correctAnswer
    arr = []
    arr.push(data[0].correctAnswer)
    for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
        arr.push(data[0].incorrectAnswers[i])
    }
    for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
   }
    option=[questionoptionone,questionoptiontwo,questionoptionthree,questionoptionfour]
    for (let i =0; i<option.length; i+=1){
    option[i].innerText=`${arr[i]}`
   }
  }
}
    catch (error) {
        return ("Error fetching trivia questions:")
    }
}

if(questioncount<=2){
    qustionrequest("general_knowledge","easy")
}
else if(questioncount>=3 && questioncount<=4){
    qustionrequest("general_knowledge","medium")        
}
else{
    qustionrequest("general_knowledge","hard")
    if(questioncount==6){
        categoryselection.removeChild(generalknowledge)
    }
}
questionno.textContent=`Question ${questioncount}`
    turn.textContent=`${playerone.value} turn`
    playeronescore.textContent=`${playerone.value} score: ${plrone}`
    playertwoscore.textContent=`${playertwo.value} score: ${plrtwo}`
})
// --------------------------------------------------------- "general_knowledge" end--------------------------------------------------------------

// --------------------------------------------------------- "food_and_drink" start------------------------------------------------------------------
foodanddrink.addEventListener("click",()=>{
    click="foodanddrink"
    categoryselection.style.display = "none"
    questiondisplayselection.style.display = "block"
    async function qustionrequest(categories,difficulty){
   try{ let url=`https://the-trivia-api.com/v2/questions?categories=${categories}&region=IN&difficulty=${difficulty}&limit=1`
    let response=await fetch(url)
    let data =await response.json()
    if (response.status!==200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    // else{
    // question.textContent=`${data[0].question.text}`
    // questionoptionone.textContent=`${data[0].correctAnswer}`
    // for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
    //     if(i===0){
    //         questionoptiontwo.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else if(i==1){
    //         questionoptionthree.textContent=data[0].incorrectAnswers[i]
    //     }
    //     else{
    //         questionoptionfour.textContent=data[0].incorrectAnswers[i]
    //     }
    // }
    // }
    else{
    question.textContent=`${data[0].question.text}`
    cr=data[0].correctAnswer
    arr = []
    arr.push(data[0].correctAnswer)
    for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
        arr.push(data[0].incorrectAnswers[i])
    }
    for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
   }
    option=[questionoptionone,questionoptiontwo,questionoptionthree,questionoptionfour]
    for (let i =0; i<option.length; i+=1){
    option[i].innerText=`${arr[i]}`
   }
  }
}
    catch (error) {
        return ("Error fetching trivia questions:")
    }
}

if(questioncount<=2){
    qustionrequest("food_and_drink","easy")
}
else if(questioncount>=3 && questioncount<=4){
    qustionrequest("food_and_drink","medium")        
}
else{
    qustionrequest("food_and_drink","hard")
    if(questioncount==6){
        categoryselection.removeChild(foodanddrink)
    }
}
questionno.textContent=`Question ${questioncount}`
    turn.textContent=`${playerone.value} turn`
    playeronescore.textContent=`${playerone.value} score: ${plrone}`
    playertwoscore.textContent=`${playertwo.value} score: ${plrtwo}`
})
// --------------------------------------------------------- "food_and_drink" end--------------------------------------------------------------

// --------------------------------------------------------- question option section start-----------------------------------------------------
questionoptionone.addEventListener("click",()=>{
    if(questionoptionone.textContent===cr){
        questionoptiononeradio.style.accentColor = 'green';
        if (questioncount <= 2) {
        if(questioncount%2==0){
        plrtwo+=10
    }
    else{
    plrone+=10
    }
    } else if (questioncount <= 4) {
        if(questioncount%2==0){
        plrtwo+=15
    }
    else{
    plrone+=15
    }
    } else {
        if(questioncount%2==0){
        plrtwo+=20
    }
    else{
    plrone+=20
    }
    }
    }
    else{
        questionoptiononeradio.style.accentColor = 'red';
    }
    // if(questioncount%2==0){
    //     plrtwo+=10
    // }
    // else{
    // plrone+=10
    // }
    
    playeronescore.textContent=`${playerone.value} score: ${plrone}`
    playertwoscore.textContent=`${playertwo.value} score: ${plrtwo}`
    correctans.textContent=`Correct Answer is: ${cr}`
    // questionoptiononeradio.style.accentColor = 'green';
})
questionoptiontwo.addEventListener("click",()=>{
    if(questionoptiontwo.textContent===cr){
        questionoptiontworadio.style.accentColor = 'green'; 
        if (questioncount <= 2) {
        if(questioncount%2==0){
        plrtwo+=10
    }
    else{
    plrone+=10
    }
    } else if (questioncount <= 4) {
        if(questioncount%2==0){
        plrtwo+=15
    }
    else{
    plrone+=15
    }
    } else {
        if(questioncount%2==0){
        plrtwo+=20
    }
    else{
    plrone+=20
    }
    }
    }
    else{
        questionoptiontworadio.style.accentColor = 'red';
    }
    correctans.textContent=`Correct Answer is: ${cr}`
})
questionoptionthree.addEventListener("click",()=>{
    if(questionoptionthree.textContent===cr){
        questionoptionthreeradio.style.accentColor = 'green';
        if (questioncount <= 2) {
        if(questioncount%2==0){
        plrtwo+=10
    }
    else{
    plrone+=10
    }
    } else if (questioncount <= 4) {
        if(questioncount%2==0){
        plrtwo+=15
    }
    else{
    plrone+=15
    }
    } else {
        if(questioncount%2==0){
        plrtwo+=20
    }
    else{
    plrone+=20
    }
    }
    }
    else{
        questionoptionthreeradio.style.accentColor = 'red';
    }
    correctans.textContent=`Correct Answer is: ${cr}`
})
questionoptionfour.addEventListener("click",()=>{
    if(questionoptionfour.textContent===cr){
        questionoptionfourradio.style.accentColor = 'green';
        correctans.textContent=`Correct Answer is: ${cr}`
        if (questioncount <= 2) {
        if(questioncount%2==0){
        plrtwo+=10
    }
    else{
    plrone+=10
    }
    } else if (questioncount <= 4) {
        if(questioncount%2==0){
        plrtwo+=15
    }
    else{
    plrone+=15
    }
    } else {
        if(questioncount%2==0){
        plrtwo+=20
    }
    else{
    plrone+=20
    }
    }
    }
    else{
        questionoptionfourradio.style.accentColor = 'red';
        correctans.textContent=`Correct Answer is: ${cr}`
    }
    correctans.textContent=`Correct Answer is: ${cr}`
    })

// --------------------------------------------------------- question option section end-----------------------------------------------------

// --------------------------------------------------------- Nextquestion btn section start-----------------------------------------------------
Nextquestionbtn.addEventListener("click",()=>{
   if (questionoptiononeradio.checked || 
    questionoptiontworadio.checked || 
    questionoptionthreeradio.checked || 
    questionoptionfourradio.checked) {
    questioncount+=1
    arr=[]
    cr=""
    option=[]
    correctans.textContent=""
    if(questioncount<=6){
        if(click==="music"){
            music.click()
        }
        else if(click==="filmandtv"){
            filmandtv.click()
        }
        else if(click==="sportandleisure"){
            sportandleisure.click()
        }
        else if (click === "artsandliterature") {
            artsandliterature.click();
        }
        else if (click === "history") {
            history.click();
        } 
        else if (click === "societyandculture") {
            societyandculture.click();
        }
        else if (click === "science") {
            science.click();
        }
        else if (click === "geography") {
            geography.click();
        }
        else if (click === "generalknowledge") {
            generalknowledge.click();
        }
        else if (click === "food_and_drink") {
            foodanddrink.click();
        }
        questionno.textContent=`Question ${questioncount}`
        if(questioncount<=2){
            difficultylevel.textContent=`difficulty level - easy`
            if(questioncount===1){
                turn.textContent=`${playerone.value} turn`
            }
            else{
                turn.textContent=`${playertwo.value} turn`
            }
        }
        else if(questioncount>2 && questioncount<=4){
            difficultylevel.textContent=`difficulty level - medium`
            if(questioncount===3){
                turn.textContent=`${playerone.value} turn`
            }
            else{
                turn.textContent=`${playertwo.value} turn`
            }
        }
        else{
            difficultylevel.textContent=`difficulty level - hard`
            if(questioncount===5){
                turn.textContent=`${playerone.value} turn`
            }
            else{
                turn.textContent=`${playertwo.value} turn`
            }
        }
        questionoptiononeradio.checked = false
        questionoptiontworadio.checked = false
        questionoptionthreeradio.checked = false
        questionoptionfourradio.checked = false
        questionoptiononeradio.style.accentColor = '';
        questionoptiontworadio.style.accentColor = '';
        questionoptionthreeradio.style.accentColor = '';
        questionoptionfourradio.style.accentColor = '';

    }
    else{
    questiondisplayselection.style.display="none"
    summarysection.style.display="flex"
    playeronescoresummary.textContent=`${playerone.value} score: ${plrone}`
    playersecondscoresummary.textContent=`${playertwo.value} score: ${plrtwo}`
    }
}
else{
    alert("Please select an option before proceeding!");
    return
}
})
// --------------------------------------------------------- Nextquestion btn section end-----------------------------------------------------


// Chooseanothercategory strat--------------------------------------------------------------------------------------------------------------
Chooseanothercategory.addEventListener("click",()=>{
    summarysection.style.display="none"
    categoryselection.style.display = "grid"
    questioncount=1
    questionoptiononeradio.checked = false
    questionoptiontworadio.checked = false
    questionoptionthreeradio.checked = false
    questionoptionfourradio.checked = false
    arr=[]
    cr=""
    option=[]
})
// Chooseanothercategory end-------------------------------------------------------------------------------------------------------------------------

// endgamebtn section strat-------------------------------------------------------------------------------------------------------------------------

endgamebtn.addEventListener("click",()=>{
    summarysection.style.display="none"
    endinggamesection.style.display="block"
    endplayeronescore.textContent=`${playerone.value} score: ${plrone}`
    endplayertwoscore.textContent=`${playertwo.value} score: ${plrtwo}`
    if(plrone===plrtwo){
        winnername.textContent="Draw"
    }
    else if(plrone>plrtwo){
        winnername.textContent=`${playerone.value} is a Winner`
    }
    else{
        winnername.textContent=`${playertwo.value} is a Winner`
    }
})
// endgamebtn section end-------------------------------------------------------------------------------------------------------------------------