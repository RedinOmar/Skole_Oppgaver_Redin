# UKE 34
# dokumentasjon for database oppgaven

# oppgave 1-a
![image](https://user-images.githubusercontent.com/111873484/187430716-e2eb6311-f7bc-4e86-8117-2677d5d31be0.png)

![image](https://user-images.githubusercontent.com/111873484/187430943-c237a742-ab9d-42bb-b9ee-f97721f81004.png)

# oppgave 2-a
1. Linn Jensen
2. Lise Olsen
3. Eva Yttergård
4. Jenny Gullaug
5. Hanna Ullevik

SQL: SELECT `Fornavn`, `Etternavn`, `Klasse`, `Kjønn` FROM `elev` WHERE `Kjønn` = 'J';

# oppgave b
1. Thomas Hansen
2. Martin Hjelle
3. Bjarne Utvik
4. Joakim Fredriksen
5. Bjarte Ås

SQL: SELECT `Fornavn`, `Etternavn`, `Klasse`, `Kjønn` FROM `elev` WHERE `Kjønn` = 'G';

# oppgave c
1. Linn Jensen
2. Eva Yttergård

SQL: SELECT `Fornavn`, `Etternavn`, `Klasse`, `Kjønn` FROM `elev` WHERE `Kjønn` = 'J' AND `Klasse` = '2';

# oppgave d
1. Joakim Fredriksen
2. Jenny Gullaug

SQL: SELECT `Fornavn`, `Etternavn` FROM `elev` WHERE Fornavn LIKE 'J%'

# oppgave e
1. Martin Hjelle

SQL: SELECT `Fornavn`, `Etternavn`, `Klasse` FROM `elev` WHERE Fornavn LIKE 'M%';

# oppgave f
1. Thomas Hansen
2. Hanna Ullevik

SQL: SELECT `Fornavn`, `Etternavn`, `Hobby` FROM `elev` WHERE `Hobby` = 'Fotball';

# oppgave 3
![image](https://user-images.githubusercontent.com/111873484/187431129-3b2039b6-2fdb-4b23-9ee6-3534f58c27a0.png)

# oppgave 4
![image](https://user-images.githubusercontent.com/111873484/187431236-345fcf50-e7e0-4fd7-b335-049401642226.png)

# oppgave 5
Det er nødvendig å lage en foreign key fordi utvikleren må ha en klar oversikt over en organisert tabelleler som er koblet til hverandre. Den metoden kan brukes til å for eksempel se over hvilket elev tilhører hvilket område i skolen.

![image](https://user-images.githubusercontent.com/111873484/187435348-a265d131-26e9-488b-9521-4b71adbf6c58.png)

![image](https://user-images.githubusercontent.com/111873484/187435432-7cf687a3-2276-45aa-8fc3-6f6b6147f806.png)

![image](https://user-images.githubusercontent.com/111873484/187435496-113bc3f5-1b0d-4d59-afbb-cb58626a573a.png)

![image](https://user-images.githubusercontent.com/111873484/187435956-c5efb518-a72c-47d0-a004-3e2a462bf025.png)

![image](https://user-images.githubusercontent.com/111873484/187436055-f2dc271d-0b61-4f6e-b5fa-77bc74e8a8fa.png)

![image](https://user-images.githubusercontent.com/111873484/187436092-9f4890f5-5f84-4b51-adc7-8a11011d5ff3.png)

# oppgave 6
