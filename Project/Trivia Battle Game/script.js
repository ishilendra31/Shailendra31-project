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
let click="" // checks in which categories section are we in
let correctans=document.getElementById("correct-ans")
let arr=[] //array of ans
let option=[] //array of option
let cr="" // correct ans




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
// --------------------------------------------------------- Api call section  start------------------------------------------------------
async function questionrequest(categories,difficulty){
   try{ let url=`https://the-trivia-api.com/v2/questions?categories=${categories}&region=IN&difficulty=${difficulty}&limit=1`
    let response=await fetch(url)
    if (response.status!==200) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    else{
        return response
   }
  }
    catch (error) {
        return ("Error fetching trivia questions:")
    }
}
// --------------------------------------------------------- Api call section end--------------------------------------------------------------
// ---------------------------------------------------------categoryselection - Question section start------------------------------------------
let array=[music,filmandtv,sportandleisure,artsandliterature,history,societyandculture,science,geography,generalknowledge,foodanddrink]
for(let i=0;i<array.length;i+=1){
    array[i].addEventListener("click",()=>{
        let difficulty=""
        if(questioncount <= 2){
            difficulty="easy"
        }
        else if(questioncount <= 4){
            difficulty="medium"
        }
        else{
            difficulty="hard"
            if(questioncount===6){
            categoryselection.removeChild(array[i])
            }
        }
        questionrequest(array[i].id,difficulty).then((response)=>{
            return response.json()
        }).then((data)=>{
            categoryselection.style.display = "none"
            questiondisplayselection.style.display = "block"
            click=array[i].id
            question.textContent=`${data[0].question.text}`
            cr=data[0].correctAnswer
            arr = [] 
            arr.push(data[0].correctAnswer)
            for(let i=0;i<data[0].incorrectAnswers.length;i+=1){
            arr.push(data[0].incorrectAnswers[i])
            }
            for (let i = arr.length - 1; i > 0; i-=1){
            let j = Math.floor(Math.random() * (i +1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            option=[questionoptionone,questionoptiontwo,questionoptionthree,questionoptionfour]
            for (let i=0; i<option.length; i+=1){
            option[i].innerText=`${arr[i]}`
            }
            questionno.textContent=`Question ${questioncount}`
            if(questioncount === 1){
            turn.textContent=`${playerone.value} turn`  
            }
            playeronescore.textContent=`${playerone.value} score: ${plrone}`
            playertwoscore.textContent=`${playertwo.value} score: ${plrtwo}`
        })
    })
}
// --------------------------------------------------------- Question section end---------------------------------------------------------------
// --------------------------------------------------------- Question option section start-----------------------------------------------------
let array_questionoption=[questionoptionone,questionoptiontwo,questionoptionthree,questionoptionfour]
let array_questionoptionradio=[questionoptiononeradio,questionoptiontworadio,questionoptionthreeradio,questionoptionfourradio]
for(let i=0;i<array_questionoption.length;i+=1){
    array_questionoption[i].addEventListener("click",()=>{
        array_questionoptionradio[i].checked = true;
        disableOptions()
        correctans.textContent=`Correct Answer is: ${cr}`
        if(array_questionoption[i].textContent===cr){
            // -------------point----------------//
            if(questioncount <= 2){
                if(questioncount%2==0){
                plrtwo+=10
                }
                else{
                plrone+=10
                }
            }
            else if(questioncount <= 4){
                if(questioncount%2==0){
                plrtwo+=15
                }
                else{
                plrone+=15
                }
            } 
            else{
                if(questioncount%2==0){
                plrtwo+=20
                }
                else{
                plrone+=20
                }
            }
        }
        playeronescore.textContent = `${playerone.value} score: ${plrone}`
        playertwoscore.textContent = `${playertwo.value} score: ${plrtwo}`
   })
}
// --------------------------------------------------------- Question option section end-----------------------------------------------------
// --------------------------------------------------------- Nextquestion btn section start-----------------------------------------------------
let category_click=["music","filmandtv","sportandleisure","artsandliterature","history","societyandculture","science","geography","generalknowledge","foodanddrink"]
let category_real=[music,filmandtv,sportandleisure,artsandliterature,history,societyandculture,science,geography,generalknowledge,foodanddrink]
Nextquestionbtn.addEventListener("click",()=>{
   if(questionoptiononeradio.checked || 
    questionoptiontworadio.checked || 
    questionoptionthreeradio.checked || 
    questionoptionfourradio.checked){
    questioncount+=1
    arr=[]
    cr=""
    option=[]
    correctans.textContent=""
    if(questioncount<=6){
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
        for(let i=0;i<category_click.length;i+=1){
            if(click===category_click[i]){
                category_real[i].click()
            }
        }
        questionoptiononeradio.checked = false
        questionoptiontworadio.checked = false
        questionoptionthreeradio.checked = false
        questionoptionfourradio.checked = false
        enableOptions()
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
    let remainingCategories = document.querySelectorAll(".categoriesbtn")
    if(remainingCategories.length === 0){
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
    } 
    else {
        categoryselection.style.display = "grid"
        questioncount=1
        difficultylevel.textContent = `difficulty level - easy`
        questionoptiononeradio.checked = false
        questionoptiontworadio.checked = false
        questionoptionthreeradio.checked = false
        questionoptionfourradio.checked = false
        arr=[]
        cr=""
        option=[]
        enableOptions()
    }
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
// endgamebtn section end------------------------------------------------------------------------------------------------

// disable and enable radio button function---------------------start-----------------------------------------------------------------------

function disableOptions() {
    questionoptiononeradio.disabled = true;
    questionoptiontworadio.disabled = true;
    questionoptionthreeradio.disabled = true;
    questionoptionfourradio.disabled = true;
    questionoptionone.style.pointerEvents = "none";
    questionoptiontwo.style.pointerEvents = "none";
    questionoptionthree.style.pointerEvents = "none";
    questionoptionfour.style.pointerEvents = "none";
}


function enableOptions() {
    questionoptiononeradio.disabled = false;
    questionoptiontworadio.disabled = false;
    questionoptionthreeradio.disabled = false;
    questionoptionfourradio.disabled = false;
    questionoptionone.style.pointerEvents = "auto";
    questionoptiontwo.style.pointerEvents = "auto";
    questionoptionthree.style.pointerEvents = "auto";
    questionoptionfour.style.pointerEvents = "auto";
}

// // disable and enable radio button function-------------end-----------------------------------------------------------