<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Perth Cabaret Collective - Contact</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="bootstrap/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet">
</head>
<body background="images/noisy_net/edited.png">
    <nav class="navbar" id="header">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand nav-style" id="logo" href="index.html">
                    <img id="logo" src="images/4x/logo.png" alt="PERTH CABARET COLLECTIVE">
                </a>
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navMenu">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <div class="collapse navbar-collapse" id="navMenu">
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <a class="nav-item nav-link nav-style" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link nav-style" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link nav-style" href="shows.html">Shows</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link nav-style" href="media.html">Media</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-item nav-link nav-style active" href="Contact.php">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div id="wrap">
        <div id="main">
            <div class="container">
                <hr />
                <p>Feel free to contact us if you have any queries, or if you would like to book a show!</p>
                <br /><br />
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="inputEmail" class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-4">
                            <input type="email" class="form-control" id="inputEmail" placeholder="Enter your email address">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputSubject" class="col-sm-2 control-label">Subject</label>
                        <div class="col-sm-4">
                            <select class="form-control" id="subject">
                                <option>General enquiry</option>
                                <option>Booking</option>
                            </select>
                            <script type="text/javascript">
                                $(function () {
                                    $("#subject").change(function () {
                                        var val = $(this).val();
                                        if (val === "Booking") {
                                            $("#bookingMessage").show(500);
                                        }
                                        else {
                                            $("#bookingMessage").hide(500);
                                        }
                                    });
                                });
                            </script>

                        </div>
                    </div>
                    <div class="col-sm-offset-2 col-sm-10">
                        <p id="bookingMessage" style="display:none">Please specifiy if you would like solely the band, or the band with dancers and how many performers you would like.</p>
                    </div>
                    <div class="form-group">
                        <label for="inputmessage" class="col-sm-2 control-label">Message</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" rows="10" placeholder="Enter your message"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-custom">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

        <footer id="footer" class="footer">
            <div class="container">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a class="foot-titles" data-toggle="modal" href="" data-target="#subscribe">Subscribe</a>
                    </li>
                    <li class="footer-menu-divider list-inline-item">⋅</li>
                    <li class="list-inline-item">
                        <a href="https://www.facebook.com/perthcabaretcollective/" class="fa fa-facebook"></a>
                    </li>
                    <li class="footer-menu-divider list-inline-item">⋅</li>
                    <li class="list-inline-item">
                        <a href="https://www.instagram.com/perthcabaretcollective/" class="fa fa-instagram"></a>
                    </li>
                </ul>
            </div>
            <div id="subscribe" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Subscribe</h4>
                        </div>
                        <div class="modal-body">
                            <p>
                                Sign up to our newsletter to make sure you never miss a show!
                            </p>
                            <form class="form-inline" action="/action_page.php">
                                <div class="form-group">
                                    <input type="email" class="form-control" id="email" placeholder="Enter email">
                                </div>
                                <button type="submit" class="btn btn-default">Sign up</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


        </footer>
</body>

</html>
