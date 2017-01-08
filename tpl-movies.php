<?php include_once 'layouts-header.php'; ?>

<div class="row">
    <div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
        <h1>Favorite Movies</h1>
        <div class="form-group">
            <input type="text" id="movieName" placeholder="Enter your Favorite Movie Name" class="form-control" onkeypress="return saveToList(event)" />
        </div>
        <div class="wrapper">
            <table class="table table-hover table-condensed" id="favMovies">
                <tr>
                    <td>Loading.. Please wait..</td>
                </tr>
            </table>
        </div>
        <!--<div class="form-group">-->
        <!--    <ul class="pagination pull-right">-->
        <!--        <li><a id="prev" href="#">&laquo;</a></li>-->
        <!--        <li><a id="next" href="#">&raquo;</a></li>-->
        <!--    </ul>-->
        <!--</div>-->
        <!--<div class="form-group">-->
        <!--    <button id="prev">prev 5</button>-->
        <!--    <button id="next">next 5</button>-->
        <!--</div>-->
    </div>
</div>

<script type="text/javascript" src="assets/js/movies.js"></script>

<?php include_once 'layouts-footer.php'; ?>