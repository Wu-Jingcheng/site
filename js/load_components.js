document.getElementById("nav-placeholder").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark">
<a class="navbar-brand" href="index.html" id="shortname"></a>

<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul class="navbar-nav ms-auto">
        <li class="nav-item">
            <a class="nav-link" href="" id="resume">Resume</a>
        </li>
        <!--
        <li class="nav-item">
            <a class="nav-link" href="pages/posts.html">Posts</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="">Contact</a>
        </li>
        -->
    </ul>
</div>
</nav>
`

// shortname
document.getElementById("shortname").innerHTML = configs.shortname

//file path
document.getElementById("resume").href = configs.resume_path;

// footer
document.getElementById("footer").innerHTML = `
<p>© Copyright Orsome Site Template</p>
<p>© Site Template by Jc Wu</p>
`

// self intro
document.getElementById("intro-content").innerHTML = configs.self_intro
