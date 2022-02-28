var section1 = document.querySelector('#section1')
var section2 = document.querySelector('#section2')
var section3 = document.querySelector('#section3')
var section4 = document.querySelector('#section4')
var mainBtn = document.querySelector('#mainBtn');
var pic = document.querySelector('#pick')
var tstQue = document.querySelector('#QuizQuestion')
var nextbtn = document.querySelector('#next')
var backbtn = document.querySelector('#back')
var opt1 = document.querySelector('#opt1')
var opt2 = document.querySelector('#opt2')
var opt3 = document.querySelector('#opt3')
var opt4 = document.querySelector('#opt4')
var dis1 = document.getElementById('opt1')
var scoreLogout = document.getElementById('scoreLogout')
var dis2 = document.getElementById('opt2')
var dis3 = document.getElementById('opt3')
var dis4 = document.getElementById('opt4')
var qlist = document.querySelector('#qlist')
var userLoginDetails = document.querySelector('#userRecords');
var count =0;
var score = 0;
var loading = JSON.parse(localStorage.getItem('Quelists'));
var sideList = JSON.parse(localStorage.getItem('userDetails'));
var IdUni=1;
var i = 0;
const xhr = new XMLHttpRequest();
var check = true;
var finishQuiz = true;

// const localStorageContent = localStorage.getItem('userDetails');



var logout = section2.firstElementChild.firstElementChild.firstElementChild.firstElementChild;


