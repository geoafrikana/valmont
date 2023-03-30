
<?php include 'includes/home_header.php' ?>
<body>
   


<div class="body-container">
    <div id="sidebar">
        <img class="sidebar-logo" src="./assets/img/logo.svg" alt="val-mont logo">

        <div class="filter-title-main">
            <h4>FILTER BY</h4>
        </div>

        <div class="selectors">
            <div class=" dropdown-filter year-filter">

                <label class="sub-heading"  for="year-filter">Year:</label>
                <br>

                <select class="select-text" name="year-filter dropdown" id="year-filter">
                    <option class="select-text" value="1999">1999</option>
                    <option class="select-text" value="2000">2000</option>
                    <option class="select-text" value="2001">2001</option>
                    <option class="select-text" value="2002">2002</option>
                </select>
            </div>

            <div class="dropdown-filter sector-filter">

                <label class="sub-heading" for="sector-filter">Sectors:</label>
                <br>

                <select class="select-text" name="sector-filter dropdown" id="sector-filter">
                    <option class="select-text" value="Option-1">Option-1</option>
                    <option class="select-text" value="option-2">option-2</option>
                    <option class="select-text" value="option-3">option-3</option>
                    <option class="select-text" value="option-4">option-4</option>
                </select>
            </div>

            <div class="contamination">
                <h3 class="sub-heading">DEGREE OF CONTAMINATION</h3>

                <p><i class="fa-xl fa-green fa1 fa-solid fa-circle-check"></i><span>Non-Contamine</span></p>
                <p><i class="fa-xl fa-yellow fa2 fa-solid fa-circle-check"></i><span>Contamination BC</span></p>
                <p><i class="fa-xl fa-red fa-solid fa3 fa-circle"></i><span>Contamination AB</span></p>
                <p><i class="fa-xl fa-blue fa-solid fa4 fa-circle"></i><span>En attent des resultats</span></p>
            </div>

            <div class="cadastre">
                <h3 class="sub-heading">NUMERO DE CADASTRE</h3>

                <div class="input">
                    <input type="text">
                    <i class="fa-xl fa-solid fa-magnifying-glass"></i>
                </div>

            </div>

            <div class=" dropdown-filter year-filter">

                <label id="archived-data" for="year-filter">ARCHIVED DATA</label>
                <br>

                <select class="select-text" name="year-filter dropdown" id="year-filter">
                    <option class="select-text" value="1999" selected disabled hidden>SELECT</option>
                    <option class="select-text" value="1999">Archived</option>
                    <option class="select-text" value="2000">Non-Archived</option>
                </select>
            </div>

        </div>

    </div>
    <button id="toggle-button">&lt</button>
    <div>
    <?php include 'includes/nav.php';    ?>

    <div id="map"> </div>
    </div>

<div>

<?php include 'includes/footer.php' ?>