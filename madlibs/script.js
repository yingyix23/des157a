(function(){
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    const formFields = document.querySelector('#form-fields');
    const submitBtn = document.querySelector('#submitBtn');
    const pageTitle = document.querySelector('#pageTitle');

    myForm.addEventListener('submit', function (event) {
        event.preventDefault();
        /* console.log('Form submitted!'); */

            if (submitBtn.value == 'Play Again') {
                myForm.reset();
                formFields.style.display = 'flex';
                madlib.innerHTML = '';
                submitBtn.value = 'Generate Story';
                pageTitle.innerHTML = 'Fill in the Blanks';
                return;
            }

        //const dropdown = document.querySelector('#dropdown').value;
        const activity = document.querySelector('#activity').value;
        const verb1 = document.querySelector('#verb1').value;
        const place = document.querySelector('#place').value;
        const store = document.querySelector('#store').value;
        const object = document.querySelector('#object').value;
        const emotion1 = document.querySelector('#emotion1').value;
        const verb2 = document.querySelector('#verb2').value;
        const noun = document.querySelector('#noun').value;
        const location = document.querySelector('#location').value;
        const emotion2 = document.querySelector('#emotion2').value;
        

        let myText;

        if(verb1 == ''){
            myText = "Please provide a first noun";
            document.querySelector('#verb1').focus();
        }
        else if (store == ''){
            myText = "Please provide a second noun";
            document.querySelector('#store').focus();
        }
        else if (object == ''){
            myText = "Please provide a adjective";
            document.querySelector('#object').focus();
        }
        else if (verb2 == ''){
            myText = "Please provide a Verb";
            document.querySelector('#verb2').focus();
        }
        else if (noun == ''){
            myText = "Please provide a Verb";
            document.querySelector('#noun').focus();
        }
        else if (location == ''){
            myText = "Please provide a Verb";
            document.querySelector('#location').focus();
        }
        else if (emotion2 == ''){
            myText = "Please provide a Verb";
            document.querySelector('#emotion2').focus();
        }
        else if (activity == ''){
            myText = "Please provide a Verb";
            document.querySelector('#activity').focus();
        }
        else if (place == ''){
            myText = "Please provide a Verb";
            document.querySelector('#place').focus();
        }
        else if (emotion1 == ''){
            myText = "Please provide a Verb";
            document.querySelector('#emotion1').focus();
        }
        else{
            myText = `One day, a cat named Jiji went out for ${activity}. She ${verb1} all the way to the ${place}.  On the way, she stopped at the ${store} and bought a ${object}. For some reason, this made Jiji feel extremely ${emotion1}.  Suddenly, she decided to ${verb2} with a ${noun} in the ${location}. Things quickly became very strange.  By the end of the day, Jiji felt ${emotion2} and decided that this was the best adventure ever.`;

            /* document.querySelector('#activity').value='';
            document.querySelector('#verb1').value='';
            document.querySelector('#place').value='';
            document.querySelector('#store').value='';
            document.querySelector('#object').value='';
            document.querySelector('#emotion1').value='';
            document.querySelector('#verb2').value='';
            document.querySelector('#noun').value='';
            document.querySelector('#location').value='';
            document.querySelector('#emotion2').value=''; */
        }

        formFields.style.display = 'none';
        submitBtn.value = 'Play Again';
        pageTitle.innerHTML = "Jiji's Adventure";
        madlib.innerHTML = myText;
    });
})();