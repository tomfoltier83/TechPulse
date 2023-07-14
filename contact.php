<?php require "elements/header.php";
$retour = false;
if ($_POST['message'] != "") {
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $email = $_POST["email"];
    $sujet = $_POST["sujet"];
    $message = "Message envoyé depuis la page Message du site : techpulse-dev.com,
    Nom:" . $nom . " Email:" . $email ." Message:" . $_POST["message"]; 
    mail("techpulse.dev@gmail.com", $sujet, $message, "From: contact@techpulse-dev.com\r\nReply-to:" . $email);
    $retour = true;
}
?>

<div class="contact-container">
    <div class="contact-form">
        <?php if($retour): ?><?= "<h2 style=\"color:black; padding-bottom:30px\">Votre message a bien été envoyé !</h2>" ?><?php endif ?>
        <h4>Une question ? Un devis ?</h4>
        <h1>Contactez-nous</h1>
        <form method="POST" id="form-contact">
            <div class="input">
                <input type="text" placeholder="Nom" name="nom">
            </div>
            <div class="input">
                <input type="text" placeholder="Prénom">
            </div>
            <div class="input">
                <input type="email" name="email" placeholder="Email *" required>
            </div>
            <div class="input">
                <input type="text" name="sujet" required placeholder="Objet *">
            </div>
            <div class="input">
                <textarea name="message" placeholder="Message *" required></textarea>
            </div>
            <p>* Champs requis</p>
            <button type="submit" class="g-recaptcha" data-sitekey="6LfexL4iAAAAADjNYFCHxO7dxiJj82A1AaAYcLQD" data-callback='onSubmit' data-action='submit'>Envoyer</button>
        </form>
    </div>
</div>
<?php require "elements/footer.php"
?>

<script src="https://www.google.com/recaptcha/api.js"></script>
<script>
   function onSubmit(token) {
     document.getElementById("form-contact").submit();
   }
 </script>
