 
<?php
//Raportowanie błędów
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$nazwaPolaczenia = mysqli_connect("localhost", "użytkownik", "hasło", "nazwabazy");

//tworzenie tabeli
mysqli_query($nazwaPolaczenia, "CREATE TABLE IF NOT EXISTS language (
    `Code` text NOT NULL,
    `Speakers` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;");

//rozpoczynamy transakcję na naszym połączeniu
mysqli_begin_transaction($nazwaPolaczenia);

try {
    //wprowadzamy prawidłowe dane
    $zapytanie="INSERT INTO language(`Code`, `Speakers`) VALUES ('DE', 42000123)";
    mysqli_query($nazwaPolaczenia, $zapytanie);

    //próbujemy do pola liczbowego wrzucić tekst, więc wywali nam błąd
    $kodJezyka = 'FR';
    $nieprawidlowaLiczba = 'Unknown';
    //konwencja prepared statements
    $stwierdzenie = mysqli_prepare($nazwaPolaczenia, 'INSERT INTO language(`Code`, `Speakers`) VALUES (?,?)');
    
    //prztypisz zmienne do przygotowanego stwierdzenia
    mysqli_stmt_bind_param($stwierdzenie, 'ss', $kodJezyka, $nieprawidlowaLiczba);
    //wykonaj przygotowane stwierdzenie
    mysqli_stmt_execute($stwierdzenie);
  
    //zapisz efekty transakcji
    mysqli_commit($nazwaPolaczenia);
} catch (mysqli_sql_exception $exception) {
    mysqli_rollback($nazwaPolaczenia);
    throw $exception;
}

?>