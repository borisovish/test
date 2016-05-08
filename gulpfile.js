var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {



     //Все заводится, кроме daterangepicker
    mix.scripts([

        'bower_components/jquery/dist/jquery.js',
        'bower_components/jquery-ui/jquery-ui.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/moment/moment.js',
        'bower_components/bootstrap-select/dist/js/bootstrap-select.js',
        'bower_components/bootstrap-multiselect/dist/js/bootstrap-multiselect.js',
        'bower_components/bootstrap-daterangepicker/daterangepicker.js',

        'resources/assets/Lte/js/moment.js',
        'resources/assets/Lte/js/spin.js',

        'bower_components/slimscroll/jquery.slimscroll.js',
        'bower_components/fastclick/lib/fastclick.js',
        'bower_components/AmaranJS/dist/js/jquery.amaran.js', // Notice
        'bower_components/ladda-bootstrap/dist/ladda.js',
        'bower_components/Chart.js/Chart.js',

        'resources/assets/Lte/js/app.min.js',
        'resources/assets/Lte/js/demo.js',
    ], 'public/js/base-scripts.js', '.');


   //Angular
    mix.scripts([
        'bower_components/angular/angular.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-cookies/angular-cookies.js',
        'bower_components/angular-bootstrap-select/build/angular-bootstrap-select.js',
        'bower_components/angular-daterangepicker/js/angular-daterangepicker.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        'resources/assets/vendor/grid/js/angular.init.js',

    ], 'public/assets/plugins/angular/angular-scripts.js', '.');



    //Jqgrid
    mix.scripts([
       '/resources/assets/plugins/jquery-jqGrid-v4.6.0/js/i18n/grid.locale-ru.js',
       '/resources/assets/plugins/jquery-jqGrid-v4.6.0/js/jquery.jqGrid.src.js',
    ], 'public/js/jqgrid4.6.0-scripts.js', '.');

    mix.scripts([
       '/resources/assets/plugins/jquery-jqGrid-v4.6.0/js/i18n/grid.locale-ru.js',
       '/resources/assets/plugins/jquery-jqGrid-v4.13.1/jquery.jqgrid.min.js',
    ], 'public/js/jqgrid4.13.1-scripts.js', '.');

    mix.styles([
        '/resources/assets/plugins/jquery-jqGrid-v4.13.1/ui.jqgrid.css'
    ], 'public/css/bootstrap-jqgrid-styles.css', '.');

    mix.styles([
        // '/resources/assets/plugins/jquery-jqGrid-v4.6.0/bootstrap/jquery-ui.custom.css', //есть ярлычки
        '/resources/assets/plugins/ace/ui.jqgrid.min.css',
        '/resources/assets/plugins/ace/ace-part2.min.css',
    ], 'public/css/ace-jqgrid-styles.css', '.');


    mix.styles([
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'bower_components/font-awesome/css/font-awesome.css',
        'resources/assets/Lte/css/ionicons.min.css',
        'bower_components/jquery-ui/themes/base/jquery-ui.css',

        'bower_components/bootstrap-select/dist/css/bootstrap-select.css',
        'bower_components/bootstrap-multiselect/dist/css/bootstrap-multiselect.css',
        // 'bower_components/ladda-bootstrap/dist/ladda.css', // бьет кнопки
        'bower_components/ladda-bootstrap/dist/ladda-themeless.css',

        'bower_components/bootstrap-daterangepicker/daterangepicker.css',
        'bower_components/AmaranJS/dist/css/amaran.min.css',

        'resources/assets/Lte/css/AdminLTE.css',
        'resources/assets/Lte/css/skins/_all-skins.min.css',


    ], 'public/css/all-styles.css', '.');

    mix.copy(
        'bower_components/bootstrap/dist/fonts',
        'public/fonts'
    );
    mix.copy(
        'bower_components/font-awesome/fonts',
        'public/fonts'
    );
});

