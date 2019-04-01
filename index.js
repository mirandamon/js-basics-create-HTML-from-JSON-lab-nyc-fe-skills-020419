// document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  
  // 1. Find out which button they pressed -- good
  // 2. Get the data for that movie -- good
  // 3 Replace the template values with the real ones
  
  // 1 Find the element we want to interact with
  const titanicButton = document.getElementById('Titanic')
  const terminatorButton = document.getElementById('Terminator 2')
  
  function onMovieChange(movie) {
    let data = movies[movie]
    // Replace template values
    let title = data.title // "Titanic
    
    let titleDiv = document.getElementById('title')
    titleDiv.innerHTML = title
    
    let directorDiv = document.getElementById('director')
    directorDiv.innerHTML = data.director
    
    let genreDiv = document.getElementById('genre')
    genreDiv.innerHTML = data.genre
    
    let filmRatingDiv = document.getElementById('filmRating')
    filmRatingDiv.innerHTML = data.filmRating
    
    let posterImg = document.getElementById('poster')
    posterImg.src = data.poster
    
    let audienceScoreDiv = document.getElementById('audienceScore')
    audienceScoreDiv.innerHTML = data.audienceScore
    
    let descriptionDiv = document.getElementById('description')
    descriptionDiv.innerHTML = data.description
    
    
    let castDiv = document.getElementById('cast')
    
    let startingString = ''
    for (let castMember of data.cast) {
      startingString += '<li>' + castMember.role + ': ' + castMember.actor + '</li>'
    }
    console.log(startingString)
    castDiv.innerHTML = startingString
    
    // for (let castMember of data.cast) {
    //   console.log(castDiv.innerHTML)
    //   castDiv.innerHTML = '<li>' + castMember.role + ': ' + castMember.actor + '</li>'
    // }
    
    // <li>Role: Name of actor/actress</li>
    
    
    const reviewsDiv = document.getElementById('reviews')
    startingString = ''
    for (let review of data.reviews) {
      startingString += '<li>' + review.username + ': ' + review.content + '</li>'
    }
    reviewsDiv.innerHTML = startingString
    
  }
  
  
  // 2. Add the event listener
  titanicButton.addEventListener('click', () => onMovieChange('Titanic'))
  
  terminatorButton.addEventListener('click', () => onMovieChange('Terminator 2'))
  
  
  onMovieChange('Titanic')
// });

// anonymous functions