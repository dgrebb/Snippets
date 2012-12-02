{exp:query sql="SELECT cat_id FROM exp_categories WHERE cat_url_title = '{segment_2}'"}
	{exp:channel:entries
		channel="videos"
		disable="category_fields|member_data|pagination|trackbacks"
		dynamic="no"
		orderby="random"
		limit="1"
		category="{cat_id}"}
		{title}
	{/exp:channel:entries}
{/exp:query}