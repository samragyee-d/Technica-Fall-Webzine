document.getElementById('personality-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const personalityType = document.getElementById('personalities-id').value;
    const result = document.getElementById('result');
    
    const suggestions = {
        "INTJ": [
            "Professor Severus Snape (Harry Potter Series)",
            "Tyler Durden (Fight Club)",
            "Loki (Marvel Cinematic Universe)",
            "Ellen Ripley (Alien Series)",
            "V (V for Vendetta)",
            "Hannibal Lecter (The Silence of the Lambs)"
        ],
        "INTP": [
            "• Sherlock Holmes (e.g., Robert Downey Jr. version in Sherlock Holmes Series)",
            "• Neo (in The Matrix)",
            "• Dr. Alan Grant (in Jurassic Park)",
            "• Spock (in Star Trek)",
            "• Willy Wonka (e.g., Gene Wilder in Willy Wonka & the Chocolate Factory)",
            "• V (V for Vendetta)"
        ],
        "ENTJ": [
            "• Miranda Priestly (The Devil Wears Prada)",
            "• Gordon Gekko (Wall Street)",
            "• Erik Lehnsherr (Magneto) (X-Men Series)",
            "• Katherine Parker (Working Girl)"
        ],
        "ENTP": [
            "• Tony Stark (in Marvel Cinematic Universe)",
            "• The Joker (in The Dark Knight)",
            "• Peter Parker (Spider-Man) (in Spider-Man Series)",
            "• Maverick (Pete Mitchell) (in Top Gun)",
            "• Barney Stinson (in How I Met Your Mother)",
            "• Loki (in Thor Series and Marvel Cinematic Universe)"
        ],
        "INFJ": [
            "• Professor X (in X-Men Series)",
            "• Amélie Poulain (in Amélie)",
            "• Gandalf (in The Lord of the Rings Series)"
        ],
        "INFP": [
            "• Frodo Baggins (in The Lord of the Rings Series)",
            "• Edward Scissorhands (in Edward Scissorhands)",
            "• Belle (in Beauty and the Beast)",
            "• Amélie Poulain (in Amélie)",
            "• Luna Lovegood (in Harry Potter Series)",
            "• Samwise Gamgee (in The Lord of the Rings Series)"
        ],
        "ENFJ": [
            "• Morpheus (in The Matrix)",
            "• Mel Gibson (e.g., Braveheart in Braveheart)",
            "• Leslie Knope (in Parks and Recreation)",
            "• Katniss Everdeen (in The Hunger Games Series)"
        ],
        "ENFP": [
            "• Peter Pan (in Peter Pan)",
            "• Jack Dawson (in Titanic)",
            "• Luna Lovegood (in Harry Potter Series)",
            "• Deadpool (in Deadpool)"
        ],
        "ISTJ": [
            "• Hermione Granger (in Harry Potter Series)",
            "• Captain America (Steve Rogers) (in Marvel Cinematic Universe)",
            "• Jim Gordon (in The Dark Knight)",
            "• Dr. Alan Grant (in Jurassic Park)",
            "• Agent K (in Men in Black)"
        ],
        "ISFJ": [
            "• Samwise Gamgee (in The Lord of the Rings Series)",
            "• Marge Gunderson (Fargo)",
            "• Mary Poppins (in Mary Poppins)",
            "• Cinderella (in Cinderella)",
            "• Hermione Granger (in Harry Potter Series)",
            "• Molly Weasley (in Harry Potter Series)"
        ],
        "ESTJ": [
            "• James Bond (in James Bond Series)",
            "• Miranda Priestly (in The Devil Wears Prada)",
            "• Captain America (Steve Rogers) (in Marvel Cinematic Universe)",
            "• Evelyn Salt (in Salt)",
            "• Hermione Granger (in Harry Potter Series)",
            "• Claire Underwood (in House of Cards)"
        ],
        "ESFJ": [
            "• Leslie Knope (in Parks and Recreation)",
            "• Mrs. Doubtfire (in Mrs. Doubtfire)",
            "• Lorelei Gilmore (in Gilmore Girls)",
            "• Molly Weasley (in Harry Potter Series)",
            "• Cersei Lannister (in Game of Thrones)",
            "• Beth March (in Little Women)"
        ],
        "ISTP": [
            "• James Bond (in James Bond Series)",
            "• Indiana Jones (in Indiana Jones Series)",
            "• Jason Bourne (in Bourne Series)",
            "• Mad Max (in Mad Max)",
            "• Han Solo (in Star Wars)",
            "• The Bride (Beatrix Kiddo) (in Kill Bill Series)"
        ],
        "ISFP": [
            "• Belle (in Beauty and the Beast)",
            "• Amélie Poulain (in Amélie)",
            "• Jack Dawson (in Titanic)",
            "• Edward Scissorhands (in Edward Scissorhands)"
        ],
        "ESTP": [
            "• James Bond (in James Bond Series)",
            "• Maverick (Pete Mitchell) (in Top Gun)",
            "• Deadpool (in Deadpool)",
            "• Han Solo (in Star Wars)",
            "• Jack Sparrow (in Pirates of the Caribbean Series)"
        ],
        "ESFP": [
            "• Jack Sparrow (in Pirates of the Caribbean Series)",
            "• Ferris Bueller (in Ferris Bueller's Day Off)",
            "• Elle Woods (in Legally Blonde)",
            "• Ariel (in The Little Mermaid)",
            "• Homer Simpson (in The Simpsons Movie)"
        ]
    };
    
    const costume = suggestions[personalityType];
    result.textContent = `Based on your personality type (${personalityType}), you should dress up as: ${costume} this Halloween!`;
  });