// After Login ------------------------------------------------------------------------------------------------------
mainBtn.addEventListener('click',function(e){
    var input1 = section1.firstElementChild.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild.value;
    var input2 = section1.firstElementChild.firstElementChild.lastElementChild.previousElementSibling.lastElementChild.value;


    // Admin Login ---------------------------------------------------------------------------------------------------------------
    if (input1 === 'p' && input2 === 'p') {
        if (check == true) {
            check = false;
            section2.style.display = "block";
            section1.style.display = "none";
           
            if(sideList===null)
            {

            }
          else{
            
            for (var j = 0; j < sideList.length; j++) {

                var ele = document.createElement('div');
               
                
                ele.className = "mt-2 mb-1 bg-dark p-3 text-light";
                ele.innerHTML = sideList[j].FirstName +" "+sideList[j].LastName; 

                userLoginDetails.append(ele);
            }
          }
              
            
           
            // User Details -------------------------------------------------------------------------------------------------------
            
            
            
            // Question queue --------------------------------------------------------------------------------------------------------
            if(loading.length === 0)
            {

            }
            else
            {
                for (var i = 0; i < loading.length; i++) {

                    var main = document.createElement('div');
                    var eleInner = document.createElement('div');
                    var btnDiv = document.createElement('div');
                    var btn = document.createElement('button');
                    btn.className = "btn btn-danger";
                    btnDiv.append(btn);
                    
                    main.className = "mb-3 bg-dark text-light p-3 d-flex justify-content-between";
                    main.append(eleInner);
                    main.append(btnDiv);
                    eleInner.innerHTML = loading[i].Question;
                    btn.innerHTML = "Delete";
                    btn.setAttribute('id',IdUni++);
    
                    qlist.append(main);
                }
            }
          
        }
        else {
            section2.style.display = "block";
            section1.style.display = "none";
        }
    }

    // User Login --------------------------------------------------------------------------------------------------------------
    else {

    var userFirstName = section1.firstElementChild.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild.value;
    var userLastName = section1.firstElementChild.firstElementChild.lastElementChild.previousElementSibling.lastElementChild.value;

      if(loading.length==0)
      {
          alert("Ask admin to set the questions first");
      }
      else{
        section3.style.display = "block";
        section1.style.display = "none";
        
        tstQue.textContent = loading[count].Question;
        opt1.innerHTML = loading[count].Option1;
        opt2.innerHTML = loading[count].Option2;
        opt3.innerHTML = loading[count].Option3;
        opt4.innerHTML = loading[count].Option4;
       

        // Next Question----------------------------------------------------------------------------------------------------------
        nextbtn.addEventListener('click',function(){
            opt1.style.backgroundColor = "yellow";
            opt2.style.backgroundColor = "yellow";
            opt3.style.backgroundColor = "yellow";
            opt4.style.backgroundColor = "yellow";

            opt1.style.color = "black";
            opt2.style.color = "black";
            opt3.style.color = "black";
            opt4.style.color = "black";
            opt1.style.display="block";
            opt2.style.display="block";
            opt3.style.display="block";
            opt4.style.display="block";
            count++;

            if(finishQuiz ==true )
            {
                if(count !== loading.length-1)
                {  
                    console.log(count)
                    tstQue.innerHTML = loading[count].Question;
                    opt1.innerHTML = loading[count].Option1;
                    opt2.innerHTML = loading[count].Option2;
                    opt3.innerHTML = loading[count].Option3;
                    opt4.innerHTML = loading[count].Option4;
                   
                    
                }
                else{
                    nextbtn.setAttribute('disabled','true')
                    finishQuiz = false;
                    tstQue.innerHTML = loading[count].Question;
                    opt1.innerHTML = loading[count].Option1;
                    opt2.innerHTML = loading[count].Option2;
                    opt3.innerHTML = loading[count].Option3;
                    opt4.innerHTML = loading[count].Option4;
                    
                }
               
            }
            else{
                section3.style.display = "none";
               section1.style.display = "block";
            }
     

        })


        var userDetails = {
            FirstName: userFirstName,
            LastName: userLastName
           
    
        };
    
        var localStorageContent = localStorage.getItem('userDetails');
    
        let temp ;
         console.log(localStorageContent)
        if(localStorageContent === null)
        {
            temp=[];
        }
        else{
            temp = JSON.parse(localStorageContent);
        }
        temp.push(userDetails);
        
        localStorage.setItem('userDetails',JSON.stringify(temp));
      }
        // section3.style.display = "block";
        // section1.style.display = "none";
        
        // tstQue.textContent = loading[count].Question;
        // opt1.innerHTML = loading[count].Option1;
        // opt2.innerHTML = loading[count].Option2;
        // opt3.innerHTML = loading[count].Option3;
        // opt4.innerHTML = loading[count].Option4;
       

        // // Next Question----------------------------------------------------------------------------------------------------------
        // nextbtn.addEventListener('click',function(){
        //     opt1.style.backgroundColor = "yellow";
        //     opt2.style.backgroundColor = "yellow";
        //     opt3.style.backgroundColor = "yellow";
        //     opt4.style.backgroundColor = "yellow";

        //     opt1.style.color = "black";
        //     opt2.style.color = "black";
        //     opt3.style.color = "black";
        //     opt4.style.color = "black";
        //     opt1.style.display="block";
        //     opt2.style.display="block";
        //     opt3.style.display="block";
        //     opt4.style.display="block";
        //     count++;

        //     if(finishQuiz ==true )
        //     {
        //         if(count !== loading.length-1)
        //         {  
        //             console.log(count)
        //             tstQue.innerHTML = loading[count].Question;
        //             opt1.innerHTML = loading[count].Option1;
        //             opt2.innerHTML = loading[count].Option2;
        //             opt3.innerHTML = loading[count].Option3;
        //             opt4.innerHTML = loading[count].Option4;
                   
                    
        //         }
        //         else{
        //             nextbtn.setAttribute('disabled','true')
        //             finishQuiz = false;
        //             tstQue.innerHTML = loading[count].Question;
        //             opt1.innerHTML = loading[count].Option1;
        //             opt2.innerHTML = loading[count].Option2;
        //             opt3.innerHTML = loading[count].Option3;
        //             opt4.innerHTML = loading[count].Option4;
                    
        //         }
               
        //     }
        //     else{
        //         section3.style.display = "none";
        //        section1.style.display = "block";
        //     }
     

        // })


        // var userDetails = {
        //     FirstName: userFirstName,
        //     LastName: userLastName
           
    
        // };
    
        // var localStorageContent = localStorage.getItem('userDetails');
    
        // let temp ;
        //  console.log(localStorageContent)
        // if(localStorageContent === null)
        // {
        //     temp=[];
        // }
        // else{
        //     temp = JSON.parse(localStorageContent);
        // }
        // temp.push(userDetails);
        
        // localStorage.setItem('userDetails',JSON.stringify(temp));
        // backbtn.addEventListener('click',function(){
        //     count--;
        // tstQue.textContent = loading[count].Question;
        // opt1.innerHTML = loading[count].Option1;
        // opt2.innerHTML = loading[count].Option2;
        // opt3.innerHTML = loading[count].Option3;
        // opt4.innerHTML = loading[count].Option4;

        // })
    }
    logout.addEventListener('click', function () {
        section2.style.display = "none";
        section1.style.display = "block";
        var in1 = section1.firstElementChild.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild;
        var in2 = section1.firstElementChild.firstElementChild.lastElementChild.previousElementSibling.lastElementChild;
        in1.value="";
        in2.value="";
    
    });

})

