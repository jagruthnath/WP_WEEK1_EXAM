	var movieList=new Array();
	var midArray =new Array();
	var movieNumber=0;
	var numberOfMovies;
	var mid;
	var stage=document.getElementById("movies");

	//JSON file parsing
	var request = new XMLHttpRequest();
	request.open("GET", "data/movies.json", true);
	request.send(null);
	request.onreadystatechange = function() {
	if ( request.readyState === 4 && request.status === 200 ) {
    var data = JSON.parse(request.responseText);
	//Json File parsing

	//Store JSON to Array
	for(i=0; i<data.results.length; i++){
      movieList[i]=new Array;
      movieList[i][0] = data.results[i].vote_average;
      movieList[i][1] = data.results[i].title;
	  movieList[i][2] = "https://image.tmdb.org/t/p/w500"+data.results[i].poster_path;
      movieList[i][3] = data.results[i].overview;
      movieList[i][4] = data.results[i].release_date;
	 // movieList[i][5] = data.results[i].answer;
//	  movieList[i][6] = data.results[i].hint2;
      }

	 //Store JSON to Array

      numberOfMovies = movieList.length;
  }
}

function displayMovies(){
	stage.innerHTML+='<div class=row><span id="left" onclick="goLeft();" class="fa fa-arrow-left"></span><span id="right" onclick="goRight();" class="fa fa-arrow-right" style="margin-left:100%"></span></div>';
	for(movieNumber=0;movieNumber<numberOfMovies;movieNumber++)
	  displayMovie();
	initArrow();
}

function displayMovie(){
	mid = "m"+movieNumber;
	midArray[movieNumber] = mid;
    stage.innerHTML+='<div id='+mid+' class="row" style="display:none;margin-bottom:50px"><div class="col-md-6 float-left"><img src="'+movieList[movieNumber][2]+'"/></div><div class="col-md-6 float-right"><div class="row"><div class="col-md-2 yellow"><h1>'+movieList[movieNumber][0]+'</h1></div><div class="col-md-10 float-right"><h1>'+movieList[movieNumber][1]+'</h1><h2>'+movieList[movieNumber][4]+'</h2></div></div><div class="row"><div class="col-md-12"><p>'+movieList[movieNumber][3]+'</p></div></div><div class="row"><div class="col-md-12"><a href="#">More info</a></div></div></div></div>';
	document.getElementById('m0').style.display="block";
}

function initArrow()
{
	if(document.getElementById('m0').style.display == "block")
		document.getElementById('left').style.display = "none";
	else
		document.getElementById('left').style.display = "block";
	if(document.getElementById('m'+(movieNumber-1)).style.display == "block")
		document.getElementById('right').style.display = "none";
	else
		document.getElementById('right').style.display = "block";
}

function goLeft()
{
	var y;
	for(var x = 0;x<numberOfMovies;x++)
	{
		if(document.getElementById(midArray[x]).style.display == "block")
			y=x;
		document.getElementById(midArray[x]).style.display = "none";
	}
	if(y!=0)
	{
		y--;
		document.getElementById(midArray[y]).style.display = "block";
		initArrow();
	}
}

function goRight()
{
	var y;
	for(var x = 0;x<numberOfMovies;x++)
	{
		if(document.getElementById(midArray[x]).style.display == "block")
			y=x;
		document.getElementById(midArray[x]).style.display = "none";
	}
	if(y!=movieNumber)
	{
		y++;
		document.getElementById(midArray[y]).style.display = "block";
		initArrow();
	}
}