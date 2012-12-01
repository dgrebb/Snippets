<? 
	function youtube_id_from_url($url) {
	    $pattern = 
	        '%^# Match any youtube URL
	        (?:https?://)?  # Optional scheme. Either http or https
	        (?:www\.)?      # Optional www subdomain
	        (?:             # Group host alternatives
	          youtu\.be/    # Either youtu.be,
	        | youtube\.com  # or youtube.com
	          (?:           # Group path alternatives
	            /embed/     # Either /embed/
	          | /v/         # or /v/
	          | /watch\?v=  # or /watch\?v=
	          )             # End path alternatives.
	        )               # End host alternatives.
	        ([\w-]{10,12})  # Allow 10-12 for 11 char youtube id.
	        $%x'
	        ;
	    $result = preg_match($pattern, $url, $matches);
	    if (false !== $result) {
	        return $matches[1];
	    }
	    return false;
	}

	$videoid = youtube_id_from_url('{youtube-url-custom-field}');
?>
<iframe class="youtube-player" type="text/html"src="http://www.youtube.com/embed/<?=$videoid?>" frameborder="0"></iframe>