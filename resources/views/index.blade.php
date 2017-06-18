<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    <div id="app">
        <my-nav></my-nav>
        
        <div class="left-area">
            <div class="body-content">
                <router-view></router-view>
            </div>
        </div>

    </div>

</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
@if(!empty($page))
<script>
    var page = "<?php echo $page; ?>";
</script>
@endif
<script src="/js/app.js"></script>
<script src="/js/scripts.js"></script>
</html>
