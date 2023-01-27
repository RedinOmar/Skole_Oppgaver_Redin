<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id="p"></p>
    <script>
        import {PI, Eulertallet, lysfart, avogadrokonstant, bohrkonstant, radius} from "./konstanter.js";

        export let areal () {
            let sirkel = PI * radius * radius;
            return sirkel;
        }
        console.log({areal});
    </script>    
</body>
</html>