// const contents = $("#contents"); // (javascript))  var contents = document.getElementById('contents')
// if we're going to remove contents,  we won't have a reference to where contents parent was on the page. So we can make a variable to hold onto that space.
// var contentsParent = contents.parent();
// // this allows us to remove contents from the list of elements on YouTube
// contents.remove(); // ((javascript)) contents.parentNode.removeChild(contents)

// var requestOptions = {
//   method: "GET",
//   redirect: "follow",
// };

// fetch("https://imdb-api.com/en/API/SearchTitle/k_3uihf08y/the rock", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

// make a request to the API for a random image.
// var image = contentsParent.prepend(
//   '<img id="nameOfOurImage" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />'
// );


// add event listener for whenever something is clicked --
$('body').on('click', (el) => {
    console.log(el)
    // if the generic box is pressed to expand
     if (el.target === "div.buttonControls--container.mini-modal.has-smaller-buttons"){
          console.log('GENERIC BUTTON PRESSED')
     }
        // if the descending carrot is pressed
     else if (el.target === "button.color-supplementary.hasIcon.round.ltr-1knzl35"){
            console.log('CARROT BUTTON PRESSED')
        }
})
    // if(el[target] === "button.color-supplementary.hasIcon.round.ltr-1knzl35") {

    // }
    // button.color-supplementary.hasIcon.round.ltr-1knzl35

    // div.buttonControls--container.mini-modal.has-smaller-buttons
    // get the name of the title from Netflix by getting innerHTML from class named "fallback-text"
    // start our API request to IMBD? 
    // create whatever container, buttton, div that we're going to display it in our chrome extension. 
            // const ratingsButton = createButton(buttonStyle);
    


// function createButton(buttonStyle) {
    
// }
// where we can add our IMBD rating in Netflix   <div class="videoMetadata--second-line">
