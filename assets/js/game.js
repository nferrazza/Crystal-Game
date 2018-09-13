
   

    var targetNumber = "";
    var wins = 0;
    var losses = 0;
    var currentScore = 0;


    function startGame() {

        currentScore = 0;

        targetScoreOptions = [20, 50, 80, 100, 150];


        crystalPoints = [10, 20, 5, 30, 25];

        targetNumber = targetScoreOptions[Math.floor(Math.random() * targetScoreOptions.length)];


        console.log(targetNumber);
        $("#targetScore").append(targetNumber);

    };


    function onClick() {

        var randomCrystalA = crystalPoints[Math.floor(Math.random() * crystalPoints.length)];

        var randomCrystalB = crystalPoints[Math.floor(Math.random() * crystalPoints.length)];

        var randomCrystalC = crystalPoints[Math.floor(Math.random() * crystalPoints.length)];

        var randomCrystalD = crystalPoints[Math.floor(Math.random() * crystalPoints.length)];

        console.log(randomCrystalA);
        console.log(randomCrystalB);
        console.log(randomCrystalC);
        console.log(randomCrystalD);


        $("#crystalA").on("click", function () {

            currentScore += randomCrystalA;
            // alert("Current Score: " + currentScore);
            $("#currentScore").text("Current Score: " + currentScore);

            if (currentScore === targetNumber) {
                alert("You win!");
                wins++;

                $("#wins").text("Wins: " + wins);

                targetNumber = targetScoreOptions[Math.floor(Math.random() * targetScoreOptions.length)];

                $("#targetScore").text("Target Score: " + targetNumber);
                currentScore = 0;

                $("#currentScore").text("Current Score: " + currentScore);

            }

            else if (currentScore >= targetNumber) {
                alert("You lose, good day sir!");
                losses++;
                $("#loss").text("Losses: " + losses);

                targetNumber = targetScoreOptions[Math.floor(Math.random() * targetScoreOptions.length)];

                $("#targetScore").text("Target Score: " + targetNumber);
                currentScore = 0;

                $("#currentScore").text("Current Score: " + currentScore);
            }

        });

        $("#crystalB").on("click", function () {

            currentScore += randomCrystalB;
            // alert("Current Score: " + currentScore);
            $("#currentScore").text("Current Score: " + currentScore);

            if (currentScore === targetNumber) {
                alert("You win!");
                wins++;

                $("#wins").text("Wins: " + wins);

                targetNumber = targetScoreOptions[Math.floor(Math.random() * targetScoreOptions.length)];

                $("#targetScore").text("Target Score: " + targetNumber);
                currentScore = 0;

                $("#currentScore").text("Current Score: " + currentScore);



            }

            else if (currentScore >= targetNumber) {
                alert("You lose, good day sir!");
                losses++;
                $("#loss").text("Losses: " + losses);

                targetNumber = targetScoreOptions[Math.floor(Math.random() * targetScoreOptions.length)];

                $("#targetScore").text("Target Score: " + targetNumber);
                currentScore = 0;

                $("#currentScore").text("Current Score: " + currentScore);
            }


        });

        $("#crystalC").on("click", function () {

            currentScore += randomCrystalC
            // alert("Current Score: " + currentScore);
            $("#currentScore").text("Current Score: " + currentScore);

            if (currentScore === targetNumber) {
                alert("You win!");
                wins++;

                $("#wins").text("Wins: " + wins);

                targetNumber = targetScoreOptions[Math.floor(Math.random() * targetScoreOptions.length)];

                $("#targetScore").text("Target Score: " + targetNumber);
                currentScore = 0;

                $("#currentScore").text("Current Score: " + currentScore);



            }

            else if (currentScore >= targetNumber) {
                alert("You lose, good day sir!");
                losses++;
                $("#loss").text("Losses: " + losses);

                targetNumber = targetScoreOptions[Math.floor(Math.random() * targetScoreOptions.length)];

                $("#targetScore").text("Target Score: " + targetNumber);
                currentScore = 0;

                $("#currentScore").text("Current Score: " + currentScore);
            }

        });

        $("#crystalD").on("click", function () {

            currentScore += randomCrystalD
            // alert("Current Score: " + currentScore);
            $("#currentScore").text("Current Score: " + currentScore);


            if (currentScore === targetNumber) {
                alert("You win!");
                wins++;

                $("#wins").text("Wins: " + wins);

                targetNumber = targetScoreOptions[Math.floor(Math.random() * targetScoreOptions.length)];

                $("#targetScore").text("Target Score: " + targetNumber);
                currentScore = 0;

                $("#currentScore").text("Current Score: " + currentScore);

            }

            else if (currentScore >= targetNumber) {
                alert("You lose, good day sir!");
                losses++;
                $("#loss").text("Losses: " + losses);

                targetNumber = targetScoreOptions[Math.floor(Math.random() * targetScoreOptions.length)];

                $("#targetScore").text("Target Score: " + targetNumber);
                currentScore = 0;

                $("#currentScore").text("Current Score: " + currentScore);
            }

        });

    }


    startGame()
    onClick()