// Add Question ---------------------------------------------------------------------------------------------------------
function addQuestion() {
    var que = document.getElementById('question').value;
    var option1 = document.getElementById('option1').value;
    var option2 = document.getElementById('option2').value;
    var option3 = document.getElementById('option3').value;
    var option4 = document.getElementById('option4').value;
    var correctAns = document.getElementById('correctOpt').value;
    var set = {
        Question: que,
        Option1: option1,
        Option2: option2,
        Option3: option3,
        Option4: option4,
        CorrectAns: correctAns

    }


    const localStorageContent1 = localStorage.getItem('Quelists');

    let temp1 ;
     console.log(localStorageContent1)
    if(localStorageContent1 === null)
    {
        temp1=[];
    }
    else{
        temp1= JSON.parse(localStorageContent1);
    }
    temp1.push(set);
    
    localStorage.setItem('Quelists',JSON.stringify(temp1));
  

    //  Adding question in the question list ---------------------------------------------------------------------------------------

    var main1 = document.createElement('div');
    var eleInner1 = document.createElement('div');
    var btnDiv1 = document.createElement('div');
    var btn1 = document.createElement('button');
    btn1.className = "btn btn-danger";
    btn1.innerHTML = "Delete";
    btnDiv1.append(btn1);
    
    main1.className = "mb-3 bg-dark text-light p-3 d-flex justify-content-between";
    main1.append(eleInner1);
    main1.append(btnDiv1);





    var newItems = JSON.parse(localStorage.getItem('Quelists'));
    var len = newItems.length;
    // var main = document.createElement('div');
    // main.className = "mb-3 bg-dark text-light p-3";
    eleInner1.innerHTML = newItems[len - 1].Question;

    qlist.append(main1);
}


// Finish 
function finish() {
    var in1 = section1.firstElementChild.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild;
    var in2 = section1.firstElementChild.firstElementChild.lastElementChild.previousElementSibling.lastElementChild;
    var scoreCard = document.getElementById('scoreCard');
    section3.style.display = "none"
    section1.style.display = "none"
    section4.style.display="block";
    scoreCard.firstElementChild.innerHTML = "Your Total Score is : "+ score;
    in1.value="";
    in2.value="";
   console.log(in1.value);
}
 
// Selection of correct Answer =================================================================================================================

pick.addEventListener('click',function(e){
   
    
    if(e.target.id  === dis1.id)
    {
       dis1.style.display="block";
       dis2.style.display="none";
       dis3.style.display="none";
       dis4.style.display="none";
        
    }
    else if(e.target.id  === dis2.id)
    {
       dis1.style.display="none";
       dis2.style.display="block";
       dis3.style.display="none";
       dis4.style.display="none";
        
    }
    else if(e.target.id  === dis3.id)
    {
       dis1.style.display="none";
       dis2.style.display="none";
       dis3.style.display="block";
       dis4.style.display="none";
        
    }
    else if(e.target.id  === dis4.id)
    {
       dis1.style.display="none";
       dis2.style.display="none";
       dis3.style.display="none";
       dis4.style.display="block";
        
    }
    console.log(e.target.id);
    
    
    var parentQue = e.target.parentNode.firstElementChild.textContent;
    var selected = e.target.textContent;

    for(var i = 0;i<loading.length;i++)
    {
       if(parentQue === loading[i].Question )
       {
         
          if(selected === loading[i].CorrectAns)
          {
              score+=10;
            console.log('correct');
            console.log(score);
            e.target.style.backgroundColor="green";
          }
          else{
              console.log('incorrect')
              e.target.style.backgroundColor="red";
          }
           
           break;
       }
    
    }
    console.log()
})

scoreLogout.addEventListener('click', function () {
    section4.style.display = "none";
    section1.style.display = "block";
    var in1 = section1.firstElementChild.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild;
    var in2 = section1.firstElementChild.firstElementChild.lastElementChild.previousElementSibling.lastElementChild;
    in1.value="";
    in2.value="";

});

qlist.addEventListener('click',function(e){

var l = JSON.parse(localStorage.getItem('Quelists'));

 var delNode=e.target.parentNode.parentNode;
 var par = e.target.parentNode.parentNode.parentNode;
 var q = e.target.parentNode.parentNode.firstElementChild.textContent;
 console.log(l);




//  let t1 ;

//  if(l === null)
//  {
//      t1=[];
//  }
//  else{
//      t1= JSON.parse(l);
//  }
//  temp1.push(set);
 


if(delNode.lastElementChild.firstElementChild.className === 'btn btn-danger')
{
    for(var i=0;i<l.length;i++){
        if(q === l[i].Question){
           //  console.log(l[i]);
            l.splice(i,1);
            console.log(l);
           
        }
        
    }
     localStorage.setItem('Quelists',JSON.stringify(l));
    par.removeChild(delNode);
}

    
});