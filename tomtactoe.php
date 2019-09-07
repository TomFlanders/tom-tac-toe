<?php
/*
Plugin Name: tomtactoe
Plugin URI:  http://tomflanders.com/development/
Description: TTT game
Version:     1.0
Author:      Tom Flanders
Author URI:  http://tomflanders.com
License:     GPL3
License URI: https://www.gnu.org/licenses/gpl-3.0.html
*/

/* Add stylesheet */

	function ttt_enqueue_styles() {
		wp_register_style( 'tttstyle', plugins_url( 'tomtactoe/ttt.css' ) );
		wp_enqueue_style( 'tttstyle' );
		wp_register_script( 'tttscript', plugins_url( 'tomtactoe/ttt.js' ) );
		wp_enqueue_script('tttscript');
	}
	add_action( 'wp_enqueue_scripts', 'ttt_enqueue_styles' );


/* set up shortcode */
add_shortcode('ttt', 'ttt_ttt');

function ttt_ttt() {
?>
<br/><br/>
<table width="100%">
	<tr>
		<th align="center">
<table style="width: 50%">
  <tr>
    <th id="topalert" height="25">
      Tom Tac Toe
    </th>
  </tr>
</table>
<table class="toe">
  <tr>
    <td id="s1" onclick="clicker(this.id)"></td>
    <td id="s2" onclick="clicker(this.id)"></td>
    <td id="s3" onclick="clicker(this.id)"></td>
  </tr>
  <tr>
    <td id="s4" onclick="clicker(this.id)"></td>
    <td id="s5" onclick="clicker(this.id)"></td>
    <td id="s6" onclick="clicker(this.id)"></td>
  </tr>
  <tr>
    <td id="s7" onclick="clicker(this.id)"></td>
    <td id="s8" onclick="clicker(this.id)"></td>
    <td id="s9" onclick="clicker(this.id)"></td>
  </tr>
</table>
<table class="subtoe">
<tr>
  <td>
    <button onclick="newGame()" style="box-shadow: 2px 2px black;">New Game</button>
  </td>
  <td>
    Opponent:
    <select id="opp" onchange="setOpp()">
      <option value="computer" selected="selected">Computer</option>
      <option value="human">Human</option>
    </select>
  </td>
  <td>
    Level:
    <select id="level" onchange="changeLevel()">
      <option value="1">Beginner</option>
      <option value="2">Defensive</option>
      <option value="3">Offensive</option>
      <option value="4">Advanced</option>
    </select>
  </td>
</tr>
<tr>
  <td>
X Wins: <span id="Xwins">0</span>
  </td>
  <td>
O Wins: <span id="Owins">0</span>
  </td>
  <td>
Ties: <span id="ties">0</span>
  </td>

</table>
</th>
</tr>
</table>

<?php
}

?>
