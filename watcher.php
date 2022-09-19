<!-- Aqui eu usei uma sessão padrão pas adicionei uma variavel
que chamei de $identidade, para pegar o id do usuário 
registrado que está usando a aplicação e retornar somente cadastros
agtrelados a identidade dele nas pesquisas de cadastros. -->

<?php
    session_start();

    $nivel_necessario = 2;

    if(($_SESSION['userNivel'] != $nivel_necessario))
    {   
        unset($_SESSION['userId']);
        unset($_SESSION['userName']);

        header('Location: login.php');
    }

    $_SESSION['userId'];

    $identidade = (int) $_SESSION['userId'];
?>

<!-- Aqui eu dou um echo na variavel $identidade mas como hidden
assim submito ela para o cadastro sem exibir ela no fomulário, e quando 
vou fazer o search eu busco no select   where $id='id' and $identidade='identidade'
e retorno somente os registros que o usuário que está fazendo o search cadastrou
isso me ajuda no projeto pois é um sistema top down então quem tem um nivel abaixo não pode ver quotemeta
tem niveis acima. -->

<input type="hidden" name="identidade" value="<?php echo $identidade ?>">