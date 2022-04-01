<?php
    ob_start();
    include("bledy.php");
?>

<html>
	<head>
		<meta charset="UTF-8" />
		<title>Sklep - instalacja</title>
		<link rel="Stylesheet" href="css/styl.css" />
		<link rel="Stylesheet" href="css/install.css" />
	</head>
	<body>
        <?php
            if (isset($_GET['blad'])) {
                echo "<div class='blad'>";
                echo $bledy[$_GET['blad']];
                echo "</div>";
            }
        ?>
        <form method="post" action="install.php">
            <input type="text" name="SQLHost" id="SQLHost" placeholder="Host...">
            <input type="text" name="SQLUzytkownik" id="SQLUzytkownik" placeholder="Użytkownik...">
            <input type="text" name="SQLHaslo" id="SQLHaslo" placeholder="Hasło...">
            <input type="text" name="SQLBaza" id="SQLBaza" placeholder="Baza danych...">
            <input class="button" name="SQLFormularz" type="submit" value="Instaluj">
        </form>
        <div>
            <?php
            mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
            if (isset($_POST['SQLFormularz'])) {
                $SQLHost = filter_input(INPUT_POST, 'SQLHost', FILTER_SANITIZE_STRING);
                $SQLUzytkownik = filter_input(INPUT_POST, 'SQLUzytkownik', FILTER_SANITIZE_STRING);
                $SQLHaslo = filter_input(INPUT_POST, 'SQLHaslo', FILTER_SANITIZE_STRING);
                $SQLBaza = filter_input(INPUT_POST, 'SQLBaza', FILTER_SANITIZE_STRING);
                if ($SQLHost=="") przenies('install.php?blad=wpiszHost');
                if ($SQLUzytkownik=="") przenies('install.php?blad=wpiszUzytkownik');
                if ($SQLHaslo=="") przenies('install.php?blad=wpiszHaslo');
                if ($SQLBaza=="") przenies('install.php?blad=wpiszBaza');
                
                try {
                    $nazwaPolaczenia=mysqli_connect($SQLHost, $SQLUzytkownik, $SQLHaslo);
                    echo "Połączyło się!";
                } catch (mysqli_sql_exception $exception) {
                    przenies('install.php?blad=bladPolaczenia');
                }
                try {
                    $zapytanie = 'CREATE DATABASE IF NOT EXISTS '.$SQLBaza;
                    mysqli_query($nazwaPolaczenia, $zapytanie);
                } catch (mysqli_sql_exception $exception) {
                    przenies('install.php?blad=bladTworzeniaBazy');
                }
                
            

                try {
                    mysqli_select_db($nazwaPolaczenia, $SQLBaza);
                } catch (mysqli_sql_exception $exception) {
                    przenies('install.php?blad=bladWybieraniaBazy');
                }

                $zapytanie = "CREATE TABLE Uzytkownicy (
                    `id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                    `nazwa` VARCHAR(50) NOT NULL,
                    `haslo` VARCHAR(128) NOT NULL,
                    `email` VARCHAR(320)
                    )";

                try {
                    mysqli_query($nazwaPolaczenia, $zapytanie);
                } catch (mysqli_sql_exception $exception) {
                    przenies('install.php?blad=bladTworzeniaTabeli&tabela=Uzytkownicy');
                }
                
            }
            ?>

            
        </div>


    </body>
</html>

<?php
    ob_end_flush( );    
?>

