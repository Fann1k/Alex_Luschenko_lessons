<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <!--Let browser know website is optimized for mobile-->    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <title>User Cabinet</title>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col l12 s12">
                <h1>User Page</h1>
            </div>
        </div>
        <form>
            <div class="row">
                <div class="col l6 m6 s12 input-field">
                    <i class="material-icons prefix">account_circle</i>
                    <input type="text" name="name" id="update-name" class="validate">
                    <label class="active" for="update-name">Name</label>
                </div>
                <div class="col l6 m6 s12 input-field">
                    <i class="material-icons prefix" id="visibility-icon">visibility</i>
                    <input type="password" name="pass" id="update-pass" class="validate">
                    <label for="update-pass">Password</label>
                </div>
                
            </div>
            <div class="row">
                <div class="col l6 m6 s12 input-field">
                    <i class="material-icons prefix" id="date-icon">date_range</i>
                    <input type="text" name="birthday" id="update-birthday" class="datepicker input-arr">
                    <label for="update-birthday">Birthday</label>
                </div>
            
                <div class="col l2 m2 hide-on-small-and-down"></div>
                <div class="col l4 m4">
                    <p>Sex:</p>
                        <p>
                            <label>
                                <input type="radio" value="male" name="sex" class="sex" checked>
                                <span>Male</span>
                            </label>
                        </p>
                        <p>
                            <label >
                                <input type="radio" value="female" name="sex" class="sex">
                                <span>Female</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input type="radio" value="other" name="sex" class="sex">
                                <span>Other</span>
                            </label>
                        </p>
                </div>
            </div>

            <!-- <input type="submit" value="update" id="update-submit"> -->
            <div class="row">
                <div class="col l6 m6 s6">
                    <button type="submit" value="update" id="update-submit" class="waves-effect waves-light btn"><i class="material-icons right">import_export</i>Update</button>
                </div>
                <div class="col l6 m6 s6">
                    <button id="logout" class="waves-effect waves-light btn right red lighten-1"><i class="material-icons right">exit_to_app</i>LogOut</button>
                </div>
            </div>
        </form>
    </div>
    

    <script src="js/materialize.min.js"></script>
    <script src="script/ajax.js"></script>
    <script src="script/get_user_data.js"></script>
    <script src="script/logout.js"></script>
    <script src="script/show_hide_password.js"></script>
</body>

</html>