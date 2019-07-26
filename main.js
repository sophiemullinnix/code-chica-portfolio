document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
    document.getElementById("name").innerHTML = "NAME TEXT GOES HERE";
}

function mySchool() {
    document.getElementById("school").innerHTML = "As I have previously stated I attend Lehman High School and will be going into Sophmore year. I am apart of the 2022 graduating class and am involved with many extracurricular activities as well as clubs. In school I am apart of the leo & nshss clubs. The nshss is based off of academic achievements while the leo club is more of volunteer work. As well as those clubs I am also heavily involved with sports, I run track and cross country and play basketball and soccer for Lehman.";
}

function myCareer() {
    document.getElementById("career").innerHTML = "As far as my future career goes I don't have anything in mind. I am currently exploring my options and researching different potential jobs and am also participating in camps like this one, as well as career classes offered by my school to discover what I am interested in.";
}

function myHobbies() {
    document.getElementById("hobbies").innerHTML = "Outside of school related activities I don't have much time for hobbies with the late practices, meetings, games, and homework sessions but I do still try and get out as often as I can. I have a very close bond with my family and we are always out and about in austin, playing board games, or watching new movies. A big part of my life is all of the sports I am involved with basketball, track, soccer, and cross country so a lot of time is practicing and training for current or future seasons.";
}
