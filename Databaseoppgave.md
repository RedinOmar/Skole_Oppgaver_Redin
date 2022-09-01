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
SQL: SELECT elev.datamaskin, elev.Fornavn, elev.Etternavn, datamaskin.Variant
FROM elev
INNER JOIN datamaskin ON elev.datamaskin = datamaskin.DatamaskinID;

Martin Hjelle - Yoga Slim 7 Pro Gen 6 (16" AMD)
Hanna Ullevik - ThinkPad E15 Gen 2 (Intel)

![image](https://user-images.githubusercontent.com/111873484/187904567-922a9760-caba-482c-a54d-70508c8ce18d.png)

# oppgave 7
SQL: SELECT fornavn
FROM elev
ORDER BY Fornavn DESC;

![image](https://user-images.githubusercontent.com/111873484/187912076-0b831869-05e6-485d-a0a3-596521e79cea.png)

# oppgave 8
SQL: SELECT fornavn, Etternavn, Klasse
FROM elev
ORDER BY Klasse LIMIT 2;

![image](https://user-images.githubusercontent.com/111873484/187913724-d8ed3c25-84d9-4aeb-80b0-d2e84173d284.png)

# oppgave 9
SQL: UPDATE `elev`
SET `Hobby` = 'Fotball'
WHERE ElevID = '2';

![image](https://user-images.githubusercontent.com/111873484/187943183-e1c497a8-a646-4770-a918-960b62d6b133.png)

# oppgave 10
SQL: INSERT INTO `elev` (`Fornavn`, `Etternavn`, `Klasse`, `Hobby`, `Kjønn`, `datamaskin`)
VALUES ('Redin', 'Omar', '2', 'Gaming', 'G', '2');

![image](https://user-images.githubusercontent.com/111873484/187946791-efc56197-b4c8-4cc7-bf6b-aedb68dd9c77.png)

# oppgave 11
SQL: DELETE FROM `elev` WHERE ElevID = '11';

![image](https://user-images.githubusercontent.com/111873484/187947107-1bac2eb6-9b99-46f2-ad97-11f46ba4b3f5.png)
