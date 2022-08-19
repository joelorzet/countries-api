<h1>Countries-API</h1>
<hr><p>Una pequeña API echa en node.js para un CRUD</p><h2>Technologies Used</h2>
<hr><ul>
<li>NodeJS</li>
</ul><ul>
<li>Sequielize</li>
</ul><ul>
<li>Postgres</li>
</ul><h5>Steps</h5><ul>
<li>Clone this repo on your favorite folder</li>
</ul><ul>
<li>Run [npm i / npm install]</li>
</ul><ul>
<li>Run [npm start] to open the server</li>
</ul><ul>
<li>By default its running on port 3001 but you can change it on index.js file</li>
</ul><h2>Usage</h2>
<hr><h2>Cuenta con las siguientes rutas:</h2>
<p><em>GET</em> /countries</p>
<ul>
<li>Nos deja un json con todos los paises obtenidos de la api https://restcountries.com/v3/all</li>
</ul>
<hr>
<p><em>GET</em> /countries?name={completeName-partName}</p>
<ul>
<li>Hace un llamado a la base de datos para obtener ya sea 1 o varios paises que coincidan con la busqueda</li>
</ul>
<hr>
<p><em>GET</em> /countries/:id</p>
<ul>
<li>Espera un identificador Alfabético de 3 caracteres el mismo lo pueden obtener ya de los paises cargados. Con este pueden buscar un pais en particular por su ID</li>
</ul>
<hr>
<p><em>POST</em> /activities</p>
<ul>
<li>Pueden agregar una actividad al mismo se espera en formato json con las siguientes caracteristicas:<code> { "countryId": [] "difficulty": '' "duration": '' "name": '' "season": '' }</code></li>
</ul>
<hr>
<p><em>DELETE</em> /activities</p>
<ul>
<li>Pueden borrar una actividad de un país en particular sin borrar todas las actividades se espera un identificador de país y un identificador de actividad: <code>{ countryId: "" activityId: "" }</code></li>
</ul>
<p><em>ADEMAS LO PUEDE USAR YA DEPLOYADO EN:</em></p>
<p>https://countries-app-joel.herokuapp.com/</p><h2>Contact</h2>
<hr><p><span style="margin-right: 30px;"></span><a href="https://www.linkedin.com/in/joel-orzet-3a0465215/"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" style="width: 10%;"></a><span style="margin-right: 30px;"></span><a href="https://github.com/joelorzet"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style="width: 10%;"></a></p>