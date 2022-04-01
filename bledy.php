<?php
    $bledy=[];
    $bledy["wpiszHost"]="Podaj nazwę hosta";
    $bledy["wpiszUzytkownik"]="Podaj nazwę użytkownika";
    $bledy["wpiszHaslo"]="Podaj hasło";
    $bledy["wpiszBaza"]="Podaj nazwę bazy danych";

    $bledy["bladPolaczenia"]="Błąd połączenia z bazą danych. Sprawdź poprawność pól formularza";
    $bledy["bladWybieraniaBazy"]="Błąd podczas wybierania bazy danych";
    $bledy["bladTworzeniaBazy"]="Błąd podczas tworzenia bazy danych";

    $bledy["bladTworzeniaTabeli"]="Nie udało się stworzyć tabeli";
    if (isset($_GET['tabela'])) $bledy["bladTworzeniaTabeli"].=": ".$_GET['tabela'];

    function przenies($adres) {
        ob_end_clean();
        header('Location: '.$adres);
        exit;
    }

?>